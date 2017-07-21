import React from 'react';
import Table from './tableContent.js';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

const TablePage = () => {
	return (
		<div>
        <Sidebar/>
				<Navbar/>
				<Table/>
        <Footer/>
		</div>
	);
};

export default TablePage;
