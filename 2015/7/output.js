var memoize = function(fn) { 
  var result; 
  return function() { 
    if (result === undefined) { 
       result = fn(); 
    } 
   return result; 
  }};

var ac = {};
ac.ls = memoize( function() { 
   var result =  ac.lf() & ac.lq(); 
   console.log("lf AND lq -> ls : " + result); 
   return result; 
 });

ac.jn = memoize( function() { 
   var result =  ac.iu() >> 1; 
   console.log("iu RSHIFT 1 -> jn : " + result); 
   return result; 
 });

ac.bv = memoize( function() { 
   var result =  ac.bo() | ac.bu(); 
   console.log("bo OR bu -> bv : " + result); 
   return result; 
 });

ac.hc = memoize( function() { 
   var result =  ac.gj() >> 1; 
   console.log("gj RSHIFT 1 -> hc : " + result); 
   return result; 
 });

ac.eu = memoize( function() { 
   var result =  ac.et() >> 2; 
   console.log("et RSHIFT 2 -> eu : " + result); 
   return result; 
 });

ac.by = memoize( function() { 
   var result =  ac.bv() & ac.bx(); 
   console.log("bv AND bx -> by : " + result); 
   return result; 
 });

ac.iu = memoize( function() { 
   var result =  ac.is() | ac.it(); 
   console.log("is OR it -> iu : " + result); 
   return result; 
 });

ac.o = memoize( function() { 
   var result =  ac.b() | ac.n(); 
   console.log("b OR n -> o : " + result); 
   return result; 
 });

ac.gg = memoize( function() { 
   var result =  ac.gf() | ac.ge(); 
   console.log("gf OR ge -> gg : " + result); 
   return result; 
 });

ac.ku = memoize( function() { 
   var result = (~ (ac.kt() << 16)) >>> 16; 
   console.log("NOT kt -> ku : " + result); 
   return result; 
 });

ac.ed = memoize( function() { 
   var result =  ac.ea() & ac.eb(); 
   console.log("ea AND eb -> ed : " + result); 
   return result; 
 });

ac.ks = memoize( function() { 
   var result =  ac.kl() | ac.kr(); 
   console.log("kl OR kr -> ks : " + result); 
   return result; 
 });

ac.hl = memoize( function() { 
   var result =  ac.hi() & ac.hk(); 
   console.log("hi AND hk -> hl : " + result); 
   return result; 
 });

ac.ax = memoize( function() { 
   var result =  ac.au() & ac.av(); 
   console.log("au AND av -> ax : " + result); 
   return result; 
 });

ac.lg = memoize( function() { 
   var result =  ac.lf() >> 2; 
   console.log("lf RSHIFT 2 -> lg : " + result); 
   return result; 
 });

ac.df = memoize( function() { 
   var result =  ac.dd() >> 3; 
   console.log("dd RSHIFT 3 -> df : " + result); 
   return result; 
 });

ac.fc = memoize( function() { 
   var result =  ac.eu() & ac.fa(); 
   console.log("eu AND fa -> fc : " + result); 
   return result; 
 });

ac.di = memoize( function() { 
   var result =  ac.df() & ac.dg(); 
   console.log("df AND dg -> di : " + result); 
   return result; 
 });

ac.it = memoize( function() { 
   var result =  ac.ip() << 15; 
   console.log("ip LSHIFT 15 -> it : " + result); 
   return result; 
 });

ac.em = memoize( function() { 
   var result = (~ (ac.el() << 16)) >>> 16; 
   console.log("NOT el -> em : " + result); 
   return result; 
 });

ac.ff = memoize( function() { 
   var result =  ac.et() | ac.fe(); 
   console.log("et OR fe -> ff : " + result); 
   return result; 
 });

ac.fn = memoize( function() { 
   var result =  ac.fj() << 15; 
   console.log("fj LSHIFT 15 -> fn : " + result); 
   return result; 
 });

ac.u = memoize( function() { 
   var result =  ac.t() | ac.s(); 
   console.log("t OR s -> u : " + result); 
   return result; 
 });

ac.ma = memoize( function() { 
   var result =  ac.ly() | ac.lz(); 
   console.log("ly OR lz -> ma : " + result); 
   return result; 
 });

ac.kr = memoize( function() { 
   var result =  ac.ko() & ac.kq(); 
   console.log("ko AND kq -> kr : " + result); 
   return result; 
 });

ac.fy = memoize( function() { 
   var result = (~ (ac.fx() << 16)) >>> 16; 
   console.log("NOT fx -> fy : " + result); 
   return result; 
 });

ac.fm = memoize( function() { 
   var result =  ac.et() >> 1; 
   console.log("et RSHIFT 1 -> fm : " + result); 
   return result; 
 });

ac.fb = memoize( function() { 
   var result =  ac.eu() | ac.fa(); 
   console.log("eu OR fa -> fb : " + result); 
   return result; 
 });

ac.de = memoize( function() { 
   var result =  ac.dd() >> 2; 
   console.log("dd RSHIFT 2 -> de : " + result); 
   return result; 
 });

ac.gp = memoize( function() { 
   var result = (~ (ac.go() << 16)) >>> 16; 
   console.log("NOT go -> gp : " + result); 
   return result; 
 });

ac.ke = memoize( function() { 
   var result =  ac.kb() & ac.kd(); 
   console.log("kb AND kd -> ke : " + result); 
   return result; 
 });

ac.hi = memoize( function() { 
   var result =  ac.hg() | ac.hh(); 
   console.log("hg OR hh -> hi : " + result); 
   return result; 
 });

ac.kg = memoize( function() { 
   var result =  ac.jm() << 1; 
   console.log("jm LSHIFT 1 -> kg : " + result); 
   return result; 
 });

ac.co = memoize( function() { 
   var result = (~ (ac.cn() << 16)) >>> 16; 
   console.log("NOT cn -> co : " + result); 
   return result; 
 });

ac.jq = memoize( function() { 
   var result =  ac.jp() >> 2; 
   console.log("jp RSHIFT 2 -> jq : " + result); 
   return result; 
 });

ac.js = memoize( function() { 
   var result =  ac.jp() >> 5; 
   console.log("jp RSHIFT 5 -> js : " + result); 
   return result; 
 });

ac.ip = memoize( function() { 
   var result =  1 & ac.io(); 
   console.log("1 AND io -> ip : " + result); 
   return result; 
 });

ac.es = memoize( function() { 
   var result =  ac.eo() << 15; 
   console.log("eo LSHIFT 15 -> es : " + result); 
   return result; 
 });

ac.jk = memoize( function() { 
   var result =  1 & ac.jj(); 
   console.log("1 AND jj -> jk : " + result); 
   return result; 
 });

ac.j = memoize( function() { 
   var result =  ac.g() & ac.i(); 
   console.log("g AND i -> j : " + result); 
   return result; 
 });

ac.ck = memoize( function() { 
   var result =  ac.ci() >> 3; 
   console.log("ci RSHIFT 3 -> ck : " + result); 
   return result; 
 });

