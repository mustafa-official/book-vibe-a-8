import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeadingBooks from "../components/HeadingBooks";
import ReadBooks from "../components/ReadBooks";
import WishList from "../components/WishList";


const Books = () => {
  
  return (
    <div className="container mx-auto px-10 mt-3">
      <HeadingBooks></HeadingBooks>
      
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishList></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
