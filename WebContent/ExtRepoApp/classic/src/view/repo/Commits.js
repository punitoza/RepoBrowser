Ext.define('ExtRepoApp.view.repo.Commits', {
    extend: 'Ext.container.Container',
    xtype: 'commits',
    layout:{
    		type: 'vbox',
    		align: 'stretch'
    },
    reference: 'commitsPanel',
    items: [{
    		xtype: 'panel',
        ui: 'light',
        padding: '20 0 20 20',
        layout: {
        		type: 'vbox',
        		align: 'stretch'
        },
	    	items: [{
    			xtype: 'label',
    			cls: 'clsOrgName',
    			bind: {
    				text: '{orgData.name} / {selectedRepoName}'
    			}
    		}, {
    			xtype: 'tbspacer',
    			height: 20
    		}, {
    			xtype: 'label',
    			cls: 'clsOrgDesc',
    			bind: {
    				text: 'Branch: {selectedRepoDefaultBranch}'
    			}
    		}]       
    }, {
    		xtype: 'gridpanel',
    		title: {
    			cls: 'clsGridTitle',
    			text: 'Commits',
    		},
    		ui: 'light',
    		enableLocking: true,
    		border: true,
    		flex: 1,
    		reference: 'commitsGridPanel',
    		bind: {
    			store: '{commitsDataStore}'
    		},
    		columns:{
        		defaults: {
        			tdCls: 'clsGridCell',
        			cls: 'clsGridHeader'
        		},
        		items: [{
        			text: 'Author',
        			width: 200,
        			dataIndex: 'author',
        			cellWrap: true,
        			renderer: function(value, metaData, record) {
        				if (record.get('avatar_url') && record.get('avatar_url').length > 0) {
        					return '<div style= "display: inline-block; padding-right:5px;vertical-align:  middle;"><img src="' + record.get('avatar_url') + '" height="20" width="20" /></div><div style="display: inline-block;">' + value + '</div>';
        				} else {
        					return value;
        				}  
        			}
        		}, {
        			text: 'Commit Message',
        			dataIndex: 'message',
        			align: 'left',
        			cellWrap: true,
        			flex: 1
        		}, {
        			text: 'Commited at',
        			dataIndex: 'committedAt',
        			align: 'left',
        			cellWrap: true,
        			width: 300
        		}]
        }
    }]
});