ac.gq = memoize( function() { 
   var result =  ac.gn() & ac.gp(); 
   console.log("gn AND gp -> gq : " + result); 
   return result; 
 });

ac.fv = memoize( function() { 
   var result =  ac.fs() & ac.fu(); 
   console.log("fs AND fu -> fv : " + result); 
   return result; 
 });

ac.lm = memoize( function() { 
   var result =  ac.lj() & ac.ll(); 
   console.log("lj AND ll -> lm : " + result); 
   return result; 
 });

ac.jo = memoize( function() { 
   var result =  ac.jk() << 15; 
   console.log("jk LSHIFT 15 -> jo : " + result); 
   return result; 
 });

ac.iw = memoize( function() { 
   var result =  ac.iu() >> 3; 
   console.log("iu RSHIFT 3 -> iw : " + result); 
   return result; 
 });

ac.ij = memoize( function() { 
   var result = (~ (ac.ii() << 16)) >>> 16; 
   console.log("NOT ii -> ij : " + result); 
   return result; 
 });

ac.cd = memoize( function() { 
   var result =  1 & ac.cc(); 
   console.log("1 AND cc -> cd : " + result); 
   return result; 
 });

ac.bp = memoize( function() { 
   var result =  ac.bn() >> 3; 
   console.log("bn RSHIFT 3 -> bp : " + result); 
   return result; 
 });

ac.gx = memoize( function() { 
   var result = (~ (ac.gw() << 16)) >>> 16; 
   console.log("NOT gw -> gx : " + result); 
   return result; 
 });

ac.fu = memoize( function() { 
   var result = (~ (ac.ft() << 16)) >>> 16; 
   console.log("NOT ft -> fu : " + result); 
   return result; 
 });

ac.jp = memoize( function() { 
   var result =  ac.jn() | ac.jo(); 
   console.log("jn OR jo -> jp : " + result); 
   return result; 
 });

ac.jc = memoize( function() { 
   var result =  ac.iv() | ac.jb(); 
   console.log("iv OR jb -> jc : " + result); 
   return result; 
 });

ac.hw = memoize( function() { 
   var result =  ac.hv() | ac.hu(); 
   console.log("hv OR hu -> hw : " + result); 
   return result; 
 });

ac.b = memoize(function() { 
   var result = 16076; 
   console.log("16076 -> b : " + result); 
   return result; 
 });

ac.gm = memoize( function() { 
   var result =  ac.gj() >> 5; 
   console.log("gj RSHIFT 5 -> gm : " + result); 
   return result; 
 });

ac.ht = memoize( function() { 
   var result =  ac.hq() & ac.hs(); 
   console.log("hq AND hs -> ht : " + result); 
   return result; 
 });

ac.er = memoize( function() { 
   var result =  ac.dy() >> 1; 
   console.log("dy RSHIFT 1 -> er : " + result); 
   return result; 
 });

ac.ap = memoize( function() { 
   var result =  ac.ao() | ac.an(); 
   console.log("ao OR an -> ap : " + result); 
   return result; 
 });

ac.lf = memoize( function() { 
   var result =  ac.ld() | ac.le(); 
   console.log("ld OR le -> lf : " + result); 
   return result; 
 });

ac.ce = memoize( function() { 
   var result =  ac.bk() << 1; 
   console.log("bk LSHIFT 1 -> ce : " + result); 
   return result; 
 });

ac.cc = memoize( function() { 
   var result =  ac.bz() & ac.cb(); 
   console.log("bz AND cb -> cc : " + result); 
   return result; 
 });

ac.bm = memoize( function() { 
   var result =  ac.bi() << 15; 
   console.log("bi LSHIFT 15 -> bm : " + result); 
   return result; 
 });

ac.io = memoize( function() { 
   var result =  ac.il() & ac.in(); 
   console.log("il AND in -> io : " + result); 
   return result; 
 });

ac.ai = memoize( function() { 
   var result =  ac.af() & ac.ah(); 
   console.log("af AND ah -> ai : " + result); 
   return result; 
 });

ac.bl = memoize( function() { 
   var result =  ac.as() >> 1; 
   console.log("as RSHIFT 1 -> bl : " + result); 
   return result; 
 });

ac.lh = memoize( function() { 
   var result =  ac.lf() >> 3; 
   console.log("lf RSHIFT 3 -> lh : " + result); 
   return result; 
 });

ac.et = memoize( function() { 
   var result =  ac.er() | ac.es(); 
   console.log("er OR es -> et : " + result); 
   return result; 
 });

ac.ay = memoize( function() { 
   var result = (~ (ac.ax() << 16)) >>> 16; 
   console.log("NOT ax -> ay : " + result); 
   return result; 
 });

ac.db = memoize( function() { 
   var result =  ac.ci() >> 1; 
   console.log("ci RSHIFT 1 -> db : " + result); 
   return result; 
 });

ac.fg = memoize( function() { 
   var result =  ac.et() & ac.fe(); 
   console.log("et AND fe -> fg : " + result); 
   return result; 
 });

ac.ln = memoize( function() { 
   var result =  ac.lg() | ac.lm(); 
   console.log("lg OR lm -> ln : " + result); 
   return result; 
 });

ac.n = memoize( function() { 
   var result =  ac.k() & ac.m(); 
   console.log("k AND m -> n : " + result); 
   return result; 
 });

ac.ia = memoize( function() { 
   var result =  ac.hz() >> 2; 
   console.log("hz RSHIFT 2 -> ia : " + result); 
   return result; 
 });

ac.lb = memoize( function() { 
   var result =  ac.kh() << 1; 
   console.log("kh LSHIFT 1 -> lb : " + result); 
   return result; 
 });

ac.ez = memoize( function() { 
   var result = (~ (ac.ey() << 16)) >>> 16; 
   console.log("NOT ey -> ez : " + result); 
   return result; 
 });

ac.dj = memoize( function() { 
   var result = (~ (ac.di() << 16)) >>> 16; 
   console.log("NOT di -> dj : " + result); 
   return result; 
 });

ac.eg = memoize( function() { 
   var result =  ac.dz() | ac.ef(); 
   console.log("dz OR ef -> eg : " + result); 
   return result; 
 });

ac.a = memoize(function() { 
   var result = ac.lx(); 
   console.log("lx -> a : " + result); 
   return result; 
 });

ac.ja = memoize( function() { 
   var result = (~ (ac.iz() << 16)) >>> 16; 
   console.log("NOT iz -> ja : " + result); 
   return result; 
 });

ac.hd = memoize( function() { 
   var result =  ac.gz() << 15; 
   console.log("gz LSHIFT 15 -> hd : " + result); 
   return result; 
 });

ac.cf = memoize( function() { 
   var result =  ac.ce() | ac.cd(); 
   console.log("ce OR cd -> cf : " + result); 
   return result; 
 });

ac.ft = memoize( function() { 
   var result =  ac.fq() & ac.fr(); 
   console.log("fq AND fr -> ft : " + result); 
   return result; 
 });

ac.bb = memoize( function() { 
   var result =  ac.at() & ac.az(); 
   console.log("at AND az -> bb : " + result); 
   return result; 
 });

