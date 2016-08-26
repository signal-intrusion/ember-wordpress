import DS from 'ember-data';

const {Model, attr, belongsTo} = DS;

export default Model.extend({
	date: attr('date'),
	date_gmt: attr('date'),
	modified: attr('date'),
	modified_gmt: attr('date'),
	slug: attr('string'),
	link: attr('string'),
	title: attr('string'),
	author: belongsTo('post'),
	comment_status: attr('string'),
	ping_status: attr('string'),
	alt_text: attr('string'),
	caption: attr('string'),
	description: attr('string'),
	media_type: attr('string'),
	type: attr('string'),
	mime_type: attr('string'),
	source_url: attr('string'),

	post: belongsTo('post'),

	guid: attr(),
	media_details: attr(),
	_links: attr()
});
