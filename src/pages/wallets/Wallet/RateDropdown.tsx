import { Card, Dropdown } from "react-bootstrap"
import { RateDropdownProps } from "../../../common/interfaces"

export function RateDropdown(props: RateDropdownProps) {
    const { handleSelect, rates, selectedRate, convertedRateValue } = props

    return (
        <Card style={{ height: '10rem' }}>
            <Card.Body>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant='white' style={{ borderColor: "black" }}>
                        {selectedRate.base}
                    </Dropdown.Toggle>
                    <Dropdown.Menu  >
                        {rates && rates.map((rate: any, index: number) =>
                            <Dropdown.Item key={index} eventKey={index}> {rate.base}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Card.Text>
                    {convertedRateValue.toFixed(2)} {selectedRate.base}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}