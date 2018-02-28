Ext.define('ExtRepoApp.model.repo.CommitsDataModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
        		name: 'author', 
        		type: 'string',
        		mapping: function(record) {
        			return record.commit.committer.name;
        		}
        }, {
        		name: 'avatar_url',
        		type: 'string',
        		mapping: function(record) {
        			if(record.committer) {
        				return record.committer.avatar_url;	
        			}
        		}
		}, {
			name: 'message', 
			type: 'string',
			mapping: function(record) {
				return record.commit.message;
			}
        }, {
			name: 'committedAt', 
			type: 'date',
			mapping: function(record) {
				return record.commit.committer.date;
			}
        }
    ]
});