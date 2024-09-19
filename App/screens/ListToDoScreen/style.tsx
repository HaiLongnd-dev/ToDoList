import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fontBig: {
    fontSize: 25,
    color: '#fff',
  },
  fontBtn: {
    fontSize: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
  container: {flex: 1},
  headerContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  addBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 10,
    borderRadius: 10,
  },
});
export default styles;
