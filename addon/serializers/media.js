import WPSerializer from 'ember-wordpress/serializers/wordpress';

export default WPSerializer.extend({
	attrs: {
		media_type: {
			key: 'type'
		}
	}
});