ac.hb = memoize( function() { 
   var result =  ac.ha() | ac.gz(); 
   console.log("ha OR gz -> hb : " + result); 
   return result; 
 });

ac.fx = memoize( function() { 
   var result =  ac.fp() & ac.fv(); 
   console.log("fp AND fv -> fx : " + result); 
   return result; 
 });

ac.gc = memoize( function() { 
   var result = (~ (ac.gb() << 16)) >>> 16; 
   console.log("NOT gb -> gc : " + result); 
   return result; 
 });

ac.ii = memoize( function() { 
   var result =  ac.ia() & ac.ig(); 
   console.log("ia AND ig -> ii : " + result); 
   return result; 
 });

ac.gn = memoize( function() { 
   var result =  ac.gl() | ac.gm(); 
   console.log("gl OR gm -> gn : " + result); 
   return result; 
 });

ac.c = memoize(function() { 
   var result = 0; 
   console.log("0 -> c : " + result); 
   return result; 
 });

ac.cb = memoize( function() { 
   var result = (~ (ac.ca() << 16)) >>> 16; 
   console.log("NOT ca -> cb : " + result); 
   return result; 
 });

ac.cg = memoize( function() { 
   var result =  ac.bn() >> 1; 
   console.log("bn RSHIFT 1 -> cg : " + result); 
   return result; 
 });

ac.t = memoize( function() { 
   var result =  ac.c() << 1; 
   console.log("c LSHIFT 1 -> t : " + result); 
   return result; 
 });

ac.iy = memoize( function() { 
   var result =  ac.iw() | ac.ix(); 
   console.log("iw OR ix -> iy : " + result); 
   return result; 
 });

ac.kh = memoize( function() { 
   var result =  ac.kg() | ac.kf(); 
   console.log("kg OR kf -> kh : " + result); 
   return result; 
 });

ac.ek = memoize( function() { 
   var result =  ac.dy() | ac.ej(); 
   console.log("dy OR ej -> ek : " + result); 
   return result; 
 });

ac.kp = memoize( function() { 
   var result =  ac.km() & ac.kn(); 
   console.log("km AND kn -> kp : " + result); 
   return result; 
 });

ac.fd = memoize( function() { 
   var result = (~ (ac.fc() << 16)) >>> 16; 
   console.log("NOT fc -> fd : " + result); 
   return result; 
 });

ac.ib = memoize( function() { 
   var result =  ac.hz() >> 3; 
   console.log("hz RSHIFT 3 -> ib : " + result); 
   return result; 
 });

ac.dr = memoize( function() { 
   var result = (~ (ac.dq() << 16)) >>> 16; 
   console.log("NOT dq -> dr : " + result); 
   return result; 
 });

ac.fh = memoize( function() { 
   var result = (~ (ac.fg() << 16)) >>> 16; 
   console.log("NOT fg -> fh : " + result); 
   return result; 
 });

ac.dz = memoize( function() { 
   var result =  ac.dy() >> 2; 
   console.log("dy RSHIFT 2 -> dz : " + result); 
   return result; 
 });

ac.kl = memoize( function() { 
   var result =  ac.kk() >> 2; 
   console.log("kk RSHIFT 2 -> kl : " + result); 
   return result; 
 });

ac.fj = memoize( function() { 
   var result =  1 & ac.fi(); 
   console.log("1 AND fi -> fj : " + result); 
   return result; 
 });

ac.hs = memoize( function() { 
   var result = (~ (ac.hr() << 16)) >>> 16; 
   console.log("NOT hr -> hs : " + result); 
   return result; 
 });

ac.ki = memoize( function() { 
   var result =  ac.jp() >> 1; 
   console.log("jp RSHIFT 1 -> ki : " + result); 
   return result; 
 });

ac.bn = memoize( function() { 
   var result =  ac.bl() | ac.bm(); 
   console.log("bl OR bm -> bn : " + result); 
   return result; 
 });

ac.gz = memoize( function() { 
   var result =  1 & ac.gy(); 
   console.log("1 AND gy -> gz : " + result); 
   return result; 
 });

ac.gu = memoize( function() { 
   var result =  ac.gr() & ac.gt(); 
   console.log("gr AND gt -> gu : " + result); 
   return result; 
 });

ac.dd = memoize( function() { 
   var result =  ac.db() | ac.dc(); 
   console.log("db OR dc -> dd : " + result); 
   return result; 
 });

ac.dl = memoize( function() { 
   var result =  ac.de() | ac.dk(); 
   console.log("de OR dk -> dl : " + result); 
   return result; 
 });

ac.av = memoize( function() { 
   var result =  ac.as() >> 5; 
   console.log("as RSHIFT 5 -> av : " + result); 
   return result; 
 });

ac.li = memoize( function() { 
   var result =  ac.lf() >> 5; 
   console.log("lf RSHIFT 5 -> li : " + result); 
   return result; 
 });

ac.hp = memoize( function() { 
   var result =  ac.hm() & ac.ho(); 
   console.log("hm AND ho -> hp : " + result); 
   return result; 
 });

ac.ci = memoize( function() { 
   var result =  ac.cg() | ac.ch(); 
   console.log("cg OR ch -> ci : " + result); 
   return result; 
 });

ac.gw = memoize( function() { 
   var result =  ac.gj() & ac.gu(); 
   console.log("gj AND gu -> gw : " + result); 
   return result; 
 });

ac.gi = memoize( function() { 
   var result =  ac.ge() << 15; 
   console.log("ge LSHIFT 15 -> gi : " + result); 
   return result; 
 });

ac.g = memoize( function() { 
   var result =  ac.e() | ac.f(); 
   console.log("e OR f -> g : " + result); 
   return result; 
 });

ac.fw = memoize( function() { 
   var result =  ac.fp() | ac.fv(); 
   console.log("fp OR fv -> fw : " + result); 
   return result; 
 });

ac.fe = memoize( function() { 
   var result =  ac.fb() & ac.fd(); 
   console.log("fb AND fd -> fe : " + result); 
   return result; 
 });

ac.ch = memoize( function() { 
   var result =  ac.cd() << 15; 
   console.log("cd LSHIFT 15 -> ch : " + result); 
   return result; 
 });

ac.v = memoize( function() { 
   var result =  ac.b() >> 1; 
   console.log("b RSHIFT 1 -> v : " + result); 
   return result; 
 });

ac.ba = memoize( function() { 
   var result =  ac.at() | ac.az(); 
   console.log("at OR az -> ba : " + result); 
   return result; 
 });

ac.bo = memoize( function() { 
   var result =  ac.bn() >> 2; 
   console.log("bn RSHIFT 2 -> bo : " + result); 
   return result; 
 });

ac.lk = memoize( function() { 
   var result =  ac.lh() & ac.li(); 
   console.log("lh AND li -> lk : " + result); 
   return result; 
 });

ac.do = memoize( function() { 
   var result =  ac.dl() & ac.dn(); 
   console.log("dl AND dn -> do : " + result); 
   return result; 
 });

ac.ej = memoize( function() { 
   var result =  ac.eg() & ac.ei(); 
   console.log("eg AND ei -> ej : " + result); 
   return result; 
 });

