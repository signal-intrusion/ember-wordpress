import {moduleForModel, test} from 'ember-qunit';
// import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
	// Specify the other units that are required for this test.
	needs: ['model:category', 'model:tag']
});

test('it exists', function (assert) {
	let model = this.subject({title: 'hey'});
	// let store = this.store();
	assert.ok(Boolean(model));
});

// test('should own a category', function (assert) {
// 	const Post = this.store().modelFor('post');
// 	const relationship = Ember.get(Post, 'relationshipsByName').get('category');

// 	assert.equal(relationship.key, 'category', 'has relationship with category');
// 	assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
// });

// categories: hasMany('category', {async: true}),
// tags: hasMany('tag', {async: true}),
