import React from 'react'
import './index.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import RandomJoke from '../RandomJoke'
import SearchJoke from '../SearchJoke'

export default function index() {
    return (
        <div className="container">
            <Tabs className="tabs">
                <TabList className="tabList">
                    <Tab>Random</Tab>
                    <Tab>Search</Tab>
                </TabList>

                <TabPanel>
                    <RandomJoke/>
                </TabPanel>

                <TabPanel><SearchJoke/></TabPanel>
            </Tabs>
        </div>
    )
}
