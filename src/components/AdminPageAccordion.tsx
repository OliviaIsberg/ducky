import {
  Accordion,
  Typography,
  Button,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonGroup,
} from '@mui/material';
import { useEffect, useReducer, useRef, useState } from 'react';
import { Categories, Product } from '../Api/Data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';

enum ProductEditReducerType {
  Update,
  UpdateTitle,
  UpdateInformation,
  UpdateImgURL,
  UpdatePrice,
  UpdateCategory,
  Reset,
  Delete,
}

type Action =
  | { type: ProductEditReducerType.Update; product: Product }
  | { type: ProductEditReducerType.UpdateTitle; value: string }
  | { type: ProductEditReducerType.UpdateInformation; value: string }
  | { type: ProductEditReducerType.UpdateImgURL; value: string }
  | { type: ProductEditReducerType.UpdatePrice; value: number }
  | { type: ProductEditReducerType.UpdateCategory; category: string }
  | { type: ProductEditReducerType.Reset; product: Product };

function ProductEditReducer(state: Product, action: Action) {
  switch (action.type) {
    case ProductEditReducerType.Update:
      return action.product;
    case ProductEditReducerType.UpdateTitle:
      return { ...state, title: action.value };
    case ProductEditReducerType.UpdateInformation:
      return { ...state, information: action.value };
    case ProductEditReducerType.UpdateImgURL:
      return { ...state, imgURL: action.value };
    case ProductEditReducerType.UpdatePrice:
      return { ...state, price: action.value };
    case ProductEditReducerType.UpdateCategory:
      return { ...state, category: action.category };
    case ProductEditReducerType.Reset:
      return action.product;
  }
}

function AdminPageAccordion({
  product,
  expanded,
  saveAction,
  deleteAction,
}: any) {
  const [open, setOpen] = useState(expanded ?? false);
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
          {open ? (
            <Button>Stäng</Button>
          ) : (
            <Button startIcon={<EditIcon />}>Redigera</Button>
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
                value={productState.price}
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
          <Button startIcon={<Save />} onClick={() => saveAction(productState)}>
            Spara
          </Button>
          <Button
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
            onClick={(e) => {
              deleteAction(product.id);
              setOpen(false);
              e.stopPropagation();
            }}
          >
            Ta bort produkt
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default AdminPageAccordion;
