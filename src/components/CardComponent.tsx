import React from 'react';
import {
  Button,
  Card,
  Paragraph,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import {View, ViewStyle} from 'react-native';
import tw from '../../lib/tailwind';

type CardComponentProps = {
  title: string;
  content: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onOk?: () => void;
  onOkTitle?: string;
  onCancel?: () => void;
  onCancelTitle?: string;
  contentStyle?: ViewStyle;
};
const CardComponent = (props: CardComponentProps) => {
  const doDisplayOk = props.onOk !== undefined;
  const doDisplayCancel = props.onOk !== undefined;
  const doDisplayAction = doDisplayOk || doDisplayCancel;

  return (
    <TouchableRipple
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      rippleColor={'rgba(245, 40, 145, 0.8)'}
      underlayColor={'rgba(0, 0, 0, 0.32)'}>
      <Card style={props.contentStyle} elevation={4}>
        <Card.Content>
          <Title style={tw`italic font-bold`}>{props.title}</Title>
          <Paragraph>{props.content} </Paragraph>
        </Card.Content>
        {doDisplayAction ? (
          <Card.Actions>
            {doDisplayOk ? (
              <Button onPress={() => props.onOk}>
                {props.onOkTitle ? props.onOkTitle : 'OK'}
              </Button>
            ) : null}
            {doDisplayCancel ? (
              <Button onPress={() => props.onCancel}>
                {props.onCancelTitle ? props.onCancelTitle : 'Cancel'}
              </Button>
            ) : null}
          </Card.Actions>
        ) : (
          <View style={{height: 18}} />
        )}
      </Card>
    </TouchableRipple>
  );
};

export default CardComponent;
