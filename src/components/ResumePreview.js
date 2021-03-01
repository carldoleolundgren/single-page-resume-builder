//import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography';

const styles = {
  centeredDiv: {
    margin: 'auto',
    width: '50%',
    display: 'flex',
  },
  resumeContainer: {
    height: '11in',
    width: '8.5in',
    position: 'absolute',
    top: '10%',
    left: '50%',
    marginLeft: '-4.25in',
    right: '50%',
    marginRight: '-4.25in',
    border: '2px solid rgb(195,157,57)'
  },
  resumeLeft: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    width: '2.9in',
    borderRight: '2px solid rgb(195,157,57)',
    backgroundColor: 'rgb(80,80,80)',
    zIndex: '-1'
  },
  resumeTop: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '2.2in',
    width: '100%',
    borderBottom: '2px solid rgb(195,157,57)',
    zIndex: '0'
  },
  resumeHeader: {
    position: 'absolute',
    right: '0',
    height: '2.2in',
    width: '5.6in',
  },
  nameBox: {
    position: 'relative',
    right: '0',
    height: '1.4in',
    marginTop: '0',
    width: '4.8in',
    margin: '.45in .35in',
    backgroundColor: 'rgb(80,80,80)',
  },
  white: {
    color: 'white'
  },
  gold: {
    color: 'rgb(195,157,57)'
  },
  title: {
    marginTop: '-.42in'
  }
}

const ResumePreview = (props) => {
  return (
    <div>
      <div style={styles.resumeContainer}>
        <div style={styles.resumeTop}>
          <div style={styles.resumeHeader}>
            <div style={styles.nameBox}>
              {/* split() is stopgap measure until I refactor Header into first/last names */}
              <Typography 
                variant='h3' 
                align='center'
                style={styles.white} 
                gutterBottom>
                {props.resumeData.name.split(' ')[0].toUpperCase()}
              </Typography>
              <Typography 
                variant='h3' 
                align='center'
                style={styles.gold}>
                {props.resumeData.name.split(' ')[1].toUpperCase()}
              </Typography>
            </div>
            <Typography 
              variant='h5' 
              align='center'
              color='textSecondary'
              style={styles.title}>
              {props.resumeData.title}
            </Typography>
          </div>
        </div>
        
        <div style={styles.resumeLeft}>
  
        </div>
      </div>
    </div> 
  );
}

export default ResumePreview;
