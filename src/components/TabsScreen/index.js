import { Tabs } from 'antd';
import CardView from '../CardView';
import ListView from '../ListView';
import './TabsScreen.css';
const { TabPane } = Tabs;

const App = (props) => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Card View" key="1">
        <CardView data={props.data}/>
      </TabPane>
      <TabPane tab="ListView" key="2">
        <ListView data={props.data}/>
      </TabPane>
      <TabPane tab="New Customers" key="3">
        <p>Content of new customers</p>
        <p>Content of new customers</p>
        <p>Content of new customers</p>
      </TabPane>
    </Tabs>
  </div>
);

export default App;
