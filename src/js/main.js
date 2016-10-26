/*
* @Author: Maciej Sularz
* @Date:   2016-10-26 01:53:37
* @Last Modified by:   Maciej
* @Last Modified time: 2016-10-26 22:26:10
*/

( function( $ ){

	// Well lets instantiate the MAGIC!
	skrollr.init();

	/**
	 * Scroll to top button, a clever one :D
	 */
	$( '#go-up' ).click(function( e ){
		e.preventDefault();

		// Stores current window height
		var wh = $(window).height();
		/**
		 * Calculates the position (in pixels) to which
		 * we should scroll to arrive just after the header
		 * and first caption slides in. This value is directly
		 * related to the breakpoint set up for skrollr on
		 * the header element.
		 *
		 * Like so:

	       <div id="header"
	         data-0="margin-top: -5em"
	         data-105p=""
	         data-110p="margin-top: 2em">

	       	...

	       </div>

	     * The breakpoint we are looking at is the 'data-110p'
	     * in which case the animations finish exactly on the
	     * 110% of the document height. 
		 */ 
		var scrollToPosition = wh + ( wh * .1 ); // Adding 10% to compensate for the breakpoint :-)

		// Because I can
		console.log('Wheeeeeee :D What a ride! Again! Again! Please!');

		$("html, body").animate({ scrollTop: scrollToPosition }, 
        {
            duration: 1200
            // We could add some nice easing here if we wanted to :-)
        });
	});
})( jQuery );

( function( $ ){
	/** 
	 * Little helper info box that displays current scroll position 
	 * in percentage. Helps debugging and working on breakpoints for 
	 * the animations.
	 */
	var $iCanFlyHelperInfo = $('#i-can-fly-helper-info');
	if( $iCanFlyHelperInfo.length > 0 && $iCanFlyHelperInfo[0].hasAttribute("enabled") ){
		$iCanFlyHelperInfo.css('visibility', 'visible');
		$('#i-can-fly-helper').css('visibility', 'visible').css('width', '25px');
		$(window).scroll(function(){
			var percentage = $(window).scrollTop() / 10;
			$iCanFlyHelperInfo.text( percentage + "%" );
		});
	}
} )( jQuery );
