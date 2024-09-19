import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fontBig: {
    fontSize: 25,
  },
  fontBtn: {
    fontSize: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    borderStyle: 'solid',
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  status: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'OpenSans',
    color: 'black',
  },
});
export default styles;
