import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  fontBtn: {
    fontSize: 20,
  },
  content: {
    paddingHorizontal: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  fontBig: {
    fontSize: 25,
    color: '#fff',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 10,
    flexDirection: 'row',
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
  backBtn: {
    fontSize: 32,
    paddingLeft: 10,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  whiteColor: {
    color: '#fff',
  },
  back: {
    justifyContent: 'flex-start',
  },
});
export default styles;
