import {
  Accordion,
  Typography,
  Button,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonGroup,
  Modal,
  Chip,
} from '@mui/material';
import { useEffect, useReducer, useRef, useState } from 'react';
import { Product, Categories } from '../Api/Data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  ProductEditReducer,
  ProductEditReducerType,
  productReducer,
} from '../contexts/Reducers';

const isProductEdited = (product: Product, productState: Product) =>
  productState.title !== product.title ||
  productState.information !== product.information ||
  productState.id !== product.id ||
  productState.category !== product.category ||
  productState.price !== product.price ||
  productState.imgURL !== product.imgURL;

function AdminPageAccordion({
  product,
  expanded,
  saveAction,
  deleteAction,
}: any) {
  const [open, setOpen] = useState(expanded ?? false);
  const [openModal, setOpenModal] = useState(false);
  const [productState, dispatchProductState] = useReducer(
    ProductEditReducer,
    product
  );

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatchProductState({ type: ProductEditReducerType.Update, product });
  }, [product]);

  const handleOpen = (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => setOpen(!open);

  return (
    <Accordion onChange={handleOpen} expanded={open}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '1rem 0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={productState.imgURL} width="48px" alt=""></img>
            {open ? (
              <input
                type="text"
                value={productState.title}
                onChange={(e) => {
                  dispatchProductState({
                    type: ProductEditReducerType.UpdateTitle,
                    value: e.target.value,
                  });
                }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Typography>{productState.title}</Typography>
            )}
          </Box>
          {open ? (
            <Button>Stäng</Button>
          ) : (
            <Box>
              {isProductEdited(product, productState) ? (
                <Chip label="OSPARAD" variant="outlined" />
              ) : null}
              <Button startIcon={<EditIcon />}>Redigera</Button>
            </Box>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ margin: '1rem 0' }}>
          <img
            style={{ width: 100, height: 100 }}
            src={productState.imgURL}
            alt=""
          ></img>
        </Box>
        <Typography sx={{ marginBottom: '2ex' }}>
          Bild URL:
          <input
            type="url"
            value={productState.imgURL}
            onChange={(e) => {
              dispatchProductState({
                type: ProductEditReducerType.UpdateImgURL,
                value: e.target.value,
              });
            }}
          />
        </Typography>
        <Box>
          <Typography>Beskrivning</Typography>
          <textarea
            onChange={(e) => {
              dispatchProductState({
                type: ProductEditReducerType.UpdateInformation,
                value: e.target.value,
              });
            }}
            value={productState.information}
          />
          <Box sx={{ margin: '1rem 0' }}>
            <Typography>Redigera pris</Typography>
            {open ? (
              <input
                type="number"
                value={!isNaN(productState.price) ? productState.price : ''}
                onChange={(e) => {
                  dispatchProductState({
                    type: ProductEditReducerType.UpdatePrice,
                    value: parseFloat(e.target.value),
                  });
                }}
              />
            ) : (
              <Typography>{productState.title}</Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ margin: '1rem 0' }}>
          <Typography>Redigera kategori</Typography>
          <ButtonGroup aria-label="button group">
            {Categories.map((category, index) => (
              <Button
                key={index}
                variant={
                  category === productState.category ? 'contained' : 'outlined'
                }
                onClick={() =>
                  dispatchProductState({
                    type: ProductEditReducerType.UpdateCategory,
                    category,
                  })
                }
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box>
          <Button
            startIcon={<Save />}
            onClick={() => {
              saveAction(productState);
              setOpen(false);
            }}
          >
            Spara
          </Button>
          <Button
            startIcon={<RestartAltIcon />}
            onClick={() =>
              dispatchProductState({
                type: ProductEditReducerType.Reset,
                product: product,
              })
            }
          >
            Återställ
          </Button>
          <Button
            startIcon={<DeleteForeverIcon />}
            onClick={() => setOpenModal(true)}
          >
            Ta bort produkt
          </Button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography>
                Är du säker på att du vill ta bort produkt?
              </Typography>
              <Button
                onClick={(e) => {
                  deleteAction(product.id);
                  setOpenModal(false);
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                Ja
              </Button>
              <Button onClick={() => setOpenModal(false)}>Nej</Button>
            </Box>
          </Modal>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default AdminPageAccordion;
