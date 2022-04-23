import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import SettingsIcon from '@material-ui/icons/Settings'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography align='justify' variant='h5' gutterBottom>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '10rem',
  },
  tab: {
    fontSize: '1.1rem',
  },
  text: {
    fontSize: '1.5rem',
  },
  icon: {
    fontSize: '3rem !important',
  },
  heading: {
    fontSize: '3rem',
    color: '#00ae42',
    marginBottom: '.5rem',
    textAlign: 'center',
  },
  title: {
    color: '#00ae42',
  },
  description: {
    margin: '1rem 15rem 5rem 15rem',
    textAlign: 'justify',
  },
}))

export default function Gre() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <div className='AboutUs__Parallax'>
        <div className='AboutUs__Parallax--Parallax'></div>
        <div className='AboutUs__Parallax--Text'>
          <h1>GRE</h1>
          <p>The Graduate Record Examination</p>
        </div>
      </div>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='on'
          TabIndicatorProps={{
            style: {
              backgroundColor: '#00ae42',
            },
          }}
          textColor='primary'
          aria-label='scrollable force tabs example'
        >
          <Tab
            label='About GRE'
            icon={<QuestionAnswerIcon style={{ fontSize: '2.5rem' }} />}
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab
            label='Test Structure'
            className={classes.tab}
            icon={<SettingsIcon style={{ fontSize: '2.5rem' }} />}
            {...a11yProps(1)}
          />
          <Tab
            label='Exam Syllabus'
            className={classes.tab}
            icon={<LibraryBooksIcon style={{ fontSize: '2.5rem' }} />}
            {...a11yProps(2)}
          />
          {/* <Tab
            label='Test Structure'
            className={classes.tab}
            icon={<HelpIcon />}
            {...a11yProps(3)}
          /> */}
          {/* <Tab
            label='Item Five'
            className={classes.tab}
            icon={<ShoppingBasket />}
            {...a11yProps(4)}
          />
          <Tab
            label='Item Six'
            className={classes.tab}
            icon={<ThumbDown />}
            {...a11yProps(5)}
          />
          <Tab
            label='Item Seven'
            className={classes.tab}
            icon={<ThumbUp />}
            {...a11yProps(6)}
          /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography className={classes.heading}>
          The Graduate Record Examination
        </Typography>
        <p className={classes.description}>
          The Graduate Record Examination (GRE) is a widely accepted entrance
          exam conducted for the purpose of admission in several courses offered
          at various foreign universities. The objective of GRE test is to
          evaluate the verbal, mathematical and also analytical skills of the
          students and to check whether they are eligible to apply for various
          courses.
          <br />
          GRE helps the admission committee in the universities to gauge
          students applying from across the world on the same platform, the
          exams are of same for all the students taking GRE across the world.
          Also, GRE scores are used by admissions or fellowship panels to
          supplement your undergraduate records, recommendation letters and
          other qualifications for graduate-level study. GRE is mandatory for
          most students aspiring for a Master Degree (except Business, Law and
          Medicine) and PhD courses in several universities in the US. The GRE
          revised test is accepted at thousands of graduate and business schools
          as well as departments and divisions within three schools.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <table>
          <tr>
            <th>Measure</th>
            <th>Number Of Question</th>
            <th>Alloted Time</th>
          </tr>
          <tr>
            <td>
              <h3>Analytical Writing</h3>
              (One section with two separately timed tasks)
            </td>
            <td>
              One "Analyze an Issue" task and one "Analyze an Argument" task
            </td>
            <td>30 minutes per task</td>
          </tr>
          <tr>
            <td>
              <h3>Verbal Reasoning</h3>
              (Two sections)
            </td>
            <td>20 questions per section</td>
            <td>30 minutes per task</td>
          </tr>
          <tr>
            <td>
              <h3>Quantitative Reasoning</h3>
              (Two sections)
            </td>
            <td>20 questions per section</td>
            <td>35 minutes per task</td>
          </tr>
          <tr>
            <td>
              <h3>Unscored¹</h3>
            </td>
            <td>Varies</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>
              <h3>Research²</h3>
            </td>
            <td>Varies</td>
            <td>Varies</td>
          </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='syllabus'>
          <h3 className={classes.title}>1-VERBAL REASONING </h3>
          <span>
            (reading comprehension, text completion, sentence equivalence)
            <br />( 20 ques each in 2 sections-30 min each)
          </span>
          <p>
            <h4> Reading comprehension</h4>
            8-9 short reading passages of 1 para long & will have 1 or 2
            questions related to them. There will be 1-2 long reading passages
            per test which will have 3+ questions associated with them.
            Questions are multiple choice questions, you are required to choose
            either single or multiple correct answers as per asked.
          </p>
          <p>
            <h4>Text completion</h4>there will be 1,2 or 3 blanks need to fill
            in. 1 blank- 5 choices to pick from 2 or 3 blanks- each has 3
            choices to pick from.
          </p>
          <p>
            <h4>Sentence equivalence</h4>
            you are supposed to select 2 answer choices that best complete a
            sentence & provide similar meaning/synonyms
          </p>
          <br />
          <h3 className={classes.title}>
            2-QUANTITATIVE REASONING ( 20 questions each in 2 sections-35 min
            each)
          </h3>
          <p>
            <ul>
              <li>Quantitative comparison</li>
              <li>
                Multiple choice questions with either one option or more than
                one option
              </li>
              <li>Numeric entry questions.</li>
            </ul>
          </p>
          <br />
          <h3 className={classes.title}>
            3-ANALYTICAL WRITING ASSESSMENT (AWA)
          </h3>
          <p>
            <ul>
              <li>
                one logical argument-an argument is given you have to either
                write for it or write against it.
              </li>
              <li>
                One critical issue - a topic is given you have to write an
                essay.
              </li>
            </ul>
            ( awa - no options are given, 30 min each)
          </p>
        </div>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  )
}
