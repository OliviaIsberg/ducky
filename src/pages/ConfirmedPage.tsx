import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { deliveryOptions, paymentOptions } from '../Api/Data'
import { OrderData } from '../components/Forms/OrderForm'
import { CartType } from '../contexts/Reducers'
import useLocalStorage from '../Hooks/useLocalStorage'

// randomizes a 6 digit order number
function RandomOrderNumber() {
  return Math.floor(Math.random() * 1000000)
}

function ConfirmedOrderPage() {
  // get cart, total cartsum, all orderdetails and shippingdetails from local storage
  const [cart] = useLocalStorage<CartType[]>('cart', '')
  const [total] = useLocalStorage<number>('cartSum', 0)
  const [orderDetails] = useLocalStorage<OrderData>('orderDetails', '')

  return (
    <Container maxWidth="md">
      <h2>Tack för din beställning!</h2>
      <p>
        Din betalning och beställning har genomförts, och snart kommer dina nya
        ankor till sitt nya hem! <br />
        Nedan är en sammanfattning på din beställning;
      </p>
      <Divider />
      {/* get the randomized order number */}
      <h3>Ordernummer: #{RandomOrderNumber()}</h3>
      <h3>Produkter:</h3>
      {/* get the summary of bought products, loops thought cart array */}
      <List dense>
        {cart?.length &&
          cart.map((c: CartType) => (
            <ListItem key={c.id}>
              <ListItemAvatar>
                <img
                  src={c.imgURL}
                  alt={c.title}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={c.title}
                secondary={`Antal: ${c.qty} Pris: ${c.price} kr/st`}
              />
              <ListItemText
                primary={`${c.qty * c.price} kr`}
                sx={{ textAlign: 'right' }}
              />
            </ListItem>
          ))}
      </List>
      <Divider />
      {/* get and print total price of products */}
      {/* the second "total" should be shipping cost */}
      <Typography variant="body1" sx={{ textAlign: 'right' }}>
        Totalpris (inkl moms & frakt) : {`${total}`} kr
      </Typography>
      {/* Totalpris (inkl moms & frakt) : {`${total}`} kr */}
      {/* Get shipping adress from local storage  */}
      <h3>Leveransadress:</h3>
      {/* first and last name */}
      <>
        {orderDetails.shippingAdress.firstName}{' '}
        {orderDetails.shippingAdress.lastName}
      </>
      <br />
      {/* shipping adress */}
      <>{orderDetails.shippingAdress.streetAdress}</>
      <br />
      {/* post code and city */}
      <>
        {orderDetails.shippingAdress.postCode}{' '}
        {orderDetails.shippingAdress.city}
      </>
      <br />
      {/* phone number */}
      <>Telefonnummer: {orderDetails.shippingAdress.phoneNumber}</>
      <br />
      {/* e-mailadress */}
      <>e-postadress: {orderDetails.shippingAdress.emailAdress}</>
      <br />
      <Divider />
      {/* Get shipping method from local storage  */}
      <h3>Leveransmetod:</h3>
      <>
        {typeof orderDetails.shippingMethod === 'number'
          ? deliveryOptions[orderDetails.shippingMethod].name
          : ''}
      </>
      <Divider />
      {/* Get payment method from local storage  */}
      <h3>Betalningsmetod:</h3>
      <>
        {typeof orderDetails.paymentMethod === 'number'
          ? paymentOptions[orderDetails.paymentMethod].name
          : ''}
      </>
      <Divider />
      <p>
        Skulle någonting inte stämma, eller om du har övriga frågor är du varmt
        välkommen att kontakta oss på: support@ducky.se
      </p>
    </Container>
  )
}

export default ConfirmedOrderPage
