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

//TODO: Manage touchable ripple

type TCardComponentProps = {
  title: string;
  content: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onOk?: () => any;
  onOkTitle?: string;
  onCancel?: () => any;
  onCancelTitle?: string;
  contentStyle?: ViewStyle;
  testId: string;
};
const CardComponent = (props: TCardComponentProps) => {
  const testId = props.testId;
  const doDisplayOk = props.onOk !== undefined;
  const doDisplayCancel = props.onCancel !== undefined;
  const doDisplayAction = doDisplayOk || doDisplayCancel;
  return (
    <TouchableRipple
      testID={'CC_touchable_' + testId}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      rippleColor={'rgba(245, 40, 145, 0.8)'}
      underlayColor={'rgba(0, 0, 0, 0.32)'}>
      <Card style={props.contentStyle} elevation={4}>
        <Card.Content>
          <Title testID={'CC_title_' + testId} style={tw`italic font-bold`}>
            {props.title}
          </Title>
          <Paragraph testID={'CC_paragraph'}>{props.content} </Paragraph>
        </Card.Content>
        {doDisplayAction ? (
          <Card.Actions>
            {doDisplayOk ? (
              <Button
                testID={'CC_btn_ok_' + testId}
                onPress={() => {
                  typeof props.onOk === 'function' && props.onOk();
                }}>
                {props.onOkTitle ? props.onOkTitle : 'OK'}
              </Button>
            ) : null}
            {doDisplayCancel ? (
              <Button
                testID={'CC_btn_cancel_' + testId}
                onPress={() => {
                  typeof props.onCancel === 'function' && props.onCancel();
                }}>
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
