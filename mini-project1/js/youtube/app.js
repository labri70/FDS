var myApp = angular.module('myApp', ['ngYoutubeEmbed']);

myApp.controller('myCtrl', ['$scope', function($scope) {
	$scope.videoForm = {};

	//Sublime Start
    $scope.sublime1 = 'https://www.youtube.com/watch?v=SVkR1ZkNusI&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime2 = 'https://www.youtube.com/watch?v=_JFIeY46sIU&index=2&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime3 = 'https://www.youtube.com/watch?v=FT3CeRSiO6s&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=3';
    $scope.sublime4 = 'https://www.youtube.com/watch?v=VYNkebGdl9Q&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=4';
    $scope.sublime5 = 'https://www.youtube.com/watch?v=GGl-vNu1bwc&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=5';
    $scope.sublime6 = 'https://www.youtube.com/watch?v=MeOaWR2T6TU&index=6&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime7 = 'https://www.youtube.com/watch?v=U4lFXtLF5Cs&index=7&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime8 = 'https://www.youtube.com/watch?v=zS_4yLizMBw&index=8&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime9 = 'https://www.youtube.com/watch?v=19BUQYmPhTQ&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=9';
    $scope.sublime10 = 'https://www.youtube.com/watch?v=6IDH49G8DE4&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=10';
    $scope.sublime11 = 'https://www.youtube.com/watch?v=H7Gv77BkTlE&index=11&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK';
    $scope.sublime12 = 'https://www.youtube.com/watch?v=2nC_LiCDgG8&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK&index=12';

    
    //Flex Start
    $scope.flex = 'https://www.youtube.com/watch?v=G7EIAgfkhmg';
    $scope.flex1 = 'https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=1';
    $scope.flex2 = 'https://www.youtube.com/watch?v=ux4h6pejCSM&index=2&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';
    $scope.flex3 = 'https://www.youtube.com/watch?v=yPK8cwBEOmg&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=3';
    $scope.flex4 = 'https://www.youtube.com/watch?v=tSdq8amjMso&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=4';
    $scope.flex5 = 'https://www.youtube.com/watch?v=rlZ-fC5eWWk&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=5';
    $scope.flex6 = 'https://www.youtube.com/watch?v=j5RxNRFWMwo&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=6';
    $scope.flex7 = 'https://www.youtube.com/watch?v=2plKBskaKfY&index=7&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';
    $scope.flex8 = 'https://www.youtube.com/watch?v=8Ls7maJvjwQ&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&index=8';
    $scope.flex9 = 'https://www.youtube.com/watch?v=8vcSr1yVvXQ&index=9&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';
    $scope.flex10 = 'https://www.youtube.com/watch?v=WY2itpeUK7Q&index=10&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';
    $scope.flex11 = 'https://www.youtube.com/watch?v=B_E6Kh9YkFM&index=11&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';
    $scope.flex12 = 'https://www.youtube.com/watch?v=FPl-7mTW20U&index=12&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG';


    //Sass Start
    $scope.sass1 = 'https://www.youtube.com/watch?v=fbVD32w1oTo&list=PL2CB1F80266E986EA';
    $scope.sass2 = 'https://www.youtube.com/watch?v=u-f72IQMloA&list=PL2CB1F80266E986EA&index=2';
    $scope.sass3 = 'https://www.youtube.com/watch?v=bC7TXBt_OLU&list=PL2CB1F80266E986EA&index=3';
    $scope.sass4 = 'https://www.youtube.com/watch?v=F34FF9AizY0&index=4&list=PL2CB1F80266E986EA';
    $scope.sass5 = 'https://www.youtube.com/watch?v=6RpGMKjRkRw&index=5&list=PL2CB1F80266E986EA';
    $scope.sass6 = 'https://www.youtube.com/watch?v=igYBKYQ15g0&list=PL2CB1F80266E986EA&index=6';
    $scope.sass7 = 'https://www.youtube.com/watch?v=HvRw_RarObk&index=7&list=PL2CB1F80266E986EA';
    $scope.sass8 = 'https://www.youtube.com/watch?v=13tfIjw4QrI&index=8&list=PL2CB1F80266E986EA';
    $scope.sass9 = 'https://www.youtube.com/watch?v=O4hPOMX8AaU&index=9&list=PL2CB1F80266E986EA';
    $scope.sass10 = 'https://www.youtube.com/watch?v=BmRWgv6A8fU&index=10&list=PL2CB1F80266E986EA';
    $scope.sass11 = 'https://www.youtube.com/watch?v=duFZT7Pdoxk&list=PL2CB1F80266E986EA&index=11';
    $scope.sass12 = 'https://www.youtube.com/watch?v=HN0i9cYekKY&list=PL2CB1F80266E986EA&index=12';
    $scope.sass13 = 'https://www.youtube.com/watch?v=PlJt8DRCjlo&list=PL2CB1F80266E986EA&index=13';


    //Jade Start
    $scope.jade1 = 'https://www.youtube.com/watch?v=Hlpz1bTfbn4&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE';
    $scope.jade2 = 'https://www.youtube.com/watch?v=VG6LI5D-oUs&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE&index=2';
    $scope.jade3 = 'https://www.youtube.com/watch?v=2TMRBSNRQTc&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE&index=3';
    $scope.jade4 = 'https://www.youtube.com/watch?v=ysbPH8bxgZE&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE&index=4';
    $scope.jade5 = 'https://www.youtube.com/watch?v=AhUyWZfAVoA&index=5&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE';
    $scope.jade6 = 'https://www.youtube.com/watch?v=GP_yMnBKBjw&index=6&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE';
    $scope.jade7 = 'https://www.youtube.com/watch?v=AG-i-54zDgA&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE&index=7';
    $scope.jade8 = 'https://www.youtube.com/watch?v=pRKxdMjWPHA&index=8&list=PLVHXiuTtgtcxuckHJUzrpe2n9gNIVF6JE';


    //Angular Start
    $scope.angular1 = 'https://www.youtube.com/watch?v=MQ7yQt9YZYI&index=1&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular2 = 'https://www.youtube.com/watch?v=NAUQHwST8bg&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=2';
    $scope.angular3 = 'https://www.youtube.com/watch?v=ptOCG2RSbC0&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=3';
    $scope.angular4 = 'https://www.youtube.com/watch?v=M6NsowBQJl4&index=4&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular5 = 'https://www.youtube.com/watch?v=LeiW3_MRTdg&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=5';
    $scope.angular6 = 'https://www.youtube.com/watch?v=xjurCTCKFRE&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=6';
    $scope.angular7 = 'https://www.youtube.com/watch?v=5WwOKmbK4_Q&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=7';
    $scope.angular8 = 'https://www.youtube.com/watch?v=7AtFq8WFtyg&index=8&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular9 = 'https://www.youtube.com/watch?v=zTdbYlLqZ-I&index=9&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular10 = 'https://www.youtube.com/watch?v=aTjObLQcCwM&index=10&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular11 = 'https://www.youtube.com/watch?v=mYzp_RulSZs&index=11&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular12 = 'https://www.youtube.com/watch?v=tTFGnKCMgec&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=12';
    $scope.angular13 = 'https://www.youtube.com/watch?v=qvkXcQpIrBs&index=13&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular14 = 'https://www.youtube.com/watch?v=fwmzPoBICTI&index=14&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular15 = 'https://www.youtube.com/watch?v=Ez1BW29hFHg&index=15&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';
    $scope.angular16 = 'https://www.youtube.com/watch?v=MXml6-p5pLY&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb&index=16';
    $scope.angular17 = 'https://www.youtube.com/watch?v=3vqw2r-jOEo&index=17&list=PLdajQmV2DgoT7z7kk-fzwIyyGVTxwvHyb';


    //Bootstrap Start
    $scope.bootstrap1 = 'https://www.youtube.com/watch?v=oepmLGQP1m4&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap2 = 'https://www.youtube.com/watch?v=JzCmx24xDS4&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt&index=2';
    $scope.bootstrap3 = 'https://www.youtube.com/watch?v=6ezr8cXMBZ4&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt&index=3';
    $scope.bootstrap4 = 'https://www.youtube.com/watch?v=ZQN5g68kGaw&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt&index=4';
    $scope.bootstrap5 = 'https://www.youtube.com/watch?v=sZTbTzwFs-w&index=5&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap6 = 'https://www.youtube.com/watch?v=IRt7TzsLNWU&index=6&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap7 = 'https://www.youtube.com/watch?v=MNp5I_vO8IU&index=7&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap8 = 'https://www.youtube.com/watch?v=9yXBqWbyXTg&index=8&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap9 = 'https://www.youtube.com/watch?v=IVA4EufbzkU&index=9&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';
    $scope.bootstrap10 = 'https://www.youtube.com/watch?v=XVUix8lIaTs&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt&index=10';
    $scope.bootstrap11 = 'https://www.youtube.com/watch?v=FGocnq_WCJY&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt&index=11';
    $scope.bootstrap12 = 'https://www.youtube.com/watch?v=ExK8GLT-IoE&index=12&list=PLUoqTnNH-2Xz_BUrjcahKWDhPcUj-FTOt';


    //Gulp Start
    $scope.gulp1 = 'https://www.youtube.com/watch?v=LmdT2zhFmn4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G';
    $scope.gulp2 = 'https://www.youtube.com/watch?v=Oehs2H95a6E&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G&index=2';
    $scope.gulp3 = 'https://www.youtube.com/watch?v=jgcfEhiCkG4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G&index=3';
    $scope.gulp4 = 'https://www.youtube.com/watch?v=LVbHctGugqA&index=4&list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G';


}]);