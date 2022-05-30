import { Container, Alert, Row, Col, Card, Button } from "react-bootstrap";
import { BsFillExclamationTriangleFill, BsPencilSquare, BsXLg, BsCheckLg, BsStar, BsStarFill } from "react-icons/bs";
import { RateForm } from "./RateForm";
import { RateDropdown } from "./RateDropdown";
import { WalletProps } from "../../../common/interfaces";

export function Wallet(props: WalletProps) {
  const {
    wallet,
    rates,
    setEditing,
    cancelEditing,
    confirmRateChange,
    isEditing,
    rateLabel,
    rateValue,
    setRate,
    handleSelect,
    selectedRate,
    convertedRateValue,
    toggleFavorite
  } = props

  return (
    <>
      <Container style={{ marginTop: '2rem' }}>
        {wallet.isOld &&
          <Alert key={wallet.id} variant={'danger'}><BsFillExclamationTriangleFill /> Wallet is old!</Alert>}
        <Row>
          <Col>
            <Card style={{ height: '10rem' }}>
              <Card.Body>
                <Card.Title style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                  <Button variant={'link'} name='fav' onClick={() => toggleFavorite()}> 
                  {wallet.isFavorite ? <BsStarFill/> : <BsStar/> }
                  </Button>
                    <label> {wallet.address.substring(0,8)}...</label>
                  </div>
                  <div>
                    {!isEditing && <Button variant={'link'} name='edit' onClick={() => setEditing(true)}> <BsPencilSquare /> </Button>}
                    {isEditing &&
                      <>
                        <Button variant={'link'} name='edit' onClick={() => cancelEditing()}> <BsXLg color='red' /> </Button>
                        <Button variant={'link'} name='confirmRate' onClick={() => confirmRateChange()}> <BsCheckLg color='green' /> </Button>
                      </>
                    }
                  </div> </Card.Title>
                {!isEditing &&
                  <Card.Text>
                    {rateLabel}
                  </Card.Text>}
                {isEditing &&
                  <RateForm rate={rateValue} onChange={setRate} />
                }
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <RateDropdown handleSelect={handleSelect} rates={rates} selectedRate={selectedRate} convertedRateValue={convertedRateValue} />
          </Col>
        </Row>
      </Container>
    </>
  )
}