ac.fa = memoize( function() { 
   var result =  ac.ex() & ac.ez(); 
   console.log("ex AND ez -> fa : " + result); 
   return result; 
 });

ac.kq = memoize( function() { 
   var result = (~ (ac.kp() << 16)) >>> 16; 
   console.log("NOT kp -> kq : " + result); 
   return result; 
 });

ac.ll = memoize( function() { 
   var result = (~ (ac.lk() << 16)) >>> 16; 
   console.log("NOT lk -> ll : " + result); 
   return result; 
 });

ac.ak = memoize( function() { 
   var result =  ac.x() & ac.ai(); 
   console.log("x AND ai -> ak : " + result); 
   return result; 
 });

ac.kb = memoize( function() { 
   var result =  ac.jp() | ac.ka(); 
   console.log("jp OR ka -> kb : " + result); 
   return result; 
 });

ac.je = memoize( function() { 
   var result = (~ (ac.jd() << 16)) >>> 16; 
   console.log("NOT jd -> je : " + result); 
   return result; 
 });

ac.jb = memoize( function() { 
   var result =  ac.iy() & ac.ja(); 
   console.log("iy AND ja -> jb : " + result); 
   return result; 
 });

ac.jr = memoize( function() { 
   var result =  ac.jp() >> 3; 
   console.log("jp RSHIFT 3 -> jr : " + result); 
   return result; 
 });

ac.ga = memoize( function() { 
   var result =  ac.fo() | ac.fz(); 
   console.log("fo OR fz -> ga : " + result); 
   return result; 
 });

ac.dh = memoize( function() { 
   var result =  ac.df() | ac.dg(); 
   console.log("df OR dg -> dh : " + result); 
   return result; 
 });

ac.gk = memoize( function() { 
   var result =  ac.gj() >> 2; 
   console.log("gj RSHIFT 2 -> gk : " + result); 
   return result; 
 });

ac.gv = memoize( function() { 
   var result =  ac.gj() | ac.gu(); 
   console.log("gj OR gu -> gv : " + result); 
   return result; 
 });

ac.ji = memoize( function() { 
   var result = (~ (ac.jh() << 16)) >>> 16; 
   console.log("NOT jh -> ji : " + result); 
   return result; 
 });

ac.bj = memoize( function() { 
   var result =  ac.ap() << 1; 
   console.log("ap LSHIFT 1 -> bj : " + result); 
   return result; 
 });

ac.lt = memoize( function() { 
   var result = (~ (ac.ls() << 16)) >>> 16; 
   console.log("NOT ls -> lt : " + result); 
   return result; 
 });

ac.jl = memoize( function() { 
   var result =  ac.ir() << 1; 
   console.log("ir LSHIFT 1 -> jl : " + result); 
   return result; 
 });

ac.ca = memoize( function() { 
   var result =  ac.bn() & ac.by(); 
   console.log("bn AND by -> ca : " + result); 
   return result; 
 });

ac.lz = memoize( function() { 
   var result =  ac.lv() << 15; 
   console.log("lv LSHIFT 15 -> lz : " + result); 
   return result; 
 });

ac.bd = memoize( function() { 
   var result =  ac.ba() & ac.bc(); 
   console.log("ba AND bc -> bd : " + result); 
   return result; 
 });

ac.dc = memoize( function() { 
   var result =  ac.cy() << 15; 
   console.log("cy LSHIFT 15 -> dc : " + result); 
   return result; 
 });

ac.lq = memoize( function() { 
   var result =  ac.ln() & ac.lp(); 
   console.log("ln AND lp -> lq : " + result); 
   return result; 
 });

ac.aq = memoize( function() { 
   var result =  ac.x() >> 1; 
   console.log("x RSHIFT 1 -> aq : " + result); 
   return result; 
 });

ac.gr = memoize( function() { 
   var result =  ac.gk() | ac.gq(); 
   console.log("gk OR gq -> gr : " + result); 
   return result; 
 });

ac.ky = memoize( function() { 
   var result = (~ (ac.kx() << 16)) >>> 16; 
   console.log("NOT kx -> ky : " + result); 
   return result; 
 });

ac.jj = memoize( function() { 
   var result =  ac.jg() & ac.ji(); 
   console.log("jg AND ji -> jj : " + result); 
   return result; 
 });

ac.bz = memoize( function() { 
   var result =  ac.bn() | ac.by(); 
   console.log("bn OR by -> bz : " + result); 
   return result; 
 });

ac.gf = memoize( function() { 
   var result =  ac.fl() << 1; 
   console.log("fl LSHIFT 1 -> gf : " + result); 
   return result; 
 });

ac.br = memoize( function() { 
   var result =  ac.bp() | ac.bq(); 
   console.log("bp OR bq -> br : " + result); 
   return result; 
 });

ac.hq = memoize( function() { 
   var result =  ac.he() | ac.hp(); 
   console.log("he OR hp -> hq : " + result); 
   return result; 
 });

ac.ew = memoize( function() { 
   var result =  ac.et() >> 5; 
   console.log("et RSHIFT 5 -> ew : " + result); 
   return result; 
 });

ac.iv = memoize( function() { 
   var result =  ac.iu() >> 2; 
   console.log("iu RSHIFT 2 -> iv : " + result); 
   return result; 
 });

ac.go = memoize( function() { 
   var result =  ac.gl() & ac.gm(); 
   console.log("gl AND gm -> go : " + result); 
   return result; 
 });

ac.aj = memoize( function() { 
   var result =  ac.x() | ac.ai(); 
   console.log("x OR ai -> aj : " + result); 
   return result; 
 });

ac.he = memoize( function() { 
   var result =  ac.hc() | ac.hd(); 
   console.log("hc OR hd -> he : " + result); 
   return result; 
 });

ac.lo = memoize( function() { 
   var result =  ac.lg() & ac.lm(); 
   console.log("lg AND lm -> lo : " + result); 
   return result; 
 });

ac.lj = memoize( function() { 
   var result =  ac.lh() | ac.li(); 
   console.log("lh OR li -> lj : " + result); 
   return result; 
 });

ac.du = memoize( function() { 
   var result =  ac.da() << 1; 
   console.log("da LSHIFT 1 -> du : " + result); 
   return result; 
 });

ac.fp = memoize( function() { 
   var result =  ac.fo() >> 2; 
   console.log("fo RSHIFT 2 -> fp : " + result); 
   return result; 
 });

ac.gs = memoize( function() { 
   var result =  ac.gk() & ac.gq(); 
   console.log("gk AND gq -> gs : " + result); 
   return result; 
 });

ac.bk = memoize( function() { 
   var result =  ac.bj() | ac.bi(); 
   console.log("bj OR bi -> bk : " + result); 
   return result; 
 });

ac.lr = memoize( function() { 
   var result =  ac.lf() | ac.lq(); 
   console.log("lf OR lq -> lr : " + result); 
   return result; 
 });

ac.cr = memoize( function() { 
   var result =  ac.cj() & ac.cp(); 
   console.log("cj AND cp -> cr : " + result); 
   return result; 
 });

