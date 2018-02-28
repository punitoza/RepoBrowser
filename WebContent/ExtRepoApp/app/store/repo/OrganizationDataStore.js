Ext.define('ExtRepoApp.store.repo.OrganizationDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.orgDataStore',
    storeId: 'orgDataStore',
    autoLoad: false,
    model: 'ExtRepoApp.model.repo.OrganizationDataModel',
    proxy: {
        type: 'rest',
        baseUrl: 'https://api.github.com/orgs/',
        getBaseUrl: function() {
        		return this.baseUrl;
        }
    }
});
