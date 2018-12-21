/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Textarea,
  Text
} from 'native-base';

type Props = {};
export default class FormNote extends Component<Props> {
  static navigationOptions = {
    title: 'FORM NOTE BUG'
  };

  render() {
    return (
      <Container>
        <Content style={{ marginHorizontal: 10, marginTop: 10 }}>
          <Form>
            <View style={{ marginVertical: 5 }}>
              <Label>Title</Label>
              <Item regular>
                <Input placeholder="Title Bug" />
              </Item>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Label>Sub Title</Label>
              <Item regular>
                <Input placeholder="Sub Title Bug" />
              </Item>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Label>Desc</Label>
              <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </View>
          </Form>
          <Button block success>
            <Text>Success</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