ac.hy = memoize( function() { 
   var result =  ac.hu() << 15; 
   console.log("hu LSHIFT 15 -> hy : " + result); 
   return result; 
 });

ac.bi = memoize( function() { 
   var result =  1 & ac.bh(); 
   console.log("1 AND bh -> bi : " + result); 
   return result; 
 });

ac.fq = memoize( function() { 
   var result =  ac.fo() >> 3; 
   console.log("fo RSHIFT 3 -> fq : " + result); 
   return result; 
 });

ac.lp = memoize( function() { 
   var result = (~ (ac.lo() << 16)) >>> 16; 
   console.log("NOT lo -> lp : " + result); 
   return result; 
 });

ac.iq = memoize( function() { 
   var result =  ac.hw() << 1; 
   console.log("hw LSHIFT 1 -> iq : " + result); 
   return result; 
 });

ac.dw = memoize( function() { 
   var result =  ac.dd() >> 1; 
   console.log("dd RSHIFT 1 -> dw : " + result); 
   return result; 
 });

ac.dx = memoize( function() { 
   var result =  ac.dt() << 15; 
   console.log("dt LSHIFT 15 -> dx : " + result); 
   return result; 
 });

ac.el = memoize( function() { 
   var result =  ac.dy() & ac.ej(); 
   console.log("dy AND ej -> el : " + result); 
   return result; 
 });

ac.ar = memoize( function() { 
   var result =  ac.an() << 15; 
   console.log("an LSHIFT 15 -> ar : " + result); 
   return result; 
 });

ac.as = memoize( function() { 
   var result =  ac.aq() | ac.ar(); 
   console.log("aq OR ar -> as : " + result); 
   return result; 
 });

ac.s = memoize( function() { 
   var result =  1 & ac.r(); 
   console.log("1 AND r -> s : " + result); 
   return result; 
 });

ac.fz = memoize( function() { 
   var result =  ac.fw() & ac.fy(); 
   console.log("fw AND fy -> fz : " + result); 
   return result; 
 });

ac.in = memoize( function() { 
   var result = (~ (ac.im() << 16)) >>> 16; 
   console.log("NOT im -> in : " + result); 
   return result; 
 });

ac.ev = memoize( function() { 
   var result =  ac.et() >> 3; 
   console.log("et RSHIFT 3 -> ev : " + result); 
   return result; 
 });

ac.dt = memoize( function() { 
   var result =  1 & ac.ds(); 
   console.log("1 AND ds -> dt : " + result); 
   return result; 
 });

ac.ef = memoize( function() { 
   var result =  ac.ec() & ac.ee(); 
   console.log("ec AND ee -> ef : " + result); 
   return result; 
 });

ac.al = memoize( function() { 
   var result = (~ (ac.ak() << 16)) >>> 16; 
   console.log("NOT ak -> al : " + result); 
   return result; 
 });

ac.jm = memoize( function() { 
   var result =  ac.jl() | ac.jk(); 
   console.log("jl OR jk -> jm : " + result); 
   return result; 
 });

ac.eo = memoize( function() { 
   var result =  1 & ac.en(); 
   console.log("1 AND en -> eo : " + result); 
   return result; 
 });

ac.lc = memoize( function() { 
   var result =  ac.lb() | ac.la(); 
   console.log("lb OR la -> lc : " + result); 
   return result; 
 });

ac.jh = memoize( function() { 
   var result =  ac.iu() & ac.jf(); 
   console.log("iu AND jf -> jh : " + result); 
   return result; 
 });

ac.ix = memoize( function() { 
   var result =  ac.iu() >> 5; 
   console.log("iu RSHIFT 5 -> ix : " + result); 
   return result; 
 });

ac.bw = memoize( function() { 
   var result =  ac.bo() & ac.bu(); 
   console.log("bo AND bu -> bw : " + result); 
   return result; 
 });

ac.da = memoize( function() { 
   var result =  ac.cz() | ac.cy(); 
   console.log("cz OR cy -> da : " + result); 
   return result; 
 });

ac.jd = memoize( function() { 
   var result =  ac.iv() & ac.jb(); 
   console.log("iv AND jb -> jd : " + result); 
   return result; 
 });

ac.iz = memoize( function() { 
   var result =  ac.iw() & ac.ix(); 
   console.log("iw AND ix -> iz : " + result); 
   return result; 
 });

ac.ly = memoize( function() { 
   var result =  ac.lf() >> 1; 
   console.log("lf RSHIFT 1 -> ly : " + result); 
   return result; 
 });

ac.jg = memoize( function() { 
   var result =  ac.iu() | ac.jf(); 
   console.log("iu OR jf -> jg : " + result); 
   return result; 
 });

ac.dn = memoize( function() { 
   var result = (~ (ac.dm() << 16)) >>> 16; 
   console.log("NOT dm -> dn : " + result); 
   return result; 
 });

ac.lx = memoize( function() { 
   var result =  ac.lw() | ac.lv(); 
   console.log("lw OR lv -> lx : " + result); 
   return result; 
 });

ac.ha = memoize( function() { 
   var result =  ac.gg() << 1; 
   console.log("gg LSHIFT 1 -> ha : " + result); 
   return result; 
 });

ac.lu = memoize( function() { 
   var result =  ac.lr() & ac.lt(); 
   console.log("lr AND lt -> lu : " + result); 
   return result; 
 });

ac.fo = memoize( function() { 
   var result =  ac.fm() | ac.fn(); 
   console.log("fm OR fn -> fo : " + result); 
   return result; 
 });

ac.hg = memoize( function() { 
   var result =  ac.he() >> 3; 
   console.log("he RSHIFT 3 -> hg : " + result); 
   return result; 
 });

ac.am = memoize( function() { 
   var result =  ac.aj() & ac.al(); 
   console.log("aj AND al -> am : " + result); 
   return result; 
 });

ac.la = memoize( function() { 
   var result =  1 & ac.kz(); 
   console.log("1 AND kz -> la : " + result); 
   return result; 
 });

ac.eb = memoize( function() { 
   var result =  ac.dy() >> 5; 
   console.log("dy RSHIFT 5 -> eb : " + result); 
   return result; 
 });

ac.jf = memoize( function() { 
   var result =  ac.jc() & ac.je(); 
   console.log("jc AND je -> jf : " + result); 
   return result; 
 });

ac.cp = memoize( function() { 
   var result =  ac.cm() & ac.co(); 
   console.log("cm AND co -> cp : " + result); 
   return result; 
 });

ac.gy = memoize( function() { 
   var result =  ac.gv() & ac.gx(); 
   console.log("gv AND gx -> gy : " + result); 
   return result; 
 });

ac.ex = memoize( function() { 
   var result =  ac.ev() | ac.ew(); 
   console.log("ev OR ew -> ex : " + result); 
   return result; 
 });

ac.kc = memoize( function() { 
   var result =  ac.jp() & ac.ka(); 
   console.log("jp AND ka -> kc : " + result); 
   return result; 
 });

