Ext.define('ExtRepoApp.store.repo.RepositoriesDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.reposDataStore',
    storeId: 'reposDataStore',
    autoLoad: false,
    model: 'ExtRepoApp.model.repo.RepositoryDataModel',
    proxy: {
        type: 'rest',
        baseUrl: 'https://api.github.com/orgs/',
        suffixUrl: '/repos',
        getBaseUrl: function() {
        		return this.baseUrl;
        },
        getSuffixUrl: function() {
        		return this.suffixUrl;
        }
    }
});
