import React from 'react';
import { Card } from 'semantic-ui-react';

interface IProps {
  header: string,
  text: string
}

export default function ContentDetail({ header, text }: IProps) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Description>
          {text}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}