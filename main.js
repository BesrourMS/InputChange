  //Example with Search Input in Wordpress Theme
		jQuery(document).ready(function(){
			jQuery.event.special.inputchange = {
				setup: function() {
					var self = this, val;
					jQuery.data(this, 'timer', window.setInterval(function() {
						val = self.value;
						if ( jQuery.data( self, 'cache') != val ) {
							jQuery.data( self, 'cache', val );
							jQuery( self ).trigger( 'inputchange' );
						}
					}, 20));
				},
				teardown: function() {
					window.clearInterval( jQuery.data(this, 'timer') );
				},
				add: function() {
					jQuery.data(this, 'cache', this.value);
				}
			};
			jQuery('#search').on('inputchange', function() {
				var s = this.value;
				jQuery("#bsearch").attr("href", "http://yourwordpresswebsite.com?s="+s);
			});
		});