ac.fl = memoize( function() { 
   var result =  ac.fk() | ac.fj(); 
   console.log("fk OR fj -> fl : " + result); 
   return result; 
 });

ac.ea = memoize( function() { 
   var result =  ac.dy() >> 3; 
   console.log("dy RSHIFT 3 -> ea : " + result); 
   return result; 
 });

ac.bt = memoize( function() { 
   var result = (~ (ac.bs() << 16)) >>> 16; 
   console.log("NOT bs -> bt : " + result); 
   return result; 
 });

ac.ah = memoize( function() { 
   var result = (~ (ac.ag() << 16)) >>> 16; 
   console.log("NOT ag -> ah : " + result); 
   return result; 
 });

ac.eh = memoize( function() { 
   var result =  ac.dz() & ac.ef(); 
   console.log("dz AND ef -> eh : " + result); 
   return result; 
 });

ac.cz = memoize( function() { 
   var result =  ac.cf() << 1; 
   console.log("cf LSHIFT 1 -> cz : " + result); 
   return result; 
 });

ac.cw = memoize( function() { 
   var result = (~ (ac.cv() << 16)) >>> 16; 
   console.log("NOT cv -> cw : " + result); 
   return result; 
 });

ac.cy = memoize( function() { 
   var result =  1 & ac.cx(); 
   console.log("1 AND cx -> cy : " + result); 
   return result; 
 });

ac.dm = memoize( function() { 
   var result =  ac.de() & ac.dk(); 
   console.log("de AND dk -> dm : " + result); 
   return result; 
 });

ac.cn = memoize( function() { 
   var result =  ac.ck() & ac.cl(); 
   console.log("ck AND cl -> cn : " + result); 
   return result; 
 });

ac.aa = memoize( function() { 
   var result =  ac.x() >> 5; 
   console.log("x RSHIFT 5 -> aa : " + result); 
   return result; 
 });

ac.ep = memoize( function() { 
   var result =  ac.dv() << 1; 
   console.log("dv LSHIFT 1 -> ep : " + result); 
   return result; 
 });

ac.hf = memoize( function() { 
   var result =  ac.he() >> 2; 
   console.log("he RSHIFT 2 -> hf : " + result); 
   return result; 
 });

ac.bx = memoize( function() { 
   var result = (~ (ac.bw() << 16)) >>> 16; 
   console.log("NOT bw -> bx : " + result); 
   return result; 
 });

ac.cm = memoize( function() { 
   var result =  ac.ck() | ac.cl(); 
   console.log("ck OR cl -> cm : " + result); 
   return result; 
 });

ac.bs = memoize( function() { 
   var result =  ac.bp() & ac.bq(); 
   console.log("bp AND bq -> bs : " + result); 
   return result; 
 });

ac.be = memoize( function() { 
   var result =  ac.as() | ac.bd(); 
   console.log("as OR bd -> be : " + result); 
   return result; 
 });

ac.hr = memoize( function() { 
   var result =  ac.he() & ac.hp(); 
   console.log("he AND hp -> hr : " + result); 
   return result; 
 });

ac.ey = memoize( function() { 
   var result =  ac.ev() & ac.ew(); 
   console.log("ev AND ew -> ey : " + result); 
   return result; 
 });

ac.lv = memoize( function() { 
   var result =  1 & ac.lu(); 
   console.log("1 AND lu -> lv : " + result); 
   return result; 
 });

ac.km = memoize( function() { 
   var result =  ac.kk() >> 3; 
   console.log("kk RSHIFT 3 -> km : " + result); 
   return result; 
 });

ac.p = memoize( function() { 
   var result =  ac.b() & ac.n(); 
   console.log("b AND n -> p : " + result); 
   return result; 
 });

ac.kd = memoize( function() { 
   var result = (~ (ac.kc() << 16)) >>> 16; 
   console.log("NOT kc -> kd : " + result); 
   return result; 
 });

ac.lw = memoize( function() { 
   var result =  ac.lc() << 1; 
   console.log("lc LSHIFT 1 -> lw : " + result); 
   return result; 
 });

ac.ko = memoize( function() { 
   var result =  ac.km() | ac.kn(); 
   console.log("km OR kn -> ko : " + result); 
   return result; 
 });

ac.ig = memoize( function() { 
   var result =  ac.id() & ac.if(); 
   console.log("id AND if -> ig : " + result); 
   return result; 
 });

ac.ik = memoize( function() { 
   var result =  ac.ih() & ac.ij(); 
   console.log("ih AND ij -> ik : " + result); 
   return result; 
 });

ac.ju = memoize( function() { 
   var result =  ac.jr() & ac.js(); 
   console.log("jr AND js -> ju : " + result); 
   return result; 
 });

ac.cl = memoize( function() { 
   var result =  ac.ci() >> 5; 
   console.log("ci RSHIFT 5 -> cl : " + result); 
   return result; 
 });

ac.is = memoize( function() { 
   var result =  ac.hz() >> 1; 
   console.log("hz RSHIFT 1 -> is : " + result); 
   return result; 
 });

ac.kf = memoize( function() { 
   var result =  1 & ac.ke(); 
   console.log("1 AND ke -> kf : " + result); 
   return result; 
 });

ac.gt = memoize( function() { 
   var result = (~ (ac.gs() << 16)) >>> 16; 
   console.log("NOT gs -> gt : " + result); 
   return result; 
 });

ac.az = memoize( function() { 
   var result =  ac.aw() & ac.ay(); 
   console.log("aw AND ay -> az : " + result); 
   return result; 
 });

ac.y = memoize( function() { 
   var result =  ac.x() >> 2; 
   console.log("x RSHIFT 2 -> y : " + result); 
   return result; 
 });

ac.ae = memoize( function() { 
   var result =  ac.ab() & ac.ad(); 
   console.log("ab AND ad -> ae : " + result); 
   return result; 
 });

ac.fi = memoize( function() { 
   var result =  ac.ff() & ac.fh(); 
   console.log("ff AND fh -> fi : " + result); 
   return result; 
 });

ac.cv = memoize( function() { 
   var result =  ac.ci() & ac.ct(); 
   console.log("ci AND ct -> cv : " + result); 
   return result; 
 });

ac.fk = memoize( function() { 
   var result =  ac.eq() << 1; 
   console.log("eq LSHIFT 1 -> fk : " + result); 
   return result; 
 });

ac.gl = memoize( function() { 
   var result =  ac.gj() >> 3; 
   console.log("gj RSHIFT 3 -> gl : " + result); 
   return result; 
 });

ac.ao = memoize( function() { 
   var result =  ac.u() << 1; 
   console.log("u LSHIFT 1 -> ao : " + result); 
   return result; 
 });

ac.bc = memoize( function() { 
   var result = (~ (ac.bb() << 16)) >>> 16; 
   console.log("NOT bb -> bc : " + result); 
   return result; 
 });

ac.hk = memoize( function() { 
   var result = (~ (ac.hj() << 16)) >>> 16; 
   console.log("NOT hj -> hk : " + result); 
   return result; 
 });

ac.kz = memoize( function() { 
   var result =  ac.kw() & ac.ky(); 
   console.log("kw AND ky -> kz : " + result); 
   return result; 
 });

