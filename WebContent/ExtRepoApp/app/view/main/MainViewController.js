/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtRepoApp.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainViewController',
    
    requires: ['ExtRepoApp.model.repo.OrganizationDataModel'],
    
    init: function(view) {
    		var defaultOrgLogin = 'netflix';
    		var orgData = {};
    		orgData.login = defaultOrgLogin;
    		view.getViewModel().set('orgData', orgData);
    		this.loadOrgData(defaultOrgLogin);
    		this.loadRepoData(defaultOrgLogin);
    },
    
    loadOrgData: function(orgLogin) {
	    	var me = this;
	    	var view = this.getView();
	    	var store = view.getViewModel().getStore('orgDataStore');
			store.getProxy().setUrl(store.getProxy().getBaseUrl() + orgLogin);
			store.load({
				callback: function(records, operation, success) {
					if (success === true) {
						view.getViewModel().set('orgData', records[0]);
						me.lookup('cardPanel').setActiveItem(0);
					} else {
						me.showToast();
					}
				}
			});
    },
    
    loadRepoData: function(orgLogin) {
	    	var me = this;
	    	var view = this.getView();
	    	var store = view.getViewModel().getStore('reposDataStore');
			store.getProxy().setUrl(store.getProxy().getBaseUrl() + orgLogin + store.getProxy().getSuffixUrl());
			store.load({
				callback: function(records, operation, success) {
					if (success === true) {
						store.sort('forks_count', 'DESC');
						me.lookup('cardPanel').setActiveItem(0);
					} else {
						me.showToast();
					}
				}
			});
	},
    
    onOrgChange: function(field, e) {
    		if(e.getKey() === e.ENTER) {
    			this.loadOrgData(field.getValue());
    			this.loadRepoData(field.getValue());
    		}
    },
    
    showToast: function() {
    		Ext.toast({
            html: 'Error loading organization data! Please try again.',
            cls: 'clsErrorText',
            closable: false,
            align: 't',
            slideDUration: 400,
            maxWidth: 400
        });
    },
    
    onViewCommits: function(view, rowIndex, colIndex, item, event, record, row) {
    		var me = this;
    		var vm = me.getView().getViewModel();
    		
    		var commitsPanel = me.lookup('commitsPanel');
    		var cardPanel = me.lookup('cardPanel');
    		
    		vm.set('selectedRepoName', record.get('name'));
    		vm.set('selectedRepoDefaultBranch', record.get('default_branch'));
    		
    		var commitsDataStore = vm.getStore('commitsDataStore');
    		var commitsUrl = record.get('commits_url');
    		if(commitsUrl.indexOf('{') > 0) { //remove optional parameters
    			commitsUrl = commitsUrl.substring(0, commitsUrl.indexOf('{'));
    		}
    		commitsDataStore.getProxy().setUrl(commitsUrl);
    		commitsDataStore.removeAll();
    		commitsDataStore.load({
    			callback: function(records, operation, success) {
    				if(success === true) {
    					if(!commitsPanel) {
	    		    			commitsPanel = Ext.create('ExtRepoApp.view.repo.Commits');
	    		    			cardPanel.add(commitsPanel);
	    		    		}
    					cardPanel.setActiveItem(commitsPanel);
    				} else {
    					me.showToast();
    				}
    			}
    		});
    		
    		
    }
});
