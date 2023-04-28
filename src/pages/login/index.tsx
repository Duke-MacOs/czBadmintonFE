import {useState, useMemo} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import UserFrom, {UserFormType} from '@components/userForm';

const LoginPage = () => {
  const [type, setType] = useState<UserFormType>(UserFormType.signin);
  const submitText = useMemo(() => {
    if (type === UserFormType.signin) return '登录';
    if (type === UserFormType.signup) return '注册';
    return '';
  }, [type]);
  const onSubmit = (username: string, password: string) => {
    console.log('username:', username);
    console.log('password:', password);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <UserFrom
        type={type}
        submitText={submitText}
        onChangeType={setType}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default LoginPage;