ac.bf = memoize( function() { 
   var result =  ac.as() & ac.bd(); 
   console.log("as AND bd -> bf : " + result); 
   return result; 
 });

ac.dy = memoize( function() { 
   var result =  ac.dw() | ac.dx(); 
   console.log("dw OR dx -> dy : " + result); 
   return result; 
 });

ac.bu = memoize( function() { 
   var result =  ac.br() & ac.bt(); 
   console.log("br AND bt -> bu : " + result); 
   return result; 
 });

ac.kx = memoize( function() { 
   var result =  ac.kk() & ac.kv(); 
   console.log("kk AND kv -> kx : " + result); 
   return result; 
 });

ac.eq = memoize( function() { 
   var result =  ac.ep() | ac.eo(); 
   console.log("ep OR eo -> eq : " + result); 
   return result; 
 });

ac.hx = memoize( function() { 
   var result =  ac.he() >> 1; 
   console.log("he RSHIFT 1 -> hx : " + result); 
   return result; 
 });

ac.kk = memoize( function() { 
   var result =  ac.ki() | ac.kj(); 
   console.log("ki OR kj -> kk : " + result); 
   return result; 
 });

ac.jv = memoize( function() { 
   var result = (~ (ac.ju() << 16)) >>> 16; 
   console.log("NOT ju -> jv : " + result); 
   return result; 
 });

ac.en = memoize( function() { 
   var result =  ac.ek() & ac.em(); 
   console.log("ek AND em -> en : " + result); 
   return result; 
 });

ac.kn = memoize( function() { 
   var result =  ac.kk() >> 5; 
   console.log("kk RSHIFT 5 -> kn : " + result); 
   return result; 
 });

ac.ei = memoize( function() { 
   var result = (~ (ac.eh() << 16)) >>> 16; 
   console.log("NOT eh -> ei : " + result); 
   return result; 
 });

ac.hz = memoize( function() { 
   var result =  ac.hx() | ac.hy(); 
   console.log("hx OR hy -> hz : " + result); 
   return result; 
 });

ac.ec = memoize( function() { 
   var result =  ac.ea() | ac.eb(); 
   console.log("ea OR eb -> ec : " + result); 
   return result; 
 });

ac.w = memoize( function() { 
   var result =  ac.s() << 15; 
   console.log("s LSHIFT 15 -> w : " + result); 
   return result; 
 });

ac.gh = memoize( function() { 
   var result =  ac.fo() >> 1; 
   console.log("fo RSHIFT 1 -> gh : " + result); 
   return result; 
 });

ac.kw = memoize( function() { 
   var result =  ac.kk() | ac.kv(); 
   console.log("kk OR kv -> kw : " + result); 
   return result; 
 });

ac.bq = memoize( function() { 
   var result =  ac.bn() >> 5; 
   console.log("bn RSHIFT 5 -> bq : " + result); 
   return result; 
 });

ac.ee = memoize( function() { 
   var result = (~ (ac.ed() << 16)) >>> 16; 
   console.log("NOT ed -> ee : " + result); 
   return result; 
 });

ac.hu = memoize( function() { 
   var result =  1 & ac.ht(); 
   console.log("1 AND ht -> hu : " + result); 
   return result; 
 });

ac.cx = memoize( function() { 
   var result =  ac.cu() & ac.cw(); 
   console.log("cu AND cw -> cx : " + result); 
   return result; 
 });

ac.f = memoize( function() { 
   var result =  ac.b() >> 5; 
   console.log("b RSHIFT 5 -> f : " + result); 
   return result; 
 });

ac.kt = memoize( function() { 
   var result =  ac.kl() & ac.kr(); 
   console.log("kl AND kr -> kt : " + result); 
   return result; 
 });

ac.ir = memoize( function() { 
   var result =  ac.iq() | ac.ip(); 
   console.log("iq OR ip -> ir : " + result); 
   return result; 
 });

ac.cj = memoize( function() { 
   var result =  ac.ci() >> 2; 
   console.log("ci RSHIFT 2 -> cj : " + result); 
   return result; 
 });

ac.cq = memoize( function() { 
   var result =  ac.cj() | ac.cp(); 
   console.log("cj OR cp -> cq : " + result); 
   return result; 
 });

ac.r = memoize( function() { 
   var result =  ac.o() & ac.q(); 
   console.log("o AND q -> r : " + result); 
   return result; 
 });

ac.dg = memoize( function() { 
   var result =  ac.dd() >> 5; 
   console.log("dd RSHIFT 5 -> dg : " + result); 
   return result; 
 });

ac.d = memoize( function() { 
   var result =  ac.b() >> 2; 
   console.log("b RSHIFT 2 -> d : " + result); 
   return result; 
 });

ac.kv = memoize( function() { 
   var result =  ac.ks() & ac.ku(); 
   console.log("ks AND ku -> kv : " + result); 
   return result; 
 });

ac.e = memoize( function() { 
   var result =  ac.b() >> 3; 
   console.log("b RSHIFT 3 -> e : " + result); 
   return result; 
 });

ac.k = memoize( function() { 
   var result =  ac.d() | ac.j(); 
   console.log("d OR j -> k : " + result); 
   return result; 
 });

ac.q = memoize( function() { 
   var result = (~ (ac.p() << 16)) >>> 16; 
   console.log("NOT p -> q : " + result); 
   return result; 
 });

ac.cs = memoize( function() { 
   var result = (~ (ac.cr() << 16)) >>> 16; 
   console.log("NOT cr -> cs : " + result); 
   return result; 
 });

ac.dv = memoize( function() { 
   var result =  ac.du() | ac.dt(); 
   console.log("du OR dt -> dv : " + result); 
   return result; 
 });

ac.kj = memoize( function() { 
   var result =  ac.kf() << 15; 
   console.log("kf LSHIFT 15 -> kj : " + result); 
   return result; 
 });

ac.ad = memoize( function() { 
   var result = (~ (ac.ac() << 16)) >>> 16; 
   console.log("NOT ac -> ad : " + result); 
   return result; 
 });

ac.fr = memoize( function() { 
   var result =  ac.fo() >> 5; 
   console.log("fo RSHIFT 5 -> fr : " + result); 
   return result; 
 });

ac.il = memoize( function() { 
   var result =  ac.hz() | ac.ik(); 
   console.log("hz OR ik -> il : " + result); 
   return result; 
 });

ac.ka = memoize( function() { 
   var result =  ac.jx() & ac.jz(); 
   console.log("jx AND jz -> ka : " + result); 
   return result; 
 });

ac.gj = memoize( function() { 
   var result =  ac.gh() | ac.gi(); 
   console.log("gh OR gi -> gj : " + result); 
   return result; 
 });

ac.ld = memoize( function() { 
   var result =  ac.kk() >> 1; 
   console.log("kk RSHIFT 1 -> ld : " + result); 
   return result; 
 });

ac.ic = memoize( function() { 
   var result =  ac.hz() >> 5; 
   console.log("hz RSHIFT 5 -> ic : " + result); 
   return result; 
 });

