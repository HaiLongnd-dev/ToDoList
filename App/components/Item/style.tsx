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
  inform: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  statusBar: {
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:5
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 20,
    color: '#fff',
  },
  doneStatus: {backgroundColor: 'green'},
  doingStatus: {backgroundColor: 'red'},
  left: {
    flexDirection: 'row',
  },
  right: {},
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
  circleButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007bff',
  },
});
export default styles;
