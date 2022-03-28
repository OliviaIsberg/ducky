import {
  Accordion,
  Typography,
  Button,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material';
import { useReducer, useState } from 'react';
import { Product } from '../Api/Data';
import { ProductTypes } from '../contexts/Reducers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

enum ProductEditReducerType {
  UpdateTitle,
  UpdateInformation,
  UpdateImgURL,
  UpdatePrice,
  Updatecategory,
  Save,
  Reset,
}

type Action =
  | { type: ProductEditReducerType.UpdateTitle; value: string }
  | { type: ProductEditReducerType.UpdateInformation; value: string }
  | { type: ProductEditReducerType.UpdateImgURL; value: string }
  | { type: ProductEditReducerType.UpdatePrice; value: number }
  | { type: ProductEditReducerType.Updatecategory; value: string }
  | { type: ProductEditReducerType.Save }
  | { type: ProductEditReducerType.Reset; product: Product };

function AdminPageAccordion({ product, dispatch }: any) {
  function ProductEditReducer(state: Product, action: Action) {
    switch (action.type) {
      case ProductEditReducerType.UpdateTitle:
        return { ...state, title: action.value };
      case ProductEditReducerType.UpdateInformation:
        return { ...state, information: action.value };
      case ProductEditReducerType.UpdateImgURL:
        return { ...state, imgURL: action.value };
      case ProductEditReducerType.UpdatePrice:
        return { ...state, price: action.value };
      case ProductEditReducerType.Updatecategory:
        return { ...state, category: action.value };
      case ProductEditReducerType.Save:
        dispatch({
          type: ProductTypes.Update,
          payload: { product: state },
        });
        return state;
      case ProductEditReducerType.Reset:
        return action.product;
    }
  }

  const [open, setOpen] = useState(false);
  const [productState, dispatchProductState] = useReducer(
    ProductEditReducer,
    product
  );

  const handleOpen = (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => setOpen(!open);

  return (
    <Accordion onChange={handleOpen}>
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
            <Button
              onClick={(e) => {
                dispatchProductState({
                  type: ProductEditReducerType.Save,
                });
                e.stopPropagation();
              }}
            >
              Spara
            </Button>
          ) : (
            <Button>Redigera</Button>
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
          {open ? (
            <input
              value={productState.category}
              onChange={(e) => {
                dispatchProductState({
                  type: ProductEditReducerType.Updatecategory,
                  value: e.target.value,
                });
              }}
            />
          ) : (
            <Typography>{productState.title}</Typography>
          )}
        </Box>
        <Box>
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
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default AdminPageAccordion;
