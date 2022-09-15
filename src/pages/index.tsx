import { Layout, Menu, Tabs, Typography, message } from 'antd'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import NFTs from './NFTs';
import Resume from './Resume';
import HeaderMain from './components/HeaderMain'
import SkeletonMain from './components/SkeletonMain'
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';
import Head from 'next/head';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
const Home: NextPage = () => {



  const [tab, setTab] = useState('About');

  const onChangeTab = (key: string) => {
    if (key == "About") {
      setTab(key);
      setContent(<About onChangeTab={onChangeTab} />)
    }
    if (key == "Resume") {
      setTab(key);

      message.info("Resume");
      setContent(<Resume />)
    }
    if (key == "Projects") {
      setTab(key);

      message.info("Projects");
      setContent(<Projects />)
    }
    if (key == "Skills") {
      setTab(key);

      setContent(<Skills />)
    }
    if (key == "Contact") {
      setTab(key);

      message.info("Contact info");

      setContent(<Contact />)
    }
    if (key == "Experiences") {
      setTab(key);

      message.info("Job Experiences");

      setContent(<Experiences />)
    }
    if (key == "NFTs") {
      setTab(key);

      message.info("Personal NFTs Collection");
      setContent(<NFTs />)
    }
  };

  const [content, setContent] = useState(<About onChangeTab={onChangeTab} />);
  const [isLoading, setIsLoading] = useState(true);
  const { TabPane } = Tabs
  useEffect(() => {
    // activate loading state when component mounts
    setIsLoading(true);
    var max = 1;
    var min = 0;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    const timer = setTimeout(() => {
      // disable loading after 5 seconds
      setIsLoading(false);
    }, rand * 1000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonMain />
  }


  return (
    <>
      <Head>
        <title>Srilokh Karuturi</title>
        <meta property="og:title" content="Srilokh Karuturi" key="title" />
      </Head>
      <HeaderMain />
      <Layout className='mainLayout'>
        <Tabs activeKey={tab} defaultActiveKey="About" onChange={onChangeTab} style={{ paddingLeft: "1rem", paddingRight: "1rem" }} >
          <TabPane tab={<Title level={5}>About</Title>} key="About"> {content} </TabPane>
          <TabPane tab={<Title level={5}>Resume</Title>} key="Resume"> {content} </TabPane>
          <TabPane tab={<Title level={5}>Experiences</Title>} key="Experiences" > {content} </TabPane>
          <TabPane tab={<Title level={5}>Projects</Title>} key="Projects"> {content} </TabPane>
          <TabPane tab={<Title level={5}>Skills</Title>} key="Skills" >  {content} </TabPane>
          <TabPane tab={<Title level={5}>NFTs</Title>} key="NFTs" > {content} </TabPane>
          <TabPane tab={<Title level={5}>Contact</Title>} key="Contact" > {content} </TabPane>
        </Tabs>
      </Layout>

    </>
  )
}

export default Home