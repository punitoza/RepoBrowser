Ext.define('ExtRepoApp.view.repo.Repo', {
    extend: 'Ext.container.Container',
    xtype: 'repo',
    layout:{
    		type: 'vbox',
    		align: 'stretch'
    },
    items: [{
    		xtype: 'panel',
        ui: 'light',
        padding: '20 0 20 20',
        layout: {
        		type: 'hbox',
        		align: 'stretch'
        },
	    	items: [{
        		xtype: 'image',
        		width: 100,
        		height: 100,
        		bind: {
        			src: '{orgData.avatar_url}'
        		}
        }, {
        		xtype: 'container',
        		flex: 1,
        		padding: '0 0 0 20',
        		layout: {
        			type: 'vbox',
        			align: 'stretch'
        		},
        		items: [{
        			xtype: 'label',
        			cls: 'clsOrgName',
        			bind: {
        				text: '{orgData.name}'
        			}
        		}, {
        			xtype: 'splitter',
        			height: 20
        		}, {
        			xtype: 'label',
        			cls: 'clsOrgDesc',
        			bind: {
        				text: '{orgData.description}'
        			}
        		}, {
        			xtype: 'container',
        			flex: 1,
        			layout: {
        				type: 'hbox',
        				align: 'end'
        			},
        			items: [{
        				xtype: 'label',
        				cls: 'clsOrgDetails',
        				bind: {
        					text: 'Location: {orgData.location}',
        					hidden: '{orgData.location == null || orgData.location.length < 1}'
        				},
        				flex: 1
        			}, {
        				xtype: 'label',
        				cls: 'clsOrgDetails',
        				bind: {
        					html: 'Link: <a href="{orgData.blog}">{orgData.blog}</a>',
        					hidden: '{orgData.blog == null || orgData.blog.length < 1}'	
        				}, 
        				flex: 1
        			}, {
        				xtype: 'label',
        				cls: 'clsOrgDetails',
        				bind: {
        					html: 'Email: <a href="mailto:{orgData.email}">{orgData.email}</a>',
    						hidden: '{orgData.email == null || orgData.email.length < 1}'
        				},
        				flex: 1
        			}]
        		}]
        }],
        
    }, {
    		xtype: 'gridpanel',
    		title: {
    			cls: 'clsGridTitle',
    			text: 'Repositories',
    		},
    		ui: 'light',
    		enableLocking: true,
    		border: true,
    		flex: 1,
    		bind: {
            store: '{reposDataStore}'
        },
        plugins: [{
        		ptype: 'rowexpander',
        		rowBodyTpl: new Ext.XTemplate(
    					'<p>{description}</p>'
    			)
        }],
        columns:{
        		defaults: {
        			tdCls: 'clsGridCell',
        			cls: 'clsGridHeader'
        		},
        		items: [{
        			text: 'Name',
        			dataIndex: 'name',
        			flex: 1
        		}, {
        			text: 'Language',
        			dataIndex: 'language',
        			align: 'center'
        		}, {
        			text: 'Stars',
        			dataIndex: 'stargazers_count',
        			align: 'right'
        		}, {
        			text: 'Forks',
        			dataIndex: 'forks_count',
        			align: 'right'
        		}, {
        			text: 'Watchers',
        			dataIndex: 'watchers_count',
        			align: 'right'
        		}, {
        			text: 'Commits',
        			xtype: 'actioncolumn',
        			align: 'center',
        			items: [{
        				iconCls: 'x-fa fa-arrow-circle-right'
        			}],
        			handler: 'onViewCommits'
        		}]
        }
    }]
});