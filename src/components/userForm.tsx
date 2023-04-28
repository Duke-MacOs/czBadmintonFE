import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import globalStyles from '@css/global';

export enum UserFormType {
  'signin',
  'signup',
}

type Props = {
  type: UserFormType;
  submitText: string;
  onSubmit: (username: string, password: string) => void;
  onChangeType: (type: UserFormType) => void;
};

const Submit = (props: {submitText: string; onSubmit: () => void}) => {
  const {submitText, onSubmit} = props;
  return <Button title={submitText} onPress={onSubmit} />;
};

const UserForm = (props: Props) => {
  const {type, submitText, onSubmit, onChangeType} = props;
  const [error, setError] = useState('');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [repeatPassword, onChangeRepeatPassword] = useState('');

  const isValidPassword = () => {
    if (password === repeatPassword) {
      setError('');
      return true;
    }
    setError('两次密码不一致');
    return false;
  };

  const _onSubmit = () => {
    if (type === UserFormType.signup && isValidPassword()) return;
    onSubmit(username, password);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>用户名：</Text>
        <TextInput
          style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangeUsername(text)}
          value={username}
          placeholder="请输入用户名"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>密码：</Text>
        <TextInput
          style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangePassword(text)}
          value={password}
          placeholder="请输入密码"
        />
      </View>
      {type === UserFormType.signup && (
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.label}>重复密码：</Text>
          <TextInput
            style={{
              width: 200,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => onChangeRepeatPassword(text)}
            value={repeatPassword}
            placeholder="请输入重复密码"
          />
        </View>
      )}
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      <View style={globalStyles.centerRow}>
        <Submit submitText={submitText} onSubmit={_onSubmit} />
        {type === UserFormType.signin && (
          <Text
            style={{color: 'blue', fontSize: 12}}
            onPress={() => {
              onChangeType(UserFormType.signup);
            }}>
            还没有账号？点击注册
          </Text>
        )}
        {type === UserFormType.signup && (
          <Text
            style={{color: 'blue', fontSize: 12}}
            onPress={() => {
              onChangeType(UserFormType.signin);
            }}>
            返回登录
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 80,
    textAlign: 'right',
  },
});

export default UserForm;
