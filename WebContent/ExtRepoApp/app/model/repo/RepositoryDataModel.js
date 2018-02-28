Ext.define('ExtRepoApp.model.repo.RepositoryDataModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',type: 'string'},
        {name: 'description',type: 'string'},
        {name: 'language', type: 'string'},
        {name: 'stargazers_count', type: 'integer'},
        {name: 'forks_count', type: 'integer'},
        {name: 'watchers_count', type: 'integer'},
        {name: 'commits_url', type: 'string'},
    ]
});