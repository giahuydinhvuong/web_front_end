var $messages = $('.messages-content'), d, h, m, i = 0;

		$(window).load(function() {
			$messages.mCustomScrollbar();
			setTimeout(function() {
				fakeMessage();
			}, 100);
		});

		function updateScrollbar() {
			$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
				scrollInertia: 10,
				timeout: 0
			});
		}

		function setDate() {
			d = new Date();
			if (m != d.getMinutes()) {
				m = d.getMinutes();
				$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
				$('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
				$('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
			}
		}

		function insertMessage() {
			msg = $('.message-input').val();
			if ($.trim(msg) == '') {
				return false;
			}
			$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
			setDate();
			$('.message-input').val(null);
			updateScrollbar();
			setTimeout(function() {
				fakeMessage();
			}, 1000 + (Math.random() * 20) * 100);
		}

		$('.message-submit').click(function() {
			insertMessage();
		});

		$(window).on('keydown', function(e) {
			if (e.which == 13) {
				insertMessage();
				return false;
			}
		})

		var Fake = [
			'Xin chào, tôi là người quản lý website?',
			'Rất vui được gặp bạn',
			'Bạn khỏe không?',
			'Tôi cũng vậy, cảm ơn bạn.',
			'Hiện tại bạn đang học hay đi làm?',
			'Điều đó thật tuyệt',
			'Bây giờ tôi có thể giúp gì cho bạn?',
			'Bạn có thể tìm thấy điều đó ở trên trang web này.',
			'Tôi nghĩ bạn là một người vui tính và hòa đồng.',
			'Tại sao bạn lại nghĩ như thế?',
			'Bạn có thể giải thích được không?',
			'Rất vui được trò với bạn',
			'Nếu bạn cần giúp thì trò với tối nhé',
			'Tạm biệt bạn!', ':)'
		]

		function fakeMessage() {
			if ($('.message-input').val() != '') {
				return false;
			}
			$('<div class="message loading new"><figure class="avatar"><img src="images/admin1.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
			updateScrollbar();

			setTimeout(function() {
				$('.message.loading').remove();
				$('<div class="message new"><figure class="avatar"><img src="images/admin1.jpg"/></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
				setDate();
				updateScrollbar();
				i++;
			}, 1000 + (Math.random() * 20) * 100);
		}

		$('.button').click(function() {
			$('.menu .items span').toggleClass('active');
			$('.menu .button').toggleClass('active');
		});