ac.at = memoize( function() { 
   var result =  ac.as() >> 2; 
   console.log("as RSHIFT 2 -> at : " + result); 
   return result; 
 });

ac.jz = memoize( function() { 
   var result = (~ (ac.jy() << 16)) >>> 16; 
   console.log("NOT jy -> jz : " + result); 
   return result; 
 });

ac.an = memoize( function() { 
   var result =  1 & ac.am(); 
   console.log("1 AND am -> an : " + result); 
   return result; 
 });

ac.cu = memoize( function() { 
   var result =  ac.ci() | ac.ct(); 
   console.log("ci OR ct -> cu : " + result); 
   return result; 
 });

ac.hj = memoize( function() { 
   var result =  ac.hg() & ac.hh(); 
   console.log("hg AND hh -> hj : " + result); 
   return result; 
 });

ac.jx = memoize( function() { 
   var result =  ac.jq() | ac.jw(); 
   console.log("jq OR jw -> jx : " + result); 
   return result; 
 });

ac.x = memoize( function() { 
   var result =  ac.v() | ac.w(); 
   console.log("v OR w -> x : " + result); 
   return result; 
 });

ac.le = memoize( function() { 
   var result =  ac.la() << 15; 
   console.log("la LSHIFT 15 -> le : " + result); 
   return result; 
 });

ac.dk = memoize( function() { 
   var result =  ac.dh() & ac.dj(); 
   console.log("dh AND dj -> dk : " + result); 
   return result; 
 });

ac.ds = memoize( function() { 
   var result =  ac.dp() & ac.dr(); 
   console.log("dp AND dr -> ds : " + result); 
   return result; 
 });

ac.jy = memoize( function() { 
   var result =  ac.jq() & ac.jw(); 
   console.log("jq AND jw -> jy : " + result); 
   return result; 
 });

ac.aw = memoize( function() { 
   var result =  ac.au() | ac.av(); 
   console.log("au OR av -> aw : " + result); 
   return result; 
 });

ac.bg = memoize( function() { 
   var result = (~ (ac.bf() << 16)) >>> 16; 
   console.log("NOT bf -> bg : " + result); 
   return result; 
 });

ac.ab = memoize( function() { 
   var result =  ac.z() | ac.aa(); 
   console.log("z OR aa -> ab : " + result); 
   return result; 
 });

ac.gd = memoize( function() { 
   var result =  ac.ga() & ac.gc(); 
   console.log("ga AND gc -> gd : " + result); 
   return result; 
 });

ac.im = memoize( function() { 
   var result =  ac.hz() & ac.ik(); 
   console.log("hz AND ik -> im : " + result); 
   return result; 
 });

ac.jw = memoize( function() { 
   var result =  ac.jt() & ac.jv(); 
   console.log("jt AND jv -> jw : " + result); 
   return result; 
 });

ac.ac = memoize( function() { 
   var result =  ac.z() & ac.aa(); 
   console.log("z AND aa -> ac : " + result); 
   return result; 
 });

ac.jt = memoize( function() { 
   var result =  ac.jr() | ac.js(); 
   console.log("jr OR js -> jt : " + result); 
   return result; 
 });

ac.hv = memoize( function() { 
   var result =  ac.hb() << 1; 
   console.log("hb LSHIFT 1 -> hv : " + result); 
   return result; 
 });

ac.hm = memoize( function() { 
   var result =  ac.hf() | ac.hl(); 
   console.log("hf OR hl -> hm : " + result); 
   return result; 
 });

ac.id = memoize( function() { 
   var result =  ac.ib() | ac.ic(); 
   console.log("ib OR ic -> id : " + result); 
   return result; 
 });

ac.fs = memoize( function() { 
   var result =  ac.fq() | ac.fr(); 
   console.log("fq OR fr -> fs : " + result); 
   return result; 
 });

ac.ct = memoize( function() { 
   var result =  ac.cq() & ac.cs(); 
   console.log("cq AND cs -> ct : " + result); 
   return result; 
 });

ac.ih = memoize( function() { 
   var result =  ac.ia() | ac.ig(); 
   console.log("ia OR ig -> ih : " + result); 
   return result; 
 });

ac.dp = memoize( function() { 
   var result =  ac.dd() | ac.do(); 
   console.log("dd OR do -> dp : " + result); 
   return result; 
 });

ac.l = memoize( function() { 
   var result =  ac.d() & ac.j(); 
   console.log("d AND j -> l : " + result); 
   return result; 
 });

ac.ie = memoize( function() { 
   var result =  ac.ib() & ac.ic(); 
   console.log("ib AND ic -> ie : " + result); 
   return result; 
 });

ac.au = memoize( function() { 
   var result =  ac.as() >> 3; 
   console.log("as RSHIFT 3 -> au : " + result); 
   return result; 
 });

ac.bh = memoize( function() { 
   var result =  ac.be() & ac.bg(); 
   console.log("be AND bg -> bh : " + result); 
   return result; 
 });

ac.dq = memoize( function() { 
   var result =  ac.dd() & ac.do(); 
   console.log("dd AND do -> dq : " + result); 
   return result; 
 });

ac.m = memoize( function() { 
   var result = (~ (ac.l() << 16)) >>> 16; 
   console.log("NOT l -> m : " + result); 
   return result; 
 });

ac.ge = memoize( function() { 
   var result =  1 & ac.gd(); 
   console.log("1 AND gd -> ge : " + result); 
   return result; 
 });

ac.ag = memoize( function() { 
   var result =  ac.y() & ac.ae(); 
   console.log("y AND ae -> ag : " + result); 
   return result; 
 });

ac.gb = memoize( function() { 
   var result =  ac.fo() & ac.fz(); 
   console.log("fo AND fz -> gb : " + result); 
   return result; 
 });

ac.if = memoize( function() { 
   var result = (~ (ac.ie() << 16)) >>> 16; 
   console.log("NOT ie -> if : " + result); 
   return result; 
 });

ac.h = memoize( function() { 
   var result =  ac.e() & ac.f(); 
   console.log("e AND f -> h : " + result); 
   return result; 
 });

ac.z = memoize( function() { 
   var result =  ac.x() >> 3; 
   console.log("x RSHIFT 3 -> z : " + result); 
   return result; 
 });

ac.af = memoize( function() { 
   var result =  ac.y() | ac.ae(); 
   console.log("y OR ae -> af : " + result); 
   return result; 
 });

ac.hn = memoize( function() { 
   var result =  ac.hf() & ac.hl(); 
   console.log("hf AND hl -> hn : " + result); 
   return result; 
 });

ac.i = memoize( function() { 
   var result = (~ (ac.h() << 16)) >>> 16; 
   console.log("NOT h -> i : " + result); 
   return result; 
 });

ac.ho = memoize( function() { 
   var result = (~ (ac.hn() << 16)) >>> 16; 
   console.log("NOT hn -> ho : " + result); 
   return result; 
 });

ac.hh = memoize( function() { 
   var result =  ac.he() >> 5; 
   console.log("he RSHIFT 5 -> hh : " + result); 
   return result; 
 });


console.log(ac.a());
