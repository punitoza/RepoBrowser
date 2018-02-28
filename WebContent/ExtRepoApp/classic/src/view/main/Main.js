Ext.define('ExtRepoApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',
    controller: 'mainViewController',
    viewModel: {
        type: 'mainViewModel'
    },
    layout: {
        type: 'border',
        align: 'stretch'
    },
    height: '100%',
    width: '100%',
    minWidth: 985,
    scrollable: true,
    items: [{
            xtype: 'panel',
            bodyCls: 'headerbarBody',
            cls: 'headerbar',
            height: 50,
            itemId: 'headerBar',
            region: 'north',
            reference: 'topPanel',
            layout: 'center',
            items:[{
            		xtype: 'toolbar',
            		cls: 'headerbarBody',
            		width: 985,
            		items: [{
                		xtype: 'label',
                    text: 'Repo Browser',
                    cls: 'header-label'
                }, {
                		xtype: 'tbspacer',
                		width: 30
                }, {
                		xtype: 'textfield',
                		emptyText: 'Search by Organization Login Name e.g - github',
                		value: 'netflix',
                		width: 400,
                		inputCls: 'clsTextFieldInputCls',
                		listeners: [{
                			specialKey: 'onOrgChange'
                		}]
                }, {
                		xtype: 'tbfill'
                }, {
                		xtype: 'tool',
                		type: 'help',
                		tooltip: 'A tool for browsing an organization\'s repositories'
                }]
            }]
        }, {
            xtype: 'container',
            region: 'center',
            width: '100%',
            layout: {
                type: 'center'
            },
            style: 'background-color: white',
            padding: '20, 0, 20, 0',
            items: [{
                xtype: 'container',
                layout: {
                    type: 'card'
                },
                scrollable: true,
                reference: 'cardPanel',
                minWidth: 400,
                minHeight: 400,
                width: 985,
                height: '100%',
                flex: 1,
                style: 'background-color: white;',
                	items:[{
                		xtype: 'repo'
                	}]
            }]
        }]
});