import React from 'react';
import { Card } from 'react-bootstrap';

function ContainerList(props) {
    
    return (
        <div>
            <Card as='ul'>
                {props.items && props.items.map((item) => (
                    <Card.item
                    key={item.id}
                    >    items
                    </Card.item>


                ))}
            </Card>
        </div>
    )

}

export default ContainerList;