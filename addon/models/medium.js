import DS from 'ember-data';

const {Model, attr, belongsTo} = DS;

export default Model.extend({
	title: attr('string'),
	date: attr('date'),
	modified: attr('date'),
	content: attr('string'),
	type: attr('string'),
	alt_text: attr('string'),
	media_type: attr('string'),
	mime_type: attr('string'),
	media_details: attr('string'),
	source_url: attr('string'),
	excerpt: attr('string'),
	slug: attr('string'),
	featured_media: attr('number'),
	format: attr(),
	post: belongsTo('post', {async: true}),
	user: belongsTo('user', {async: true}),
	// Support common WP API plugins
	acf: attr()
});
