import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51D15B'
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#51D15B'
  },
  subTitle: {
    color: '#A6A6A6'
  },
  inputBox: {
    width: 300,
    borderWidth: 1,
    borderColor: '#D3E0D7',
    color: '#A6A6A6',
    paddingHorizontal: 16,
    borderRadius: 30,
    marginVertical: 5
  },
  button: {
    backgroundColor: '#51D15B',
    width: 300,
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 30
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
