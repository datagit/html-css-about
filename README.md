- guide: https://www.youtube.com/watch?v=4Md08rfio6Q&list=PLeS7aZkL6GOvpkUu6FHFaivFA1xEnRCod&index=3
- dùng display:flex để dàng trang HTML: https://xuanthulab.net/su-dung-flexbox-bo-cuc-trang-trong-css.html
------------------------------------------------------------
1. từ trên xuống dưới
	layout tổng quan, chia BLOCK
2. từ ngoài vào trong
	dùng CONTAINER OR CONTAINER-FLUID?
	nếu có CONTAINER thì dùng thêm ROW
3. từ trái qua phải
	xác định COLUMN nếu có ROW
- sẽ dùng BOOTSTRAP GRID.
- container -> row -> columns
- tách biệt theo chức năng: LAYOUT, CONTENT
- container
	bị giới hạn chiều rộng
- container-fluid
	full màn hình
------------------------------------------------------------
page about
1.từ trên xuống dưới
	analytic overview layout
		blocks
	notes
		section.top-bar
			<div class="top-bar"></div>
		section#root
			<div id="root"></div>

	result
		body
			header (shared UI)
				section.top-bar
				nav.top-nav
			main (unique content for each page)
				section.hero
				section.about
				section.facts
			footer (shared UI)
				section.app-footer
------------------------------------------------------------
2. từ ngoài vào trong
3. từ trái qua phải
	section.top-bar
		div.container
			div.row
				div.col
					ul.top-bar__social-list > li*6 > a > i(icon)
				div.col
					div.top-bar__links
						a (register)
						span (/)
						a (login)
------------------------------------------------------------
	nav.top-nav
		div.container
			div.row
				div.col
					img.top-nav__logo
				div.col
					ul.top-nav__menus > li*5 > a
				div.col
					a.top-nav__search > i(icon)

------------------------------------------------------------
	section.hero (background-image)
		div.container-fluid
			h1.hero__title

------------------------------------------------------------
	section.about
		div.container
			div.row
				div.col
					div.about__content
						h1.about__content-title
						p.about__content-description
						button
				div.col
					img.about__thumbnail
------------------------------------------------------------
	section.facts
		div.container
			div.row
				div.col-3 * 4
					div.fact-item
						img.fact-item__image
						p.fact-item__big-number
						p.fact-item__name

				.....
------------------------------------------------------------
	section.app-footer
		div.container
			div.row
				div.col
					div.app-footer__logo-wraper
						img.app-footer__logo-wraper__logo
						ul.app-footer__logo-wraper__social-links > li * 6 > a > i
				div.col
					ul.app-footer__menus > li * 5 > a
					p.app-footer__copyright

------------------------------------------------------------















