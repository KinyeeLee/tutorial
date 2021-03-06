import React from 'react';
import ReactDOM from 'react-dom';
//weui
import "weui";
//全局自定义样式
import './index.css';
//根组件
import App from './App';
//头部组件
import Xheader from './components/xheader/xheader';
//搜索框组件
import Xsearch from './components/xsearch/xsearch';
//列表组件
import Xpanel from './components/xpanel/xpanel';

//列表组件
import Xjsx from './components/xjsx/xjsx';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
	<Xheader />
	<Xsearch />
	<Xpanel />
	<Xjsx />
</div>,
document.getElementById('root'));
registerServiceWorker();
