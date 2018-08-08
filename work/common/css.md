
# css

``` css

	button,
	a {
	    outline: none;
	    -webkit-tap-highlight-color: transparent;
	}


	.ani-once {
	    transition: all .2s ease-out;
	    -moz-transition: all .2s ease-out;
	    -webkit-transition: all .2s ease-out;
	}

	.ani-infinite {
	    -webkit-animation-duration: 1s;
	    animation-duration: 1s;
	    -webkit-animation-fill-mode: both;
	    animation-fill-mode: both;
	    -webkit-animation-iteration-count: infinite;
	    animation-iteration-count: infinite;
	}

	@-webkit-keyframes bounceInDown {
	    0% {
	        -webkit-transform: translateY(0);
	        transform: translateY(0);
	        opacity: 1;
	    }
	    100% {
	        -webkit-transform: translateY(30px);
	        transform: translateY(30px);
	        opacity: 0;
	    }
	}

	@keyframes bounceInDown {
	    0% {
	        -webkit-transform: translateY(0);
	        -ms-transform: translateY(0);
	        transform: translateY(0);
	        opacity: 1;
	    }
	    100% {
	        -webkit-transform: translateY(30px);
	        -ms-transform: translateY(30px);
	        transform: translateY(30px);
	        opacity: 0;
	    }
	}

	.bounceInDown {
	    @extend .ani-infinite;
	    -webkit-animation-name: bounceInDown;
	    animation-name: bounceInDown;
	}


	@-webkit-keyframes bounceInUp {
	    0% {
	        -webkit-transform: translateY(30px);
	        transform: translateY(30px);
	        opacity: 0;
	    }
	    100% {
	        -webkit-transform: translateY(0);
	        transform: translateY(0);
	        opacity: 1;
	    }
	}

	@keyframes bounceInUp {
	    0% {
	        -webkit-transform: translateY(30px);
	        -ms-transform: translateY(30px);
	        transform: translateY(30px);
	        opacity: 0;
	    }
	    100% {
	        -webkit-transform: translateY(0);
	        -ms-transform: translateY(0);
	        transform: translateY(0);
	        opacity: 1;
	    }
	}

	.bounceInUp {
	    @extend .ani-infinite;
	    -webkit-animation-name: bounceInUp;
	    animation-name: bounceInUp;
	}

	.ertical-rl{
		-webkit-writing-mode: vertical-rl;
	    writing-mode: tb-rl;
	    writing-mode: vertical-rl;
	}

		
	@mixin bg-none() {
	    background: no-repeat center center;
	    background-size: 100%, 100%;
	}

	@mixin bg-color-change ($hdColor:#ca00d6, $ftColor:#b800c8) {
	    background-image: -webkit-linear-gradient(top, $hdColor, $ftColor);
	    background-image: -moz-linear-gradient(top, $hdColor, $ftColor);
	    background-image: -ms-linear-gradient(top, $hdColor, $ftColor);
	    background-image: -o-linear-gradient(top, $hdColor, $ftColor);
	}

	@mixin rotateInDeg($degs: 0) {
	    -webkit-transform-origin: center center;
	    -ms-transform-origin: center center;
	    transform-origin: center center;
	    -webkit-transform: rotate($degs);
	    -ms-transform: rotate($degs);
	    transform: rotate($degs);
	}

```