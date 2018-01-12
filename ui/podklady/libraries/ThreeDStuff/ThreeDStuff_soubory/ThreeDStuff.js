  var QlrH3C1_bAE_ajjtEm31jA_aA = {Name:{Name:"ThreeDStuff",FullName:"ThreeDStuff, Version\x3d1.0.0.0, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ThreeDStuff.js.Isometric
  function e5_bcs1vbEzGAi7zZIoF3xw(){};
  e5_bcs1vbEzGAi7zZIoF3xw.TypeName = "Isometric";
  e5_bcs1vbEzGAi7zZIoF3xw.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  e5_bcs1vbEzGAi7zZIoF3xw.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"A grid of isometric tiles.",FlashMovie:null}}];};
  var type$e5_bcs1vbEzGAi7zZIoF3xw = e5_bcs1vbEzGAi7zZIoF3xw.prototype;
  var AQAABFvbEzGAi7zZIoF3xw = null;
  var AgAABFvbEzGAi7zZIoF3xw = null;
  var AwAABFvbEzGAi7zZIoF3xw = null;
  var basector$e5_bcs1vbEzGAi7zZIoF3xw = $ctor$(null, null, type$e5_bcs1vbEzGAi7zZIoF3xw);
  // ThreeDStuff.js.Isometric..ctor
  type$e5_bcs1vbEzGAi7zZIoF3xw.AQAABlvbEzGAi7zZIoF3xw = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;

    o = null;
    p = null;
    q = /* DOMCreateType */new Ocd2AmcoAzW7munX7hJ_bTQ();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());

    if (!(AQAABFvbEzGAi7zZIoF3xw))
    {
      AQAABFvbEzGAi7zZIoF3xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'AwAABlvbEzGAi7zZIoF3xw');
    }

    q.GetCenter = AQAABFvbEzGAi7zZIoF3xw;
    q.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    q.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    q.RotationB = 0.5;
    q.Zoom = 1;
    q.Dot = 4;
    q.MapSize = new ctor$bwAABgifgTqq_bq_as554zaA(-8, 16, -8, 16);
    q.bg_size = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * q.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * q.Zoom)));
    q.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(q, '__ctor_b__9');
    q.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(q, '__ctor_b__a');
    b = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(q, '__ctor_b__c');
    q.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    c = PQYABnNsjTy5GU2G_aZC6tw();
    d = NwYABnNsjTy5GU2G_aZC6tw(41, 0, 0);
    e = NwYABnNsjTy5GU2G_aZC6tw(42, 0, 0);
    f = NwYABnNsjTy5GU2G_aZC6tw(51, 0, 0);
    q.TileColorRoad1 = NwYABnNsjTy5GU2G_aZC6tw(61, 0, 0);
    q.TileColorRoad2 = NwYABnNsjTy5GU2G_aZC6tw(62, 0, 0);
    q.TileColorRoad3 = NwYABnNsjTy5GU2G_aZC6tw(63, 0, 0);
    r = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    q.data = r;
    g = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(q, '__ctor_b__d');
    q.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(q.data, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(q.MapSize.get_Left(), q.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__f'), new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(q, '__ctor_b__10'))));
    h = new ctor$RgcABgrHJTi_bnqNd49nRag(q, '__ctor_b__11');
    q.bg_update_WithHeight = new ctor$TgcABqJN3D63oi2LfW_bDnQ(q, '__ctor_b__14');
    i = new ctor$SgcABoyOgDytaxFtvtvirA(q, '__ctor_b__15');
    h.Invoke(5, d);
    h.Invoke(5, e);
    h.Invoke(17, f);
    h.Invoke(2, q.TileColorRoad1);
    h.Invoke(2, q.TileColorRoad2);
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__1e'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(q, '__ctor_b__1f'));
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__21'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(q, '__ctor_b__22'));
    j = /* DOMCreateType */new mKrzN8o_b0DK3kbUosN3awQ();
    j.CS___8__locals38 = q;

    if (!o)
    {
      o = new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__24');
    }

    j.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, o));
    q.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(j, '__ctor_b__25')));

    if (!(AgAABFvbEzGAi7zZIoF3xw))
    {
      AgAABFvbEzGAi7zZIoF3xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'BAAABlvbEzGAi7zZIoF3xw');
    }


    if (!(AgAABFvbEzGAi7zZIoF3xw))
    {
      AgAABFvbEzGAi7zZIoF3xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'BAAABlvbEzGAi7zZIoF3xw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__27')), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__28')), AgAABFvbEzGAi7zZIoF3xw);

    if (!(AgAABFvbEzGAi7zZIoF3xw))
    {
      AgAABFvbEzGAi7zZIoF3xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'BAAABlvbEzGAi7zZIoF3xw');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__27')), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__28')), AgAABFvbEzGAi7zZIoF3xw), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__2b'));

    if (!(AwAABFvbEzGAi7zZIoF3xw))
    {
      AwAABFvbEzGAi7zZIoF3xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'BQAABlvbEzGAi7zZIoF3xw');
    }

    s = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__27')), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__28')), AgAABFvbEzGAi7zZIoF3xw), new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__2b')), AwAABFvbEzGAi7zZIoF3xw).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      k = null;
      l = /* DOMCreateType */new tlI0_aZB0QzmAgFw6Ex1r_bQ();
      l.CS___8__locals38 = q;
      while (s.qAAABu7N0xGI6ACQJ1TEOg())
      {
        l.v = s.xQAABrYmRzSu_anO2U_bk1MA();

        if (!k)
        {
          k = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__2d');
        }

        q.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(LgAABne06jm5i7qNIX6ZzA(q.data, k), l.v.get_c()));
      }
    }
    finally
    {
      t = (s == null);

      if (!t)
      {
        s.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    m = /* DOMCreateType */new cf8vxa1g0jenPRfSWxrTsg();
    m.CS___8__locals38 = q;

    if (!p)
    {
      p = new ctor$BQAABkGjlTKl11x0SjZu8g(q, '__ctor_b__2e');
    }

    m.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, p));
    q.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(q.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__2f')));
    i.Invoke(q.TileColor, 'assets\u002fThreeDStuff\u002f0.png', 32);
    i.Invoke(q.TileColorRoad1, 'assets\u002fThreeDStuff\u002fr1.png', 32);
    i.Invoke(q.TileColorRoad2, 'assets\u002fThreeDStuff\u002fr2.png', 32);
    i.Invoke(q.TileColorRoad3, 'assets\u002fThreeDStuff\u002fr3.png', 32);
    i.Invoke(d, 'assets\u002fThreeDStuff\u002fh1.png', 52);
    i.Invoke(e, 'assets\u002fThreeDStuff\u002fh2.png', 96);
    i.Invoke(f, 'assets\u002fThreeDStuff\u002ft1.png', 65);
    n = new ctor$AQAABnzJ4DW0TmzxD3LiJg(q, '__ctor_b__31');
  };
  var ctor$AQAABlvbEzGAi7zZIoF3xw = e5_bcs1vbEzGAi7zZIoF3xw.ctor = $ctor$(null, 'AQAABlvbEzGAi7zZIoF3xw', type$e5_bcs1vbEzGAi7zZIoF3xw);

  // ThreeDStuff.js.Isometric.<.ctor>b__8
  function AwAABlvbEzGAi7zZIoF3xw()
  {
    var b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = (EwQABrc98zqfJJxE_at_bcTw(window) / 2);
    b.Y = (EgQABrc98zqfJJxE_at_bcTw(window) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.Isometric.<.ctor>b__2a
  function BAAABlvbEzGAi7zZIoF3xw(b)
  {
    return !(b.get_b() == null);
  };

  // ThreeDStuff.js.Isometric.<.ctor>b__2c
  function BQAABlvbEzGAi7zZIoF3xw(b)
  {
    return new ctor$rwAABgLxWzeofSY5srsjIQ(b.get___h__TransparentIdentifier4().get_a(), b.get___h__TransparentIdentifier4().get_b(), b.get_c());
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput
  function l_bAMjxh2DT_adBFutKnrrVw(){};
  l_bAMjxh2DT_adBFutKnrrVw.TypeName = "IsometricWithNatureBoyAndInput";
  l_bAMjxh2DT_adBFutKnrrVw.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  l_bAMjxh2DT_adBFutKnrrVw.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"An isometric world with dudes whom you can move around.",FlashMovie:"http://www.youtube.com/watch?v\x3dkCgCSMpRN40"}}];};
  var type$l_bAMjxh2DT_adBFutKnrrVw = l_bAMjxh2DT_adBFutKnrrVw.prototype;
  var BAAABBh2DT_adBFutKnrrVw = null;
  var BQAABBh2DT_adBFutKnrrVw = null;
  var basector$l_bAMjxh2DT_adBFutKnrrVw = $ctor$(null, null, type$l_bAMjxh2DT_adBFutKnrrVw);
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput..ctor
  type$l_bAMjxh2DT_adBFutKnrrVw.BgAABhh2DT_adBFutKnrrVw = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o;

    j = null;
    k = null;
    l = /* DOMCreateType */new _04on_bqDwJTahmdZkaqeilQ();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    l.info_text = 'This example demostrates how would an isometric javascript game look like in your browser. You can see landscape from <i>Transport Tycoon<\u002fi> and the characters are from <i>Wolfenstein 3D<\u002fi> and <i>Doom<\u002fi>.';
    l.info = JgcABjQynDSNZ0PXHA8v4w('loading...');
    pgAABgnDWDenzWX06iPvnw(l.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    l.info.style.height = 'auto';
    l.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    l.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    l.RotationB = 0.5;
    l.Zoom = 1;
    l.Dot = 4;
    l.MapSize = new ctor$bwAABgifgTqq_bq_as554zaA(-12, 24, -12, 24);
    l.bg_size = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * l.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * l.Zoom)));
    l.GetCenter = new ctor$AQAABnzJ4DW0TmzxD3LiJg(l, '__ctor_b__14');
    l.arena = new ctor$EgAABowIkzCWm4XSKspi6g();
    kAUABuKCPTKGRKjkr5dWuA(l.arena.Control);
    l.arena.Layers.Canvas.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(NwYABnNsjTy5GU2G_aZC6tw(0, 0, 0));
    l.arena.CgAABtH5gzGOe58n5cZeTA(zgMABkJB5jyxJFE8zncqBQ(0, 0, EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window)));
    l.arena.CQAABtH5gzGOe58n5cZeTA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(IwAABuTOYTqpYs14xNZZlQ((l.MapSize.get_Width() * l.bg_size.get_w())), IwAABuTOYTqpYs14xNZZlQ(((l.MapSize.get_Height() + 1) * l.bg_size.get_h()))));
    CQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(l, '__ctor_b__15'));
    kQUABuKCPTKGRKjkr5dWuA(l.info, l.arena.Layers.Info);
    l.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__16');
    l.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(l, '__ctor_b__17');
    b = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__19');
    l.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    c = PQYABnNsjTy5GU2G_aZC6tw();
    l.TileColorHouse1 = NwYABnNsjTy5GU2G_aZC6tw(41, 0, 0);
    l.TileColorHouse2 = NwYABnNsjTy5GU2G_aZC6tw(42, 0, 0);
    l.TileColorTree1 = NwYABnNsjTy5GU2G_aZC6tw(51, 0, 0);
    l.TileColorRoad1 = NwYABnNsjTy5GU2G_aZC6tw(61, 0, 0);
    l.TileColorRoad2 = NwYABnNsjTy5GU2G_aZC6tw(62, 0, 0);
    l.TileColorRoad3 = NwYABnNsjTy5GU2G_aZC6tw(63, 0, 0);
    m = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    l.data = m;
    d = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__1a');
    l.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(l.data, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(l.MapSize.get_Left(), l.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__1c'), new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__1d'))));
    e = new ctor$RgcABgrHJTi_bnqNd49nRag(l, '__ctor_b__1e');
    l.bg_update_WithHeight = new ctor$TgcABqJN3D63oi2LfW_bDnQ(l, '__ctor_b__21');
    l.SpawnItems = new ctor$SgcABoyOgDytaxFtvtvirA(l, '__ctor_b__22');
    e.Invoke(5, l.TileColorHouse1);
    e.Invoke(5, l.TileColorHouse2);
    e.Invoke(17, l.TileColorTree1);
    e.Invoke(2, l.TileColorRoad1);
    e.Invoke(2, l.TileColorRoad2);
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__2b'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(l, '__ctor_b__2c'));
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__2e'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(l, '__ctor_b__2f'));
    f = /* DOMCreateType */new _3aOdV4elyzuw96v3e3pVnQ();
    f.CS___8__locals71 = l;

    if (!j)
    {
      j = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__31');
    }

    f.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, j));
    l.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__32')));

    if (!(BAAABBh2DT_adBFutKnrrVw))
    {
      BAAABBh2DT_adBFutKnrrVw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'CAAABhh2DT_adBFutKnrrVw');
    }


    if (!(BAAABBh2DT_adBFutKnrrVw))
    {
      BAAABBh2DT_adBFutKnrrVw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'CAAABhh2DT_adBFutKnrrVw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__34')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__35')), BAAABBh2DT_adBFutKnrrVw);

    if (!(BAAABBh2DT_adBFutKnrrVw))
    {
      BAAABBh2DT_adBFutKnrrVw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'CAAABhh2DT_adBFutKnrrVw');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__34')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__35')), BAAABBh2DT_adBFutKnrrVw), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__38'));

    if (!(BQAABBh2DT_adBFutKnrrVw))
    {
      BQAABBh2DT_adBFutKnrrVw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'CQAABhh2DT_adBFutKnrrVw');
    }

    n = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__34')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__35')), BAAABBh2DT_adBFutKnrrVw), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__38')), BQAABBh2DT_adBFutKnrrVw).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      g = null;
      h = /* DOMCreateType */new X3g1y3omHzCZXzauyTv_aPA();
      h.CS___8__locals71 = l;
      while (n.qAAABu7N0xGI6ACQJ1TEOg())
      {
        h.v = n.xQAABrYmRzSu_anO2U_bk1MA();

        if (!g)
        {
          g = new ctor$BQAABkGjlTKl11x0SjZu8g(h, '__ctor_b__3a');
        }

        l.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(LgAABne06jm5i7qNIX6ZzA(l.data, g), h.v.get_c()));
      }
    }
    finally
    {
      o = (n == null);

      if (!o)
      {
        n.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    i = /* DOMCreateType */new MNOHU5Uz_aDCZlYv3XL_b5dg();
    i.CS___8__locals71 = l;

    if (!k)
    {
      k = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__3b');
    }

    i.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, k));
    l.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(i, '__ctor_b__3c')));
    OQAABgAjajq2ygojxk6uUQ(l.info, 'Loading items...');
    lAQABtY33j68H_aZQYc4FRw(new ctor$ewMABju_bQzuieaLNynM0gA(l, '__ctor_b__3e'));
  };
  var ctor$BgAABhh2DT_adBFutKnrrVw = l_bAMjxh2DT_adBFutKnrrVw.ctor = $ctor$(null, 'BgAABhh2DT_adBFutKnrrVw', type$l_bAMjxh2DT_adBFutKnrrVw);

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput.<.ctor>b__37
  function CAAABhh2DT_adBFutKnrrVw(b)
  {
    return !(b.get_b() == null);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput.<.ctor>b__39
  function CQAABhh2DT_adBFutKnrrVw(b)
  {
    return new ctor$rwAABgLxWzeofSY5srsjIQ(b.get___h__TransparentIdentifier4().get_a(), b.get___h__TransparentIdentifier4().get_b(), b.get_c());
  };

  // ThreeDStuff.js.Extensions.ToRadians
  function MgAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = MwAABuTOYTqpYs14xNZZlQ(b);
    return c;
  };

  // ThreeDStuff.js.Extensions.ToInt32
  function IwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = gAYABlp1gTixwdv_axCXc_aQ(b);
    return c;
  };

  // ThreeDStuff.js.Extensions.ForEachAtInterval
  function CgAABuTOYTqpYs14xNZZlQ(b, c, d, e)
  {
    var f, g;

    f = /* DOMCreateType */new _4x_aeiLDmHDuhidHiG5S0mQ();
    f.h = d;
    f.done = e;
    f.x = b.NgEABnMeWzaNooAKOmFm5g();
    f.t = null;
    f.dispose = new ctor$QgcABmsdnzuyVw4sufJzAw(f, '_ForEachAtInterval_b__0');
    f.t = KgAABuTOYTqpYs14xNZZlQ(c, new ctor$PgcABj6AjDWT6PYg1Srvkg(f, '_ForEachAtInterval_b__1'));
    g = f.dispose;
    return g;
  };

  // ThreeDStuff.js.Extensions.RemoveFrom
  function EgAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    c.VQMABtmlXD2_bMcNB1Zdfiw(b);
    d = b;
    return d;
  };

  // ThreeDStuff.js.Extensions.AddTo
  function EwAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    c.TgMABtmlXD2_bMcNB1Zdfiw(b);
    d = b;
    return d;
  };

  // ThreeDStuff.js.Extensions.Range
  function GwAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    d = LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(b), c);
    return d;
  };

  // ThreeDStuff.js.Extensions.ConcatSingle
  function HQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    e = [
      c
    ];
    d = KgAABne06jm5i7qNIX6ZzA(b, e);
    return d;
  };

  // ThreeDStuff.js.Extensions.ToConsole
  function NQAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    ;
    NwAABuTOYTqpYs14xNZZlQ((b+''));
    c = b;
    return c;
  };

  // ThreeDStuff.js.Extensions.ToConsole
  function NgAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    ;
    NwAABuTOYTqpYs14xNZZlQ(_4AQABpT92DaiMvTduyyLZQ(c, (b+'')));
    d = b;
    return d;
  };

  // ThreeDStuff.js.Extensions.Swap
  function PAAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f;

    e = /* DOMCreateType */new _2CSXGj4kVzOJlEaHD5n2wQ();
    e.e = b;
    e.h = d;
    f = new ctor$iAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_Swap_b__1f'), IgAABuTOYTqpYs14xNZZlQ(c), c);
    return f;
  };

  // ThreeDStuff.js.Extensions.WithArc
  function CwAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f, g;

    e = (ewYABlp1gTixwdv_axCXc_aQ(c) * d);
    f = (fAYABlp1gTixwdv_axCXc_aQ(c) * d);
    g = DAAABuTOYTqpYs14xNZZlQ(b, e, f);
    return g;
  };

  // ThreeDStuff.js.Extensions.WithOffset
  function DAAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f;

    e = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    e.X = (b.X + c);
    e.Y = (b.Y + d);
    f = e;
    return f;
  };

  // ThreeDStuff.js.Extensions.Abs
  function DQAABuTOYTqpYs14xNZZlQ(b)
  {
    var c, d;

    c = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    c.X = DwAABuTOYTqpYs14xNZZlQ(b.X);
    c.Y = DwAABuTOYTqpYs14xNZZlQ(b.Y);
    d = c;
    return d;
  };

  // ThreeDStuff.js.Extensions.Wrap
  function DgAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = (b.X % c);
    d.Y = (b.Y % c);
    e = d;
    return e;
  };

  // ThreeDStuff.js.Extensions.Abs
  var DwAABuTOYTqpYs14xNZZlQ = fQYABlp1gTixwdv_axCXc_aQ;
  // ThreeDStuff.js.Extensions.TeleportTo
  function EAAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    b.IQAABnS9Rj2LTMsPW407VQ(c.X, c.Y);
    d = b;
    return d;
  };

  // ThreeDStuff.js.Extensions.RangeTo
  function EQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e, f, g, h;

    g = !(b == c);

    if (!g)
    {
      h = [
        b
      ];
      f = h;
      return f;
    }

    g = !(b > c);

    if (!g)
    {
      f = EQAABuTOYTqpYs14xNZZlQ(c, b);
      return f;
    }

    d = [];

    for (e = b; !(e > c); e++)
    {
      d[(e - b)] = e;
    }

    f = d;
    return f;
  };

  // ThreeDStuff.js.Extensions.SetDialogColor
  function FAAABuTOYTqpYs14xNZZlQ(b, c)
  {
    FQAABuTOYTqpYs14xNZZlQ(b, c, 1);
  };

  // ThreeDStuff.js.Extensions.SetDialogColor
  function FQAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f, g;

    g = !d;

    if (!g)
    {
      b.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(c);
      e = PQAABuTOYTqpYs14xNZZlQ(c, 20);
      f = PQAABuTOYTqpYs14xNZZlQ(c, -20);
      b.style.borderLeft = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(e));
      b.style.borderTop = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(e));
      b.style.borderRight = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(f));
      b.style.borderBottom = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(f));
      b.style.backgroundPosition = '0px 0px';
      return;
    }

    b.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PQAABuTOYTqpYs14xNZZlQ(c, 15));
    e = PQAABuTOYTqpYs14xNZZlQ(c, 35);
    f = PQAABuTOYTqpYs14xNZZlQ(c, -5);
    b.style.borderLeft = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(f));
    b.style.borderTop = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(f));
    b.style.borderRight = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(e));
    b.style.borderBottom = _8gQABpT92DaiMvTduyyLZQ('1px solid ', NAYABnNsjTy5GU2G_aZC6tw(e));
    b.style.backgroundPosition = '1px 1px';
  };

  // ThreeDStuff.js.Extensions.ToEqualsAny
  function FgAABuTOYTqpYs14xNZZlQ(b)
  {
    var c, d;

    c = /* DOMCreateType */new tYIjJlo7lj6tIqGFXNvCFw();
    c.e = b;
    d = new ctor$BQAABkGjlTKl11x0SjZu8g(c, '_ToEqualsAny_b__7');
    return d;
  };

  // ThreeDStuff.js.Extensions.ToEquals
  function FwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c, d;

    c = /* DOMCreateType */new _3RHt7PYc2jewRU2ezmBk4A();
    c.e = b;
    d = new ctor$BQAABkGjlTKl11x0SjZu8g(c, '_ToEquals_b__d');
    return d;
  };

  // ThreeDStuff.js.Extensions.BoundTo
  function GAAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    b.X = hgAABuVHczWYsGvbmU49oA(hQAABuVHczWYsGvbmU49oA(b.X, c.Left), c.yQMABkJB5jyxJFE8zncqBQ());
    b.Y = hgAABuVHczWYsGvbmU49oA(hQAABuVHczWYsGvbmU49oA(b.Y, c.Top), c.ywMABkJB5jyxJFE8zncqBQ());
    d = b;
    return d;
  };

  // ThreeDStuff.js.Extensions.Round
  function GQAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    b.X = gAYABlp1gTixwdv_axCXc_aQ(b.X);
    b.Y = gAYABlp1gTixwdv_axCXc_aQ(b.Y);
    c = b;
    return c;
  };

  // ThreeDStuff.js.Extensions.IsDefined
  function GgAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = !_4gQABpT92DaiMvTduyyLZQ(b);
    return c;
  };

  // ThreeDStuff.js.Extensions.ToRange
  function HAAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = IwAABne06jm5i7qNIX6ZzA(0, b);
    return c;
  };

  // ThreeDStuff.js.Extensions.Times
  function HgAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;


    for (d = 0; (d < b); d++)
    {
      c.Invoke();
    }

  };

  // ThreeDStuff.js.Extensions.CreateInstance
  var HwAABuTOYTqpYs14xNZZlQ = agIABnSooDmIzsqJ4hEpXA;
  // ThreeDStuff.js.Extensions.ByChance
  function IAAABuTOYTqpYs14xNZZlQ(b)
  {
    var c, d;

    c = !(new ctor$EAcABo2LaDmnwTYyBjqFag().FAcABo2LaDmnwTYyBjqFag() > b);
    d = c;
    return d;
  };

  // ThreeDStuff.js.Extensions.Random
  function IQAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = (new ctor$EAcABo2LaDmnwTYyBjqFag().FAcABo2LaDmnwTYyBjqFag() * b);
    return c;
  };

  // ThreeDStuff.js.Extensions.Random
  function IgAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = new ctor$EAcABo2LaDmnwTYyBjqFag().EgcABo2LaDmnwTYyBjqFag(b);
    return c;
  };

  // ThreeDStuff.js.Extensions.ToDouble
  function JAAABuTOYTqpYs14xNZZlQ(b)
  {
    var c, d;

    c = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    c.X = b.X;
    c.Y = b.Y;
    d = c;
    return d;
  };

  // ThreeDStuff.js.Extensions.ToInt32
  function JQAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(JgAABuTOYTqpYs14xNZZlQ(b.X), JgAABuTOYTqpYs14xNZZlQ(b.Y));
    return c;
  };

  // ThreeDStuff.js.Extensions.ToInt32
  function JgAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = gAYABlp1gTixwdv_axCXc_aQ(b);
    return c;
  };

  // ThreeDStuff.js.Extensions.ToByte
  function JwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = (b % 256);
    return c;
  };

  // ThreeDStuff.js.Extensions.ToInt32
  function KAAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    d = (JgAABuTOYTqpYs14xNZZlQ((b / c)) * c);
    return d;
  };

  // ThreeDStuff.js.Extensions.AtTimeout
  function KQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new cmDCyZSPXjWB6S5tkyfPkQ();
    d.h = c;
    e = new ctor$iAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_AtTimeout_b__11'), b, 0);
    return e;
  };

  // ThreeDStuff.js.Extensions.AtInterval
  function KgAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new t0LLEuxyHDqJPsWKL_aYCKA();
    d.h = c;
    e = new ctor$iAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_AtInterval_b__14'), b, b);
    return e;
  };

  // ThreeDStuff.js.Extensions.GetDistance
  function KwAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = b.X;
    d.Y = b.Y;
    e = LgAABuTOYTqpYs14xNZZlQ(d, c.X, c.Y);
    return e;
  };

  // ThreeDStuff.js.Extensions.GetDistance
  function LAAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = LgAABuTOYTqpYs14xNZZlQ(b, 0, 0);
    return c;
  };

  // ThreeDStuff.js.Extensions.GetDistance
  function LQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    d = LgAABuTOYTqpYs14xNZZlQ(b, c.X, c.Y);
    return d;
  };

  // ThreeDStuff.js.Extensions.GetDistance
  function LgAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f, g;

    e = (b.X - c);
    f = (b.Y - d);
    g = fgYABlp1gTixwdv_axCXc_aQ(((e * e) + (f * f)));
    return g;
  };

  // ThreeDStuff.js.Extensions.GetRotation
  function LwAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f;

    e = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    e.X = b.X;
    e.Y = b.Y;
    f = MQAABuTOYTqpYs14xNZZlQ(e, c, d);
    return f;
  };

  // ThreeDStuff.js.Extensions.GetRotation
  function MAAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d;

    d = MQAABuTOYTqpYs14xNZZlQ(b, c.X, c.Y);
    return d;
  };

  // ThreeDStuff.js.Extensions.GetRotation
  function MQAABuTOYTqpYs14xNZZlQ(b, c, d)
  {
    var e, f, g, h, i;

    e = (b.X - c);
    f = (b.Y - d);
    i = !(e == 0);

    if (!i)
    {
      i = !(d < 0);

      if (!i)
      {
        h = 1.5707963267949;
        return h;
      }

      h = 4.71238898038469;
      return h;
    }

    g = eQYABlp1gTixwdv_axCXc_aQ((f / e));
    i = !(e < 0);

    if (!i)
    {
      g += 3.14159265358979;
    }
    else
    {
      i = !(f < 0);

      if (!i)
      {
        g += 6.28318530717959;
      }

    }

    h = g;
    return h;
  };

  // ThreeDStuff.js.Extensions.ToRadians
  function MwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = (6.28318530717959 * (b / 360));
    return c;
  };

  // ThreeDStuff.js.Extensions.ToDegrees
  function NAAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = JgAABuTOYTqpYs14xNZZlQ((360 * (b / 6.28318530717959)));
    return c;
  };

  // ThreeDStuff.js.Extensions.ToConsole
  function NwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    awQABh78uTmU7_bAOPst6lA(b);
    c = b;
    return c;
  };

  // ThreeDStuff.js.Extensions.ToConsole
  function OAAABuTOYTqpYs14xNZZlQ(b)
  {
    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('error: ', BAIABszpcz2K4r_a_alajjmQ(b)));
  };

  // ThreeDStuff.js.Extensions.Until
  function OQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new oFOvs8yWwDaKAtRFYoJhSg();
    d.c = c;
    b.hAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_Until_b__19'));
    e = b;
    return e;
  };

  // ThreeDStuff.js.Extensions.Sqrt
  var OgAABuTOYTqpYs14xNZZlQ = fgYABlp1gTixwdv_axCXc_aQ;
  // ThreeDStuff.js.Extensions.Spawn
  function OwAABuTOYTqpYs14xNZZlQ(b)
  {
    var c;

    c = /* DOMCreateType */new uitba9tGPz6lJHh1iqgljg();
    c.e = b;
    lAUABuKCPTKGRKjkr5dWuA(c.e, new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '_Spawn_b__1c'));
  };

  // ThreeDStuff.js.Extensions.AddLum
  function PQAABuTOYTqpYs14xNZZlQ(b, c)
  {
    var d, e, f;

    d = dQIABtKQCTqkPkZLKIEBZQ(JwAABuTOYTqpYs14xNZZlQ(b.R), JwAABuTOYTqpYs14xNZZlQ(b.G), JwAABuTOYTqpYs14xNZZlQ(b.B)).cwIABtKQCTqkPkZLKIEBZQ();
    d.L = JwAABuTOYTqpYs14xNZZlQ(iAAABuVHczWYsGvbmU49oA(hwAABuVHczWYsGvbmU49oA((d.L + c), 240), 0));
    e = d.cgIABtKQCTqkPkZLKIEBZQ();
    f = NwYABnNsjTy5GU2G_aZC6tw(e.R, e.G, e.B);
    return f;
  };

  // ThreeDStuff.js.IsometricRotating
  function WTq4VC_aqQD20Pfjzm0Td5w(){};
  WTq4VC_aqQD20Pfjzm0Td5w.TypeName = "IsometricRotating";
  WTq4VC_aqQD20Pfjzm0Td5w.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  WTq4VC_aqQD20Pfjzm0Td5w.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"It\'s isometric!",FlashMovie:null}},{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"Isometrically rotating dots.",FlashMovie:null}}];};
  var type$WTq4VC_aqQD20Pfjzm0Td5w = WTq4VC_aqQD20Pfjzm0Td5w.prototype;
  var CAAABC_aqQD20Pfjzm0Td5w = null;
  var CQAABC_aqQD20Pfjzm0Td5w = null;
  var CgAABC_aqQD20Pfjzm0Td5w = null;
  var basector$WTq4VC_aqQD20Pfjzm0Td5w = $ctor$(null, null, type$WTq4VC_aqQD20Pfjzm0Td5w);
  // ThreeDStuff.js.IsometricRotating..ctor
  type$WTq4VC_aqQD20Pfjzm0Td5w.PgAABi_aqQD20Pfjzm0Td5w = function ()
  {
    var a = this, b, c, d, e, f, g;

    f = /* DOMCreateType */new XrTrtN19kTOvZp0enWSE_bg();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());

    if (!(CAAABC_aqQD20Pfjzm0Td5w))
    {
      CAAABC_aqQD20Pfjzm0Td5w = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'QAAABi_aqQD20Pfjzm0Td5w');
    }

    f.GetCenter = CAAABC_aqQD20Pfjzm0Td5w;
    f.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    f.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    f.RotationB = 0.5;
    f.Zoom = 1;
    f.Dot = 4;
    f.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(f, '__ctor_b__5');
    f.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(f, '__ctor_b__6');
    f.CreateDiv = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(f, '__ctor_b__8');
    f.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    b = PQYABnNsjTy5GU2G_aZC6tw();
    g = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    c = g;

    if (!(CQAABC_aqQD20Pfjzm0Td5w))
    {
      CQAABC_aqQD20Pfjzm0Td5w = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'QQAABi_aqQD20Pfjzm0Td5w');
    }

    c = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(c, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(-4, 8), CQAABC_aqQD20Pfjzm0Td5w, new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(f, '__ctor_b__a'))));
    d = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * f.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * f.Zoom)));

    if (!(CgAABC_aqQD20Pfjzm0Td5w))
    {
      CgAABC_aqQD20Pfjzm0Td5w = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'QgAABi_aqQD20Pfjzm0Td5w');
    }

    f.points = nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(c, new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__b')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__c'))), CgAABC_aqQD20Pfjzm0Td5w);
    e = new ctor$AQAABnzJ4DW0TmzxD3LiJg(f, '__ctor_b__f');
    KgAABuTOYTqpYs14xNZZlQ(50, new ctor$PgcABj6AjDWT6PYg1Srvkg(f, '__ctor_b__10'));
  };
  var ctor$PgAABi_aqQD20Pfjzm0Td5w = WTq4VC_aqQD20Pfjzm0Td5w.ctor = $ctor$(null, 'PgAABi_aqQD20Pfjzm0Td5w', type$WTq4VC_aqQD20Pfjzm0Td5w);

  // ThreeDStuff.js.IsometricRotating.<.ctor>b__4
  function QAAABi_aqQD20Pfjzm0Td5w()
  {
    var b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = (EwQABrc98zqfJJxE_at_bcTw(window) / 2);
    b.Y = (EgQABrc98zqfJJxE_at_bcTw(window) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.IsometricRotating.<.ctor>b__9
  function QQAABi_aqQD20Pfjzm0Td5w(b)
  {
    return IwAABne06jm5i7qNIX6ZzA(-4, 8);
  };

  // ThreeDStuff.js.IsometricRotating.<.ctor>b__e
  function QgAABi_aqQD20Pfjzm0Td5w(b)
  {
    b.get_div().style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(b.get_point().get_color());
  };

  // ThreeDStuff.js.Tycoon4
  function _9Ua8mqRtPjKg0uSNiUWm9g(){};
  _9Ua8mqRtPjKg0uSNiUWm9g.TypeName = "Tycoon4";
  _9Ua8mqRtPjKg0uSNiUWm9g.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  _9Ua8mqRtPjKg0uSNiUWm9g.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"This example demostrates how would an isometric javascript game look like in your browser. You can see landscape from \x3ci\x3eTransport Tycoon\x3c/i\x3e and the characters are from \x3ci\x3eWolfenstein 3D\x3c/i\x3e and \x3ci\x3eDoom\x3c/i\x3e.",FlashMovie:null}}];};
  var type$_9Ua8mqRtPjKg0uSNiUWm9g = _9Ua8mqRtPjKg0uSNiUWm9g.prototype;
  var FgAABKRtPjKg0uSNiUWm9g = null;
  var FwAABKRtPjKg0uSNiUWm9g = null;
  var GAAABKRtPjKg0uSNiUWm9g = null;
  var GQAABKRtPjKg0uSNiUWm9g = null;
  var basector$_9Ua8mqRtPjKg0uSNiUWm9g = $ctor$(null, null, type$_9Ua8mqRtPjKg0uSNiUWm9g);
  // ThreeDStuff.js.Tycoon4..ctor
  type$_9Ua8mqRtPjKg0uSNiUWm9g.QwAABqRtPjKg0uSNiUWm9g = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k;

    i = /* DOMCreateType */new sV7_aWd0UYDeV52pcgh3CQg();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    i.info_text = PgAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$_9Ua8mqRtPjKg0uSNiUWm9g)).zQQABqOBvjOuSkQZrCdfWA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$za4hDU0xfT6ITo5F4Wz1xQ)), 0)).Description;
    i.info = JgcABjQynDSNZ0PXHA8v4w('loading...');
    pgAABgnDWDenzWX06iPvnw(i.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    i.info.style.height = 'auto';
    i.paused = 0;
    i.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    i.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    i.RotationB = 0.5;
    i.Zoom = 1;
    i.Dot = 4;
    d = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    d.Left = -8;
    d.Width = 16;
    d.Top = -8;
    d.Height = 16;
    i.MapSize = d;
    e = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    e.X = 4;
    e.Y = 4;
    i.MapMargins = e;
    i.bg_size = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * i.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * i.Zoom)));
    i.GetCenter = new ctor$AQAABnzJ4DW0TmzxD3LiJg(i, '__ctor_b__31');
    i.arena = new ctor$EgAABowIkzCWm4XSKspi6g();
    kAUABuKCPTKGRKjkr5dWuA(i.arena.Control);
    i.arena.Layers.Canvas.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(NwYABnNsjTy5GU2G_aZC6tw(0, 0, 0));
    i.arena.CQAABtH5gzGOe58n5cZeTA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(IwAABuTOYTqpYs14xNZZlQ(((i.MapSize.Width + i.MapMargins.X) * i.bg_size.get_w())), IwAABuTOYTqpYs14xNZZlQ(((i.MapSize.Height + i.MapMargins.Y) * i.bg_size.get_h()))));
    i.PauseFog = kQUABuKCPTKGRKjkr5dWuA(JQcABjQynDSNZ0PXHA8v4w(), i.arena.Layers.Info);
    i.PauseFog.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    qwAABgnDWDenzWX06iPvnw(i.PauseFog.style, 1);

    if (!(FgAABKRtPjKg0uSNiUWm9g))
    {
      FgAABKRtPjKg0uSNiUWm9g = new ctor$ewMABju_bQzuieaLNynM0gA(null, 'RQAABqRtPjKg0uSNiUWm9g');
    }

    f = new ctor$xgQABiU0xzm4hMYeH_bYOAQ(FgAABKRtPjKg0uSNiUWm9g);
    f.vAQABszZwj2ydi0fLFN2tw(1);
    i.PauseFogTween = f;
    i.PauseFogTween.uQQABszZwj2ydi0fLFN2tw(new ctor$ewMABju_bQzuieaLNynM0gA(i, '__ctor_b__33'));
    i.onresize = new ctor$QgcABmsdnzuyVw4sufJzAw(i, '__ctor_b__34');
    CQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(i, '__ctor_b__35'));
    i.onresize.Invoke();
    kQUABuKCPTKGRKjkr5dWuA(i.info, i.arena.Layers.Info);
    i.TileResources = new ctor$qQEABvLECz2BZOXJfindCA(new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f0.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f1.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f3.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f2.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f4.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f5.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f6.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr2.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr1.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr3.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr4.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr5.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002ft1.png', 65), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh1.png', 52), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh2.png', 96), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh3.png', 50), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh4.png', 53), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh5a.png', 33), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh5b.png', 40), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh5c.png', 40), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh5.png', 40));
    j = [
      i.TileResources.get_Grass(),
      i.TileResources.get_Rocks(),
      i.TileResources.get_TileSelector(),
      i.TileResources.get_RoughLand(),
      i.TileResources.get_Dirt(),
      i.TileResources.get_DirtDirtGrass(),
      i.TileResources.get_DirtGrassGrass(),
      i.TileResources.get_Track1(),
      i.TileResources.get_Road2(),
      i.TileResources.get_Road2_Track1(),
      i.TileResources.get_Road1(),
      i.TileResources.get_Road1_Road2(),
      i.TileResources.get_Tree(),
      i.TileResources.get_House1(),
      i.TileResources.get_House2(),
      i.TileResources.get_House3(),
      i.TileResources.get_House4(),
      i.TileResources.get_House5a(),
      i.TileResources.get_House5b(),
      i.TileResources.get_House5c(),
      i.TileResources.get_House5()
    ];
    b = j;
    g = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    g.Frames_Stand = AQAABsQegDePdXlnkXNNUg();
    g.Frames_Walk = AgAABsQegDePdXlnkXNNUg();
    i.MyFrames_Soldier = g;
    h = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    h.Frames_Stand = AwAABsQegDePdXlnkXNNUg();
    h.Frames_Walk = BAAABsQegDePdXlnkXNNUg();
    i.MyFrames_Imp = h;
    i.MyFrames_Bus = new ctor$LgAABr8tDDudJ3SEJYLbKw();

    if (!(FwAABKRtPjKg0uSNiUWm9g))
    {
      FwAABKRtPjKg0uSNiUWm9g = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'RgAABqRtPjKg0uSNiUWm9g');
    }


    if (!(FwAABKRtPjKg0uSNiUWm9g))
    {
      FwAABKRtPjKg0uSNiUWm9g = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'RgAABqRtPjKg0uSNiUWm9g');
    }

    LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(8), FwAABKRtPjKg0uSNiUWm9g);

    if (!(GAAABKRtPjKg0uSNiUWm9g))
    {
      GAAABKRtPjKg0uSNiUWm9g = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'RwAABqRtPjKg0uSNiUWm9g');
    }

    i.MyFrames_Bus.Frames_Stand = QQAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(8), FwAABKRtPjKg0uSNiUWm9g), GAAABKRtPjKg0uSNiUWm9g));
    k = [
      i.MyFrames_Bus.Frames_Stand
    ];
    i.MyFrames_Bus.Frames_Walk = k;

    if (!(GQAABKRtPjKg0uSNiUWm9g))
    {
      GQAABKRtPjKg0uSNiUWm9g = new ctor$QgcABmsdnzuyVw4sufJzAw(null, 'SAAABqRtPjKg0uSNiUWm9g');
    }

    i.AllImagesLoaded = GQAABKRtPjKg0uSNiUWm9g;
    i.ImagesThatAreCurrentlyLoading = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    i.LoadingSingleImageDone = new ctor$PgcABj6AjDWT6PYg1Srvkg(i, '__ctor_b__39');
    OQAABgAjajq2ygojxk6uUQ(i.info, 'Loading images...');
    i.StartLoadingSingleImage = new ctor$PgcABj6AjDWT6PYg1Srvkg(i, '__ctor_b__3a');
    c = new ctor$PgcABj6AjDWT6PYg1Srvkg(i, '__ctor_b__3c');
    c.Invoke(i.MyFrames_Soldier);
    c.Invoke(i.MyFrames_Imp);
    c.Invoke(i.MyFrames_Bus);
    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(i, '__ctor_b__40'));
    i.AllImagesLoaded = iwYABnzY4jaVovIDSMIxgQ(i.AllImagesLoaded, new ctor$QgcABmsdnzuyVw4sufJzAw(i, '__ctor_b__41'));
  };
  var ctor$QwAABqRtPjKg0uSNiUWm9g = _9Ua8mqRtPjKg0uSNiUWm9g.ctor = $ctor$(null, 'QwAABqRtPjKg0uSNiUWm9g', type$_9Ua8mqRtPjKg0uSNiUWm9g);

  // ThreeDStuff.js.Tycoon4.<.ctor>b__32
  function RQAABqRtPjKg0uSNiUWm9g()
  {
  };

  // ThreeDStuff.js.Tycoon4.<.ctor>b__36
  function RgAABqRtPjKg0uSNiUWm9g(b)
  {
    return new ctor$wgEABkCibjWvt6kvpegqXg(b, _8QQABpT92DaiMvTduyyLZQ('assets\u002fTycoon_Bus\u002f', new Number(b), '.png'));
  };

  // ThreeDStuff.js.Tycoon4.<.ctor>b__37
  function RwAABqRtPjKg0uSNiUWm9g(b)
  {
    var c, d;

    c = new ctor$LAAABnVABTKsBEu_atoOJeA();
    c.Source = b.get_src();
    c.Weight = 0.125;
    d = c;
    return d;
  };

  // ThreeDStuff.js.Tycoon4.<.ctor>b__38
  function SAAABqRtPjKg0uSNiUWm9g()
  {
  };

  // ThreeDStuff.js.Tycoon4+TileElement
  function oMTOVHNDFD_aHU01yVc_agBg(){};
  oMTOVHNDFD_aHU01yVc_agBg.TypeName = "TileElement";
  oMTOVHNDFD_aHU01yVc_agBg.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  var type$oMTOVHNDFD_aHU01yVc_agBg = oMTOVHNDFD_aHU01yVc_agBg.prototype;
  type$oMTOVHNDFD_aHU01yVc_agBg = oMTOVHNDFD_aHU01yVc_agBg.prototype =   {
    constructor: oMTOVHNDFD_aHU01yVc_agBg,
    Source: null,
    Position: null,
    Image: null,
    DirtAge: 0,
    Height: 0
  }
;
  var basector$oMTOVHNDFD_aHU01yVc_agBg = $ctor$(null, null, type$oMTOVHNDFD_aHU01yVc_agBg);
  // ThreeDStuff.js.Tycoon4+TileElement..ctor
  type$oMTOVHNDFD_aHU01yVc_agBg.SQAABnNDFD_aHU01yVc_agBg = function ()
  {
    var a = this;

  };
  var ctor$SQAABnNDFD_aHU01yVc_agBg = oMTOVHNDFD_aHU01yVc_agBg.ctor = $ctor$(null, 'SQAABnNDFD_aHU01yVc_agBg', type$oMTOVHNDFD_aHU01yVc_agBg);

  // ThreeDStuff.js.IsometricRotatingAndInput
  function z_a_bP27NDmDCQEyNatd_bw5w(){};
  z_a_bP27NDmDCQEyNatd_bw5w.TypeName = "IsometricRotatingAndInput";
  z_a_bP27NDmDCQEyNatd_bw5w.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  var type$z_a_bP27NDmDCQEyNatd_bw5w = z_a_bP27NDmDCQEyNatd_bw5w.prototype;
  var basector$z_a_bP27NDmDCQEyNatd_bw5w = $ctor$(null, null, type$z_a_bP27NDmDCQEyNatd_bw5w);
  // ThreeDStuff.js.IsometricRotatingAndInput..ctor
  type$z_a_bP27NDmDCQEyNatd_bw5w.SgAABrNDmDCQEyNatd_bw5w = function ()
  {
    var a = this;

  };
  var ctor$SgAABrNDmDCQEyNatd_bw5w = z_a_bP27NDmDCQEyNatd_bw5w.ctor = $ctor$(null, 'SgAABrNDmDCQEyNatd_bw5w', type$z_a_bP27NDmDCQEyNatd_bw5w);

  // ThreeDStuff.js.IsometricWithNatureBoy
  function U1sairr1izywrSF9lxm2xw(){};
  U1sairr1izywrSF9lxm2xw.TypeName = "IsometricWithNatureBoy";
  U1sairr1izywrSF9lxm2xw.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  U1sairr1izywrSF9lxm2xw.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"An isometric world with dudes.",FlashMovie:null}}];};
  var type$U1sairr1izywrSF9lxm2xw = U1sairr1izywrSF9lxm2xw.prototype;
  var HwAABLr1izywrSF9lxm2xw = null;
  var IAAABLr1izywrSF9lxm2xw = null;
  var IQAABLr1izywrSF9lxm2xw = null;
  var IgAABLr1izywrSF9lxm2xw = null;
  var IwAABLr1izywrSF9lxm2xw = null;
  var JAAABLr1izywrSF9lxm2xw = null;
  var JQAABLr1izywrSF9lxm2xw = null;
  var JgAABLr1izywrSF9lxm2xw = null;
  var JwAABLr1izywrSF9lxm2xw = null;
  var KAAABLr1izywrSF9lxm2xw = null;
  var KQAABLr1izywrSF9lxm2xw = null;
  var KgAABLr1izywrSF9lxm2xw = null;
  var KwAABLr1izywrSF9lxm2xw = null;
  var LAAABLr1izywrSF9lxm2xw = null;
  var LQAABLr1izywrSF9lxm2xw = null;
  var basector$U1sairr1izywrSF9lxm2xw = $ctor$(null, null, type$U1sairr1izywrSF9lxm2xw);
  // ThreeDStuff.js.IsometricWithNatureBoy..ctor
  type$U1sairr1izywrSF9lxm2xw.SwAABrr1izywrSF9lxm2xw = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    r = null;
    s = null;
    t = /* DOMCreateType */new C5_bxBHnXdjWMKAzpOMykvA();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    b = JgcABjQynDSNZ0PXHA8v4w('This example demostrates how would an isometric javascript game look like in your browser. You can see landscape from <i>Transport Tycoon<\u002fi> and the characters are from <i>Wolfenstein 3D<\u002fi> and <i>Doom<\u002fi>.');
    pgAABgnDWDenzWX06iPvnw(b.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    b.style.height = 'auto';
    kAUABuKCPTKGRKjkr5dWuA(b).style.zIndex = 10000;

    if (!(HwAABLr1izywrSF9lxm2xw))
    {
      HwAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'TQAABrr1izywrSF9lxm2xw');
    }

    t.GetCenter = HwAABLr1izywrSF9lxm2xw;
    t.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    t.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    t.RotationB = 0.5;
    t.Zoom = 1;
    t.Dot = 4;
    t.MapSize = new ctor$bwAABgifgTqq_bq_as554zaA(-8, 16, -8, 16);
    t.bg_size = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * t.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * t.Zoom)));
    t.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(t, '__ctor_b__d');
    t.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(t, '__ctor_b__e');
    c = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(t, '__ctor_b__10');
    t.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    d = PQYABnNsjTy5GU2G_aZC6tw();
    e = NwYABnNsjTy5GU2G_aZC6tw(41, 0, 0);
    f = NwYABnNsjTy5GU2G_aZC6tw(42, 0, 0);
    g = NwYABnNsjTy5GU2G_aZC6tw(51, 0, 0);
    t.TileColorRoad1 = NwYABnNsjTy5GU2G_aZC6tw(61, 0, 0);
    t.TileColorRoad2 = NwYABnNsjTy5GU2G_aZC6tw(62, 0, 0);
    t.TileColorRoad3 = NwYABnNsjTy5GU2G_aZC6tw(63, 0, 0);
    u = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    t.data = u;
    h = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(t, '__ctor_b__11');
    t.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(t.data, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(t.MapSize.get_Left(), t.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__13'), new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(t, '__ctor_b__14'))));
    i = new ctor$RgcABgrHJTi_bnqNd49nRag(t, '__ctor_b__15');
    t.bg_update_WithHeight = new ctor$TgcABqJN3D63oi2LfW_bDnQ(t, '__ctor_b__18');
    j = new ctor$SgcABoyOgDytaxFtvtvirA(t, '__ctor_b__19');
    i.Invoke(5, e);
    i.Invoke(5, f);
    i.Invoke(17, g);
    i.Invoke(2, t.TileColorRoad1);
    i.Invoke(2, t.TileColorRoad2);
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__22'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__23'));
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__25'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__26'));
    k = /* DOMCreateType */new EP8NrrWwwDWSCkQ1aiMluw();
    k.CS___8__locals67 = t;

    if (!r)
    {
      r = new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__28');
    }

    k.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, r));
    t.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__29')));

    if (!(IAAABLr1izywrSF9lxm2xw))
    {
      IAAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'TgAABrr1izywrSF9lxm2xw');
    }


    if (!(IAAABLr1izywrSF9lxm2xw))
    {
      IAAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'TgAABrr1izywrSF9lxm2xw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2b')), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2c')), IAAABLr1izywrSF9lxm2xw);

    if (!(IAAABLr1izywrSF9lxm2xw))
    {
      IAAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'TgAABrr1izywrSF9lxm2xw');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2b')), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2c')), IAAABLr1izywrSF9lxm2xw), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2f'));

    if (!(IQAABLr1izywrSF9lxm2xw))
    {
      IQAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'TwAABrr1izywrSF9lxm2xw');
    }

    v = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2b')), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2c')), IAAABLr1izywrSF9lxm2xw), new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__2f')), IQAABLr1izywrSF9lxm2xw).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      l = null;
      m = /* DOMCreateType */new Tke9028Y_bj_abtEMN4PmPyg();
      m.CS___8__locals67 = t;
      while (v.qAAABu7N0xGI6ACQJ1TEOg())
      {
        m.v = v.xQAABrYmRzSu_anO2U_bk1MA();

        if (!l)
        {
          l = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__31');
        }

        t.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(LgAABne06jm5i7qNIX6ZzA(t.data, l), m.v.get_c()));
      }
    }
    finally
    {
      w = (v == null);

      if (!w)
      {
        v.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    n = /* DOMCreateType */new qLjK4r_b01zuEFO8OMKHRqg();
    n.CS___8__locals67 = t;

    if (!s)
    {
      s = new ctor$BQAABkGjlTKl11x0SjZu8g(t, '__ctor_b__32');
    }

    n.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, s));
    t.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(t.data, new ctor$BQAABkGjlTKl11x0SjZu8g(n, '__ctor_b__33')));

    if (!(IgAABLr1izywrSF9lxm2xw))
    {
      IgAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'UAAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(t.TileColor, IgAABLr1izywrSF9lxm2xw, 32);

    if (!(IwAABLr1izywrSF9lxm2xw))
    {
      IwAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'UQAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(t.TileColorRoad1, IwAABLr1izywrSF9lxm2xw, 32);

    if (!(JAAABLr1izywrSF9lxm2xw))
    {
      JAAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'UgAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(t.TileColorRoad2, JAAABLr1izywrSF9lxm2xw, 32);

    if (!(JQAABLr1izywrSF9lxm2xw))
    {
      JQAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'UwAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(t.TileColorRoad3, JQAABLr1izywrSF9lxm2xw, 32);

    if (!(JgAABLr1izywrSF9lxm2xw))
    {
      JgAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VAAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(e, JgAABLr1izywrSF9lxm2xw, 52);

    if (!(JwAABLr1izywrSF9lxm2xw))
    {
      JwAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VQAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(f, JwAABLr1izywrSF9lxm2xw, 96);

    if (!(KAAABLr1izywrSF9lxm2xw))
    {
      KAAABLr1izywrSF9lxm2xw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VgAABrr1izywrSF9lxm2xw');
    }

    j.Invoke(g, KAAABLr1izywrSF9lxm2xw, 65);
    o = new ctor$AQAABnzJ4DW0TmzxD3LiJg(t, '__ctor_b__3c');

    if (!(KQAABLr1izywrSF9lxm2xw))
    {
      KQAABLr1izywrSF9lxm2xw = new ctor$DQAABl1a_aj69OXVnEw9Zyw(null, 'VwAABrr1izywrSF9lxm2xw');
    }

    t.SpawnLookingDude = KQAABLr1izywrSF9lxm2xw;
    p = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    p.Frames_Stand = AQAABsQegDePdXlnkXNNUg();
    p.Frames_Walk = AgAABsQegDePdXlnkXNNUg();
    t.dude = p;
    q = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    q.Frames_Stand = AwAABsQegDePdXlnkXNNUg();
    q.Frames_Walk = BAAABsQegDePdXlnkXNNUg();
    t.imp = q;
    t.loaded = 0;

    if (!(KgAABLr1izywrSF9lxm2xw))
    {
      KgAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'WAAABrr1izywrSF9lxm2xw');
    }

    t.loaded = (t.loaded + (t.dude.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(t.dude.Frames_Walk, KgAABLr1izywrSF9lxm2xw)));

    if (!(KwAABLr1izywrSF9lxm2xw))
    {
      KwAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'WQAABrr1izywrSF9lxm2xw');
    }

    t.loaded = (t.loaded + (t.imp.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(t.imp.Frames_Walk, KwAABLr1izywrSF9lxm2xw)));

    if (!(LAAABLr1izywrSF9lxm2xw))
    {
      LAAABLr1izywrSF9lxm2xw = new ctor$QgcABmsdnzuyVw4sufJzAw(null, 'WgAABrr1izywrSF9lxm2xw');
    }

    t.loaded_done = LAAABLr1izywrSF9lxm2xw;
    t.loadone = new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__42');
    nAAABuVHczWYsGvbmU49oA(t.dude.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__43'));
    nAAABuVHczWYsGvbmU49oA(t.dude.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__45'));
    nAAABuVHczWYsGvbmU49oA(t.imp.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__48'));
    nAAABuVHczWYsGvbmU49oA(t.imp.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(t, '__ctor_b__4a'));
    t.loaded_done = iwYABnzY4jaVovIDSMIxgQ(t.loaded_done, new ctor$QgcABmsdnzuyVw4sufJzAw(t, '__ctor_b__4d'));
  };
  var ctor$SwAABrr1izywrSF9lxm2xw = U1sairr1izywrSF9lxm2xw.ctor = $ctor$(null, 'SwAABrr1izywrSF9lxm2xw', type$U1sairr1izywrSF9lxm2xw);

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__c
  function TQAABrr1izywrSF9lxm2xw()
  {
    var b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = (EwQABrc98zqfJJxE_at_bcTw(window) / 2);
    b.Y = (EgQABrc98zqfJJxE_at_bcTw(window) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__2e
  function TgAABrr1izywrSF9lxm2xw(b)
  {
    return !(b.get_b() == null);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__30
  function TwAABrr1izywrSF9lxm2xw(b)
  {
    return new ctor$rwAABgLxWzeofSY5srsjIQ(b.get___h__TransparentIdentifier4().get_a(), b.get___h__TransparentIdentifier4().get_b(), b.get_c());
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__35
  function UAAABrr1izywrSF9lxm2xw()
  {
    var b, c;

    c = !IAAABuTOYTqpYs14xNZZlQ(0.05);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f1.png';
      return b;
    }

    c = !IAAABuTOYTqpYs14xNZZlQ(0.09);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f2.png';
      return b;
    }

    b = 'assets\u002fThreeDStuff\u002f0.png';
    return b;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__36
  function UQAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002fr1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__37
  function UgAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002fr2.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__38
  function UwAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002fr3.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__39
  function VAAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002fh1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__3a
  function VQAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002fh2.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__3b
  function VgAABrr1izywrSF9lxm2xw()
  {
    return 'assets\u002fThreeDStuff\u002ft1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__3d
  function VwAABrr1izywrSF9lxm2xw(b, c, d)
  {
    var e, f, g;

    f = new ctor$RQAABvWf_aTisnHwd9OZ7jQ();
    f.OwAABvWf_aTisnHwd9OZ7jQ(b);
    e = f;
    e.AnimationInfo.Frames_Stand = b;

    if (!(LQAABLr1izywrSF9lxm2xw))
    {
      LQAABLr1izywrSF9lxm2xw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'WwAABrr1izywrSF9lxm2xw');
    }

    e.Zoom.DynamicZoomFunc = LQAABLr1izywrSF9lxm2xw;
    e.Zoom.WwAABuqx2zmaq5bgaWr1zw(1);
    e.SgAABvWf_aTisnHwd9OZ7jQ(48, 72);
    e.IQAABnS9Rj2LTMsPW407VQ(c, d);
    kAUABuKCPTKGRKjkr5dWuA(e.Control);
    e.PgAABvWf_aTisnHwd9OZ7jQ((IQAABuTOYTqpYs14xNZZlQ(3.14159265358979) * 2));
    g = e;
    return g;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__3f
  function WAAABrr1izywrSF9lxm2xw(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__40
  function WQAABrr1izywrSF9lxm2xw(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__41
  function WgAABrr1izywrSF9lxm2xw()
  {
  };

  // ThreeDStuff.js.IsometricWithNatureBoy.<.ctor>b__3e
  function WwAABrr1izywrSF9lxm2xw(b)
  {
    return 1;
  };

  // ThreeDStuff.js.IsometricWithToolbar
  function S_af08vLF3zGZi85QdUb0eQ(){};
  S_af08vLF3zGZi85QdUb0eQ.TypeName = "IsometricWithToolbar";
  S_af08vLF3zGZi85QdUb0eQ.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  S_af08vLF3zGZi85QdUb0eQ.GetAttributes = function (){return [{Type:za4hDU0xfT6ITo5F4Wz1xQ,Value:{Description:"Now with toolbar!",FlashMovie:"http://www.youtube.com/watch?v\x3dkCgCSMpRN40"}}];};
  var type$S_af08vLF3zGZi85QdUb0eQ = S_af08vLF3zGZi85QdUb0eQ.prototype;
  var LgAABPLF3zGZi85QdUb0eQ = null;
  var LwAABPLF3zGZi85QdUb0eQ = null;
  var basector$S_af08vLF3zGZi85QdUb0eQ = $ctor$(null, null, type$S_af08vLF3zGZi85QdUb0eQ);
  // ThreeDStuff.js.IsometricWithToolbar..ctor
  type$S_af08vLF3zGZi85QdUb0eQ.XAAABvLF3zGZi85QdUb0eQ = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;

    k = null;
    l = null;
    m = /* DOMCreateType */new HsOh2PlXITmucTeoS5o0mw();
    document.body.style.overflow = 'hidden';
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    m.info_text = 'This example demostrates how would an isometric javascript game look like in your browser. You can see landscape from <i>Transport Tycoon<\u002fi> and the characters are from <i>Wolfenstein 3D<\u002fi> and <i>Doom<\u002fi>. Notice that the <b>game will be paused<\u002fb> as you leave this window.';
    m.info = JgcABjQynDSNZ0PXHA8v4w('loading...');
    pgAABgnDWDenzWX06iPvnw(m.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    m.info.style.height = 'auto';
    m.paused = 0;
    m.ZeroPoint = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    m.RotationA = MgAABuTOYTqpYs14xNZZlQ(45);
    m.RotationB = 0.5;
    m.Zoom = 1;
    m.Dot = 4;
    i = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    i.Left = -8;
    i.Width = 16;
    i.Top = -8;
    i.Height = 16;
    m.MapSize = i;
    j = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    j.X = 4;
    j.Y = 4;
    m.MapMargins = j;
    m.bg_size = new ctor$dwAABurNDTShu2hE9RzP4A(IwAABuTOYTqpYs14xNZZlQ((64 * m.Zoom)), IwAABuTOYTqpYs14xNZZlQ((32 * m.Zoom)));
    m.GetCenter = new ctor$AQAABnzJ4DW0TmzxD3LiJg(m, '__ctor_b__22');
    m.arena = new ctor$EgAABowIkzCWm4XSKspi6g();
    kAUABuKCPTKGRKjkr5dWuA(m.arena.Control);
    m.arena.Layers.Canvas.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(NwYABnNsjTy5GU2G_aZC6tw(0, 0, 0));
    m.arena.CgAABtH5gzGOe58n5cZeTA(zgMABkJB5jyxJFE8zncqBQ(0, 0, EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window)));
    m.arena.CQAABtH5gzGOe58n5cZeTA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(IwAABuTOYTqpYs14xNZZlQ(((m.MapSize.Width + m.MapMargins.X) * m.bg_size.get_w())), IwAABuTOYTqpYs14xNZZlQ(((m.MapSize.Height + m.MapMargins.Y) * m.bg_size.get_h()))));
    CQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(m, '__ctor_b__23'));
    kQUABuKCPTKGRKjkr5dWuA(m.info, m.arena.Layers.Info);
    m.TileResources = new ctor$DgMABmZH2z_a9ptWMqyUZ3g(new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f0.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f1.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f3.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f2.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f4.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f5.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002f6.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr2.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr1.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fr3.png', 32), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002ft1.png', 65), new ctor$owEABj5nTTCe5hLTQRxJOA('assets\u002fThreeDStuff\u002fh3.png', 50));
    m.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(m, '__ctor_b__24');
    m.GetCanvasPosition = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__25');
    m.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(m, '__ctor_b__26');
    b = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(m, '__ctor_b__28');
    m.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    c = PQYABnNsjTy5GU2G_aZC6tw();
    m.TileColorHouse1 = NwYABnNsjTy5GU2G_aZC6tw(41, 0, 0);
    m.TileColorHouse2 = NwYABnNsjTy5GU2G_aZC6tw(42, 0, 0);
    m.TileColorHouse3 = NwYABnNsjTy5GU2G_aZC6tw(43, 0, 0);
    m.TileColorTree1 = NwYABnNsjTy5GU2G_aZC6tw(51, 0, 0);
    m.TileColorRoad1 = NwYABnNsjTy5GU2G_aZC6tw(61, 0, 0);
    m.TileColorRoad2 = NwYABnNsjTy5GU2G_aZC6tw(62, 0, 0);
    m.TileColorRoad3 = NwYABnNsjTy5GU2G_aZC6tw(63, 0, 0);
    n = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    m.data = n;
    m.IsDefined = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(m, '__ctor_b__29');
    m.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(m.data, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(m.MapSize.Left, (m.MapSize.Width + 1)), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__2b'), new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(m, '__ctor_b__2c'))));
    d = new ctor$RgcABgrHJTi_bnqNd49nRag(m, '__ctor_b__2d');
    m.ApplyTileToCanvas = new ctor$TgcABqJN3D63oi2LfW_bDnQ(m, '__ctor_b__30');
    m.KnownTileElements = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    m.KnownDirtTileElements = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    m.SpawnItems = new ctor$SgcABoyOgDytaxFtvtvirA(m, '__ctor_b__31');
    d.Invoke(4, m.TileColorHouse1);
    d.Invoke(4, m.TileColorHouse2);
    d.Invoke(5, m.TileColorHouse3);
    d.Invoke(17, m.TileColorTree1);
    d.Invoke(2, m.TileColorRoad1);
    d.Invoke(2, m.TileColorRoad2);
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__39'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__3a'));
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__3c'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__3d'));
    e = /* DOMCreateType */new bTHY5anvljizKRMiXkPXqQ();
    e.CS___8__locals9e = m;

    if (!k)
    {
      k = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__3f');
    }

    e.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, k));
    m.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__40')));

    if (!(LgAABPLF3zGZi85QdUb0eQ))
    {
      LgAABPLF3zGZi85QdUb0eQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'XgAABvLF3zGZi85QdUb0eQ');
    }


    if (!(LgAABPLF3zGZi85QdUb0eQ))
    {
      LgAABPLF3zGZi85QdUb0eQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'XgAABvLF3zGZi85QdUb0eQ');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__42')), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__43')), LgAABPLF3zGZi85QdUb0eQ);

    if (!(LgAABPLF3zGZi85QdUb0eQ))
    {
      LgAABPLF3zGZi85QdUb0eQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'XgAABvLF3zGZi85QdUb0eQ');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__42')), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__43')), LgAABPLF3zGZi85QdUb0eQ), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__46'));

    if (!(LwAABPLF3zGZi85QdUb0eQ))
    {
      LwAABPLF3zGZi85QdUb0eQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'XwAABvLF3zGZi85QdUb0eQ');
    }

    o = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__42')), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__43')), LgAABPLF3zGZi85QdUb0eQ), new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__46')), LwAABPLF3zGZi85QdUb0eQ).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = null;
      g = /* DOMCreateType */new T6ur59waKTycSs6_b8ewhSQ();
      g.CS___8__locals9e = m;
      while (o.qAAABu7N0xGI6ACQJ1TEOg())
      {
        g.v = o.xQAABrYmRzSu_anO2U_bk1MA();

        if (!f)
        {
          f = new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__48');
        }

        m.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(LgAABne06jm5i7qNIX6ZzA(m.data, f), g.v.get_c()));
      }
    }
    finally
    {
      p = (o == null);

      if (!p)
      {
        o.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    h = /* DOMCreateType */new GTB23gYouTODuVxXPWczrA();
    h.CS___8__locals9e = m;

    if (!l)
    {
      l = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__49');
    }

    h.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, l));
    m.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(m.data, new ctor$BQAABkGjlTKl11x0SjZu8g(h, '__ctor_b__4a')));
    OQAABgAjajq2ygojxk6uUQ(m.info, 'Loading items...');
    lAQABtY33j68H_aZQYc4FRw(new ctor$ewMABju_bQzuieaLNynM0gA(m, '__ctor_b__4c'));
  };
  var ctor$XAAABvLF3zGZi85QdUb0eQ = S_af08vLF3zGZi85QdUb0eQ.ctor = $ctor$(null, 'XAAABvLF3zGZi85QdUb0eQ', type$S_af08vLF3zGZi85QdUb0eQ);

  // ThreeDStuff.js.IsometricWithToolbar.<.ctor>b__45
  function XgAABvLF3zGZi85QdUb0eQ(b)
  {
    return !(b.get_b() == null);
  };

  // ThreeDStuff.js.IsometricWithToolbar.<.ctor>b__47
  function XwAABvLF3zGZi85QdUb0eQ(b)
  {
    return new ctor$rwAABgLxWzeofSY5srsjIQ(b.get___h__TransparentIdentifier4().get_a(), b.get___h__TransparentIdentifier4().get_b(), b.get_c());
  };

  // ThreeDStuff.js.IsometricWithToolbar+TileElement
  function _9fxRNg2chjKpXgd_bOuCCDw(){};
  _9fxRNg2chjKpXgd_bOuCCDw.TypeName = "TileElement";
  _9fxRNg2chjKpXgd_bOuCCDw.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  var type$_9fxRNg2chjKpXgd_bOuCCDw = _9fxRNg2chjKpXgd_bOuCCDw.prototype;
  type$_9fxRNg2chjKpXgd_bOuCCDw = _9fxRNg2chjKpXgd_bOuCCDw.prototype =   {
    constructor: _9fxRNg2chjKpXgd_bOuCCDw,
    Source: null,
    Position: null,
    Image: null,
    DirtAge: 0,
    Height: 0
  }
;
  var basector$_9fxRNg2chjKpXgd_bOuCCDw = $ctor$(null, null, type$_9fxRNg2chjKpXgd_bOuCCDw);
  // ThreeDStuff.js.IsometricWithToolbar+TileElement..ctor
  type$_9fxRNg2chjKpXgd_bOuCCDw.YAAABg2chjKpXgd_bOuCCDw = function ()
  {
    var a = this;

  };
  var ctor$YAAABg2chjKpXgd_bOuCCDw = _9fxRNg2chjKpXgd_bOuCCDw.ctor = $ctor$(null, 'YAAABg2chjKpXgd_bOuCCDw', type$_9fxRNg2chjKpXgd_bOuCCDw);

  // ThreeDStuff.js.ApplicationDescriptionAttribute
  function za4hDU0xfT6ITo5F4Wz1xQ(){};
  za4hDU0xfT6ITo5F4Wz1xQ.TypeName = "ApplicationDescriptionAttribute";
  za4hDU0xfT6ITo5F4Wz1xQ.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  var type$za4hDU0xfT6ITo5F4Wz1xQ = za4hDU0xfT6ITo5F4Wz1xQ.prototype;
  type$za4hDU0xfT6ITo5F4Wz1xQ = za4hDU0xfT6ITo5F4Wz1xQ.prototype =   {
    constructor: za4hDU0xfT6ITo5F4Wz1xQ,
    Description: null,
    FlashMovie: null
  }
;
  var basector$za4hDU0xfT6ITo5F4Wz1xQ = $ctor$(basector$wck7fY2kQTGGuWYmEJ1BJQ, null, type$za4hDU0xfT6ITo5F4Wz1xQ);
  // ThreeDStuff.js.ApplicationDescriptionAttribute..ctor
  type$za4hDU0xfT6ITo5F4Wz1xQ.YQAABk0xfT6ITo5F4Wz1xQ = function ()
  {
    var a = this;

    a.aQIABo2kQTGGuWYmEJ1BJQ();
  };
  var ctor$YQAABk0xfT6ITo5F4Wz1xQ = za4hDU0xfT6ITo5F4Wz1xQ.ctor = $ctor$(basector$wck7fY2kQTGGuWYmEJ1BJQ, 'YQAABk0xfT6ITo5F4Wz1xQ', type$za4hDU0xfT6ITo5F4Wz1xQ);

  // System.Runtime.InteropServices._Attribute
  // ThreeDStuff.js.ApplicationDescriptionAttribute
  (function (i)  {
    i.sAUABp4tuDiSqTgaz1L3wA = i._5QUABijmwzS2b3aG_avRi2g;
    i.sQUABp4tuDiSqTgaz1L3wA = i._5gUABijmwzS2b3aG_avRi2g;
    i.sgUABp4tuDiSqTgaz1L3wA = i._5wUABijmwzS2b3aG_avRi2g;
    i.swUABp4tuDiSqTgaz1L3wA = i._6AUABijmwzS2b3aG_avRi2g;
  }
  )(type$za4hDU0xfT6ITo5F4Wz1xQ);
  // ThreeDStuff.js.ThreeDStuff
  function AOuU2NqhKzq_anMcSMU23kw(){};
  AOuU2NqhKzq_anMcSMU23kw.TypeName = "ThreeDStuff";
  AOuU2NqhKzq_anMcSMU23kw.Assembly = QlrH3C1_bAE_ajjtEm31jA_aA;
  var type$AOuU2NqhKzq_anMcSMU23kw = AOuU2NqhKzq_anMcSMU23kw.prototype;
  var NwAABNqhKzq_anMcSMU23kw = null;
  var OAAABNqhKzq_anMcSMU23kw = null;
  var OQAABNqhKzq_anMcSMU23kw = null;
  var OgAABNqhKzq_anMcSMU23kw = null;
  var OwAABNqhKzq_anMcSMU23kw = null;
  var PAAABNqhKzq_anMcSMU23kw = null;
  var basector$AOuU2NqhKzq_anMcSMU23kw = $ctor$(null, null, type$AOuU2NqhKzq_anMcSMU23kw);
  // ThreeDStuff.js.ThreeDStuff..ctor
  type$AOuU2NqhKzq_anMcSMU23kw.YgAABtqhKzq_anMcSMU23kw = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    e = /* DOMCreateType */new z2rF6mAJSTyLCGQJy86E9Q();
    document.body.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    document.body.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    e.Menu = kAUABuKCPTKGRKjkr5dWuA(JQcABjQynDSNZ0PXHA8v4w());
    kQUABuKCPTKGRKjkr5dWuA(NAAABgAjajq2ygojxk6uUQ('h1', _1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw)).zAQABqOBvjOuSkQZrCdfWA()), e.Menu);

    if (!(NwAABNqhKzq_anMcSMU23kw))
    {
      NwAABNqhKzq_anMcSMU23kw = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'ZAAABtqhKzq_anMcSMU23kw');
    }

    mQAABuVHczWYsGvbmU49oA(kQUABuKCPTKGRKjkr5dWuA(tAAABrjicT6QHyVOJrkEhA('assets\u002fThreeDStuff\u002fPreview.png'), e.Menu).style, NwAABNqhKzq_anMcSMU23kw);
    b = kQUABuKCPTKGRKjkr5dWuA(MwAABgAjajq2ygojxk6uUQ('ol'), e.Menu);
    e.CreateAnchor = new ctor$DQAABl1a_aj69OXVnEw9Zyw(e, '__ctor_b__4');

    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw);

    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__b'));

    if (!(OwAABNqhKzq_anMcSMU23kw))
    {
      OwAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'aAAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw);

    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }


    if (!(OAAABNqhKzq_anMcSMU23kw))
    {
      OAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZQAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw);

    if (!(OQAABNqhKzq_anMcSMU23kw))
    {
      OQAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZgAABtqhKzq_anMcSMU23kw');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw);

    if (!(OgAABNqhKzq_anMcSMU23kw))
    {
      OgAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ZwAABtqhKzq_anMcSMU23kw');
    }

    LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__b'));

    if (!(OwAABNqhKzq_anMcSMU23kw))
    {
      OwAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'aAAABtqhKzq_anMcSMU23kw');
    }

    FQAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__b')), OwAABNqhKzq_anMcSMU23kw);

    if (!(PAAABNqhKzq_anMcSMU23kw))
    {
      PAAABNqhKzq_anMcSMU23kw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'aQAABtqhKzq_anMcSMU23kw');
    }

    f = LAAABne06jm5i7qNIX6ZzA(FQAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw))._0AQABmIY_az6vz_alg_a0hAHA().EgUABpM_bbTOfQQpQLCrlcA(), OAAABNqhKzq_anMcSMU23kw), OQAABNqhKzq_anMcSMU23kw), OgAABNqhKzq_anMcSMU23kw), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__b')), OwAABNqhKzq_anMcSMU23kw), PAAABNqhKzq_anMcSMU23kw).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (f.qAAABu7N0xGI6ACQJ1TEOg())
      {
        c = f.xQAABrYmRzSu_anO2U_bk1MA();
        g = [
          c.get_anchor()
        ];
        d = kQUABuKCPTKGRKjkr5dWuA(NwAABgAjajq2ygojxk6uUQ('li', g), b);
      }
    }
    finally
    {
      h = (f == null);

      if (!h)
      {
        f.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };
  var ctor$YgAABtqhKzq_anMcSMU23kw = AOuU2NqhKzq_anMcSMU23kw.ctor = $ctor$(null, 'YgAABtqhKzq_anMcSMU23kw', type$AOuU2NqhKzq_anMcSMU23kw);

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__3
  function ZAAABtqhKzq_anMcSMU23kw(b)
  {
    rQAABgnDWDenzWX06iPvnw(b, 'right');
    b.border = '1px solid red';
  };

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__8
  function ZQAABtqhKzq_anMcSMU23kw(b)
  {
    return new ctor$sgMABvqz_bja0qL_blBfteKA(b, b.zQQABqOBvjOuSkQZrCdfWA(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$za4hDU0xfT6ITo5F4Wz1xQ)), 0));
  };

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__9
  function ZgAABtqhKzq_anMcSMU23kw(b)
  {
    return (b.get_d().length > 0);
  };

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__a
  function ZwAABtqhKzq_anMcSMU23kw(b)
  {
    return new ctor$uAMABtTGuTunbAxPv5O9nA(b, mwAABuVHczWYsGvbmU49oA(b.get_d()));
  };

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__c
  function aAAABtqhKzq_anMcSMU23kw(b)
  {
    return b.get___h__TransparentIdentifier1().get___h__TransparentIdentifier0().get_t().zAQABqOBvjOuSkQZrCdfWA();
  };

  // ThreeDStuff.js.ThreeDStuff.<.ctor>b__d
  function aQAABtqhKzq_anMcSMU23kw(b)
  {
    return new ctor$xAMABnmSUzeRDib0kvt7pg(b.get_anchor(), b.get___h__TransparentIdentifier1().get_attribute());
  };

  // Anonymous type
  function BDPakwifgTqq_bq_as554zaA() {}  type$BDPakwifgTqq_bq_as554zaA = BDPakwifgTqq_bq_as554zaA.prototype =   {
    constructor: BDPakwifgTqq_bq_as554zaA,
    _Left_i__Field: null,
    _Width_i__Field: null,
    _Top_i__Field: null,
    _Height_i__Field: null
  }
;
  // <>f__AnonymousType0`4.get_Left
  type$BDPakwifgTqq_bq_as554zaA.get_Left = function ()
  {
    return this._Left_i__Field;
  };

  // <>f__AnonymousType0`4.get_Width
  type$BDPakwifgTqq_bq_as554zaA.get_Width = function ()
  {
    return this._Width_i__Field;
  };

  // <>f__AnonymousType0`4.get_Top
  type$BDPakwifgTqq_bq_as554zaA.get_Top = function ()
  {
    return this._Top_i__Field;
  };

  // <>f__AnonymousType0`4.get_Height
  type$BDPakwifgTqq_bq_as554zaA.get_Height = function ()
  {
    return this._Height_i__Field;
  };

  // <>f__AnonymousType0`4.ToString
  type$BDPakwifgTqq_bq_as554zaA.toString /* <>f__AnonymousType0`4.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Left = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Left_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Width = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Width_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Top = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Top_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Height = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Height_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    BDPakwifgTqq_bq_as554zaA.prototype.toString /* System.Object.ToString */ = BDPakwifgTqq_bq_as554zaA.prototype.toString /* <>f__AnonymousType0`4.ToString */;

  // <>f__AnonymousType0`4.Equals
  type$BDPakwifgTqq_bq_as554zaA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    BDPakwifgTqq_bq_as554zaA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = BDPakwifgTqq_bq_as554zaA.prototype.Equals;

  // <>f__AnonymousType0`4.GetHashCode
  type$BDPakwifgTqq_bq_as554zaA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    BDPakwifgTqq_bq_as554zaA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = BDPakwifgTqq_bq_as554zaA.prototype.GetHashCode;

  // <>f__AnonymousType0`4..ctor
  type$BDPakwifgTqq_bq_as554zaA.bwAABgifgTqq_bq_as554zaA = function (b, c, d, e)
  {
    var a = this;

    a._Left_i__Field = b;
    a._Width_i__Field = c;
    a._Top_i__Field = d;
    a._Height_i__Field = e;
  };
  var ctor$bwAABgifgTqq_bq_as554zaA = $ctor$(null, 'bwAABgifgTqq_bq_as554zaA', type$BDPakwifgTqq_bq_as554zaA);
  // Anonymous type
  function TkALRerNDTShu2hE9RzP4A() {}  type$TkALRerNDTShu2hE9RzP4A = TkALRerNDTShu2hE9RzP4A.prototype =   {
    constructor: TkALRerNDTShu2hE9RzP4A,
    _w_i__Field: null,
    _h_i__Field: null
  }
;
  // <>f__AnonymousType1`2.get_w
  type$TkALRerNDTShu2hE9RzP4A.get_w = function ()
  {
    return this._w_i__Field;
  };

  // <>f__AnonymousType1`2.get_h
  type$TkALRerNDTShu2hE9RzP4A.get_h = function ()
  {
    return this._h_i__Field;
  };

  // <>f__AnonymousType1`2.ToString
  type$TkALRerNDTShu2hE9RzP4A.toString /* <>f__AnonymousType1`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ w = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._w_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', h = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._h_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    TkALRerNDTShu2hE9RzP4A.prototype.toString /* System.Object.ToString */ = TkALRerNDTShu2hE9RzP4A.prototype.toString /* <>f__AnonymousType1`2.ToString */;

  // <>f__AnonymousType1`2.Equals
  type$TkALRerNDTShu2hE9RzP4A.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    TkALRerNDTShu2hE9RzP4A.prototype.AwAABnwCHD6Y1dqcmGKqIQ = TkALRerNDTShu2hE9RzP4A.prototype.Equals;

  // <>f__AnonymousType1`2.GetHashCode
  type$TkALRerNDTShu2hE9RzP4A.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    TkALRerNDTShu2hE9RzP4A.prototype.BwAABnwCHD6Y1dqcmGKqIQ = TkALRerNDTShu2hE9RzP4A.prototype.GetHashCode;

  // <>f__AnonymousType1`2..ctor
  type$TkALRerNDTShu2hE9RzP4A.dwAABurNDTShu2hE9RzP4A = function (b, c)
  {
    var a = this;

    a._w_i__Field = b;
    a._h_i__Field = c;
  };
  var ctor$dwAABurNDTShu2hE9RzP4A = $ctor$(null, 'dwAABurNDTShu2hE9RzP4A', type$TkALRerNDTShu2hE9RzP4A);
  // Anonymous type
  function HXPzihxG1zG2OUKpXX027w() {}  type$HXPzihxG1zG2OUKpXX027w = HXPzihxG1zG2OUKpXX027w.prototype =   {
    constructor: HXPzihxG1zG2OUKpXX027w,
    __x_i__Field: null,
    __y_i__Field: null
  }
;
  // <>f__AnonymousType2`2.get__x
  type$HXPzihxG1zG2OUKpXX027w.get__x = function ()
  {
    return this.__x_i__Field;
  };

  // <>f__AnonymousType2`2.get__y
  type$HXPzihxG1zG2OUKpXX027w.get__y = function ()
  {
    return this.__y_i__Field;
  };

  // <>f__AnonymousType2`2.ToString
  type$HXPzihxG1zG2OUKpXX027w.toString /* <>f__AnonymousType2`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ _x = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.__x_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', _y = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.__y_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    HXPzihxG1zG2OUKpXX027w.prototype.toString /* System.Object.ToString */ = HXPzihxG1zG2OUKpXX027w.prototype.toString /* <>f__AnonymousType2`2.ToString */;

  // <>f__AnonymousType2`2.Equals
  type$HXPzihxG1zG2OUKpXX027w.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    HXPzihxG1zG2OUKpXX027w.prototype.AwAABnwCHD6Y1dqcmGKqIQ = HXPzihxG1zG2OUKpXX027w.prototype.Equals;

  // <>f__AnonymousType2`2.GetHashCode
  type$HXPzihxG1zG2OUKpXX027w.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    HXPzihxG1zG2OUKpXX027w.prototype.BwAABnwCHD6Y1dqcmGKqIQ = HXPzihxG1zG2OUKpXX027w.prototype.GetHashCode;

  // <>f__AnonymousType2`2..ctor
  type$HXPzihxG1zG2OUKpXX027w.fQAABhxG1zG2OUKpXX027w = function (b, c)
  {
    var a = this;

    a.__x_i__Field = b;
    a.__y_i__Field = c;
  };
  var ctor$fQAABhxG1zG2OUKpXX027w = $ctor$(null, 'fQAABhxG1zG2OUKpXX027w', type$HXPzihxG1zG2OUKpXX027w);
  // Anonymous type
  function Iv87DRh1kTOuv2bZ_a6JGSA() {}  type$Iv87DRh1kTOuv2bZ_a6JGSA = Iv87DRh1kTOuv2bZ_a6JGSA.prototype =   {
    constructor: Iv87DRh1kTOuv2bZ_a6JGSA,
    _x_i__Field: null,
    _y_i__Field: null,
    _color_i__Field: null
  }
;
  // <>f__AnonymousType3`3.get_x
  type$Iv87DRh1kTOuv2bZ_a6JGSA.get_x = function ()
  {
    return this._x_i__Field;
  };

  // <>f__AnonymousType3`3.get_y
  type$Iv87DRh1kTOuv2bZ_a6JGSA.get_y = function ()
  {
    return this._y_i__Field;
  };

  // <>f__AnonymousType3`3.get_color
  type$Iv87DRh1kTOuv2bZ_a6JGSA.get_color = function ()
  {
    return this._color_i__Field;
  };

  // <>f__AnonymousType3`3.ToString
  type$Iv87DRh1kTOuv2bZ_a6JGSA.toString /* <>f__AnonymousType3`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ x = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._x_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', y = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._y_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', color = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._color_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    Iv87DRh1kTOuv2bZ_a6JGSA.prototype.toString /* System.Object.ToString */ = Iv87DRh1kTOuv2bZ_a6JGSA.prototype.toString /* <>f__AnonymousType3`3.ToString */;

  // <>f__AnonymousType3`3.Equals
  type$Iv87DRh1kTOuv2bZ_a6JGSA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    Iv87DRh1kTOuv2bZ_a6JGSA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = Iv87DRh1kTOuv2bZ_a6JGSA.prototype.Equals;

  // <>f__AnonymousType3`3.GetHashCode
  type$Iv87DRh1kTOuv2bZ_a6JGSA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    Iv87DRh1kTOuv2bZ_a6JGSA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = Iv87DRh1kTOuv2bZ_a6JGSA.prototype.GetHashCode;

  // <>f__AnonymousType3`3..ctor
  type$Iv87DRh1kTOuv2bZ_a6JGSA.gwAABhh1kTOuv2bZ_a6JGSA = function (b, c, d)
  {
    var a = this;

    a._x_i__Field = b;
    a._y_i__Field = c;
    a._color_i__Field = d;
  };
  var ctor$gwAABhh1kTOuv2bZ_a6JGSA = $ctor$(null, 'gwAABhh1kTOuv2bZ_a6JGSA', type$Iv87DRh1kTOuv2bZ_a6JGSA);
  // Anonymous type
  function zYhoAvWqKz2I8o1VI_b3Oew() {}  type$zYhoAvWqKz2I8o1VI_b3Oew = zYhoAvWqKz2I8o1VI_b3Oew.prototype =   {
    constructor: zYhoAvWqKz2I8o1VI_b3Oew,
    _point_i__Field: null,
    _img_i__Field: null
  }
;
  // <>f__AnonymousType4`2.get_point
  type$zYhoAvWqKz2I8o1VI_b3Oew.get_point = function ()
  {
    return this._point_i__Field;
  };

  // <>f__AnonymousType4`2.get_img
  type$zYhoAvWqKz2I8o1VI_b3Oew.get_img = function ()
  {
    return this._img_i__Field;
  };

  // <>f__AnonymousType4`2.ToString
  type$zYhoAvWqKz2I8o1VI_b3Oew.toString /* <>f__AnonymousType4`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ point = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._point_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', img = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._img_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    zYhoAvWqKz2I8o1VI_b3Oew.prototype.toString /* System.Object.ToString */ = zYhoAvWqKz2I8o1VI_b3Oew.prototype.toString /* <>f__AnonymousType4`2.ToString */;

  // <>f__AnonymousType4`2.Equals
  type$zYhoAvWqKz2I8o1VI_b3Oew.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    zYhoAvWqKz2I8o1VI_b3Oew.prototype.AwAABnwCHD6Y1dqcmGKqIQ = zYhoAvWqKz2I8o1VI_b3Oew.prototype.Equals;

  // <>f__AnonymousType4`2.GetHashCode
  type$zYhoAvWqKz2I8o1VI_b3Oew.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    zYhoAvWqKz2I8o1VI_b3Oew.prototype.BwAABnwCHD6Y1dqcmGKqIQ = zYhoAvWqKz2I8o1VI_b3Oew.prototype.GetHashCode;

  // <>f__AnonymousType4`2..ctor
  type$zYhoAvWqKz2I8o1VI_b3Oew.igAABvWqKz2I8o1VI_b3Oew = function (b, c)
  {
    var a = this;

    a._point_i__Field = b;
    a._img_i__Field = c;
  };
  var ctor$igAABvWqKz2I8o1VI_b3Oew = $ctor$(null, 'igAABvWqKz2I8o1VI_b3Oew', type$zYhoAvWqKz2I8o1VI_b3Oew);
  // Anonymous type
  function _8qNMnwgiQzKMV4NqKAcaWg() {}  type$_8qNMnwgiQzKMV4NqKAcaWg = _8qNMnwgiQzKMV4NqKAcaWg.prototype =   {
    constructor: _8qNMnwgiQzKMV4NqKAcaWg,
    ___h__TransparentIdentifier1_i__Field: null,
    _update_i__Field: null
  }
;
  // <>f__AnonymousType5`2.get_<>h__TransparentIdentifier1
  type$_8qNMnwgiQzKMV4NqKAcaWg.get___h__TransparentIdentifier1 = function ()
  {
    return this.___h__TransparentIdentifier1_i__Field;
  };

  // <>f__AnonymousType5`2.get_update
  type$_8qNMnwgiQzKMV4NqKAcaWg.get_update = function ()
  {
    return this._update_i__Field;
  };

  // <>f__AnonymousType5`2.ToString
  type$_8qNMnwgiQzKMV4NqKAcaWg.toString /* <>f__AnonymousType5`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', update = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._update_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _8qNMnwgiQzKMV4NqKAcaWg.prototype.toString /* System.Object.ToString */ = _8qNMnwgiQzKMV4NqKAcaWg.prototype.toString /* <>f__AnonymousType5`2.ToString */;

  // <>f__AnonymousType5`2.Equals
  type$_8qNMnwgiQzKMV4NqKAcaWg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _8qNMnwgiQzKMV4NqKAcaWg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _8qNMnwgiQzKMV4NqKAcaWg.prototype.Equals;

  // <>f__AnonymousType5`2.GetHashCode
  type$_8qNMnwgiQzKMV4NqKAcaWg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _8qNMnwgiQzKMV4NqKAcaWg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _8qNMnwgiQzKMV4NqKAcaWg.prototype.GetHashCode;

  // <>f__AnonymousType5`2..ctor
  type$_8qNMnwgiQzKMV4NqKAcaWg.kAAABggiQzKMV4NqKAcaWg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier1_i__Field = b;
    a._update_i__Field = c;
  };
  var ctor$kAAABggiQzKMV4NqKAcaWg = $ctor$(null, 'kAAABggiQzKMV4NqKAcaWg', type$_8qNMnwgiQzKMV4NqKAcaWg);
  // Anonymous type
  function _1TUd8gsJ9zWGYfBUozCjKg() {}  type$_1TUd8gsJ9zWGYfBUozCjKg = _1TUd8gsJ9zWGYfBUozCjKg.prototype =   {
    constructor: _1TUd8gsJ9zWGYfBUozCjKg,
    ___h__TransparentIdentifier2_i__Field: null,
    _img2_i__Field: null
  }
;
  // <>f__AnonymousType6`2.get_<>h__TransparentIdentifier2
  type$_1TUd8gsJ9zWGYfBUozCjKg.get___h__TransparentIdentifier2 = function ()
  {
    return this.___h__TransparentIdentifier2_i__Field;
  };

  // <>f__AnonymousType6`2.get_img2
  type$_1TUd8gsJ9zWGYfBUozCjKg.get_img2 = function ()
  {
    return this._img2_i__Field;
  };

  // <>f__AnonymousType6`2.ToString
  type$_1TUd8gsJ9zWGYfBUozCjKg.toString /* <>f__AnonymousType6`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', img2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._img2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _1TUd8gsJ9zWGYfBUozCjKg.prototype.toString /* System.Object.ToString */ = _1TUd8gsJ9zWGYfBUozCjKg.prototype.toString /* <>f__AnonymousType6`2.ToString */;

  // <>f__AnonymousType6`2.Equals
  type$_1TUd8gsJ9zWGYfBUozCjKg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _1TUd8gsJ9zWGYfBUozCjKg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _1TUd8gsJ9zWGYfBUozCjKg.prototype.Equals;

  // <>f__AnonymousType6`2.GetHashCode
  type$_1TUd8gsJ9zWGYfBUozCjKg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _1TUd8gsJ9zWGYfBUozCjKg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _1TUd8gsJ9zWGYfBUozCjKg.prototype.GetHashCode;

  // <>f__AnonymousType6`2..ctor
  type$_1TUd8gsJ9zWGYfBUozCjKg.lgAABgsJ9zWGYfBUozCjKg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier2_i__Field = b;
    a._img2_i__Field = c;
  };
  var ctor$lgAABgsJ9zWGYfBUozCjKg = $ctor$(null, 'lgAABgsJ9zWGYfBUozCjKg', type$_1TUd8gsJ9zWGYfBUozCjKg);
  // Anonymous type
  function _5Kc71fQbCDWguI23OE0esw() {}  type$_5Kc71fQbCDWguI23OE0esw = _5Kc71fQbCDWguI23OE0esw.prototype =   {
    constructor: _5Kc71fQbCDWguI23OE0esw,
    _pos_i__Field: null,
    _img_i__Field: null,
    _update_i__Field: null
  }
;
  // <>f__AnonymousType7`3.get_pos
  type$_5Kc71fQbCDWguI23OE0esw.get_pos = function ()
  {
    return this._pos_i__Field;
  };

  // <>f__AnonymousType7`3.get_img
  type$_5Kc71fQbCDWguI23OE0esw.get_img = function ()
  {
    return this._img_i__Field;
  };

  // <>f__AnonymousType7`3.get_update
  type$_5Kc71fQbCDWguI23OE0esw.get_update = function ()
  {
    return this._update_i__Field;
  };

  // <>f__AnonymousType7`3.ToString
  type$_5Kc71fQbCDWguI23OE0esw.toString /* <>f__AnonymousType7`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ pos = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._pos_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', img = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._img_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', update = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._update_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _5Kc71fQbCDWguI23OE0esw.prototype.toString /* System.Object.ToString */ = _5Kc71fQbCDWguI23OE0esw.prototype.toString /* <>f__AnonymousType7`3.ToString */;

  // <>f__AnonymousType7`3.Equals
  type$_5Kc71fQbCDWguI23OE0esw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _5Kc71fQbCDWguI23OE0esw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _5Kc71fQbCDWguI23OE0esw.prototype.Equals;

  // <>f__AnonymousType7`3.GetHashCode
  type$_5Kc71fQbCDWguI23OE0esw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _5Kc71fQbCDWguI23OE0esw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _5Kc71fQbCDWguI23OE0esw.prototype.GetHashCode;

  // <>f__AnonymousType7`3..ctor
  type$_5Kc71fQbCDWguI23OE0esw.nAAABvQbCDWguI23OE0esw = function (b, c, d)
  {
    var a = this;

    a._pos_i__Field = b;
    a._img_i__Field = c;
    a._update_i__Field = d;
  };
  var ctor$nAAABvQbCDWguI23OE0esw = $ctor$(null, 'nAAABvQbCDWguI23OE0esw', type$_5Kc71fQbCDWguI23OE0esw);
  // Anonymous type
  function d0Zj57iW_aT2Zoc9EA_aVyNA() {}  type$d0Zj57iW_aT2Zoc9EA_aVyNA = d0Zj57iW_aT2Zoc9EA_aVyNA.prototype =   {
    constructor: d0Zj57iW_aT2Zoc9EA_aVyNA,
    _a_i__Field: null,
    _b_i__Field: null
  }
;
  // <>f__AnonymousType8`2.get_a
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.get_a = function ()
  {
    return this._a_i__Field;
  };

  // <>f__AnonymousType8`2.get_b
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.get_b = function ()
  {
    return this._b_i__Field;
  };

  // <>f__AnonymousType8`2.ToString
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.toString /* <>f__AnonymousType8`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ a = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._a_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', b = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._b_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.toString /* System.Object.ToString */ = d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.toString /* <>f__AnonymousType8`2.ToString */;

  // <>f__AnonymousType8`2.Equals
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.Equals;

  // <>f__AnonymousType8`2.GetHashCode
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = d0Zj57iW_aT2Zoc9EA_aVyNA.prototype.GetHashCode;

  // <>f__AnonymousType8`2..ctor
  type$d0Zj57iW_aT2Zoc9EA_aVyNA.owAABriW_aT2Zoc9EA_aVyNA = function (b, c)
  {
    var a = this;

    a._a_i__Field = b;
    a._b_i__Field = c;
  };
  var ctor$owAABriW_aT2Zoc9EA_aVyNA = $ctor$(null, 'owAABriW_aT2Zoc9EA_aVyNA', type$d0Zj57iW_aT2Zoc9EA_aVyNA);
  // Anonymous type
  function __bqwwPdmOyTCjIOK5nXjUGg() {}  type$__bqwwPdmOyTCjIOK5nXjUGg = __bqwwPdmOyTCjIOK5nXjUGg.prototype =   {
    constructor: __bqwwPdmOyTCjIOK5nXjUGg,
    ___h__TransparentIdentifier4_i__Field: null,
    _c_i__Field: null
  }
;
  // <>f__AnonymousType9`2.get_<>h__TransparentIdentifier4
  type$__bqwwPdmOyTCjIOK5nXjUGg.get___h__TransparentIdentifier4 = function ()
  {
    return this.___h__TransparentIdentifier4_i__Field;
  };

  // <>f__AnonymousType9`2.get_c
  type$__bqwwPdmOyTCjIOK5nXjUGg.get_c = function ()
  {
    return this._c_i__Field;
  };

  // <>f__AnonymousType9`2.ToString
  type$__bqwwPdmOyTCjIOK5nXjUGg.toString /* <>f__AnonymousType9`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier4 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier4_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', c = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._c_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    __bqwwPdmOyTCjIOK5nXjUGg.prototype.toString /* System.Object.ToString */ = __bqwwPdmOyTCjIOK5nXjUGg.prototype.toString /* <>f__AnonymousType9`2.ToString */;

  // <>f__AnonymousType9`2.Equals
  type$__bqwwPdmOyTCjIOK5nXjUGg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    __bqwwPdmOyTCjIOK5nXjUGg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = __bqwwPdmOyTCjIOK5nXjUGg.prototype.Equals;

  // <>f__AnonymousType9`2.GetHashCode
  type$__bqwwPdmOyTCjIOK5nXjUGg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    __bqwwPdmOyTCjIOK5nXjUGg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = __bqwwPdmOyTCjIOK5nXjUGg.prototype.GetHashCode;

  // <>f__AnonymousType9`2..ctor
  type$__bqwwPdmOyTCjIOK5nXjUGg.qQAABtmOyTCjIOK5nXjUGg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier4_i__Field = b;
    a._c_i__Field = c;
  };
  var ctor$qQAABtmOyTCjIOK5nXjUGg = $ctor$(null, 'qQAABtmOyTCjIOK5nXjUGg', type$__bqwwPdmOyTCjIOK5nXjUGg);
  // Anonymous type
  function q_a95GQLxWzeofSY5srsjIQ() {}  type$q_a95GQLxWzeofSY5srsjIQ = q_a95GQLxWzeofSY5srsjIQ.prototype =   {
    constructor: q_a95GQLxWzeofSY5srsjIQ,
    _a_i__Field: null,
    _b_i__Field: null,
    _c_i__Field: null
  }
;
  // <>f__AnonymousTypea`3.get_a
  type$q_a95GQLxWzeofSY5srsjIQ.get_a = function ()
  {
    return this._a_i__Field;
  };

  // <>f__AnonymousTypea`3.get_b
  type$q_a95GQLxWzeofSY5srsjIQ.get_b = function ()
  {
    return this._b_i__Field;
  };

  // <>f__AnonymousTypea`3.get_c
  type$q_a95GQLxWzeofSY5srsjIQ.get_c = function ()
  {
    return this._c_i__Field;
  };

  // <>f__AnonymousTypea`3.ToString
  type$q_a95GQLxWzeofSY5srsjIQ.toString /* <>f__AnonymousTypea`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ a = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._a_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', b = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._b_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', c = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._c_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    q_a95GQLxWzeofSY5srsjIQ.prototype.toString /* System.Object.ToString */ = q_a95GQLxWzeofSY5srsjIQ.prototype.toString /* <>f__AnonymousTypea`3.ToString */;

  // <>f__AnonymousTypea`3.Equals
  type$q_a95GQLxWzeofSY5srsjIQ.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    q_a95GQLxWzeofSY5srsjIQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = q_a95GQLxWzeofSY5srsjIQ.prototype.Equals;

  // <>f__AnonymousTypea`3.GetHashCode
  type$q_a95GQLxWzeofSY5srsjIQ.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    q_a95GQLxWzeofSY5srsjIQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = q_a95GQLxWzeofSY5srsjIQ.prototype.GetHashCode;

  // <>f__AnonymousTypea`3..ctor
  type$q_a95GQLxWzeofSY5srsjIQ.rwAABgLxWzeofSY5srsjIQ = function (b, c, d)
  {
    var a = this;

    a._a_i__Field = b;
    a._b_i__Field = c;
    a._c_i__Field = d;
  };
  var ctor$rwAABgLxWzeofSY5srsjIQ = $ctor$(null, 'rwAABgLxWzeofSY5srsjIQ', type$q_a95GQLxWzeofSY5srsjIQ);
  // Closure type
  function Ocd2AmcoAzW7munX7hJ_bTQ() {}  var awAABGcoAzW7munX7hJ_bTQ = null;
  var bAAABGcoAzW7munX7hJ_bTQ = null;
  var bQAABGcoAzW7munX7hJ_bTQ = null;
  type$Ocd2AmcoAzW7munX7hJ_bTQ = Ocd2AmcoAzW7munX7hJ_bTQ.prototype =   {
    constructor: Ocd2AmcoAzW7munX7hJ_bTQ,
    GetCenter: null,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    MapSize: null,
    bg_size: null,
    Translate: null,
    ApplyPosition: null,
    TileColor: null,
    TileColorRoad1: null,
    TileColorRoad2: null,
    TileColorRoad3: null,
    data: null,
    bg_update_WithHeight: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__9
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__9 = function (b, c)
  {
    var a = this, d, e, f, g, h;

    d = a.GetCenter.Invoke();
    e = (MQAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) + a.RotationA);
    f = ((LgAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) * a.bg_size.get_h()) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(e) * f);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(e) * f) * a.RotationB);
    g = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    g.X = b;
    g.Y = c;
    h = g;
    return h;
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__a
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__a = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new hmQUm22nIDG9SFj5BufBdg();
    j.CS___8__locals38 = a;
    j._x = b;
    j._y = c;
    try
    {
      e = a.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.Zoom * a.Dot));
      pgAABgnDWDenzWX06iPvnw(d.style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);
      kAUABuKCPTKGRKjkr5dWuA(d);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__b');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__c
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__c = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__d
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__d = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new TjzNcFnpUTS7Ym5TXxU5Ag();
    d.CS___8__locals38 = a;
    d.x = b;
    d.y = c;
    e = MQAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(d, '__ctor_b__e'));
    return e;
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__f
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__f = function (b)
  {
    return IwAABne06jm5i7qNIX6ZzA(this.MapSize.get_Top(), this.MapSize.get_Height());
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__10
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__10 = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__11
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__11 = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new cKFnwF0qlT_asnmTBuz4TYw();
    d.CS___8__locals38 = a;
    d.c = c;
    HgAABuTOYTqpYs14xNZZlQ(b, new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__12'));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__14
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__14 = function (b, c, d, e)
  {
    var a = this, f, g, h, i;

    e = (e * a.Zoom);
    f = a.GetCenter.Invoke();
    g = a.Translate.Invoke(b, c);
    f.X = (f.X + KAAABuTOYTqpYs14xNZZlQ(g.X, (a.bg_size.get_w() / 2)));
    f.Y = (f.Y + KAAABuTOYTqpYs14xNZZlQ(g.Y, (a.bg_size.get_h() / 2)));
    h = (f.X - (a.bg_size.get_w() / 2));
    i = ((f.Y - (a.bg_size.get_h() / 2)) - (e - a.bg_size.get_h()));
    pgAABgnDWDenzWX06iPvnw(d.style, JgAABuTOYTqpYs14xNZZlQ(h), JgAABuTOYTqpYs14xNZZlQ(i), a.bg_size.get_w(), JgAABuTOYTqpYs14xNZZlQ(e));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__15
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__15 = function (b, c, d)
  {
    var a = this, e, f, g;

    g = /* DOMCreateType */new thP0iXjiSz_awT3nac0BWGQ();
    g.CS___8__locals38 = a;
    g.c = b;
    g.src = c;
    g.h = d;

    if (!(awAABGcoAzW7munX7hJ_bTQ))
    {
      awAABGcoAzW7munX7hJ_bTQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ygAABmcoAzW7munX7hJ_bTQ');
    }


    if (!(awAABGcoAzW7munX7hJ_bTQ))
    {
      awAABGcoAzW7munX7hJ_bTQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ygAABmcoAzW7munX7hJ_bTQ');
    }

    LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__16')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__17')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__18')), awAABGcoAzW7munX7hJ_bTQ);

    if (!(bAAABGcoAzW7munX7hJ_bTQ))
    {
      bAAABGcoAzW7munX7hJ_bTQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ywAABmcoAzW7munX7hJ_bTQ');
    }

    e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__16')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__17')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__18')), awAABGcoAzW7munX7hJ_bTQ), bAAABGcoAzW7munX7hJ_bTQ);

    if (!(bQAABGcoAzW7munX7hJ_bTQ))
    {
      bQAABGcoAzW7munX7hJ_bTQ = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'zAAABmcoAzW7munX7hJ_bTQ');
    }

    f = nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(e), bQAABGcoAzW7munX7hJ_bTQ);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__1e
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__1e = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__1f
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__1f = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new f1FzyxHlxzKs9M0hjgrqaQ();
    c.CS___8__locals38 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Top(), a.MapSize.get_Height()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__20'))));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__21
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__21 = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__22
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__22 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new oHNzLkuf8jutkp8pVCJoaw();
    c.CS___8__locals38 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Left(), a.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__23'))));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__24
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__24 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__27
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__27 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__28
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__28 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new DV1JADLSNzqVwq_anOcS8iQ();
    c.CS___8__locals38 = a;
    c.a = b;
    d = new ctor$owAABriW_aT2Zoc9EA_aVyNA(c.a, PAAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__29')));
    return d;
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__2b
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__2b = function (b)
  {
    return new ctor$qQAABtmOyTCjIOK5nXjUGg(b, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_a().get_x(), b.get_a().get_y(), this.TileColorRoad3));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__2e
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__2e = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__31
  type$Ocd2AmcoAzW7munX7hJ_bTQ.__ctor_b__31 = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.RotationA) == 45);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__1a
  function ygAABmcoAzW7munX7hJ_bTQ(b)
  {
    var c, d;

    c = /* DOMCreateType */new N0tOKoBejDmp4ijAatJwnQ();
    c.__h__TransparentIdentifier2 = b;
    d = new ctor$lgAABgsJ9zWGYfBUozCjKg(c.__h__TransparentIdentifier2, kAUABuKCPTKGRKjkr5dWuA(mQAABuVHczWYsGvbmU49oA(c.__h__TransparentIdentifier2.get___h__TransparentIdentifier1().get_img(), new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '__ctor_b__1b'))));
    return d;
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__1c
  function ywAABmcoAzW7munX7hJ_bTQ(b)
  {
    return new ctor$nAAABvQbCDWguI23OE0esw(b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_point(), b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_img(), b.get___h__TransparentIdentifier2().get_update());
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37.<.ctor>b__1d
  function zAAABmcoAzW7munX7hJ_bTQ(b)
  {
    b.get_update().Invoke();
  };

  // Closure type
  function hmQUm22nIDG9SFj5BufBdg() {}  type$hmQUm22nIDG9SFj5BufBdg = hmQUm22nIDG9SFj5BufBdg.prototype =   {
    constructor: hmQUm22nIDG9SFj5BufBdg,
    CS___8__locals38: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass3a.<.ctor>b__b
  type$hmQUm22nIDG9SFj5BufBdg.__ctor_b__b = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function TjzNcFnpUTS7Ym5TXxU5Ag() {}  type$TjzNcFnpUTS7Ym5TXxU5Ag = TjzNcFnpUTS7Ym5TXxU5Ag.prototype =   {
    constructor: TjzNcFnpUTS7Ym5TXxU5Ag,
    CS___8__locals38: null,
    x: null,
    y: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass3c.<.ctor>b__e
  type$TjzNcFnpUTS7Ym5TXxU5Ag.__ctor_b__e = function (b)
  {
    var a = this, c, d;

    d = (b.get_x() == a.x);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = (b.get_y() == a.y);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function cKFnwF0qlT_asnmTBuz4TYw() {}  type$cKFnwF0qlT_asnmTBuz4TYw = cKFnwF0qlT_asnmTBuz4TYw.prototype =   {
    constructor: cKFnwF0qlT_asnmTBuz4TYw,
    CS___8__locals38: null,
    c: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass3e.<.ctor>b__12
  type$cKFnwF0qlT_asnmTBuz4TYw.__ctor_b__12 = function ()
  {
    var a = this, b;

    b = mwAABuVHczWYsGvbmU49oA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__locals38.data, new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__13')));
    a.CS___8__locals38.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals38.data, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_x(), b.get_y(), a.c)));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass3e.<.ctor>b__13
  type$cKFnwF0qlT_asnmTBuz4TYw.__ctor_b__13 = function (b)
  {
    return (b.get_color() == this.CS___8__locals38.TileColor);
  };

  // Closure type
  function thP0iXjiSz_awT3nac0BWGQ() {}  type$thP0iXjiSz_awT3nac0BWGQ = thP0iXjiSz_awT3nac0BWGQ.prototype =   {
    constructor: thP0iXjiSz_awT3nac0BWGQ,
    CS___8__locals38: null,
    c: null,
    src: null,
    h: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass43.<.ctor>b__16
  type$thP0iXjiSz_awT3nac0BWGQ.__ctor_b__16 = function (b)
  {
    return (b.get_color() == this.c);
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass43.<.ctor>b__17
  type$thP0iXjiSz_awT3nac0BWGQ.__ctor_b__17 = function (b)
  {
    return new ctor$igAABvWqKz2I8o1VI_b3Oew(b, tAAABrjicT6QHyVOJrkEhA(this.src));
  };

  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass43.<.ctor>b__18
  type$thP0iXjiSz_awT3nac0BWGQ.__ctor_b__18 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new D_aR1yQ5kWTGS1Kn3UazhXA();
    c.CS___8__locals44 = a;
    c.CS___8__locals38 = a.CS___8__locals38;
    c.__h__TransparentIdentifier1 = b;
    d = new ctor$kAAABggiQzKMV4NqKAcaWg(c.__h__TransparentIdentifier1, new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__19'));
    return d;
  };

  // Closure type
  function D_aR1yQ5kWTGS1Kn3UazhXA() {}  type$D_aR1yQ5kWTGS1Kn3UazhXA = D_aR1yQ5kWTGS1Kn3UazhXA.prototype =   {
    constructor: D_aR1yQ5kWTGS1Kn3UazhXA,
    CS___8__locals44: null,
    CS___8__locals38: null,
    __h__TransparentIdentifier1: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass43+<>c__DisplayClass45.<.ctor>b__19
  type$D_aR1yQ5kWTGS1Kn3UazhXA.__ctor_b__19 = function ()
  {
    var a = this;

    a.CS___8__locals38.bg_update_WithHeight.Invoke(a.__h__TransparentIdentifier1.get_point().get_x(), a.__h__TransparentIdentifier1.get_point().get_y(), a.__h__TransparentIdentifier1.get_img(), a.CS___8__locals44.h);
  };

  // Closure type
  function N0tOKoBejDmp4ijAatJwnQ() {}  type$N0tOKoBejDmp4ijAatJwnQ = N0tOKoBejDmp4ijAatJwnQ.prototype =   {
    constructor: N0tOKoBejDmp4ijAatJwnQ,
    __h__TransparentIdentifier2: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass47.<.ctor>b__1b
  type$N0tOKoBejDmp4ijAatJwnQ.__ctor_b__1b = function (b)
  {
    var a = this;

    a.__h__TransparentIdentifier2.get_update().Invoke();
  };

  // Closure type
  function f1FzyxHlxzKs9M0hjgrqaQ() {}  type$f1FzyxHlxzKs9M0hjgrqaQ = f1FzyxHlxzKs9M0hjgrqaQ.prototype =   {
    constructor: f1FzyxHlxzKs9M0hjgrqaQ,
    CS___8__locals38: null,
    road: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass49.<.ctor>b__20
  type$f1FzyxHlxzKs9M0hjgrqaQ.__ctor_b__20 = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(this.road.get_x(), b, this.road.get_color());
  };

  // Closure type
  function oHNzLkuf8jutkp8pVCJoaw() {}  type$oHNzLkuf8jutkp8pVCJoaw = oHNzLkuf8jutkp8pVCJoaw.prototype =   {
    constructor: oHNzLkuf8jutkp8pVCJoaw,
    CS___8__locals38: null,
    road: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass4b.<.ctor>b__23
  type$oHNzLkuf8jutkp8pVCJoaw.__ctor_b__23 = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, this.road.get_y(), this.road.get_color());
  };

  // Closure type
  function DV1JADLSNzqVwq_anOcS8iQ() {}  type$DV1JADLSNzqVwq_anOcS8iQ = DV1JADLSNzqVwq_anOcS8iQ.prototype =   {
    constructor: DV1JADLSNzqVwq_anOcS8iQ,
    CS___8__locals38: null,
    a: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass37+<>c__DisplayClass51.<.ctor>b__29
  type$DV1JADLSNzqVwq_anOcS8iQ.__ctor_b__29 = function (b)
  {
    var a = this, c, d, e;

    c = (b.get_color() == a.CS___8__locals38.TileColorRoad2);
    d = ((b.get_x() != a.a.get_x()) ? 0 : (b.get_y() == a.a.get_y()));
    e = (c && d);
    return e;
  };

  // Closure type
  function mKrzN8o_b0DK3kbUosN3awQ() {}  type$mKrzN8o_b0DK3kbUosN3awQ = mKrzN8o_b0DK3kbUosN3awQ.prototype =   {
    constructor: mKrzN8o_b0DK3kbUosN3awQ,
    CS___8__locals38: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass4d.<.ctor>b__25
  type$mKrzN8o_b0DK3kbUosN3awQ.__ctor_b__25 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new O6X0DzRShjiUhI9NMOcuOg();
    c.CS___8__locals4e = a;
    c.CS___8__locals38 = a.CS___8__locals38;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals38.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals38.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals38.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__26'));
    return d;
  };

  // Closure type
  function O6X0DzRShjiUhI9NMOcuOg() {}  type$O6X0DzRShjiUhI9NMOcuOg = O6X0DzRShjiUhI9NMOcuOg.prototype =   {
    constructor: O6X0DzRShjiUhI9NMOcuOg,
    CS___8__locals4e: null,
    CS___8__locals38: null,
    v: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass4d+<>c__DisplayClass4f.<.ctor>b__26
  type$O6X0DzRShjiUhI9NMOcuOg.__ctor_b__26 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == b.get_y()));
    return c;
  };

  // Closure type
  function tlI0_aZB0QzmAgFw6Ex1r_bQ() {}  type$tlI0_aZB0QzmAgFw6Ex1r_bQ = tlI0_aZB0QzmAgFw6Ex1r_bQ.prototype =   {
    constructor: tlI0_aZB0QzmAgFw6Ex1r_bQ,
    CS___8__locals38: null,
    v: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass54.<.ctor>b__2d
  type$tlI0_aZB0QzmAgFw6Ex1r_bQ.__ctor_b__2d = function (b)
  {
    var a = this, c, d;

    d = !(b == a.v.get_a());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b == a.v.get_b());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function cf8vxa1g0jenPRfSWxrTsg() {}  type$cf8vxa1g0jenPRfSWxrTsg = cf8vxa1g0jenPRfSWxrTsg.prototype =   {
    constructor: cf8vxa1g0jenPRfSWxrTsg,
    CS___8__locals38: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass56.<.ctor>b__2f
  type$cf8vxa1g0jenPRfSWxrTsg.__ctor_b__2f = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new ihk98J5IWDaAReRPoxL1aQ();
    c.CS___8__locals57 = a;
    c.CS___8__locals38 = a.CS___8__locals38;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals38.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals38.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals38.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__30'));
    return d;
  };

  // Closure type
  function ihk98J5IWDaAReRPoxL1aQ() {}  type$ihk98J5IWDaAReRPoxL1aQ = ihk98J5IWDaAReRPoxL1aQ.prototype =   {
    constructor: ihk98J5IWDaAReRPoxL1aQ,
    CS___8__locals57: null,
    CS___8__locals38: null,
    v: null
  }
;
  // ThreeDStuff.js.Isometric+<>c__DisplayClass56+<>c__DisplayClass58.<.ctor>b__30
  type$ihk98J5IWDaAReRPoxL1aQ.__ctor_b__30 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == a.v.get_y()));
    return c;
  };

  // Anonymous type
  function P3oyiHSvaDGF0W_bnoNUWDw() {}  type$P3oyiHSvaDGF0W_bnoNUWDw = P3oyiHSvaDGF0W_bnoNUWDw.prototype =   {
    constructor: P3oyiHSvaDGF0W_bnoNUWDw,
    _index_i__Field: null,
    _direction_i__Field: null
  }
;
  // <>f__AnonymousTypeb`2.get_index
  type$P3oyiHSvaDGF0W_bnoNUWDw.get_index = function ()
  {
    return this._index_i__Field;
  };

  // <>f__AnonymousTypeb`2.get_direction
  type$P3oyiHSvaDGF0W_bnoNUWDw.get_direction = function ()
  {
    return this._direction_i__Field;
  };

  // <>f__AnonymousTypeb`2.ToString
  type$P3oyiHSvaDGF0W_bnoNUWDw.toString /* <>f__AnonymousTypeb`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ index = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._index_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', direction = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._direction_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    P3oyiHSvaDGF0W_bnoNUWDw.prototype.toString /* System.Object.ToString */ = P3oyiHSvaDGF0W_bnoNUWDw.prototype.toString /* <>f__AnonymousTypeb`2.ToString */;

  // <>f__AnonymousTypeb`2.Equals
  type$P3oyiHSvaDGF0W_bnoNUWDw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    P3oyiHSvaDGF0W_bnoNUWDw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = P3oyiHSvaDGF0W_bnoNUWDw.prototype.Equals;

  // <>f__AnonymousTypeb`2.GetHashCode
  type$P3oyiHSvaDGF0W_bnoNUWDw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    P3oyiHSvaDGF0W_bnoNUWDw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = P3oyiHSvaDGF0W_bnoNUWDw.prototype.GetHashCode;

  // <>f__AnonymousTypeb`2..ctor
  type$P3oyiHSvaDGF0W_bnoNUWDw._7AAABnSvaDGF0W_bnoNUWDw = function (b, c)
  {
    var a = this;

    a._index_i__Field = b;
    a._direction_i__Field = c;
  };
  var ctor$_7AAABnSvaDGF0W_bnoNUWDw = $ctor$(null, '_7AAABnSvaDGF0W_bnoNUWDw', type$P3oyiHSvaDGF0W_bnoNUWDw);
  // Anonymous type
  function qjHfwzYdFjuC9C2KyY35Nw() {}  type$qjHfwzYdFjuC9C2KyY35Nw = qjHfwzYdFjuC9C2KyY35Nw.prototype =   {
    constructor: qjHfwzYdFjuC9C2KyY35Nw,
    ___h__TransparentIdentifier6_i__Field: null,
    _distance_i__Field: null
  }
;
  // <>f__AnonymousTypec`2.get_<>h__TransparentIdentifier6
  type$qjHfwzYdFjuC9C2KyY35Nw.get___h__TransparentIdentifier6 = function ()
  {
    return this.___h__TransparentIdentifier6_i__Field;
  };

  // <>f__AnonymousTypec`2.get_distance
  type$qjHfwzYdFjuC9C2KyY35Nw.get_distance = function ()
  {
    return this._distance_i__Field;
  };

  // <>f__AnonymousTypec`2.ToString
  type$qjHfwzYdFjuC9C2KyY35Nw.toString /* <>f__AnonymousTypec`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier6 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier6_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', distance = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._distance_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    qjHfwzYdFjuC9C2KyY35Nw.prototype.toString /* System.Object.ToString */ = qjHfwzYdFjuC9C2KyY35Nw.prototype.toString /* <>f__AnonymousTypec`2.ToString */;

  // <>f__AnonymousTypec`2.Equals
  type$qjHfwzYdFjuC9C2KyY35Nw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    qjHfwzYdFjuC9C2KyY35Nw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = qjHfwzYdFjuC9C2KyY35Nw.prototype.Equals;

  // <>f__AnonymousTypec`2.GetHashCode
  type$qjHfwzYdFjuC9C2KyY35Nw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    qjHfwzYdFjuC9C2KyY35Nw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = qjHfwzYdFjuC9C2KyY35Nw.prototype.GetHashCode;

  // <>f__AnonymousTypec`2..ctor
  type$qjHfwzYdFjuC9C2KyY35Nw._8gAABjYdFjuC9C2KyY35Nw = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier6_i__Field = b;
    a._distance_i__Field = c;
  };
  var ctor$_8gAABjYdFjuC9C2KyY35Nw = $ctor$(null, '_8gAABjYdFjuC9C2KyY35Nw', type$qjHfwzYdFjuC9C2KyY35Nw);
  // Anonymous type
  function LIDSHZ27jTS5KZx4JLqP_bw() {}  type$LIDSHZ27jTS5KZx4JLqP_bw = LIDSHZ27jTS5KZx4JLqP_bw.prototype =   {
    constructor: LIDSHZ27jTS5KZx4JLqP_bw,
    ___h__TransparentIdentifier7_i__Field: null,
    _mtarget_i__Field: null
  }
;
  // <>f__AnonymousTyped`2.get_<>h__TransparentIdentifier7
  type$LIDSHZ27jTS5KZx4JLqP_bw.get___h__TransparentIdentifier7 = function ()
  {
    return this.___h__TransparentIdentifier7_i__Field;
  };

  // <>f__AnonymousTyped`2.get_mtarget
  type$LIDSHZ27jTS5KZx4JLqP_bw.get_mtarget = function ()
  {
    return this._mtarget_i__Field;
  };

  // <>f__AnonymousTyped`2.ToString
  type$LIDSHZ27jTS5KZx4JLqP_bw.toString /* <>f__AnonymousTyped`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier7 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier7_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', mtarget = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._mtarget_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    LIDSHZ27jTS5KZx4JLqP_bw.prototype.toString /* System.Object.ToString */ = LIDSHZ27jTS5KZx4JLqP_bw.prototype.toString /* <>f__AnonymousTyped`2.ToString */;

  // <>f__AnonymousTyped`2.Equals
  type$LIDSHZ27jTS5KZx4JLqP_bw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    LIDSHZ27jTS5KZx4JLqP_bw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = LIDSHZ27jTS5KZx4JLqP_bw.prototype.Equals;

  // <>f__AnonymousTyped`2.GetHashCode
  type$LIDSHZ27jTS5KZx4JLqP_bw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    LIDSHZ27jTS5KZx4JLqP_bw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = LIDSHZ27jTS5KZx4JLqP_bw.prototype.GetHashCode;

  // <>f__AnonymousTyped`2..ctor
  type$LIDSHZ27jTS5KZx4JLqP_bw.__aAAABp27jTS5KZx4JLqP_bw = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier7_i__Field = b;
    a._mtarget_i__Field = c;
  };
  var ctor$__aAAABp27jTS5KZx4JLqP_bw = $ctor$(null, '__aAAABp27jTS5KZx4JLqP_bw', type$LIDSHZ27jTS5KZx4JLqP_bw);
  // Anonymous type
  function SAXaJMMs9zKjscGqZxx_b6g() {}  type$SAXaJMMs9zKjscGqZxx_b6g = SAXaJMMs9zKjscGqZxx_b6g.prototype =   {
    constructor: SAXaJMMs9zKjscGqZxx_b6g,
    ___h__TransparentIdentifier8_i__Field: null,
    _mcanvas_i__Field: null
  }
;
  // <>f__AnonymousTypee`2.get_<>h__TransparentIdentifier8
  type$SAXaJMMs9zKjscGqZxx_b6g.get___h__TransparentIdentifier8 = function ()
  {
    return this.___h__TransparentIdentifier8_i__Field;
  };

  // <>f__AnonymousTypee`2.get_mcanvas
  type$SAXaJMMs9zKjscGqZxx_b6g.get_mcanvas = function ()
  {
    return this._mcanvas_i__Field;
  };

  // <>f__AnonymousTypee`2.ToString
  type$SAXaJMMs9zKjscGqZxx_b6g.toString /* <>f__AnonymousTypee`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier8 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier8_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', mcanvas = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._mcanvas_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    SAXaJMMs9zKjscGqZxx_b6g.prototype.toString /* System.Object.ToString */ = SAXaJMMs9zKjscGqZxx_b6g.prototype.toString /* <>f__AnonymousTypee`2.ToString */;

  // <>f__AnonymousTypee`2.Equals
  type$SAXaJMMs9zKjscGqZxx_b6g.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    SAXaJMMs9zKjscGqZxx_b6g.prototype.AwAABnwCHD6Y1dqcmGKqIQ = SAXaJMMs9zKjscGqZxx_b6g.prototype.Equals;

  // <>f__AnonymousTypee`2.GetHashCode
  type$SAXaJMMs9zKjscGqZxx_b6g.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    SAXaJMMs9zKjscGqZxx_b6g.prototype.BwAABnwCHD6Y1dqcmGKqIQ = SAXaJMMs9zKjscGqZxx_b6g.prototype.GetHashCode;

  // <>f__AnonymousTypee`2..ctor
  type$SAXaJMMs9zKjscGqZxx_b6g.__bgAABsMs9zKjscGqZxx_b6g = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier8_i__Field = b;
    a._mcanvas_i__Field = c;
  };
  var ctor$__bgAABsMs9zKjscGqZxx_b6g = $ctor$(null, '__bgAABsMs9zKjscGqZxx_b6g', type$SAXaJMMs9zKjscGqZxx_b6g);
  // Anonymous type
  function AnZF0W2dlTCHt7YU0FRUmw() {}  type$AnZF0W2dlTCHt7YU0FRUmw = AnZF0W2dlTCHt7YU0FRUmw.prototype =   {
    constructor: AnZF0W2dlTCHt7YU0FRUmw,
    _index_i__Field: null,
    _canvas_i__Field: null
  }
;
  // <>f__AnonymousTypef`2.get_index
  type$AnZF0W2dlTCHt7YU0FRUmw.get_index = function ()
  {
    return this._index_i__Field;
  };

  // <>f__AnonymousTypef`2.get_canvas
  type$AnZF0W2dlTCHt7YU0FRUmw.get_canvas = function ()
  {
    return this._canvas_i__Field;
  };

  // <>f__AnonymousTypef`2.ToString
  type$AnZF0W2dlTCHt7YU0FRUmw.toString /* <>f__AnonymousTypef`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ index = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._index_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', canvas = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._canvas_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    AnZF0W2dlTCHt7YU0FRUmw.prototype.toString /* System.Object.ToString */ = AnZF0W2dlTCHt7YU0FRUmw.prototype.toString /* <>f__AnonymousTypef`2.ToString */;

  // <>f__AnonymousTypef`2.Equals
  type$AnZF0W2dlTCHt7YU0FRUmw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    AnZF0W2dlTCHt7YU0FRUmw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = AnZF0W2dlTCHt7YU0FRUmw.prototype.Equals;

  // <>f__AnonymousTypef`2.GetHashCode
  type$AnZF0W2dlTCHt7YU0FRUmw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    AnZF0W2dlTCHt7YU0FRUmw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = AnZF0W2dlTCHt7YU0FRUmw.prototype.GetHashCode;

  // <>f__AnonymousTypef`2..ctor
  type$AnZF0W2dlTCHt7YU0FRUmw.BAEABm2dlTCHt7YU0FRUmw = function (b, c)
  {
    var a = this;

    a._index_i__Field = b;
    a._canvas_i__Field = c;
  };
  var ctor$BAEABm2dlTCHt7YU0FRUmw = $ctor$(null, 'BAEABm2dlTCHt7YU0FRUmw', type$AnZF0W2dlTCHt7YU0FRUmw);
  // Closure type
  function _04on_bqDwJTahmdZkaqeilQ() {}  var sQAABKDwJTahmdZkaqeilQ = null;
  var sgAABKDwJTahmdZkaqeilQ = null;
  var swAABKDwJTahmdZkaqeilQ = null;
  var tAAABKDwJTahmdZkaqeilQ = null;
  var tQAABKDwJTahmdZkaqeilQ = null;
  var tgAABKDwJTahmdZkaqeilQ = null;
  var twAABKDwJTahmdZkaqeilQ = null;
  var uAAABKDwJTahmdZkaqeilQ = null;
  var uQAABKDwJTahmdZkaqeilQ = null;
  var ugAABKDwJTahmdZkaqeilQ = null;
  var uwAABKDwJTahmdZkaqeilQ = null;
  var vAAABKDwJTahmdZkaqeilQ = null;
  type$_04on_bqDwJTahmdZkaqeilQ = _04on_bqDwJTahmdZkaqeilQ.prototype =   {
    constructor: _04on_bqDwJTahmdZkaqeilQ,
    info_text: null,
    info: null,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    MapSize: null,
    bg_size: null,
    GetCenter: null,
    arena: null,
    Translate: null,
    ApplyPosition: null,
    TileColor: null,
    TileColorHouse1: null,
    TileColorHouse2: null,
    TileColorTree1: null,
    TileColorRoad1: null,
    TileColorRoad2: null,
    TileColorRoad3: null,
    data: null,
    bg_update_WithHeight: null,
    SpawnItems: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__14
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__14 = function ()
  {
    var a = this, b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = ((a.bg_size.get_w() * a.MapSize.get_Width()) / 2);
    b.Y = ((a.bg_size.get_h() * a.MapSize.get_Height()) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__15
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__15 = function (b)
  {
    var a = this;

    pgAABgnDWDenzWX06iPvnw(a.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    a.info.style.height = 'auto';
    a.arena.CgAABtH5gzGOe58n5cZeTA(zgMABkJB5jyxJFE8zncqBQ(0, 0, EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window)));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__16
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__16 = function (b, c)
  {
    var a = this, d, e, f, g, h;

    d = a.GetCenter.Invoke();
    e = (MQAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) + a.RotationA);
    f = ((LgAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) * a.bg_size.get_h()) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(e) * f);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(e) * f) * a.RotationB);
    g = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    g.X = b;
    g.Y = c;
    h = g;
    return h;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__17
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__17 = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new kSv_aYr81mzmNm7rdP8rx7Q();
    j.CS___8__locals71 = a;
    j._x = b;
    j._y = c;
    try
    {
      e = a.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.Zoom * a.Dot));
      pgAABgnDWDenzWX06iPvnw(d.style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);
      kAUABuKCPTKGRKjkr5dWuA(d);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__18');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__19
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__19 = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__1a
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__1a = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new A5d5ghagWz65OWIIAeXHpA();
    d.CS___8__locals71 = a;
    d.x = b;
    d.y = c;
    e = MQAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(d, '__ctor_b__1b'));
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__1c
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__1c = function (b)
  {
    return IwAABne06jm5i7qNIX6ZzA(this.MapSize.get_Top(), this.MapSize.get_Height());
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__1d
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__1d = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__1e
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__1e = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new yw8pJj8w_bzWi2t_aYAuSwsA();
    d.CS___8__locals71 = a;
    d.c = c;
    HgAABuTOYTqpYs14xNZZlQ(b, new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__1f'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__21
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__21 = function (b, c, d, e)
  {
    var a = this, f, g, h, i, j;

    e = (e * a.Zoom);
    f = a.GetCenter.Invoke();
    g = a.Translate.Invoke(b, c);
    f.X = (f.X + KAAABuTOYTqpYs14xNZZlQ(g.X, (a.bg_size.get_w() / 2)));
    f.Y = (f.Y + KAAABuTOYTqpYs14xNZZlQ(g.Y, (a.bg_size.get_h() / 2)));
    h = (f.X - (a.bg_size.get_w() / 2));
    i = ((f.Y - (a.bg_size.get_h() / 2)) - (e - a.bg_size.get_h()));
    pgAABgnDWDenzWX06iPvnw(d.style, JgAABuTOYTqpYs14xNZZlQ(h), JgAABuTOYTqpYs14xNZZlQ(i), a.bg_size.get_w(), JgAABuTOYTqpYs14xNZZlQ(e));
    j = !(e > a.bg_size.get_h());

    if (!j)
    {
      d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(((i + e) - (a.bg_size.get_h() / 2)));
    }

  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__22
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__22 = function (b, c, d)
  {
    var a = this, e, f, g;

    g = /* DOMCreateType */new mmnk3CBk7zC9ACQGmS1Ouw();
    g.CS___8__locals71 = a;
    g.c = b;
    g.src = c;
    g.h = d;

    if (!(sQAABKDwJTahmdZkaqeilQ))
    {
      sQAABKDwJTahmdZkaqeilQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'IAEABqDwJTahmdZkaqeilQ');
    }

    e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__23')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__24')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__25')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__27')), sQAABKDwJTahmdZkaqeilQ);

    if (!(sgAABKDwJTahmdZkaqeilQ))
    {
      sgAABKDwJTahmdZkaqeilQ = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'IQEABqDwJTahmdZkaqeilQ');
    }

    f = nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(e), sgAABKDwJTahmdZkaqeilQ);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__2b
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__2b = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__2c
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__2c = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new Nw8QXWtqaD66zRKZUuSNKw();
    c.CS___8__locals71 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Top(), a.MapSize.get_Height()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__2d'))));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__2e
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__2e = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__2f
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__2f = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new SUlmsV1xlTqe9yXu0ILzjQ();
    c.CS___8__locals71 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Left(), a.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__30'))));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__31
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__31 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__34
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__34 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__35
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__35 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new WgnrbPbTCDG5thtausFC9w();
    c.CS___8__locals71 = a;
    c.a = b;
    d = new ctor$owAABriW_aT2Zoc9EA_aVyNA(c.a, PAAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__36')));
    return d;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__38
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__38 = function (b)
  {
    return new ctor$qQAABtmOyTCjIOK5nXjUGg(b, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_a().get_x(), b.get_a().get_y(), this.TileColorRoad3));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__3b
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__3b = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__3e
  type$_04on_bqDwJTahmdZkaqeilQ.__ctor_b__3e = function ()
  {
    var a = this, b, c, d, e;

    e = /* DOMCreateType */new _06XEhB_b2fzaCymhTOJrXtA();
    e.CS___8__locals71 = a;

    if (!(swAABKDwJTahmdZkaqeilQ))
    {
      swAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'IgEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColor, swAABKDwJTahmdZkaqeilQ, 32);

    if (!(tAAABKDwJTahmdZkaqeilQ))
    {
      tAAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'IwEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad1, tAAABKDwJTahmdZkaqeilQ, 32);

    if (!(tQAABKDwJTahmdZkaqeilQ))
    {
      tQAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'JAEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad2, tQAABKDwJTahmdZkaqeilQ, 32);

    if (!(tgAABKDwJTahmdZkaqeilQ))
    {
      tgAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'JQEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad3, tgAABKDwJTahmdZkaqeilQ, 32);

    if (!(twAABKDwJTahmdZkaqeilQ))
    {
      twAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'JgEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorHouse1, twAABKDwJTahmdZkaqeilQ, 52);

    if (!(uAAABKDwJTahmdZkaqeilQ))
    {
      uAAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'JwEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorHouse2, uAAABKDwJTahmdZkaqeilQ, 96);

    if (!(uQAABKDwJTahmdZkaqeilQ))
    {
      uQAABKDwJTahmdZkaqeilQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'KAEABqDwJTahmdZkaqeilQ');
    }

    a.SpawnItems.Invoke(a.TileColorTree1, uQAABKDwJTahmdZkaqeilQ, 65);
    b = new ctor$AQAABnzJ4DW0TmzxD3LiJg(e, '__ctor_b__46');
    e.SpawnLookingDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(e, '__ctor_b__47');
    c = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    c.Frames_Stand = AQAABsQegDePdXlnkXNNUg();
    c.Frames_Walk = AgAABsQegDePdXlnkXNNUg();
    e.dude = c;
    d = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    d.Frames_Stand = AwAABsQegDePdXlnkXNNUg();
    d.Frames_Walk = BAAABsQegDePdXlnkXNNUg();
    e.imp = d;
    e.loaded = 0;

    if (!(ugAABKDwJTahmdZkaqeilQ))
    {
      ugAABKDwJTahmdZkaqeilQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'KQEABqDwJTahmdZkaqeilQ');
    }

    e.loaded = (e.loaded + (e.dude.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(e.dude.Frames_Walk, ugAABKDwJTahmdZkaqeilQ)));

    if (!(uwAABKDwJTahmdZkaqeilQ))
    {
      uwAABKDwJTahmdZkaqeilQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'KgEABqDwJTahmdZkaqeilQ');
    }

    e.loaded = (e.loaded + (e.imp.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(e.imp.Frames_Walk, uwAABKDwJTahmdZkaqeilQ)));

    if (!(vAAABKDwJTahmdZkaqeilQ))
    {
      vAAABKDwJTahmdZkaqeilQ = new ctor$QgcABmsdnzuyVw4sufJzAw(null, 'KwEABqDwJTahmdZkaqeilQ');
    }

    e.loaded_done = vAAABKDwJTahmdZkaqeilQ;
    e.loadone = new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__4c');
    OQAABgAjajq2ygojxk6uUQ(a.info, 'Loading images...');
    nAAABuVHczWYsGvbmU49oA(e.dude.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__4d'));
    nAAABuVHczWYsGvbmU49oA(e.dude.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__4f'));
    nAAABuVHczWYsGvbmU49oA(e.imp.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__52'));
    nAAABuVHczWYsGvbmU49oA(e.imp.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__54'));
    e.Dudes = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    e.loaded_done = iwYABnzY4jaVovIDSMIxgQ(e.loaded_done, new ctor$QgcABmsdnzuyVw4sufJzAw(e, '__ctor_b__57'));
    e.KnownCanvasPosition = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    e.GetMapPosition = new ctor$AQAABnzJ4DW0TmzxD3LiJg(e, '__ctor_b__60');
    a.arena.HwAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(e, '__ctor_b__61'));
    a.arena.HQAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(e, '__ctor_b__62'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__29
  function IAEABqDwJTahmdZkaqeilQ(b)
  {
    return new ctor$nAAABvQbCDWguI23OE0esw(b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_point(), b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_img(), b.get___h__TransparentIdentifier2().get_update());
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__2a
  function IQEABqDwJTahmdZkaqeilQ(b)
  {
    b.get_update().Invoke();
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__3f
  function IgEABqDwJTahmdZkaqeilQ()
  {
    var b, c;

    c = !IAAABuTOYTqpYs14xNZZlQ(0.05);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f1.png';
      return b;
    }

    c = !IAAABuTOYTqpYs14xNZZlQ(0.09);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f2.png';
      return b;
    }

    b = 'assets\u002fThreeDStuff\u002f0.png';
    return b;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__40
  function IwEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002fr1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__41
  function JAEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002fr2.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__42
  function JQEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002fr3.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__43
  function JgEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002fh1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__44
  function JwEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002fh2.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__45
  function KAEABqDwJTahmdZkaqeilQ()
  {
    return 'assets\u002fThreeDStuff\u002ft1.png';
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__49
  function KQEABqDwJTahmdZkaqeilQ(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__4a
  function KgEABqDwJTahmdZkaqeilQ(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70.<.ctor>b__4b
  function KwEABqDwJTahmdZkaqeilQ()
  {
  };

  // Closure type
  function kSv_aYr81mzmNm7rdP8rx7Q() {}  type$kSv_aYr81mzmNm7rdP8rx7Q = kSv_aYr81mzmNm7rdP8rx7Q.prototype =   {
    constructor: kSv_aYr81mzmNm7rdP8rx7Q,
    CS___8__locals71: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass73.<.ctor>b__18
  type$kSv_aYr81mzmNm7rdP8rx7Q.__ctor_b__18 = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function A5d5ghagWz65OWIIAeXHpA() {}  type$A5d5ghagWz65OWIIAeXHpA = A5d5ghagWz65OWIIAeXHpA.prototype =   {
    constructor: A5d5ghagWz65OWIIAeXHpA,
    CS___8__locals71: null,
    x: null,
    y: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass75.<.ctor>b__1b
  type$A5d5ghagWz65OWIIAeXHpA.__ctor_b__1b = function (b)
  {
    var a = this, c, d;

    d = (b.get_x() == a.x);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = (b.get_y() == a.y);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function yw8pJj8w_bzWi2t_aYAuSwsA() {}  type$yw8pJj8w_bzWi2t_aYAuSwsA = yw8pJj8w_bzWi2t_aYAuSwsA.prototype =   {
    constructor: yw8pJj8w_bzWi2t_aYAuSwsA,
    CS___8__locals71: null,
    c: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass77.<.ctor>b__1f
  type$yw8pJj8w_bzWi2t_aYAuSwsA.__ctor_b__1f = function ()
  {
    var a = this, b;

    b = mwAABuVHczWYsGvbmU49oA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__locals71.data, new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__20')));
    a.CS___8__locals71.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals71.data, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_x(), b.get_y(), a.c)));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass77.<.ctor>b__20
  type$yw8pJj8w_bzWi2t_aYAuSwsA.__ctor_b__20 = function (b)
  {
    return (b.get_color() == this.CS___8__locals71.TileColor);
  };

  // Closure type
  function mmnk3CBk7zC9ACQGmS1Ouw() {}  type$mmnk3CBk7zC9ACQGmS1Ouw = mmnk3CBk7zC9ACQGmS1Ouw.prototype =   {
    constructor: mmnk3CBk7zC9ACQGmS1Ouw,
    CS___8__locals71: null,
    c: null,
    src: null,
    h: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b.<.ctor>b__23
  type$mmnk3CBk7zC9ACQGmS1Ouw.__ctor_b__23 = function (b)
  {
    return (b.get_color() == this.c);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b.<.ctor>b__24
  type$mmnk3CBk7zC9ACQGmS1Ouw.__ctor_b__24 = function (b)
  {
    return new ctor$igAABvWqKz2I8o1VI_b3Oew(b, tAAABrjicT6QHyVOJrkEhA(this.src.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b.<.ctor>b__25
  type$mmnk3CBk7zC9ACQGmS1Ouw.__ctor_b__25 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new FhmogwaPCDSFjnH_aNtcIGQ();
    c.CS___8__locals7c = a;
    c.CS___8__locals71 = a.CS___8__locals71;
    c.__h__TransparentIdentifier1 = b;
    d = new ctor$kAAABggiQzKMV4NqKAcaWg(c.__h__TransparentIdentifier1, new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__26'));
    return d;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b.<.ctor>b__27
  type$mmnk3CBk7zC9ACQGmS1Ouw.__ctor_b__27 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new xU1nXjub0jqeDkjXuvDy1g();
    c.CS___8__locals7c = a;
    c.CS___8__locals71 = a.CS___8__locals71;
    c.__h__TransparentIdentifier2 = b;
    d = new ctor$lgAABgsJ9zWGYfBUozCjKg(c.__h__TransparentIdentifier2, kQUABuKCPTKGRKjkr5dWuA(mQAABuVHczWYsGvbmU49oA(c.__h__TransparentIdentifier2.get___h__TransparentIdentifier1().get_img(), new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '__ctor_b__28')), a.CS___8__locals71.arena.Layers.Canvas));
    return d;
  };

  // Closure type
  function FhmogwaPCDSFjnH_aNtcIGQ() {}  type$FhmogwaPCDSFjnH_aNtcIGQ = FhmogwaPCDSFjnH_aNtcIGQ.prototype =   {
    constructor: FhmogwaPCDSFjnH_aNtcIGQ,
    CS___8__locals7c: null,
    CS___8__locals71: null,
    __h__TransparentIdentifier1: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b+<>c__DisplayClass7d.<.ctor>b__26
  type$FhmogwaPCDSFjnH_aNtcIGQ.__ctor_b__26 = function ()
  {
    var a = this;

    a.CS___8__locals71.bg_update_WithHeight.Invoke(a.__h__TransparentIdentifier1.get_point().get_x(), a.__h__TransparentIdentifier1.get_point().get_y(), a.__h__TransparentIdentifier1.get_img(), a.CS___8__locals7c.h);
  };

  // Closure type
  function xU1nXjub0jqeDkjXuvDy1g() {}  type$xU1nXjub0jqeDkjXuvDy1g = xU1nXjub0jqeDkjXuvDy1g.prototype =   {
    constructor: xU1nXjub0jqeDkjXuvDy1g,
    CS___8__locals7c: null,
    CS___8__locals71: null,
    __h__TransparentIdentifier2: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass7b+<>c__DisplayClass7f.<.ctor>b__28
  type$xU1nXjub0jqeDkjXuvDy1g.__ctor_b__28 = function (b)
  {
    var a = this;

    a.__h__TransparentIdentifier2.get_update().Invoke();
  };

  // Closure type
  function Nw8QXWtqaD66zRKZUuSNKw() {}  type$Nw8QXWtqaD66zRKZUuSNKw = Nw8QXWtqaD66zRKZUuSNKw.prototype =   {
    constructor: Nw8QXWtqaD66zRKZUuSNKw,
    CS___8__locals71: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass81.<.ctor>b__2d
  type$Nw8QXWtqaD66zRKZUuSNKw.__ctor_b__2d = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(this.road.get_x(), b, this.road.get_color());
  };

  // Closure type
  function SUlmsV1xlTqe9yXu0ILzjQ() {}  type$SUlmsV1xlTqe9yXu0ILzjQ = SUlmsV1xlTqe9yXu0ILzjQ.prototype =   {
    constructor: SUlmsV1xlTqe9yXu0ILzjQ,
    CS___8__locals71: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass83.<.ctor>b__30
  type$SUlmsV1xlTqe9yXu0ILzjQ.__ctor_b__30 = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, this.road.get_y(), this.road.get_color());
  };

  // Closure type
  function WgnrbPbTCDG5thtausFC9w() {}  type$WgnrbPbTCDG5thtausFC9w = WgnrbPbTCDG5thtausFC9w.prototype =   {
    constructor: WgnrbPbTCDG5thtausFC9w,
    CS___8__locals71: null,
    a: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass89.<.ctor>b__36
  type$WgnrbPbTCDG5thtausFC9w.__ctor_b__36 = function (b)
  {
    var a = this, c, d, e;

    c = (b.get_color() == a.CS___8__locals71.TileColorRoad2);
    d = ((b.get_x() != a.a.get_x()) ? 0 : (b.get_y() == a.a.get_y()));
    e = (c && d);
    return e;
  };

  // Closure type
  function _06XEhB_b2fzaCymhTOJrXtA() {}  var _3wAABB_b2fzaCymhTOJrXtA = null;
  var _4AAABB_b2fzaCymhTOJrXtA = null;
  var _4QAABB_b2fzaCymhTOJrXtA = null;
  type$_06XEhB_b2fzaCymhTOJrXtA = _06XEhB_b2fzaCymhTOJrXtA.prototype =   {
    constructor: _06XEhB_b2fzaCymhTOJrXtA,
    CS___8__locals71: null,
    SpawnLookingDude: null,
    dude: null,
    imp: null,
    loaded: 0,
    loaded_done: null,
    loadone: null,
    Dudes: null,
    KnownCanvasPosition: null,
    GetMapPosition: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__46
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__46 = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.CS___8__locals71.RotationA) == 45);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__47
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__47 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = new ctor$RQAABvWf_aTisnHwd9OZ7jQ();
    f.OwAABvWf_aTisnHwd9OZ7jQ(b);
    e = f;
    e.AnimationInfo.Frames_Stand = b;

    if (!(_3wAABB_b2fzaCymhTOJrXtA))
    {
      _3wAABB_b2fzaCymhTOJrXtA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'TgEABh_b2fzaCymhTOJrXtA');
    }

    e.Zoom.DynamicZoomFunc = _3wAABB_b2fzaCymhTOJrXtA;
    e.Zoom.WwAABuqx2zmaq5bgaWr1zw(1);
    e.SgAABvWf_aTisnHwd9OZ7jQ(48, 72);
    e.IQAABnS9Rj2LTMsPW407VQ(c, d);
    kQUABuKCPTKGRKjkr5dWuA(e.Control, a.CS___8__locals71.arena.Layers.Canvas);
    e.PgAABvWf_aTisnHwd9OZ7jQ((IQAABuTOYTqpYs14xNZZlQ(3.14159265358979) * 2));
    g = e;
    return g;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__4c
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__4c = function (b)
  {
    var a = this, c;

    a.loaded = (a.loaded - 1);
    c = !!a.loaded;

    if (!c)
    {
      a.loaded_done.Invoke();
    }

  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__4d
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__4d = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__4e'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__4f
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__4f = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__50'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__52
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__52 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__53'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__54
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__54 = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__55'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__57
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__57 = function ()
  {
    var a = this, b;

    b = /* DOMCreateType */new _6xsT2WSMpj_ave_bSUn0jTMw();
    b.CS___8__locals9d = a;
    b.CS___8__locals71 = a.CS___8__locals71;
    OQAABgAjajq2ygojxk6uUQ(a.CS___8__locals71.info, 'Loading images... done');
    b.GetRandomCanvasPosition = new ctor$AQAABnzJ4DW0TmzxD3LiJg(b, '__ctor_b__58');
    b.CreateDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(b, '__ctor_b__59');
    a.CS___8__locals71.info.innerHTML = 'Creating dudes...';
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__5e'));
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__5f'));
    a.CS___8__locals71.info.innerHTML = a.CS___8__locals71.info_text;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__60
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__60 = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j;

    b = a.KnownCanvasPosition;
    c = a.CS___8__locals71.GetCenter.Invoke();
    h = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    h.X = (b.X - c.X);
    h.Y = ((b.Y - c.Y) / a.CS___8__locals71.RotationB);
    d = h;
    e = (LQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals71.ZeroPoint, d) / (a.CS___8__locals71.bg_size.get_h() * OgAABuTOYTqpYs14xNZZlQ(2)));
    f = (MAAABuTOYTqpYs14xNZZlQ(a.CS___8__locals71.ZeroPoint, d) - a.CS___8__locals71.RotationA);
    i = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    i.X = (ewYABlp1gTixwdv_axCXc_aQ(f) * e);
    i.Y = (fAYABlp1gTixwdv_axCXc_aQ(f) * e);
    g = i;
    j = g;
    return j;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__61
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__61 = function (b, c)
  {
    var a = this, d, e, f;

    e = a.Dudes.VwMABtmlXD2_bMcNB1Zdfiw();
    try
    {
      while (e.XgMABpJ7HjuHnaRo44rmHw())
      {
        d = e.WwMABpJ7HjuHnaRo44rmHw();
        f = !c.shiftKey;

        if (!f)
        {
          d.KAAABnS9Rj2LTMsPW407VQ((d.JwAABnS9Rj2LTMsPW407VQ() | b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ()))));
        }
        else
        {
          d.KAAABnS9Rj2LTMsPW407VQ(b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ())));
        }

      }
    }
    finally
    {
      ;
      e.xAAABq_bUDz_aWf_aXPRTEtLA();
    }
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__62
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__62 = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m;

    h = null;
    i = null;
    j = null;
    k = /* DOMCreateType */new _7PJ8x6ooNDuhmFaEs_a9jTw();
    k.CS___8__locals9d = a;
    k.CS___8__locals71 = a.CS___8__locals71;

    if (!(_4AAABB_b2fzaCymhTOJrXtA))
    {
      _4AAABB_b2fzaCymhTOJrXtA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'VQEABh_b2fzaCymhTOJrXtA');
    }

    k.selection = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.Dudes, _4AAABB_b2fzaCymhTOJrXtA));
    a.KnownCanvasPosition = b;
    k.target = a.GetMapPosition.Invoke();
    l = !!k.selection.length;

    if (!l)
    {
      return;
    }

    l = !(k.selection.length == 1);

    if (!l)
    {
      d = /* DOMCreateType */new __bhoNeoOPpTWyrBEoHcbzaA();
      d.CS___8__localsaa = k;
      d.CS___8__locals9d = a;
      d.CS___8__locals71 = a.CS___8__locals71;
      d.canvas = a.CS___8__locals71.Translate.Invoke(k.target.X, k.target.Y);
      d.canvas.X = (d.canvas.X + a.CS___8__locals71.GetCenter.Invoke().X);
      d.canvas.Y = (d.canvas.Y + a.CS___8__locals71.GetCenter.Invoke().Y);
      nAAABuVHczWYsGvbmU49oA(k.selection, new ctor$PgcABj6AjDWT6PYg1Srvkg(d, '__ctor_b__64'));
    }
    else
    {
      g = /* DOMCreateType */new mYUyIYjytzS4qfxnHj4L5w();
      g.CS___8__localsaa = k;
      g.CS___8__locals9d = a;
      g.CS___8__locals71 = a.CS___8__locals71;
      g.center = a.CS___8__locals71.GetCenter.Invoke();

      if (!h)
      {
        h = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(k, '__ctor_b__65');
      }

      g.GetRotatedTargetPoint = h;
      g.OffsetToCenter = new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__66');

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_4QAABB_b2fzaCymhTOJrXtA))
      {
        _4QAABB_b2fzaCymhTOJrXtA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'VgEABh_b2fzaCymhTOJrXtA');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_4QAABB_b2fzaCymhTOJrXtA))
      {
        _4QAABB_b2fzaCymhTOJrXtA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'VgEABh_b2fzaCymhTOJrXtA');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _4QAABB_b2fzaCymhTOJrXtA);

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__67');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_4QAABB_b2fzaCymhTOJrXtA))
      {
        _4QAABB_b2fzaCymhTOJrXtA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'VgEABh_b2fzaCymhTOJrXtA');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _4QAABB_b2fzaCymhTOJrXtA), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__69'));

      if (!j)
      {
        j = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__6a');
      }

      e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _4QAABB_b2fzaCymhTOJrXtA), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__69')), j), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__6b'));
      m = e.NgEABnMeWzaNooAKOmFm5g();
      try
      {
        while (m.qAAABu7N0xGI6ACQJ1TEOg())
        {
          f = m.xQAABrYmRzSu_anO2U_bk1MA();
          k.selection[f.get_index()].UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(f.get_canvas()));
        }
      }
      finally
      {
        l = (m == null);

        if (!l)
        {
          m.xAAABq_bUDz_aWf_aXPRTEtLA();
        }

      }
    }

  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__48
  function TgEABh_b2fzaCymhTOJrXtA(b)
  {
    return 1;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__4e
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__4e = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__50
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__50 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__51'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__51
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__51 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__53
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__53 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__55
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__55 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__56'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__56
  type$_06XEhB_b2fzaCymhTOJrXtA.__ctor_b__56 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__63
  function VQEABh_b2fzaCymhTOJrXtA(b)
  {
    return b.JwAABnS9Rj2LTMsPW407VQ();
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c.<.ctor>b__68
  function VgEABh_b2fzaCymhTOJrXtA(b)
  {
    return new ctor$_8gAABjYdFjuC9C2KyY35Nw(b, 0.5);
  };

  // Closure type
  function _6xsT2WSMpj_ave_bSUn0jTMw() {}  type$_6xsT2WSMpj_ave_bSUn0jTMw = _6xsT2WSMpj_ave_bSUn0jTMw.prototype =   {
    constructor: _6xsT2WSMpj_ave_bSUn0jTMw,
    CS___8__locals9d: null,
    CS___8__locals71: null,
    GetRandomCanvasPosition: null,
    CreateDude: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f.<.ctor>b__58
  type$_6xsT2WSMpj_ave_bSUn0jTMw.__ctor_b__58 = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    b = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals71.MapSize.get_Width() - 1)) + a.CS___8__locals71.MapSize.get_Left()) + 1);
    c = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals71.MapSize.get_Height() - 1)) + a.CS___8__locals71.MapSize.get_Top()) + 1);
    d = a.CS___8__locals71.Translate.Invoke(b, c);
    e = a.CS___8__locals71.GetCenter.Invoke();
    g = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    g.X = JgAABuTOYTqpYs14xNZZlQ((d.X + e.X));
    g.Y = JgAABuTOYTqpYs14xNZZlQ((d.Y + e.Y));
    f = g;
    h = f;
    return h;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f.<.ctor>b__59
  type$_6xsT2WSMpj_ave_bSUn0jTMw.__ctor_b__59 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = /* DOMCreateType */new k_bl2zKZXtz2kQypTCmmGkA();
    f.CS___8__localsa0 = a;
    f.CS___8__locals9d = a.CS___8__locals9d;
    f.CS___8__locals71 = a.CS___8__locals71;
    f.ScoutIfIdle = c;
    e = a.GetRandomCanvasPosition.Invoke();
    f.w2 = a.CS___8__locals9d.SpawnLookingDude.Invoke(b.Frames_Stand, IwAABuTOYTqpYs14xNZZlQ(e.X), IwAABuTOYTqpYs14xNZZlQ(e.Y));
    f.w2.Zoom.WwAABuqx2zmaq5bgaWr1zw(d);
    f.w2.AnimationInfo.Frames_Walk = b.Frames_Walk;
    f.w2.TargetLocationDistanceMultiplier = 1;
    f.GoSomeWhere = new ctor$PgcABj6AjDWT6PYg1Srvkg(f, '__ctor_b__5a');
    f.WaitSomeAndGoSomeWhere = null;
    f.WaitSomeAndGoSomeWhere = new ctor$QgcABmsdnzuyVw4sufJzAw(f, '__ctor_b__5b');
    f.WaitSomeAndGoSomeWhere.Invoke();
    g = f.w2;
    return g;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f.<.ctor>b__5e
  type$_6xsT2WSMpj_ave_bSUn0jTMw.__ctor_b__5e = function ()
  {
    var a = this;

    a.CS___8__locals9d.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__locals9d.dude, 0, 0.5));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f.<.ctor>b__5f
  type$_6xsT2WSMpj_ave_bSUn0jTMw.__ctor_b__5f = function ()
  {
    var a = this;

    a.CS___8__locals9d.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__locals9d.imp, 1, 0.5));
  };

  // Closure type
  function k_bl2zKZXtz2kQypTCmmGkA() {}  var _7QAABKZXtz2kQypTCmmGkA = null;
  type$k_bl2zKZXtz2kQypTCmmGkA = k_bl2zKZXtz2kQypTCmmGkA.prototype =   {
    constructor: k_bl2zKZXtz2kQypTCmmGkA,
    CS___8__localsa0: null,
    CS___8__locals9d: null,
    CS___8__locals71: null,
    w2: null,
    GoSomeWhere: null,
    WaitSomeAndGoSomeWhere: null,
    ScoutIfIdle: false
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f+<>c__DisplayClassa1.<.ctor>b__5a
  type$k_bl2zKZXtz2kQypTCmmGkA.__ctor_b__5a = function (b)
  {
    var a = this;

    a.w2.TQAABvWf_aTisnHwd9OZ7jQ(b);
    a.w2.UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(a.CS___8__localsa0.GetRandomCanvasPosition.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f+<>c__DisplayClassa1.<.ctor>b__5b
  type$k_bl2zKZXtz2kQypTCmmGkA.__ctor_b__5b = function ()
  {
    var a = this;

    KQAABuTOYTqpYs14xNZZlQ(IgAABuTOYTqpYs14xNZZlQ(5000), new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__5c'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f+<>c__DisplayClassa1.<.ctor>b__5c
  type$k_bl2zKZXtz2kQypTCmmGkA.__ctor_b__5c = function (b)
  {
    var a = this, c, d;


    if (!(_7QAABKZXtz2kQypTCmmGkA))
    {
      _7QAABKZXtz2kQypTCmmGkA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'YAEABqZXtz2kQypTCmmGkA');
    }

    c = NgAABne06jm5i7qNIX6ZzA(a.CS___8__locals9d.Dudes, _7QAABKZXtz2kQypTCmmGkA);
    d = !a.w2.OAAABvWf_aTisnHwd9OZ7jQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JwAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JQAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !(c > 3);

    if (!d)
    {
      a.w2.PgAABvWf_aTisnHwd9OZ7jQ(IQAABuTOYTqpYs14xNZZlQ(6.28318530717959));
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.ScoutIfIdle;

    if (!d)
    {
      a.GoSomeWhere.Invoke(a.WaitSomeAndGoSomeWhere);
      return;
    }

    a.WaitSomeAndGoSomeWhere.Invoke();
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClass9f+<>c__DisplayClassa1.<.ctor>b__5d
  function YAEABqZXtz2kQypTCmmGkA(b)
  {
    return b.OAAABvWf_aTisnHwd9OZ7jQ();
  };

  // Closure type
  function _7PJ8x6ooNDuhmFaEs_a9jTw() {}  type$_7PJ8x6ooNDuhmFaEs_a9jTw = _7PJ8x6ooNDuhmFaEs_a9jTw.prototype =   {
    constructor: _7PJ8x6ooNDuhmFaEs_a9jTw,
    CS___8__locals9d: null,
    CS___8__locals71: null,
    selection: null,
    target: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassa9.<.ctor>b__65
  type$_7PJ8x6ooNDuhmFaEs_a9jTw.__ctor_b__65 = function (b, c)
  {
    var a = this, d, e;

    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = (a.target.X + (ewYABlp1gTixwdv_axCXc_aQ(b) * c));
    d.Y = (a.target.Y + (fAYABlp1gTixwdv_axCXc_aQ(b) * c));
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassa9.<.ctor>b__67
  type$_7PJ8x6ooNDuhmFaEs_a9jTw.__ctor_b__67 = function (b)
  {
    return new ctor$_7AAABnSvaDGF0W_bnoNUWDw(b, NQAABuTOYTqpYs14xNZZlQ(((b / this.selection.length) * 6.28318530717959)));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassa9.<.ctor>b__6a
  type$_7PJ8x6ooNDuhmFaEs_a9jTw.__ctor_b__6a = function (b)
  {
    return new ctor$__bgAABsMs9zKjscGqZxx_b6g(b, this.CS___8__locals71.Translate.Invoke(b.get_mtarget().X, b.get_mtarget().Y));
  };

  // Closure type
  function __bhoNeoOPpTWyrBEoHcbzaA() {}  type$__bhoNeoOPpTWyrBEoHcbzaA = __bhoNeoOPpTWyrBEoHcbzaA.prototype =   {
    constructor: __bhoNeoOPpTWyrBEoHcbzaA,
    CS___8__localsaa: null,
    CS___8__locals9d: null,
    CS___8__locals71: null,
    canvas: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassab.<.ctor>b__64
  type$__bhoNeoOPpTWyrBEoHcbzaA.__ctor_b__64 = function (b)
  {
    var a = this;

    b.UgAABvWf_aTisnHwd9OZ7jQ(a.canvas);
  };

  // Closure type
  function mYUyIYjytzS4qfxnHj4L5w() {}  type$mYUyIYjytzS4qfxnHj4L5w = mYUyIYjytzS4qfxnHj4L5w.prototype =   {
    constructor: mYUyIYjytzS4qfxnHj4L5w,
    CS___8__localsaa: null,
    CS___8__locals9d: null,
    CS___8__locals71: null,
    center: null,
    GetRotatedTargetPoint: null,
    OffsetToCenter: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassad.<.ctor>b__66
  type$mYUyIYjytzS4qfxnHj4L5w.__ctor_b__66 = function (b)
  {
    var a = this, c, d;

    c = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    c.X = JgAABuTOYTqpYs14xNZZlQ((b.X + a.center.X));
    c.Y = JgAABuTOYTqpYs14xNZZlQ((b.Y + a.center.Y));
    d = c;
    return d;
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassad.<.ctor>b__69
  type$mYUyIYjytzS4qfxnHj4L5w.__ctor_b__69 = function (b)
  {
    return new ctor$__aAAABp27jTS5KZx4JLqP_bw(b, this.GetRotatedTargetPoint.Invoke(b.get___h__TransparentIdentifier6().get_direction(), b.get_distance()));
  };

  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass70+<>c__DisplayClass9c+<>c__DisplayClassad.<.ctor>b__6b
  type$mYUyIYjytzS4qfxnHj4L5w.__ctor_b__6b = function (b)
  {
    return new ctor$BAEABm2dlTCHt7YU0FRUmw(b.get___h__TransparentIdentifier8().get___h__TransparentIdentifier7().get___h__TransparentIdentifier6().get_index(), this.OffsetToCenter.Invoke(b.get_mcanvas()));
  };

  // Closure type
  function _3aOdV4elyzuw96v3e3pVnQ() {}  type$_3aOdV4elyzuw96v3e3pVnQ = _3aOdV4elyzuw96v3e3pVnQ.prototype =   {
    constructor: _3aOdV4elyzuw96v3e3pVnQ,
    CS___8__locals71: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass85.<.ctor>b__32
  type$_3aOdV4elyzuw96v3e3pVnQ.__ctor_b__32 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new _1eeR6_bpzWTmWkjK70dAi7w();
    c.CS___8__locals86 = a;
    c.CS___8__locals71 = a.CS___8__locals71;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals71.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals71.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals71.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__33'));
    return d;
  };

  // Closure type
  function _1eeR6_bpzWTmWkjK70dAi7w() {}  type$_1eeR6_bpzWTmWkjK70dAi7w = _1eeR6_bpzWTmWkjK70dAi7w.prototype =   {
    constructor: _1eeR6_bpzWTmWkjK70dAi7w,
    CS___8__locals86: null,
    CS___8__locals71: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass85+<>c__DisplayClass87.<.ctor>b__33
  type$_1eeR6_bpzWTmWkjK70dAi7w.__ctor_b__33 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == b.get_y()));
    return c;
  };

  // Closure type
  function X3g1y3omHzCZXzauyTv_aPA() {}  type$X3g1y3omHzCZXzauyTv_aPA = X3g1y3omHzCZXzauyTv_aPA.prototype =   {
    constructor: X3g1y3omHzCZXzauyTv_aPA,
    CS___8__locals71: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass8c.<.ctor>b__3a
  type$X3g1y3omHzCZXzauyTv_aPA.__ctor_b__3a = function (b)
  {
    var a = this, c, d;

    d = !(b == a.v.get_a());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b == a.v.get_b());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function MNOHU5Uz_aDCZlYv3XL_b5dg() {}  type$MNOHU5Uz_aDCZlYv3XL_b5dg = MNOHU5Uz_aDCZlYv3XL_b5dg.prototype =   {
    constructor: MNOHU5Uz_aDCZlYv3XL_b5dg,
    CS___8__locals71: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass8e.<.ctor>b__3c
  type$MNOHU5Uz_aDCZlYv3XL_b5dg.__ctor_b__3c = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new UWj64h_anlDCSECxIDw5BHw();
    c.CS___8__locals8f = a;
    c.CS___8__locals71 = a.CS___8__locals71;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals71.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals71.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals71.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__3d'));
    return d;
  };

  // Closure type
  function UWj64h_anlDCSECxIDw5BHw() {}  type$UWj64h_anlDCSECxIDw5BHw = UWj64h_anlDCSECxIDw5BHw.prototype =   {
    constructor: UWj64h_anlDCSECxIDw5BHw,
    CS___8__locals8f: null,
    CS___8__locals71: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoyAndInput+<>c__DisplayClass8e+<>c__DisplayClass90.<.ctor>b__3d
  type$UWj64h_anlDCSECxIDw5BHw.__ctor_b__3d = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == a.v.get_y()));
    return c;
  };

  // Closure type
  function _4x_aeiLDmHDuhidHiG5S0mQ() {}  type$_4x_aeiLDmHDuhidHiG5S0mQ = _4x_aeiLDmHDuhidHiG5S0mQ.prototype =   {
    constructor: _4x_aeiLDmHDuhidHiG5S0mQ,
    x: null,
    t: null,
    dispose: null,
    h: null,
    done: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass2`1.<ForEachAtInterval>b__0
  type$_4x_aeiLDmHDuhidHiG5S0mQ._ForEachAtInterval_b__0 = function ()
  {
    var a = this, b;

    b = (a.t == null);

    if (!b)
    {
      a.t.kgQABtY33j68H_aZQYc4FRw();
      a.t = null;
    }

    b = (a.x == null);

    if (!b)
    {
      a.x.xAAABq_bUDz_aWf_aXPRTEtLA();
      a.x = null;
    }

  };

  // ThreeDStuff.js.Extensions+<>c__DisplayClass2`1.<ForEachAtInterval>b__1
  type$_4x_aeiLDmHDuhidHiG5S0mQ._ForEachAtInterval_b__1 = function (b)
  {
    var a = this, c;

    c = !a.x.qAAABu7N0xGI6ACQJ1TEOg();

    if (!c)
    {
      a.h.Invoke(a.x.xQAABrYmRzSu_anO2U_bk1MA());
      return;
    }

    a.dispose.Invoke();
    a.done.Invoke();
  };

  // Closure type
  function tYIjJlo7lj6tIqGFXNvCFw() {}  type$tYIjJlo7lj6tIqGFXNvCFw = tYIjJlo7lj6tIqGFXNvCFw.prototype =   {
    constructor: tYIjJlo7lj6tIqGFXNvCFw,
    e: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass9.<ToEqualsAny>b__7
  type$tYIjJlo7lj6tIqGFXNvCFw._ToEqualsAny_b__7 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new phYKtaGlOjq4gIupmf6chg();
    c.CS___8__localsa = a;
    c.s = b;
    d = MQAABne06jm5i7qNIX6ZzA(a.e, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '_ToEqualsAny_b__8'));
    return d;
  };

  // Closure type
  function phYKtaGlOjq4gIupmf6chg() {}  type$phYKtaGlOjq4gIupmf6chg = phYKtaGlOjq4gIupmf6chg.prototype =   {
    constructor: phYKtaGlOjq4gIupmf6chg,
    CS___8__localsa: null,
    s: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass9+<>c__DisplayClassb.<ToEqualsAny>b__8
  type$phYKtaGlOjq4gIupmf6chg._ToEqualsAny_b__8 = function (b)
  {
    return CQUABpT92DaiMvTduyyLZQ(b, this.s);
  };

  // Closure type
  function _3RHt7PYc2jewRU2ezmBk4A() {}  type$_3RHt7PYc2jewRU2ezmBk4A = _3RHt7PYc2jewRU2ezmBk4A.prototype =   {
    constructor: _3RHt7PYc2jewRU2ezmBk4A,
    e: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClasse.<ToEquals>b__d
  type$_3RHt7PYc2jewRU2ezmBk4A._ToEquals_b__d = function (b)
  {
    return CQUABpT92DaiMvTduyyLZQ(b, this.e);
  };

  // Closure type
  function cmDCyZSPXjWB6S5tkyfPkQ() {}  type$cmDCyZSPXjWB6S5tkyfPkQ = cmDCyZSPXjWB6S5tkyfPkQ.prototype =   {
    constructor: cmDCyZSPXjWB6S5tkyfPkQ,
    h: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass12.<AtTimeout>b__11
  type$cmDCyZSPXjWB6S5tkyfPkQ._AtTimeout_b__11 = function (b)
  {
    var a = this;

    a.h.Invoke(b);
  };

  // Closure type
  function t0LLEuxyHDqJPsWKL_aYCKA() {}  type$t0LLEuxyHDqJPsWKL_aYCKA = t0LLEuxyHDqJPsWKL_aYCKA.prototype =   {
    constructor: t0LLEuxyHDqJPsWKL_aYCKA,
    h: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass15.<AtInterval>b__14
  type$t0LLEuxyHDqJPsWKL_aYCKA._AtInterval_b__14 = function (b)
  {
    var a = this;

    a.h.Invoke(b);
  };

  // Closure type
  function oFOvs8yWwDaKAtRFYoJhSg() {}  type$oFOvs8yWwDaKAtRFYoJhSg = oFOvs8yWwDaKAtRFYoJhSg.prototype =   {
    constructor: oFOvs8yWwDaKAtRFYoJhSg,
    c: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass1a.<Until>b__19
  type$oFOvs8yWwDaKAtRFYoJhSg._Until_b__19 = function (b)
  {
    var a = this, c;

    c = !a.c.Invoke();

    if (!c)
    {
      b.kgQABtY33j68H_aZQYc4FRw();
    }

  };

  // Closure type
  function uitba9tGPz6lJHh1iqgljg() {}  type$uitba9tGPz6lJHh1iqgljg = uitba9tGPz6lJHh1iqgljg.prototype =   {
    constructor: uitba9tGPz6lJHh1iqgljg,
    e: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass1d.<Spawn>b__1c
  type$uitba9tGPz6lJHh1iqgljg._Spawn_b__1c = function (b)
  {
    var a = this;

    document.title = a.e.zAQABqOBvjOuSkQZrCdfWA();
    HwAABuTOYTqpYs14xNZZlQ(a.e);
  };

  // Closure type
  function _2CSXGj4kVzOJlEaHD5n2wQ() {}  type$_2CSXGj4kVzOJlEaHD5n2wQ = _2CSXGj4kVzOJlEaHD5n2wQ.prototype =   {
    constructor: _2CSXGj4kVzOJlEaHD5n2wQ,
    e: null,
    h: null
  }
;
  // ThreeDStuff.js.Extensions+<>c__DisplayClass20`1.<Swap>b__1f
  type$_2CSXGj4kVzOJlEaHD5n2wQ._Swap_b__1f = function (b)
  {
    var a = this;

    a.h.Invoke(a.e[(b.Counter % a.e.length)]);
  };

  // Anonymous type
  function elDOf9qGWDqm0P53QzP_a6g() {}  type$elDOf9qGWDqm0P53QzP_a6g = elDOf9qGWDqm0P53QzP_a6g.prototype =   {
    constructor: elDOf9qGWDqm0P53QzP_a6g,
    _point_i__Field: null,
    _div_i__Field: null
  }
;
  // <>f__AnonymousType10`2.get_point
  type$elDOf9qGWDqm0P53QzP_a6g.get_point = function ()
  {
    return this._point_i__Field;
  };

  // <>f__AnonymousType10`2.get_div
  type$elDOf9qGWDqm0P53QzP_a6g.get_div = function ()
  {
    return this._div_i__Field;
  };

  // <>f__AnonymousType10`2.ToString
  type$elDOf9qGWDqm0P53QzP_a6g.toString /* <>f__AnonymousType10`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ point = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._point_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', div = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._div_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    elDOf9qGWDqm0P53QzP_a6g.prototype.toString /* System.Object.ToString */ = elDOf9qGWDqm0P53QzP_a6g.prototype.toString /* <>f__AnonymousType10`2.ToString */;

  // <>f__AnonymousType10`2.Equals
  type$elDOf9qGWDqm0P53QzP_a6g.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    elDOf9qGWDqm0P53QzP_a6g.prototype.AwAABnwCHD6Y1dqcmGKqIQ = elDOf9qGWDqm0P53QzP_a6g.prototype.Equals;

  // <>f__AnonymousType10`2.GetHashCode
  type$elDOf9qGWDqm0P53QzP_a6g.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    elDOf9qGWDqm0P53QzP_a6g.prototype.BwAABnwCHD6Y1dqcmGKqIQ = elDOf9qGWDqm0P53QzP_a6g.prototype.GetHashCode;

  // <>f__AnonymousType10`2..ctor
  type$elDOf9qGWDqm0P53QzP_a6g.iAEABtqGWDqm0P53QzP_a6g = function (b, c)
  {
    var a = this;

    a._point_i__Field = b;
    a._div_i__Field = c;
  };
  var ctor$iAEABtqGWDqm0P53QzP_a6g = $ctor$(null, 'iAEABtqGWDqm0P53QzP_a6g', type$elDOf9qGWDqm0P53QzP_a6g);
  // Anonymous type
  function ljX_aBB_bjfTuX862P6ieAgg() {}  type$ljX_aBB_bjfTuX862P6ieAgg = ljX_aBB_bjfTuX862P6ieAgg.prototype =   {
    constructor: ljX_aBB_bjfTuX862P6ieAgg,
    _div_i__Field: null,
    _point_i__Field: null,
    _update_i__Field: null
  }
;
  // <>f__AnonymousType11`3.get_div
  type$ljX_aBB_bjfTuX862P6ieAgg.get_div = function ()
  {
    return this._div_i__Field;
  };

  // <>f__AnonymousType11`3.get_point
  type$ljX_aBB_bjfTuX862P6ieAgg.get_point = function ()
  {
    return this._point_i__Field;
  };

  // <>f__AnonymousType11`3.get_update
  type$ljX_aBB_bjfTuX862P6ieAgg.get_update = function ()
  {
    return this._update_i__Field;
  };

  // <>f__AnonymousType11`3.ToString
  type$ljX_aBB_bjfTuX862P6ieAgg.toString /* <>f__AnonymousType11`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ div = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._div_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', point = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._point_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', update = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._update_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    ljX_aBB_bjfTuX862P6ieAgg.prototype.toString /* System.Object.ToString */ = ljX_aBB_bjfTuX862P6ieAgg.prototype.toString /* <>f__AnonymousType11`3.ToString */;

  // <>f__AnonymousType11`3.Equals
  type$ljX_aBB_bjfTuX862P6ieAgg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    ljX_aBB_bjfTuX862P6ieAgg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = ljX_aBB_bjfTuX862P6ieAgg.prototype.Equals;

  // <>f__AnonymousType11`3.GetHashCode
  type$ljX_aBB_bjfTuX862P6ieAgg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    ljX_aBB_bjfTuX862P6ieAgg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = ljX_aBB_bjfTuX862P6ieAgg.prototype.GetHashCode;

  // <>f__AnonymousType11`3..ctor
  type$ljX_aBB_bjfTuX862P6ieAgg.jgEABh_bjfTuX862P6ieAgg = function (b, c, d)
  {
    var a = this;

    a._div_i__Field = b;
    a._point_i__Field = c;
    a._update_i__Field = d;
  };
  var ctor$jgEABh_bjfTuX862P6ieAgg = $ctor$(null, 'jgEABh_bjfTuX862P6ieAgg', type$ljX_aBB_bjfTuX862P6ieAgg);
  // Closure type
  function XrTrtN19kTOvZp0enWSE_bg() {}  var JwEABN19kTOvZp0enWSE_bg = null;
  type$XrTrtN19kTOvZp0enWSE_bg = XrTrtN19kTOvZp0enWSE_bg.prototype =   {
    constructor: XrTrtN19kTOvZp0enWSE_bg,
    GetCenter: null,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    Translate: null,
    ApplyPosition: null,
    CreateDiv: null,
    TileColor: null,
    points: null
  }
;
  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__5
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__5 = function (b, c)
  {
    var a = this, d, e, f, g, h;

    d = a.GetCenter.Invoke();
    e = (MQAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) + a.RotationA);
    f = (((LgAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) * a.Zoom) * 32) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(e) * f);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(e) * f) * a.RotationB);
    g = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    g.X = b;
    g.Y = c;
    h = g;
    return h;
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__6
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__6 = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new XeJHO0gVID2yhsgDNzvDkw();
    j.CS___8__locals16 = a;
    j._x = b;
    j._y = c;
    try
    {
      e = a.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.Zoom * a.Dot));
      pgAABgnDWDenzWX06iPvnw(kAUABuKCPTKGRKjkr5dWuA(d).style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__7');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__8
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__8 = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__a
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__a = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__b
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__b = function (b)
  {
    return new ctor$iAEABtqGWDqm0P53QzP_a6g(b, this.CreateDiv.Invoke(b.get_x(), b.get_y()));
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__c
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__c = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new iJBc5hFIJT_aCvORSvlwXnA();
    c.CS___8__locals16 = a;
    c.__h__TransparentIdentifier1 = b;
    d = new ctor$jgEABh_bjfTuX862P6ieAgg(c.__h__TransparentIdentifier1.get_div(), c.__h__TransparentIdentifier1.get_point(), new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__d'));
    return d;
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__f
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__f = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.RotationA) == 45);
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__10
  type$XrTrtN19kTOvZp0enWSE_bg.__ctor_b__10 = function (b)
  {
    var a = this;

    a.RotationA = (a.RotationA + MgAABuTOYTqpYs14xNZZlQ(1));

    if (!(JwEABN19kTOvZp0enWSE_bg))
    {
      JwEABN19kTOvZp0enWSE_bg = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'ngEABt19kTOvZp0enWSE_bg');
    }

    nAAABuVHczWYsGvbmU49oA(a.points, JwEABN19kTOvZp0enWSE_bg);
  };

  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15.<.ctor>b__11
  function ngEABt19kTOvZp0enWSE_bg(b)
  {
    b.get_update().Invoke();
  };

  // Closure type
  function XeJHO0gVID2yhsgDNzvDkw() {}  type$XeJHO0gVID2yhsgDNzvDkw = XeJHO0gVID2yhsgDNzvDkw.prototype =   {
    constructor: XeJHO0gVID2yhsgDNzvDkw,
    CS___8__locals16: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15+<>c__DisplayClass18.<.ctor>b__7
  type$XeJHO0gVID2yhsgDNzvDkw.__ctor_b__7 = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function iJBc5hFIJT_aCvORSvlwXnA() {}  type$iJBc5hFIJT_aCvORSvlwXnA = iJBc5hFIJT_aCvORSvlwXnA.prototype =   {
    constructor: iJBc5hFIJT_aCvORSvlwXnA,
    CS___8__locals16: null,
    __h__TransparentIdentifier1: null
  }
;
  // ThreeDStuff.js.IsometricRotating+<>c__DisplayClass15+<>c__DisplayClass1a.<.ctor>b__d
  type$iJBc5hFIJT_aCvORSvlwXnA.__ctor_b__d = function ()
  {
    var a = this;

    a.CS___8__locals16.ApplyPosition.Invoke(a.__h__TransparentIdentifier1.get_point().get_x(), a.__h__TransparentIdentifier1.get_point().get_y(), a.__h__TransparentIdentifier1.get_div());
  };

  // Anonymous type
  function Ot_az8D5nTTCe5hLTQRxJOA() {}  type$Ot_az8D5nTTCe5hLTQRxJOA = Ot_az8D5nTTCe5hLTQRxJOA.prototype =   {
    constructor: Ot_az8D5nTTCe5hLTQRxJOA,
    _Source_i__Field: null,
    _Height_i__Field: null
  }
;
  // <>f__AnonymousType12`2.get_Source
  type$Ot_az8D5nTTCe5hLTQRxJOA.get_Source = function ()
  {
    return this._Source_i__Field;
  };

  // <>f__AnonymousType12`2.get_Height
  type$Ot_az8D5nTTCe5hLTQRxJOA.get_Height = function ()
  {
    return this._Height_i__Field;
  };

  // <>f__AnonymousType12`2.ToString
  type$Ot_az8D5nTTCe5hLTQRxJOA.toString /* <>f__AnonymousType12`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Source = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Source_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Height = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Height_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    Ot_az8D5nTTCe5hLTQRxJOA.prototype.toString /* System.Object.ToString */ = Ot_az8D5nTTCe5hLTQRxJOA.prototype.toString /* <>f__AnonymousType12`2.ToString */;

  // <>f__AnonymousType12`2.Equals
  type$Ot_az8D5nTTCe5hLTQRxJOA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    Ot_az8D5nTTCe5hLTQRxJOA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = Ot_az8D5nTTCe5hLTQRxJOA.prototype.Equals;

  // <>f__AnonymousType12`2.GetHashCode
  type$Ot_az8D5nTTCe5hLTQRxJOA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    Ot_az8D5nTTCe5hLTQRxJOA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = Ot_az8D5nTTCe5hLTQRxJOA.prototype.GetHashCode;

  // <>f__AnonymousType12`2..ctor
  type$Ot_az8D5nTTCe5hLTQRxJOA.owEABj5nTTCe5hLTQRxJOA = function (b, c)
  {
    var a = this;

    a._Source_i__Field = b;
    a._Height_i__Field = c;
  };
  var ctor$owEABj5nTTCe5hLTQRxJOA = $ctor$(null, 'owEABj5nTTCe5hLTQRxJOA', type$Ot_az8D5nTTCe5hLTQRxJOA);
  // Anonymous type
  function _3qzpOPLECz2BZOXJfindCA() {}  type$_3qzpOPLECz2BZOXJfindCA = _3qzpOPLECz2BZOXJfindCA.prototype =   {
    constructor: _3qzpOPLECz2BZOXJfindCA,
    _Grass_i__Field: null,
    _Rocks_i__Field: null,
    _TileSelector_i__Field: null,
    _RoughLand_i__Field: null,
    _Dirt_i__Field: null,
    _DirtDirtGrass_i__Field: null,
    _DirtGrassGrass_i__Field: null,
    _Track1_i__Field: null,
    _Road2_i__Field: null,
    _Road2_Track1_i__Field: null,
    _Road1_i__Field: null,
    _Road1_Road2_i__Field: null,
    _Tree_i__Field: null,
    _House1_i__Field: null,
    _House2_i__Field: null,
    _House3_i__Field: null,
    _House4_i__Field: null,
    _House5a_i__Field: null,
    _House5b_i__Field: null,
    _House5c_i__Field: null,
    _House5_i__Field: null
  }
;
  // <>f__AnonymousType13`21.get_Grass
  type$_3qzpOPLECz2BZOXJfindCA.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType13`21.get_Rocks
  type$_3qzpOPLECz2BZOXJfindCA.get_Rocks = function ()
  {
    return this._Rocks_i__Field;
  };

  // <>f__AnonymousType13`21.get_TileSelector
  type$_3qzpOPLECz2BZOXJfindCA.get_TileSelector = function ()
  {
    return this._TileSelector_i__Field;
  };

  // <>f__AnonymousType13`21.get_RoughLand
  type$_3qzpOPLECz2BZOXJfindCA.get_RoughLand = function ()
  {
    return this._RoughLand_i__Field;
  };

  // <>f__AnonymousType13`21.get_Dirt
  type$_3qzpOPLECz2BZOXJfindCA.get_Dirt = function ()
  {
    return this._Dirt_i__Field;
  };

  // <>f__AnonymousType13`21.get_DirtDirtGrass
  type$_3qzpOPLECz2BZOXJfindCA.get_DirtDirtGrass = function ()
  {
    return this._DirtDirtGrass_i__Field;
  };

  // <>f__AnonymousType13`21.get_DirtGrassGrass
  type$_3qzpOPLECz2BZOXJfindCA.get_DirtGrassGrass = function ()
  {
    return this._DirtGrassGrass_i__Field;
  };

  // <>f__AnonymousType13`21.get_Track1
  type$_3qzpOPLECz2BZOXJfindCA.get_Track1 = function ()
  {
    return this._Track1_i__Field;
  };

  // <>f__AnonymousType13`21.get_Road2
  type$_3qzpOPLECz2BZOXJfindCA.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType13`21.get_Road2_Track1
  type$_3qzpOPLECz2BZOXJfindCA.get_Road2_Track1 = function ()
  {
    return this._Road2_Track1_i__Field;
  };

  // <>f__AnonymousType13`21.get_Road1
  type$_3qzpOPLECz2BZOXJfindCA.get_Road1 = function ()
  {
    return this._Road1_i__Field;
  };

  // <>f__AnonymousType13`21.get_Road1_Road2
  type$_3qzpOPLECz2BZOXJfindCA.get_Road1_Road2 = function ()
  {
    return this._Road1_Road2_i__Field;
  };

  // <>f__AnonymousType13`21.get_Tree
  type$_3qzpOPLECz2BZOXJfindCA.get_Tree = function ()
  {
    return this._Tree_i__Field;
  };

  // <>f__AnonymousType13`21.get_House1
  type$_3qzpOPLECz2BZOXJfindCA.get_House1 = function ()
  {
    return this._House1_i__Field;
  };

  // <>f__AnonymousType13`21.get_House2
  type$_3qzpOPLECz2BZOXJfindCA.get_House2 = function ()
  {
    return this._House2_i__Field;
  };

  // <>f__AnonymousType13`21.get_House3
  type$_3qzpOPLECz2BZOXJfindCA.get_House3 = function ()
  {
    return this._House3_i__Field;
  };

  // <>f__AnonymousType13`21.get_House4
  type$_3qzpOPLECz2BZOXJfindCA.get_House4 = function ()
  {
    return this._House4_i__Field;
  };

  // <>f__AnonymousType13`21.get_House5a
  type$_3qzpOPLECz2BZOXJfindCA.get_House5a = function ()
  {
    return this._House5a_i__Field;
  };

  // <>f__AnonymousType13`21.get_House5b
  type$_3qzpOPLECz2BZOXJfindCA.get_House5b = function ()
  {
    return this._House5b_i__Field;
  };

  // <>f__AnonymousType13`21.get_House5c
  type$_3qzpOPLECz2BZOXJfindCA.get_House5c = function ()
  {
    return this._House5c_i__Field;
  };

  // <>f__AnonymousType13`21.get_House5
  type$_3qzpOPLECz2BZOXJfindCA.get_House5 = function ()
  {
    return this._House5_i__Field;
  };

  // <>f__AnonymousType13`21.ToString
  type$_3qzpOPLECz2BZOXJfindCA.toString /* <>f__AnonymousType13`21.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Rocks = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Rocks_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', TileSelector = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._TileSelector_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', RoughLand = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._RoughLand_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Dirt = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Dirt_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', DirtDirtGrass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._DirtDirtGrass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', DirtGrassGrass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._DirtGrassGrass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2_Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road1_Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road1_Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Tree = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Tree_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House3 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House3_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House4 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House4_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House5a = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House5a_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House5b = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House5b_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House5c = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House5c_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House5 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House5_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _3qzpOPLECz2BZOXJfindCA.prototype.toString /* System.Object.ToString */ = _3qzpOPLECz2BZOXJfindCA.prototype.toString /* <>f__AnonymousType13`21.ToString */;

  // <>f__AnonymousType13`21.Equals
  type$_3qzpOPLECz2BZOXJfindCA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _3qzpOPLECz2BZOXJfindCA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _3qzpOPLECz2BZOXJfindCA.prototype.Equals;

  // <>f__AnonymousType13`21.GetHashCode
  type$_3qzpOPLECz2BZOXJfindCA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _3qzpOPLECz2BZOXJfindCA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _3qzpOPLECz2BZOXJfindCA.prototype.GetHashCode;

  // <>f__AnonymousType13`21..ctor
  type$_3qzpOPLECz2BZOXJfindCA.qQEABvLECz2BZOXJfindCA = function (b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Rocks_i__Field = c;
    a._TileSelector_i__Field = d;
    a._RoughLand_i__Field = e;
    a._Dirt_i__Field = f;
    a._DirtDirtGrass_i__Field = g;
    a._DirtGrassGrass_i__Field = h;
    a._Track1_i__Field = i;
    a._Road2_i__Field = j;
    a._Road2_Track1_i__Field = k;
    a._Road1_i__Field = l;
    a._Road1_Road2_i__Field = m;
    a._Tree_i__Field = n;
    a._House1_i__Field = o;
    a._House2_i__Field = p;
    a._House3_i__Field = q;
    a._House4_i__Field = r;
    a._House5a_i__Field = s;
    a._House5b_i__Field = t;
    a._House5c_i__Field = u;
    a._House5_i__Field = v;
  };
  var ctor$qQEABvLECz2BZOXJfindCA = $ctor$(null, 'qQEABvLECz2BZOXJfindCA', type$_3qzpOPLECz2BZOXJfindCA);
  // Anonymous type
  function TxjXW0CibjWvt6kvpegqXg() {}  type$TxjXW0CibjWvt6kvpegqXg = TxjXW0CibjWvt6kvpegqXg.prototype =   {
    constructor: TxjXW0CibjWvt6kvpegqXg,
    _i_i__Field: null,
    _src_i__Field: null
  }
;
  // <>f__AnonymousType14`2.get_i
  type$TxjXW0CibjWvt6kvpegqXg.get_i = function ()
  {
    return this._i_i__Field;
  };

  // <>f__AnonymousType14`2.get_src
  type$TxjXW0CibjWvt6kvpegqXg.get_src = function ()
  {
    return this._src_i__Field;
  };

  // <>f__AnonymousType14`2.ToString
  type$TxjXW0CibjWvt6kvpegqXg.toString /* <>f__AnonymousType14`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ i = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._i_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', src = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._src_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    TxjXW0CibjWvt6kvpegqXg.prototype.toString /* System.Object.ToString */ = TxjXW0CibjWvt6kvpegqXg.prototype.toString /* <>f__AnonymousType14`2.ToString */;

  // <>f__AnonymousType14`2.Equals
  type$TxjXW0CibjWvt6kvpegqXg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    TxjXW0CibjWvt6kvpegqXg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = TxjXW0CibjWvt6kvpegqXg.prototype.Equals;

  // <>f__AnonymousType14`2.GetHashCode
  type$TxjXW0CibjWvt6kvpegqXg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    TxjXW0CibjWvt6kvpegqXg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = TxjXW0CibjWvt6kvpegqXg.prototype.GetHashCode;

  // <>f__AnonymousType14`2..ctor
  type$TxjXW0CibjWvt6kvpegqXg.wgEABkCibjWvt6kvpegqXg = function (b, c)
  {
    var a = this;

    a._i_i__Field = b;
    a._src_i__Field = c;
  };
  var ctor$wgEABkCibjWvt6kvpegqXg = $ctor$(null, 'wgEABkCibjWvt6kvpegqXg', type$TxjXW0CibjWvt6kvpegqXg);
  // Anonymous type
  function zu9WZvPdMjeIiYgGPXrH0g() {}  type$zu9WZvPdMjeIiYgGPXrH0g = zu9WZvPdMjeIiYgGPXrH0g.prototype =   {
    constructor: zu9WZvPdMjeIiYgGPXrH0g,
    ___h__TransparentIdentifier2_i__Field: null,
    _update_i__Field: null
  }
;
  // <>f__AnonymousType15`2.get_<>h__TransparentIdentifier2
  type$zu9WZvPdMjeIiYgGPXrH0g.get___h__TransparentIdentifier2 = function ()
  {
    return this.___h__TransparentIdentifier2_i__Field;
  };

  // <>f__AnonymousType15`2.get_update
  type$zu9WZvPdMjeIiYgGPXrH0g.get_update = function ()
  {
    return this._update_i__Field;
  };

  // <>f__AnonymousType15`2.ToString
  type$zu9WZvPdMjeIiYgGPXrH0g.toString /* <>f__AnonymousType15`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', update = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._update_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    zu9WZvPdMjeIiYgGPXrH0g.prototype.toString /* System.Object.ToString */ = zu9WZvPdMjeIiYgGPXrH0g.prototype.toString /* <>f__AnonymousType15`2.ToString */;

  // <>f__AnonymousType15`2.Equals
  type$zu9WZvPdMjeIiYgGPXrH0g.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    zu9WZvPdMjeIiYgGPXrH0g.prototype.AwAABnwCHD6Y1dqcmGKqIQ = zu9WZvPdMjeIiYgGPXrH0g.prototype.Equals;

  // <>f__AnonymousType15`2.GetHashCode
  type$zu9WZvPdMjeIiYgGPXrH0g.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    zu9WZvPdMjeIiYgGPXrH0g.prototype.BwAABnwCHD6Y1dqcmGKqIQ = zu9WZvPdMjeIiYgGPXrH0g.prototype.GetHashCode;

  // <>f__AnonymousType15`2..ctor
  type$zu9WZvPdMjeIiYgGPXrH0g.yAEABvPdMjeIiYgGPXrH0g = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier2_i__Field = b;
    a._update_i__Field = c;
  };
  var ctor$yAEABvPdMjeIiYgGPXrH0g = $ctor$(null, 'yAEABvPdMjeIiYgGPXrH0g', type$zu9WZvPdMjeIiYgGPXrH0g);
  // Anonymous type
  function __aUxQjgCTSzewK2TmHqW_bXg() {}  type$__aUxQjgCTSzewK2TmHqW_bXg = __aUxQjgCTSzewK2TmHqW_bXg.prototype =   {
    constructor: __aUxQjgCTSzewK2TmHqW_bXg,
    ___h__TransparentIdentifier3_i__Field: null,
    _img2_i__Field: null
  }
;
  // <>f__AnonymousType16`2.get_<>h__TransparentIdentifier3
  type$__aUxQjgCTSzewK2TmHqW_bXg.get___h__TransparentIdentifier3 = function ()
  {
    return this.___h__TransparentIdentifier3_i__Field;
  };

  // <>f__AnonymousType16`2.get_img2
  type$__aUxQjgCTSzewK2TmHqW_bXg.get_img2 = function ()
  {
    return this._img2_i__Field;
  };

  // <>f__AnonymousType16`2.ToString
  type$__aUxQjgCTSzewK2TmHqW_bXg.toString /* <>f__AnonymousType16`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier3 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier3_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', img2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._img2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    __aUxQjgCTSzewK2TmHqW_bXg.prototype.toString /* System.Object.ToString */ = __aUxQjgCTSzewK2TmHqW_bXg.prototype.toString /* <>f__AnonymousType16`2.ToString */;

  // <>f__AnonymousType16`2.Equals
  type$__aUxQjgCTSzewK2TmHqW_bXg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    __aUxQjgCTSzewK2TmHqW_bXg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = __aUxQjgCTSzewK2TmHqW_bXg.prototype.Equals;

  // <>f__AnonymousType16`2.GetHashCode
  type$__aUxQjgCTSzewK2TmHqW_bXg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    __aUxQjgCTSzewK2TmHqW_bXg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = __aUxQjgCTSzewK2TmHqW_bXg.prototype.GetHashCode;

  // <>f__AnonymousType16`2..ctor
  type$__aUxQjgCTSzewK2TmHqW_bXg.zgEABgCTSzewK2TmHqW_bXg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier3_i__Field = b;
    a._img2_i__Field = c;
  };
  var ctor$zgEABgCTSzewK2TmHqW_bXg = $ctor$(null, 'zgEABgCTSzewK2TmHqW_bXg', type$__aUxQjgCTSzewK2TmHqW_bXg);
  // Anonymous type
  function sNDuWCbD5TSjiyI0i_aFWVw() {}  type$sNDuWCbD5TSjiyI0i_aFWVw = sNDuWCbD5TSjiyI0i_aFWVw.prototype =   {
    constructor: sNDuWCbD5TSjiyI0i_aFWVw,
    ___h__TransparentIdentifier5_i__Field: null,
    _c_i__Field: null
  }
;
  // <>f__AnonymousType17`2.get_<>h__TransparentIdentifier5
  type$sNDuWCbD5TSjiyI0i_aFWVw.get___h__TransparentIdentifier5 = function ()
  {
    return this.___h__TransparentIdentifier5_i__Field;
  };

  // <>f__AnonymousType17`2.get_c
  type$sNDuWCbD5TSjiyI0i_aFWVw.get_c = function ()
  {
    return this._c_i__Field;
  };

  // <>f__AnonymousType17`2.ToString
  type$sNDuWCbD5TSjiyI0i_aFWVw.toString /* <>f__AnonymousType17`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier5 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier5_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', c = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._c_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    sNDuWCbD5TSjiyI0i_aFWVw.prototype.toString /* System.Object.ToString */ = sNDuWCbD5TSjiyI0i_aFWVw.prototype.toString /* <>f__AnonymousType17`2.ToString */;

  // <>f__AnonymousType17`2.Equals
  type$sNDuWCbD5TSjiyI0i_aFWVw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    sNDuWCbD5TSjiyI0i_aFWVw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = sNDuWCbD5TSjiyI0i_aFWVw.prototype.Equals;

  // <>f__AnonymousType17`2.GetHashCode
  type$sNDuWCbD5TSjiyI0i_aFWVw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    sNDuWCbD5TSjiyI0i_aFWVw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = sNDuWCbD5TSjiyI0i_aFWVw.prototype.GetHashCode;

  // <>f__AnonymousType17`2..ctor
  type$sNDuWCbD5TSjiyI0i_aFWVw._1AEABibD5TSjiyI0i_aFWVw = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier5_i__Field = b;
    a._c_i__Field = c;
  };
  var ctor$_1AEABibD5TSjiyI0i_aFWVw = $ctor$(null, '_1AEABibD5TSjiyI0i_aFWVw', type$sNDuWCbD5TSjiyI0i_aFWVw);
  // Anonymous type
  function s8svPocsVjino_bAdFkiwpQ() {}  type$s8svPocsVjino_bAdFkiwpQ = s8svPocsVjino_bAdFkiwpQ.prototype =   {
    constructor: s8svPocsVjino_bAdFkiwpQ,
    _from_i__Field: null,
    _to_i__Field: null
  }
;
  // <>f__AnonymousType18`2.get_from
  type$s8svPocsVjino_bAdFkiwpQ.get_from = function ()
  {
    return this._from_i__Field;
  };

  // <>f__AnonymousType18`2.get_to
  type$s8svPocsVjino_bAdFkiwpQ.get_to = function ()
  {
    return this._to_i__Field;
  };

  // <>f__AnonymousType18`2.ToString
  type$s8svPocsVjino_bAdFkiwpQ.toString /* <>f__AnonymousType18`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ from = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._from_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', to = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._to_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    s8svPocsVjino_bAdFkiwpQ.prototype.toString /* System.Object.ToString */ = s8svPocsVjino_bAdFkiwpQ.prototype.toString /* <>f__AnonymousType18`2.ToString */;

  // <>f__AnonymousType18`2.Equals
  type$s8svPocsVjino_bAdFkiwpQ.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    s8svPocsVjino_bAdFkiwpQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = s8svPocsVjino_bAdFkiwpQ.prototype.Equals;

  // <>f__AnonymousType18`2.GetHashCode
  type$s8svPocsVjino_bAdFkiwpQ.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    s8svPocsVjino_bAdFkiwpQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = s8svPocsVjino_bAdFkiwpQ.prototype.GetHashCode;

  // <>f__AnonymousType18`2..ctor
  type$s8svPocsVjino_bAdFkiwpQ._2gEABocsVjino_bAdFkiwpQ = function (b, c)
  {
    var a = this;

    a._from_i__Field = b;
    a._to_i__Field = c;
  };
  var ctor$_2gEABocsVjino_bAdFkiwpQ = $ctor$(null, '_2gEABocsVjino_bAdFkiwpQ', type$s8svPocsVjino_bAdFkiwpQ);
  // Anonymous type
  function __anuLl_arfVzS0dQcAeWhcww() {}  type$__anuLl_arfVzS0dQcAeWhcww = __anuLl_arfVzS0dQcAeWhcww.prototype =   {
    constructor: __anuLl_arfVzS0dQcAeWhcww,
    _GrassStrict_i__Field: null,
    _Other_i__Field: null
  }
;
  // <>f__AnonymousType19`2.get_GrassStrict
  type$__anuLl_arfVzS0dQcAeWhcww.get_GrassStrict = function ()
  {
    return this._GrassStrict_i__Field;
  };

  // <>f__AnonymousType19`2.get_Other
  type$__anuLl_arfVzS0dQcAeWhcww.get_Other = function ()
  {
    return this._Other_i__Field;
  };

  // <>f__AnonymousType19`2.ToString
  type$__anuLl_arfVzS0dQcAeWhcww.toString /* <>f__AnonymousType19`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ GrassStrict = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._GrassStrict_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Other = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Other_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    __anuLl_arfVzS0dQcAeWhcww.prototype.toString /* System.Object.ToString */ = __anuLl_arfVzS0dQcAeWhcww.prototype.toString /* <>f__AnonymousType19`2.ToString */;

  // <>f__AnonymousType19`2.Equals
  type$__anuLl_arfVzS0dQcAeWhcww.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    __anuLl_arfVzS0dQcAeWhcww.prototype.AwAABnwCHD6Y1dqcmGKqIQ = __anuLl_arfVzS0dQcAeWhcww.prototype.Equals;

  // <>f__AnonymousType19`2.GetHashCode
  type$__anuLl_arfVzS0dQcAeWhcww.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    __anuLl_arfVzS0dQcAeWhcww.prototype.BwAABnwCHD6Y1dqcmGKqIQ = __anuLl_arfVzS0dQcAeWhcww.prototype.GetHashCode;

  // <>f__AnonymousType19`2..ctor
  type$__anuLl_arfVzS0dQcAeWhcww._4AEABurfVzS0dQcAeWhcww = function (b, c)
  {
    var a = this;

    a._GrassStrict_i__Field = b;
    a._Other_i__Field = c;
  };
  var ctor$_4AEABurfVzS0dQcAeWhcww = $ctor$(null, '_4AEABurfVzS0dQcAeWhcww', type$__anuLl_arfVzS0dQcAeWhcww);
  // Anonymous type
  function RiMS2bJ7nzakC8wkDP1aTg() {}  type$RiMS2bJ7nzakC8wkDP1aTg = RiMS2bJ7nzakC8wkDP1aTg.prototype =   {
    constructor: RiMS2bJ7nzakC8wkDP1aTg,
    _Grass_i__Field: null,
    _Road2_i__Field: null,
    _Other_i__Field: null
  }
;
  // <>f__AnonymousType1a`3.get_Grass
  type$RiMS2bJ7nzakC8wkDP1aTg.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType1a`3.get_Road2
  type$RiMS2bJ7nzakC8wkDP1aTg.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType1a`3.get_Other
  type$RiMS2bJ7nzakC8wkDP1aTg.get_Other = function ()
  {
    return this._Other_i__Field;
  };

  // <>f__AnonymousType1a`3.ToString
  type$RiMS2bJ7nzakC8wkDP1aTg.toString /* <>f__AnonymousType1a`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Other = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Other_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    RiMS2bJ7nzakC8wkDP1aTg.prototype.toString /* System.Object.ToString */ = RiMS2bJ7nzakC8wkDP1aTg.prototype.toString /* <>f__AnonymousType1a`3.ToString */;

  // <>f__AnonymousType1a`3.Equals
  type$RiMS2bJ7nzakC8wkDP1aTg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    RiMS2bJ7nzakC8wkDP1aTg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = RiMS2bJ7nzakC8wkDP1aTg.prototype.Equals;

  // <>f__AnonymousType1a`3.GetHashCode
  type$RiMS2bJ7nzakC8wkDP1aTg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    RiMS2bJ7nzakC8wkDP1aTg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = RiMS2bJ7nzakC8wkDP1aTg.prototype.GetHashCode;

  // <>f__AnonymousType1a`3..ctor
  type$RiMS2bJ7nzakC8wkDP1aTg._5gEABrJ7nzakC8wkDP1aTg = function (b, c, d)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Road2_i__Field = c;
    a._Other_i__Field = d;
  };
  var ctor$_5gEABrJ7nzakC8wkDP1aTg = $ctor$(null, '_5gEABrJ7nzakC8wkDP1aTg', type$RiMS2bJ7nzakC8wkDP1aTg);
  // Anonymous type
  function sU_aQPnHvFz6qekxOo5_bgCA() {}  type$sU_aQPnHvFz6qekxOo5_bgCA = sU_aQPnHvFz6qekxOo5_bgCA.prototype =   {
    constructor: sU_aQPnHvFz6qekxOo5_bgCA,
    _Grass_i__Field: null,
    _Road2_i__Field: null,
    _Track1_i__Field: null,
    _Other_i__Field: null
  }
;
  // <>f__AnonymousType1b`4.get_Grass
  type$sU_aQPnHvFz6qekxOo5_bgCA.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType1b`4.get_Road2
  type$sU_aQPnHvFz6qekxOo5_bgCA.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType1b`4.get_Track1
  type$sU_aQPnHvFz6qekxOo5_bgCA.get_Track1 = function ()
  {
    return this._Track1_i__Field;
  };

  // <>f__AnonymousType1b`4.get_Other
  type$sU_aQPnHvFz6qekxOo5_bgCA.get_Other = function ()
  {
    return this._Other_i__Field;
  };

  // <>f__AnonymousType1b`4.ToString
  type$sU_aQPnHvFz6qekxOo5_bgCA.toString /* <>f__AnonymousType1b`4.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Other = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Other_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    sU_aQPnHvFz6qekxOo5_bgCA.prototype.toString /* System.Object.ToString */ = sU_aQPnHvFz6qekxOo5_bgCA.prototype.toString /* <>f__AnonymousType1b`4.ToString */;

  // <>f__AnonymousType1b`4.Equals
  type$sU_aQPnHvFz6qekxOo5_bgCA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    sU_aQPnHvFz6qekxOo5_bgCA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = sU_aQPnHvFz6qekxOo5_bgCA.prototype.Equals;

  // <>f__AnonymousType1b`4.GetHashCode
  type$sU_aQPnHvFz6qekxOo5_bgCA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    sU_aQPnHvFz6qekxOo5_bgCA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = sU_aQPnHvFz6qekxOo5_bgCA.prototype.GetHashCode;

  // <>f__AnonymousType1b`4..ctor
  type$sU_aQPnHvFz6qekxOo5_bgCA._7QEABnHvFz6qekxOo5_bgCA = function (b, c, d, e)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Road2_i__Field = c;
    a._Track1_i__Field = d;
    a._Other_i__Field = e;
  };
  var ctor$_7QEABnHvFz6qekxOo5_bgCA = $ctor$(null, '_7QEABnHvFz6qekxOo5_bgCA', type$sU_aQPnHvFz6qekxOo5_bgCA);
  // Anonymous type
  function XQTKnrGlpjipA8QbfeSbbQ() {}  type$XQTKnrGlpjipA8QbfeSbbQ = XQTKnrGlpjipA8QbfeSbbQ.prototype =   {
    constructor: XQTKnrGlpjipA8QbfeSbbQ,
    _Grass_i__Field: null,
    _Road1_i__Field: null,
    _Track1_i__Field: null,
    _Other_i__Field: null
  }
;
  // <>f__AnonymousType1c`4.get_Grass
  type$XQTKnrGlpjipA8QbfeSbbQ.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType1c`4.get_Road1
  type$XQTKnrGlpjipA8QbfeSbbQ.get_Road1 = function ()
  {
    return this._Road1_i__Field;
  };

  // <>f__AnonymousType1c`4.get_Track1
  type$XQTKnrGlpjipA8QbfeSbbQ.get_Track1 = function ()
  {
    return this._Track1_i__Field;
  };

  // <>f__AnonymousType1c`4.get_Other
  type$XQTKnrGlpjipA8QbfeSbbQ.get_Other = function ()
  {
    return this._Other_i__Field;
  };

  // <>f__AnonymousType1c`4.ToString
  type$XQTKnrGlpjipA8QbfeSbbQ.toString /* <>f__AnonymousType1c`4.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Other = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Other_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    XQTKnrGlpjipA8QbfeSbbQ.prototype.toString /* System.Object.ToString */ = XQTKnrGlpjipA8QbfeSbbQ.prototype.toString /* <>f__AnonymousType1c`4.ToString */;

  // <>f__AnonymousType1c`4.Equals
  type$XQTKnrGlpjipA8QbfeSbbQ.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    XQTKnrGlpjipA8QbfeSbbQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = XQTKnrGlpjipA8QbfeSbbQ.prototype.Equals;

  // <>f__AnonymousType1c`4.GetHashCode
  type$XQTKnrGlpjipA8QbfeSbbQ.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    XQTKnrGlpjipA8QbfeSbbQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = XQTKnrGlpjipA8QbfeSbbQ.prototype.GetHashCode;

  // <>f__AnonymousType1c`4..ctor
  type$XQTKnrGlpjipA8QbfeSbbQ._9QEABrGlpjipA8QbfeSbbQ = function (b, c, d, e)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Road1_i__Field = c;
    a._Track1_i__Field = d;
    a._Other_i__Field = e;
  };
  var ctor$_9QEABrGlpjipA8QbfeSbbQ = $ctor$(null, '_9QEABrGlpjipA8QbfeSbbQ', type$XQTKnrGlpjipA8QbfeSbbQ);
  // Anonymous type
  function jG3Nw8lePDOfsQtqymKt9w() {}  type$jG3Nw8lePDOfsQtqymKt9w = jG3Nw8lePDOfsQtqymKt9w.prototype =   {
    constructor: jG3Nw8lePDOfsQtqymKt9w,
    ___h__TransparentIdentifier7_i__Field: null,
    _distance_i__Field: null
  }
;
  // <>f__AnonymousType1d`2.get_<>h__TransparentIdentifier7
  type$jG3Nw8lePDOfsQtqymKt9w.get___h__TransparentIdentifier7 = function ()
  {
    return this.___h__TransparentIdentifier7_i__Field;
  };

  // <>f__AnonymousType1d`2.get_distance
  type$jG3Nw8lePDOfsQtqymKt9w.get_distance = function ()
  {
    return this._distance_i__Field;
  };

  // <>f__AnonymousType1d`2.ToString
  type$jG3Nw8lePDOfsQtqymKt9w.toString /* <>f__AnonymousType1d`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier7 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier7_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', distance = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._distance_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    jG3Nw8lePDOfsQtqymKt9w.prototype.toString /* System.Object.ToString */ = jG3Nw8lePDOfsQtqymKt9w.prototype.toString /* <>f__AnonymousType1d`2.ToString */;

  // <>f__AnonymousType1d`2.Equals
  type$jG3Nw8lePDOfsQtqymKt9w.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    jG3Nw8lePDOfsQtqymKt9w.prototype.AwAABnwCHD6Y1dqcmGKqIQ = jG3Nw8lePDOfsQtqymKt9w.prototype.Equals;

  // <>f__AnonymousType1d`2.GetHashCode
  type$jG3Nw8lePDOfsQtqymKt9w.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    jG3Nw8lePDOfsQtqymKt9w.prototype.BwAABnwCHD6Y1dqcmGKqIQ = jG3Nw8lePDOfsQtqymKt9w.prototype.GetHashCode;

  // <>f__AnonymousType1d`2..ctor
  type$jG3Nw8lePDOfsQtqymKt9w.__bQEABslePDOfsQtqymKt9w = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier7_i__Field = b;
    a._distance_i__Field = c;
  };
  var ctor$__bQEABslePDOfsQtqymKt9w = $ctor$(null, '__bQEABslePDOfsQtqymKt9w', type$jG3Nw8lePDOfsQtqymKt9w);
  // Anonymous type
  function _3Re7jNvoED2v_bfWn3BCsMA() {}  type$_3Re7jNvoED2v_bfWn3BCsMA = _3Re7jNvoED2v_bfWn3BCsMA.prototype =   {
    constructor: _3Re7jNvoED2v_bfWn3BCsMA,
    ___h__TransparentIdentifier8_i__Field: null,
    _mtarget_i__Field: null
  }
;
  // <>f__AnonymousType1e`2.get_<>h__TransparentIdentifier8
  type$_3Re7jNvoED2v_bfWn3BCsMA.get___h__TransparentIdentifier8 = function ()
  {
    return this.___h__TransparentIdentifier8_i__Field;
  };

  // <>f__AnonymousType1e`2.get_mtarget
  type$_3Re7jNvoED2v_bfWn3BCsMA.get_mtarget = function ()
  {
    return this._mtarget_i__Field;
  };

  // <>f__AnonymousType1e`2.ToString
  type$_3Re7jNvoED2v_bfWn3BCsMA.toString /* <>f__AnonymousType1e`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier8 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier8_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', mtarget = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._mtarget_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _3Re7jNvoED2v_bfWn3BCsMA.prototype.toString /* System.Object.ToString */ = _3Re7jNvoED2v_bfWn3BCsMA.prototype.toString /* <>f__AnonymousType1e`2.ToString */;

  // <>f__AnonymousType1e`2.Equals
  type$_3Re7jNvoED2v_bfWn3BCsMA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _3Re7jNvoED2v_bfWn3BCsMA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _3Re7jNvoED2v_bfWn3BCsMA.prototype.Equals;

  // <>f__AnonymousType1e`2.GetHashCode
  type$_3Re7jNvoED2v_bfWn3BCsMA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _3Re7jNvoED2v_bfWn3BCsMA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _3Re7jNvoED2v_bfWn3BCsMA.prototype.GetHashCode;

  // <>f__AnonymousType1e`2..ctor
  type$_3Re7jNvoED2v_bfWn3BCsMA.AwIABtvoED2v_bfWn3BCsMA = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier8_i__Field = b;
    a._mtarget_i__Field = c;
  };
  var ctor$AwIABtvoED2v_bfWn3BCsMA = $ctor$(null, 'AwIABtvoED2v_bfWn3BCsMA', type$_3Re7jNvoED2v_bfWn3BCsMA);
  // Anonymous type
  function Uh3uFt5khzWGJ6v7z840ow() {}  type$Uh3uFt5khzWGJ6v7z840ow = Uh3uFt5khzWGJ6v7z840ow.prototype =   {
    constructor: Uh3uFt5khzWGJ6v7z840ow,
    ___h__TransparentIdentifier9_i__Field: null,
    _mcanvas_i__Field: null
  }
;
  // <>f__AnonymousType1f`2.get_<>h__TransparentIdentifier9
  type$Uh3uFt5khzWGJ6v7z840ow.get___h__TransparentIdentifier9 = function ()
  {
    return this.___h__TransparentIdentifier9_i__Field;
  };

  // <>f__AnonymousType1f`2.get_mcanvas
  type$Uh3uFt5khzWGJ6v7z840ow.get_mcanvas = function ()
  {
    return this._mcanvas_i__Field;
  };

  // <>f__AnonymousType1f`2.ToString
  type$Uh3uFt5khzWGJ6v7z840ow.toString /* <>f__AnonymousType1f`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier9 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier9_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', mcanvas = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._mcanvas_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    Uh3uFt5khzWGJ6v7z840ow.prototype.toString /* System.Object.ToString */ = Uh3uFt5khzWGJ6v7z840ow.prototype.toString /* <>f__AnonymousType1f`2.ToString */;

  // <>f__AnonymousType1f`2.Equals
  type$Uh3uFt5khzWGJ6v7z840ow.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    Uh3uFt5khzWGJ6v7z840ow.prototype.AwAABnwCHD6Y1dqcmGKqIQ = Uh3uFt5khzWGJ6v7z840ow.prototype.Equals;

  // <>f__AnonymousType1f`2.GetHashCode
  type$Uh3uFt5khzWGJ6v7z840ow.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    Uh3uFt5khzWGJ6v7z840ow.prototype.BwAABnwCHD6Y1dqcmGKqIQ = Uh3uFt5khzWGJ6v7z840ow.prototype.GetHashCode;

  // <>f__AnonymousType1f`2..ctor
  type$Uh3uFt5khzWGJ6v7z840ow.CQIABt5khzWGJ6v7z840ow = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier9_i__Field = b;
    a._mcanvas_i__Field = c;
  };
  var ctor$CQIABt5khzWGJ6v7z840ow = $ctor$(null, 'CQIABt5khzWGJ6v7z840ow', type$Uh3uFt5khzWGJ6v7z840ow);
  // Anonymous type
  function _3c6ODq15Cj2ZDwNvMzqA_ag() {}  type$_3c6ODq15Cj2ZDwNvMzqA_ag = _3c6ODq15Cj2ZDwNvMzqA_ag.prototype =   {
    constructor: _3c6ODq15Cj2ZDwNvMzqA_ag,
    _i_i__Field: null,
    _Road2_i__Field: null
  }
;
  // <>f__AnonymousType20`2.get_i
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.get_i = function ()
  {
    return this._i_i__Field;
  };

  // <>f__AnonymousType20`2.get_Road2
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType20`2.ToString
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.toString /* <>f__AnonymousType20`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ i = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._i_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.toString /* System.Object.ToString */ = _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.toString /* <>f__AnonymousType20`2.ToString */;

  // <>f__AnonymousType20`2.Equals
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.Equals;

  // <>f__AnonymousType20`2.GetHashCode
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _3c6ODq15Cj2ZDwNvMzqA_ag.prototype.GetHashCode;

  // <>f__AnonymousType20`2..ctor
  type$_3c6ODq15Cj2ZDwNvMzqA_ag.DwIABq15Cj2ZDwNvMzqA_ag = function (b, c)
  {
    var a = this;

    a._i_i__Field = b;
    a._Road2_i__Field = c;
  };
  var ctor$DwIABq15Cj2ZDwNvMzqA_ag = $ctor$(null, 'DwIABq15Cj2ZDwNvMzqA_ag', type$_3c6ODq15Cj2ZDwNvMzqA_ag);
  // Anonymous type
  function OJSvX7Gs9zy6ToERd_beewg() {}  type$OJSvX7Gs9zy6ToERd_beewg = OJSvX7Gs9zy6ToERd_beewg.prototype =   {
    constructor: OJSvX7Gs9zy6ToERd_beewg,
    ___h__TransparentIdentifierb_i__Field: null,
    _Road1_i__Field: null
  }
;
  // <>f__AnonymousType21`2.get_<>h__TransparentIdentifierb
  type$OJSvX7Gs9zy6ToERd_beewg.get___h__TransparentIdentifierb = function ()
  {
    return this.___h__TransparentIdentifierb_i__Field;
  };

  // <>f__AnonymousType21`2.get_Road1
  type$OJSvX7Gs9zy6ToERd_beewg.get_Road1 = function ()
  {
    return this._Road1_i__Field;
  };

  // <>f__AnonymousType21`2.ToString
  type$OJSvX7Gs9zy6ToERd_beewg.toString /* <>f__AnonymousType21`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifierb = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifierb_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    OJSvX7Gs9zy6ToERd_beewg.prototype.toString /* System.Object.ToString */ = OJSvX7Gs9zy6ToERd_beewg.prototype.toString /* <>f__AnonymousType21`2.ToString */;

  // <>f__AnonymousType21`2.Equals
  type$OJSvX7Gs9zy6ToERd_beewg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    OJSvX7Gs9zy6ToERd_beewg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = OJSvX7Gs9zy6ToERd_beewg.prototype.Equals;

  // <>f__AnonymousType21`2.GetHashCode
  type$OJSvX7Gs9zy6ToERd_beewg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    OJSvX7Gs9zy6ToERd_beewg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = OJSvX7Gs9zy6ToERd_beewg.prototype.GetHashCode;

  // <>f__AnonymousType21`2..ctor
  type$OJSvX7Gs9zy6ToERd_beewg.FQIABrGs9zy6ToERd_beewg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifierb_i__Field = b;
    a._Road1_i__Field = c;
  };
  var ctor$FQIABrGs9zy6ToERd_beewg = $ctor$(null, 'FQIABrGs9zy6ToERd_beewg', type$OJSvX7Gs9zy6ToERd_beewg);
  // Anonymous type
  function _0oYy_by2GKDSIyfC5xktlTw() {}  type$_0oYy_by2GKDSIyfC5xktlTw = _0oYy_by2GKDSIyfC5xktlTw.prototype =   {
    constructor: _0oYy_by2GKDSIyfC5xktlTw,
    _i_i__Field: null,
    _Road1_i__Field: null,
    _Road2_i__Field: null
  }
;
  // <>f__AnonymousType22`3.get_i
  type$_0oYy_by2GKDSIyfC5xktlTw.get_i = function ()
  {
    return this._i_i__Field;
  };

  // <>f__AnonymousType22`3.get_Road1
  type$_0oYy_by2GKDSIyfC5xktlTw.get_Road1 = function ()
  {
    return this._Road1_i__Field;
  };

  // <>f__AnonymousType22`3.get_Road2
  type$_0oYy_by2GKDSIyfC5xktlTw.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType22`3.ToString
  type$_0oYy_by2GKDSIyfC5xktlTw.toString /* <>f__AnonymousType22`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ i = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._i_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _0oYy_by2GKDSIyfC5xktlTw.prototype.toString /* System.Object.ToString */ = _0oYy_by2GKDSIyfC5xktlTw.prototype.toString /* <>f__AnonymousType22`3.ToString */;

  // <>f__AnonymousType22`3.Equals
  type$_0oYy_by2GKDSIyfC5xktlTw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _0oYy_by2GKDSIyfC5xktlTw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _0oYy_by2GKDSIyfC5xktlTw.prototype.Equals;

  // <>f__AnonymousType22`3.GetHashCode
  type$_0oYy_by2GKDSIyfC5xktlTw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _0oYy_by2GKDSIyfC5xktlTw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _0oYy_by2GKDSIyfC5xktlTw.prototype.GetHashCode;

  // <>f__AnonymousType22`3..ctor
  type$_0oYy_by2GKDSIyfC5xktlTw.GwIABi2GKDSIyfC5xktlTw = function (b, c, d)
  {
    var a = this;

    a._i_i__Field = b;
    a._Road1_i__Field = c;
    a._Road2_i__Field = d;
  };
  var ctor$GwIABi2GKDSIyfC5xktlTw = $ctor$(null, 'GwIABi2GKDSIyfC5xktlTw', type$_0oYy_by2GKDSIyfC5xktlTw);
  // Anonymous type
  function VKu1h2036jqRbwnH9ZjRfg() {}  type$VKu1h2036jqRbwnH9ZjRfg = VKu1h2036jqRbwnH9ZjRfg.prototype =   {
    constructor: VKu1h2036jqRbwnH9ZjRfg,
    _X_i__Field: null,
    _Y_i__Field: null
  }
;
  // <>f__AnonymousType23`2.get_X
  type$VKu1h2036jqRbwnH9ZjRfg.get_X = function ()
  {
    return this._X_i__Field;
  };

  // <>f__AnonymousType23`2.get_Y
  type$VKu1h2036jqRbwnH9ZjRfg.get_Y = function ()
  {
    return this._Y_i__Field;
  };

  // <>f__AnonymousType23`2.ToString
  type$VKu1h2036jqRbwnH9ZjRfg.toString /* <>f__AnonymousType23`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ X = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._X_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Y = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Y_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    VKu1h2036jqRbwnH9ZjRfg.prototype.toString /* System.Object.ToString */ = VKu1h2036jqRbwnH9ZjRfg.prototype.toString /* <>f__AnonymousType23`2.ToString */;

  // <>f__AnonymousType23`2.Equals
  type$VKu1h2036jqRbwnH9ZjRfg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    VKu1h2036jqRbwnH9ZjRfg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = VKu1h2036jqRbwnH9ZjRfg.prototype.Equals;

  // <>f__AnonymousType23`2.GetHashCode
  type$VKu1h2036jqRbwnH9ZjRfg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    VKu1h2036jqRbwnH9ZjRfg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = VKu1h2036jqRbwnH9ZjRfg.prototype.GetHashCode;

  // <>f__AnonymousType23`2..ctor
  type$VKu1h2036jqRbwnH9ZjRfg.IgIABm036jqRbwnH9ZjRfg = function (b, c)
  {
    var a = this;

    a._X_i__Field = b;
    a._Y_i__Field = c;
  };
  var ctor$IgIABm036jqRbwnH9ZjRfg = $ctor$(null, 'IgIABm036jqRbwnH9ZjRfg', type$VKu1h2036jqRbwnH9ZjRfg);
  // Anonymous type
  function kFjjy4ITKTuU4e_bczSaFkQ() {}  type$kFjjy4ITKTuU4e_bczSaFkQ = kFjjy4ITKTuU4e_bczSaFkQ.prototype =   {
    constructor: kFjjy4ITKTuU4e_bczSaFkQ,
    _DirtAge_i__Field: null,
    _X_i__Field: null,
    _Y_i__Field: null
  }
;
  // <>f__AnonymousType24`3.get_DirtAge
  type$kFjjy4ITKTuU4e_bczSaFkQ.get_DirtAge = function ()
  {
    return this._DirtAge_i__Field;
  };

  // <>f__AnonymousType24`3.get_X
  type$kFjjy4ITKTuU4e_bczSaFkQ.get_X = function ()
  {
    return this._X_i__Field;
  };

  // <>f__AnonymousType24`3.get_Y
  type$kFjjy4ITKTuU4e_bczSaFkQ.get_Y = function ()
  {
    return this._Y_i__Field;
  };

  // <>f__AnonymousType24`3.ToString
  type$kFjjy4ITKTuU4e_bczSaFkQ.toString /* <>f__AnonymousType24`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ DirtAge = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._DirtAge_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', X = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._X_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Y = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Y_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    kFjjy4ITKTuU4e_bczSaFkQ.prototype.toString /* System.Object.ToString */ = kFjjy4ITKTuU4e_bczSaFkQ.prototype.toString /* <>f__AnonymousType24`3.ToString */;

  // <>f__AnonymousType24`3.Equals
  type$kFjjy4ITKTuU4e_bczSaFkQ.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    kFjjy4ITKTuU4e_bczSaFkQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = kFjjy4ITKTuU4e_bczSaFkQ.prototype.Equals;

  // <>f__AnonymousType24`3.GetHashCode
  type$kFjjy4ITKTuU4e_bczSaFkQ.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    kFjjy4ITKTuU4e_bczSaFkQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = kFjjy4ITKTuU4e_bczSaFkQ.prototype.GetHashCode;

  // <>f__AnonymousType24`3..ctor
  type$kFjjy4ITKTuU4e_bczSaFkQ.KAIABoITKTuU4e_bczSaFkQ = function (b, c, d)
  {
    var a = this;

    a._DirtAge_i__Field = b;
    a._X_i__Field = c;
    a._Y_i__Field = d;
  };
  var ctor$KAIABoITKTuU4e_bczSaFkQ = $ctor$(null, 'KAIABoITKTuU4e_bczSaFkQ', type$kFjjy4ITKTuU4e_bczSaFkQ);
  // Closure type
  function sV7_aWd0UYDeV52pcgh3CQg() {}  var hQEABN0UYDeV52pcgh3CQg = null;
  var hgEABN0UYDeV52pcgh3CQg = null;
  type$sV7_aWd0UYDeV52pcgh3CQg = sV7_aWd0UYDeV52pcgh3CQg.prototype =   {
    constructor: sV7_aWd0UYDeV52pcgh3CQg,
    info_text: null,
    info: null,
    paused: false,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    MapSize: null,
    MapMargins: null,
    bg_size: null,
    GetCenter: null,
    arena: null,
    PauseFog: null,
    PauseFogTween: null,
    onresize: null,
    TileResources: null,
    MyFrames_Soldier: null,
    MyFrames_Imp: null,
    MyFrames_Bus: null,
    AllImagesLoaded: null,
    ImagesThatAreCurrentlyLoading: null,
    LoadingSingleImageDone: null,
    StartLoadingSingleImage: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__31
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__31 = function ()
  {
    var a = this, b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = ((a.bg_size.get_w() * (a.MapSize.Width + a.MapMargins.X)) / 2);
    b.Y = ((a.bg_size.get_h() * (a.MapSize.Height + a.MapMargins.Y)) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__33
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__33 = function ()
  {
    var a = this;

    qwAABgnDWDenzWX06iPvnw(a.PauseFog.style, a.PauseFogTween.uwQABszZwj2ydi0fLFN2tw());
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__34
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__34 = function ()
  {
    var a = this, b;

    pgAABgnDWDenzWX06iPvnw(a.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    a.info.style.height = 'auto';
    b = zgMABkJB5jyxJFE8zncqBQ(0, 0, EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window));
    a.arena.CgAABtH5gzGOe58n5cZeTA(b);
    rgAABgnDWDenzWX06iPvnw(a.PauseFog.style, b);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__35
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__35 = function (b)
  {
    var a = this;

    a.onresize.Invoke();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__39
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__39 = function (b)
  {
    var a = this, c;

    a.ImagesThatAreCurrentlyLoading.VQMABtmlXD2_bMcNB1Zdfiw(b);
    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('loaded: ', b.src));
    c = !!a.ImagesThatAreCurrentlyLoading.UwMABtmlXD2_bMcNB1Zdfiw();

    if (!c)
    {
      a.AllImagesLoaded.Invoke();
      return;
    }

    OQAABgAjajq2ygojxk6uUQ(a.info, _8QQABpT92DaiMvTduyyLZQ('Loading images... (', new Number(a.ImagesThatAreCurrentlyLoading.UwMABtmlXD2_bMcNB1Zdfiw()), ')'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3a
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3a = function (b)
  {
    var a = this;

    a.ImagesThatAreCurrentlyLoading.TgMABtmlXD2_bMcNB1Zdfiw(b);
    uAAABrjicT6QHyVOJrkEhA(b, new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__3b'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3c
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3c = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__3d'));
    nAAABuVHczWYsGvbmU49oA(b.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__3e'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__40
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__40 = function (b)
  {
    var a = this;

    a.StartLoadingSingleImage.Invoke(twAABrjicT6QHyVOJrkEhA(b.get_Source()));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__41
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__41 = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o;

    j = null;
    k = null;
    l = /* DOMCreateType */new P8ZemukdTT_agbFObg1yIYQ();
    l.CS___8__localsb6 = a;
    OQAABgAjajq2ygojxk6uUQ(a.info, 'Loading images... done\u0021');
    l.Translate = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__42');
    i = new ctor$XgAABusX_bjuXdGkvmZthKg();
    i.ConvertMapToCanvas = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__43');
    i.ConvertCanvasToMap = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__44');
    l.Translator = i;
    l.ApplyPosition = new ctor$SgcABoyOgDytaxFtvtvirA(l, '__ctor_b__45');
    b = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__47');
    l.TileColor = PAYABnNsjTy5GU2G_aZC6tw();
    c = PQYABnNsjTy5GU2G_aZC6tw();
    l.TileColorHouse1 = NwYABnNsjTy5GU2G_aZC6tw(41, 0, 0);
    l.TileColorHouse2 = NwYABnNsjTy5GU2G_aZC6tw(42, 0, 0);
    l.TileColorHouse3 = NwYABnNsjTy5GU2G_aZC6tw(43, 0, 0);
    l.TileColorTree1 = NwYABnNsjTy5GU2G_aZC6tw(51, 0, 0);
    l.TileColorRoad1 = NwYABnNsjTy5GU2G_aZC6tw(61, 0, 0);
    l.TileColorRoad2 = NwYABnNsjTy5GU2G_aZC6tw(62, 0, 0);
    l.TileColorRoad3 = NwYABnNsjTy5GU2G_aZC6tw(63, 0, 0);
    m = [
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, -0.5, PgYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, -0.5, PwYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(0.5, 0.5, QAYABnNsjTy5GU2G_aZC6tw()),
      new ctor$gwAABhh1kTOuv2bZ_a6JGSA(-0.5, 0.5, QQYABnNsjTy5GU2G_aZC6tw())
    ];
    l.data = m;
    l.IsDefined = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__48');
    l.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(l.data, JgAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.Left, (a.MapSize.Width + 1)), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__4a'), new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(l, '__ctor_b__4b'))));
    d = new ctor$RgcABgrHJTi_bnqNd49nRag(l, '__ctor_b__4c');
    l.ApplyTileToCanvas = new ctor$TgcABqJN3D63oi2LfW_bDnQ(l, '__ctor_b__4f');
    l.KnownTileElements = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    l.KnownDirtTileElements = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    l.SpawnItems = new ctor$SgcABoyOgDytaxFtvtvirA(l, '__ctor_b__50');
    d.Invoke(4, l.TileColorHouse1);
    d.Invoke(4, l.TileColorHouse2);
    d.Invoke(5, l.TileColorHouse3);
    d.Invoke(17, l.TileColorTree1);
    d.Invoke(2, l.TileColorRoad1);
    d.Invoke(2, l.TileColorRoad2);
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__58'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(l, '__ctor_b__59'));
    nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__5b'))), new ctor$PgcABj6AjDWT6PYg1Srvkg(l, '__ctor_b__5c'));
    e = /* DOMCreateType */new RV6dsOF2ZTyNQmq6lIWK8Q();
    e.CS___8__localsbc = l;
    e.CS___8__localsb6 = a;

    if (!j)
    {
      j = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__5e');
    }

    e.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, j));
    l.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__5f')));

    if (!(hQEABN0UYDeV52pcgh3CQg))
    {
      hQEABN0UYDeV52pcgh3CQg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'PQIABt0UYDeV52pcgh3CQg');
    }


    if (!(hQEABN0UYDeV52pcgh3CQg))
    {
      hQEABN0UYDeV52pcgh3CQg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'PQIABt0UYDeV52pcgh3CQg');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__61')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__62')), hQEABN0UYDeV52pcgh3CQg);

    if (!(hQEABN0UYDeV52pcgh3CQg))
    {
      hQEABN0UYDeV52pcgh3CQg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'PQIABt0UYDeV52pcgh3CQg');
    }

    LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__61')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__62')), hQEABN0UYDeV52pcgh3CQg), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__65'));

    if (!(hgEABN0UYDeV52pcgh3CQg))
    {
      hgEABN0UYDeV52pcgh3CQg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'PgIABt0UYDeV52pcgh3CQg');
    }

    n = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__61')), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__62')), hQEABN0UYDeV52pcgh3CQg), new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__65')), hgEABN0UYDeV52pcgh3CQg).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = null;
      g = /* DOMCreateType */new CDlEaxwCyze922_a5rl3i3w();
      g.CS___8__localsbc = l;
      g.CS___8__localsb6 = a;
      while (n.qAAABu7N0xGI6ACQJ1TEOg())
      {
        g.v = n.xQAABrYmRzSu_anO2U_bk1MA();

        if (!f)
        {
          f = new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__67');
        }

        l.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(LgAABne06jm5i7qNIX6ZzA(l.data, f), g.v.get_c()));
      }
    }
    finally
    {
      o = (n == null);

      if (!o)
      {
        n.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    h = /* DOMCreateType */new xCmE1OXG7jqwtUei7ExJxg();
    h.CS___8__localsbc = l;
    h.CS___8__localsb6 = a;

    if (!k)
    {
      k = new ctor$BQAABkGjlTKl11x0SjZu8g(l, '__ctor_b__68');
    }

    h.AllRoads = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, k));
    l.data = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(l.data, new ctor$BQAABkGjlTKl11x0SjZu8g(h, '__ctor_b__69')));
    OQAABgAjajq2ygojxk6uUQ(a.info, 'Loading items...');
    lAQABtY33j68H_aZQYc4FRw(new ctor$ewMABju_bQzuieaLNynM0gA(l, '__ctor_b__6b'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3b
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3b = function (b)
  {
    var a = this;

    a.LoadingSingleImageDone.Invoke(b);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3d
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3d = function (b)
  {
    var a = this;

    a.StartLoadingSingleImage.Invoke(b.KwAABnVABTKsBEu_atoOJeA());
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3e
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3e = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__3f'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__3f
  type$sV7_aWd0UYDeV52pcgh3CQg.__ctor_b__3f = function (b)
  {
    var a = this;

    a.StartLoadingSingleImage.Invoke(b.KwAABnVABTKsBEu_atoOJeA());
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__64
  function PQIABt0UYDeV52pcgh3CQg(b)
  {
    return !(b.get_b() == null);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5.<.ctor>b__66
  function PgIABt0UYDeV52pcgh3CQg(b)
  {
    return new ctor$rwAABgLxWzeofSY5srsjIQ(b.get___h__TransparentIdentifier5().get_a(), b.get___h__TransparentIdentifier5().get_b(), b.get_c());
  };

  // Closure type
  function P8ZemukdTT_agbFObg1yIYQ() {}  var mQEABOkdTT_agbFObg1yIYQ = null;
  var mgEABOkdTT_agbFObg1yIYQ = null;
  var mwEABOkdTT_agbFObg1yIYQ = null;
  var nAEABOkdTT_agbFObg1yIYQ = null;
  var nQEABOkdTT_agbFObg1yIYQ = null;
  var ngEABOkdTT_agbFObg1yIYQ = null;
  var nwEABOkdTT_agbFObg1yIYQ = null;
  var oAEABOkdTT_agbFObg1yIYQ = null;
  var oQEABOkdTT_agbFObg1yIYQ = null;
  type$P8ZemukdTT_agbFObg1yIYQ = P8ZemukdTT_agbFObg1yIYQ.prototype =   {
    constructor: P8ZemukdTT_agbFObg1yIYQ,
    CS___8__localsb6: null,
    Translate: null,
    Translator: null,
    ApplyPosition: null,
    TileColor: null,
    TileColorHouse1: null,
    TileColorHouse2: null,
    TileColorHouse3: null,
    TileColorTree1: null,
    TileColorRoad1: null,
    TileColorRoad2: null,
    TileColorRoad3: null,
    data: null,
    IsDefined: null,
    ApplyTileToCanvas: null,
    KnownTileElements: null,
    KnownDirtTileElements: null,
    SpawnItems: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__42
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__42 = function (b, c)
  {
    var a = this, d, e, f, g;

    d = (MQAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.ZeroPoint, b, c) + a.CS___8__localsb6.RotationA);
    e = ((LgAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.ZeroPoint, b, c) * a.CS___8__localsb6.bg_size.get_h()) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(d) * e);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(d) * e) * a.CS___8__localsb6.RotationB);
    f = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    f.X = b;
    f.Y = c;
    g = f;
    return g;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__43
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__43 = function (b)
  {
    var a = this, c, d, e;

    c = a.Translate.Invoke(b.X, b.Y);
    d = a.CS___8__localsb6.GetCenter.Invoke();
    c.X = (c.X + d.X);
    c.Y = (c.Y + d.Y);
    e = c;
    return e;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__44
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__44 = function (b)
  {
    var a = this, c, d, e, f, g, h, i, j;

    c = a.CS___8__localsb6.GetCenter.Invoke();
    h = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    h.X = (b.X - c.X);
    h.Y = ((b.Y - c.Y) / a.CS___8__localsb6.RotationB);
    d = h;
    e = (LQAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.ZeroPoint, d) / (a.CS___8__localsb6.bg_size.get_h() * OgAABuTOYTqpYs14xNZZlQ(2)));
    f = (MAAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.ZeroPoint, d) - a.CS___8__localsb6.RotationA);
    i = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    i.X = (ewYABlp1gTixwdv_axCXc_aQ(f) * e);
    i.Y = (fAYABlp1gTixwdv_axCXc_aQ(f) * e);
    g = i;
    j = g;
    return j;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__45
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__45 = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new Q5T2OHWMczurl6NDf3hUaA();
    j.CS___8__localsbc = a;
    j.CS___8__localsb6 = a.CS___8__localsb6;
    j._x = b;
    j._y = c;
    try
    {
      e = a.CS___8__localsb6.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.CS___8__localsb6.Zoom * a.CS___8__localsb6.Dot));
      pgAABgnDWDenzWX06iPvnw(d.style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);
      kAUABuKCPTKGRKjkr5dWuA(d);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__46');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__47
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__47 = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__48
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__48 = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new oZkgWLGvbDu3qV7sCKjb8Q();
    d.CS___8__localsbc = a;
    d.CS___8__localsb6 = a.CS___8__localsb6;
    d.x = b;
    d.y = c;
    e = MQAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(d, '__ctor_b__49'));
    return e;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__4a
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__4a = function (b)
  {
    return IwAABne06jm5i7qNIX6ZzA(this.CS___8__localsb6.MapSize.Top, (this.CS___8__localsb6.MapSize.Height + 1));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__4b
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__4b = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__4c
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__4c = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new u6yA3RyAwj_a9iJWYoYGToA();
    d.CS___8__localsbc = a;
    d.CS___8__localsb6 = a.CS___8__localsb6;
    d.c = c;
    HgAABuTOYTqpYs14xNZZlQ(b, new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__4d'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__4f
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__4f = function (b, c, d, e)
  {
    var a = this, f, g, h, i, j;

    e = (e * a.CS___8__localsb6.Zoom);
    f = a.CS___8__localsb6.GetCenter.Invoke();
    g = a.Translate.Invoke(b, c);
    f.X = (f.X + KAAABuTOYTqpYs14xNZZlQ(g.X, (a.CS___8__localsb6.bg_size.get_w() / 2)));
    f.Y = (f.Y + KAAABuTOYTqpYs14xNZZlQ(g.Y, (a.CS___8__localsb6.bg_size.get_h() / 2)));
    h = (f.X - (a.CS___8__localsb6.bg_size.get_w() / 2));
    i = ((f.Y - (a.CS___8__localsb6.bg_size.get_h() / 2)) - (e - a.CS___8__localsb6.bg_size.get_h()));
    pgAABgnDWDenzWX06iPvnw(d.style, JgAABuTOYTqpYs14xNZZlQ(h), JgAABuTOYTqpYs14xNZZlQ(i), a.CS___8__localsb6.bg_size.get_w(), JgAABuTOYTqpYs14xNZZlQ(e));
    j = !(e > a.CS___8__localsb6.bg_size.get_h());

    if (!j)
    {
      d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(((i + e) - (a.CS___8__localsb6.bg_size.get_h() / 2)));
      return;
    }

    d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(i);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__50
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__50 = function (b, c, d)
  {
    var a = this, e, f;

    f = /* DOMCreateType */new _349HLZNy5jCRTM89hXkvyg();
    f.CS___8__localsbc = a;
    f.CS___8__localsb6 = a.CS___8__localsb6;
    f.c = b;
    f.src = c;
    f.h = d;
    e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__51')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__52')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__53')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__55')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__57'));
    a.KnownTileElements.TwMABtmlXD2_bMcNB1Zdfiw(QQAABne06jm5i7qNIX6ZzA(e));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__58
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__58 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__59
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__59 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new DGPLCJEgSzO0z2afqkBp8w();
    c.CS___8__localsbc = a;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.CS___8__localsb6.MapSize.Top, a.CS___8__localsb6.MapSize.Height), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__5a'))));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__5b
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__5b = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__5c
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__5c = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new glsg88C7ZTyX5xovhoGziw();
    c.CS___8__localsbc = a;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.CS___8__localsb6.MapSize.Left, a.CS___8__localsb6.MapSize.Width), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__5d'))));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__5e
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__5e = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__61
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__61 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__62
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__62 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new _11LEahQYYDGB2Ys3q0wYew();
    c.CS___8__localsbc = a;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.a = b;
    d = new ctor$owAABriW_aT2Zoc9EA_aVyNA(c.a, PAAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__63')));
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__65
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__65 = function (b)
  {
    return new ctor$_1AEABibD5TSjiyI0i_aFWVw(b, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_a().get_x(), b.get_a().get_y(), this.TileColorRoad3));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__68
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__68 = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__6b
  type$P8ZemukdTT_agbFObg1yIYQ.__ctor_b__6b = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;

    w = /* DOMCreateType */new fXXApXV1LDugVZDr6zIatg();
    w.CS___8__localsbc = a;
    w.CS___8__localsb6 = a.CS___8__localsb6;

    if (!(mQEABOkdTT_agbFObg1yIYQ))
    {
      mQEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VQIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColor, mQEABOkdTT_agbFObg1yIYQ, 32);

    if (!(mgEABOkdTT_agbFObg1yIYQ))
    {
      mgEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VgIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad1, mgEABOkdTT_agbFObg1yIYQ, 32);

    if (!(mwEABOkdTT_agbFObg1yIYQ))
    {
      mwEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'VwIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad2, mwEABOkdTT_agbFObg1yIYQ, 32);

    if (!(nAEABOkdTT_agbFObg1yIYQ))
    {
      nAEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'WAIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorRoad3, nAEABOkdTT_agbFObg1yIYQ, 32);

    if (!(nQEABOkdTT_agbFObg1yIYQ))
    {
      nQEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'WQIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorHouse1, nQEABOkdTT_agbFObg1yIYQ, 52);

    if (!(ngEABOkdTT_agbFObg1yIYQ))
    {
      ngEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'WgIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorHouse2, ngEABOkdTT_agbFObg1yIYQ, 96);

    if (!(nwEABOkdTT_agbFObg1yIYQ))
    {
      nwEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'WwIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorHouse3, nwEABOkdTT_agbFObg1yIYQ, 50);

    if (!(oAEABOkdTT_agbFObg1yIYQ))
    {
      oAEABOkdTT_agbFObg1yIYQ = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'XAIABukdTT_agbFObg1yIYQ');
    }

    a.SpawnItems.Invoke(a.TileColorTree1, oAEABOkdTT_agbFObg1yIYQ, 65);
    b = new ctor$AQAABnzJ4DW0TmzxD3LiJg(w, '__ctor_b__74');
    w.SpawnLookingDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(w, '__ctor_b__75');
    w.Dudes = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    c = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    w.GetRandomCanvasPosition = new ctor$AQAABnzJ4DW0TmzxD3LiJg(w, '__ctor_b__77');
    w.CreateDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(w, '__ctor_b__78');
    a.CS___8__localsb6.info.innerHTML = 'Creating dudes...';
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(w, '__ctor_b__7d'));
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(w, '__ctor_b__7e'));
    HgAABuTOYTqpYs14xNZZlQ(2, new ctor$QgcABmsdnzuyVw4sufJzAw(w, '__ctor_b__7f'));
    w.GetNearestMapPosition = new ctor$BQAABkGjlTKl11x0SjZu8g(w, '__ctor_b__80');
    d = new ctor$BQAABkGjlTKl11x0SjZu8g(w, '__ctor_b__81');
    w.GetTileElementsAt = new ctor$BQAABkGjlTKl11x0SjZu8g(w, '__ctor_b__82');
    w.AddTileElement = new ctor$DQAABl1a_aj69OXVnEw9Zyw(w, '__ctor_b__85');
    w.RemoveAllTilesAt = new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__86');
    w.ReplaceTileWithDirt = new ctor$BQAABkGjlTKl11x0SjZu8g(w, '__ctor_b__87');
    w.ReplaceTileWithNewBuilding = new ctor$BQAABkGjlTKl11x0SjZu8g(w, '__ctor_b__88');
    x = [
      a.CS___8__localsb6.TileResources.get_Grass().get_Source(),
      a.CS___8__localsb6.TileResources.get_Dirt().get_Source(),
      a.CS___8__localsb6.TileResources.get_DirtDirtGrass().get_Source(),
      a.CS___8__localsb6.TileResources.get_DirtGrassGrass().get_Source(),
      a.CS___8__localsb6.TileResources.get_Rocks().get_Source(),
      a.CS___8__localsb6.TileResources.get_RoughLand().get_Source()
    ];
    w.IsGrass = FgAABuTOYTqpYs14xNZZlQ(x);
    w.IsGrassStrict = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_Grass().get_Source());
    w.IsRoad1 = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_Road1().get_Source());
    w.IsRoad2 = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_Road2().get_Source());
    w.IsTrack1 = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_Track1().get_Source());
    w.IsTree = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_Tree().get_Source());
    w.IsTileSelector = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__localsb6.TileResources.get_TileSelector().get_Source());
    e = NwYABnNsjTy5GU2G_aZC6tw(0, 128, 0);
    w.infotoolbar = AQAABifqmzCdBJzheZlXAA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(64, 64), new ctor$_3QMABjE9ID2bvdJDtEkvJw(200, 64), e);
    f = kQUABuKCPTKGRKjkr5dWuA(JQcABjQynDSNZ0PXHA8v4w(), w.infotoolbar.Control);
    pgAABgnDWDenzWX06iPvnw(f.style, 2, 8, (w.infotoolbar.Size.X - 6), (w.infotoolbar.Size.Y - 12));
    FQAABuTOYTqpYs14xNZZlQ(f, w.infotoolbar.Color, 0);
    RwAABgAjajq2ygojxk6uUQ(f, EQYABoBglTi7pLOKu9nnAQ());

    if (!(oQEABOkdTT_agbFObg1yIYQ))
    {
      oQEABOkdTT_agbFObg1yIYQ = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'XQIABukdTT_agbFObg1yIYQ');
    }

    g = oQEABOkdTT_agbFObg1yIYQ;
    mQAABuVHczWYsGvbmU49oA(kQUABuKCPTKGRKjkr5dWuA(WwcABoxi_bTa9qR7vPH8NUg('http:\u002f\u002fzproxy.wordpress.com', 'zproxy.wordpress.com'), f).style, g);
    mQAABuVHczWYsGvbmU49oA(kQUABuKCPTKGRKjkr5dWuA(WwcABoxi_bTa9qR7vPH8NUg('http:\u002f\u002fjsc.sf.net', 'jsc.sf.net'), f).style, g);
    h = new ctor$_3QMABjE9ID2bvdJDtEkvJw(96, 32);
    i = new ctor$_3QMABjE9ID2bvdJDtEkvJw(8, ((EgQABrc98zqfJJxE_at_bcTw(window) - h.Y) - 8));
    w.toolbar = AQAABifqmzCdBJzheZlXAA(i, h, e);
    CQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(w, '__ctor_b__8a'));
    jQUABuKCPTKGRKjkr5dWuA(w.infotoolbar.Control);
    kAUABuKCPTKGRKjkr5dWuA(w.infotoolbar.Control);
    kAUABuKCPTKGRKjkr5dWuA(w.toolbar.Control);
    l = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_pause.png');
    l.FAAABqa_byTe4naXjCYFE3A('Pause');
    j = l;
    j.FwAABqa_byTe4naXjCYFE3A(new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__8b'));
    m = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_demolish.png');
    m.FAAABqa_byTe4naXjCYFE3A('Demolish');
    w.toolbar_btn_demolish = m;
    w.ShowingTileSelector = null;
    n = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_track1.png');
    n.FAAABqa_byTe4naXjCYFE3A('Build rail tracks');
    w.toolbar_btn_track1 = n;
    o = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_road2.png');
    o.FAAABqa_byTe4naXjCYFE3A('Build road');
    w.toolbar_btn_road2 = o;
    p = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_road1.png');
    p.FAAABqa_byTe4naXjCYFE3A('Build road');
    w.toolbar_btn_road1 = p;
    q = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_road1_road2.png');
    q.FAAABqa_byTe4naXjCYFE3A('Build road');
    w.toolbar_btn_road1_road2 = q;
    r = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_trees.png');
    r.FAAABqa_byTe4naXjCYFE3A('Build trees');
    w.toolbar_btn_trees = r;
    s = new ctor$kgYABoWbgjizz5alTdsqog();
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_demolish, 5);
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_track1, 2);
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_road2, 3);
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_road1, 2);
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_road1_road2, 4);
    s.lAYABoWbgjizz5alTdsqog(w.toolbar_btn_trees, 5);
    w.TileSelectorModes = s;
    t = new ctor$DQAABnhQZT_a3V_bbFIHlRVw();
    t.BwAABnhQZT_a3V_bbFIHlRVw(QQAABne06jm5i7qNIX6ZzA(w.TileSelectorModes.lgYABoWbgjizz5alTdsqog()));
    w.toolbar_btngroup = t;
    u = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_city.png');
    u.FAAABqa_byTe4naXjCYFE3A('Build city');
    w.toolbar_btn_city = u;
    v = new ctor$GQAABqa_byTe4naXjCYFE3A(w.toolbar, 'assets\u002fThreeDStuff\u002fbtn_landinfo.png');
    v.FAAABqa_byTe4naXjCYFE3A('Show info');
    k = v;
    k.FwAABqa_byTe4naXjCYFE3A(new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__8d'));
    w.ShowingTileSelector = new ctor$AQAABnzJ4DW0TmzxD3LiJg(w, '__ctor_b__8e');
    w.MultipleTileSelector = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    w.MultipleTileSelector_Clear = new ctor$QgcABmsdnzuyVw4sufJzAw(w, '__ctor_b__8f');
    w.MultipleTileSelector_Add = new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__90');
    a.CS___8__localsb6.arena.FAAABowIkzCWm4XSKspi6g(new ctor$dwMABqGrgDi0RzjV63Di8A(w, '__ctor_b__91'));
    w.GetActivatedTileSelectorMode = new ctor$AQAABnzJ4DW0TmzxD3LiJg(w, '__ctor_b__92');
    a.CS___8__localsb6.arena.GQAABowIkzCWm4XSKspi6g(new ctor$RgcABgrHJTi_bnqNd49nRag(w, '__ctor_b__93'));
    w.UseCurrentToolAt = new ctor$RgcABgrHJTi_bnqNd49nRag(w, '__ctor_b__94');
    a.CS___8__localsb6.arena.IQAABowIkzCWm4XSKspi6g(new ctor$SgcABoyOgDytaxFtvtvirA(w, '__ctor_b__9a'));
    a.CS___8__localsb6.arena.HQAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(w, '__ctor_b__9b'));
    w.toolbar_btngroup.CAAABnhQZT_a3V_bbFIHlRVw(new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__9c'));
    a.CS___8__localsb6.arena.HQAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(w, '__ctor_b__9d'));
    a.CS___8__localsb6.arena.HwAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(w, '__ctor_b__a7'));
    w.toolbar_btn_city_StopTimer = null;
    w.toolbar_btn_city.FwAABqa_byTe4naXjCYFE3A(new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__a8'));
    KgAABuTOYTqpYs14xNZZlQ(1500, new ctor$PgcABj6AjDWT6PYg1Srvkg(w, '__ctor_b__b0'));
    a.CS___8__localsb6.info.innerHTML = a.CS___8__localsb6.info_text;
    y = a.CS___8__localsb6.paused;

    if (!y)
    {
      a.CS___8__localsb6.PauseFogTween.vAQABszZwj2ydi0fLFN2tw(0);
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__6c
  function VQIABukdTT_agbFObg1yIYQ()
  {
    var b, c;

    c = !IAAABuTOYTqpYs14xNZZlQ(0.05);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f1.png';
      return b;
    }

    c = !IAAABuTOYTqpYs14xNZZlQ(0.09);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f2.png';
      return b;
    }

    b = 'assets\u002fThreeDStuff\u002f0.png';
    return b;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__6d
  function VgIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fr1.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__6e
  function VwIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fr2.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__6f
  function WAIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fr3.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__70
  function WQIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fh1.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__71
  function WgIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fh2.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__72
  function WwIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002fh3.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__73
  function XAIABukdTT_agbFObg1yIYQ()
  {
    return 'assets\u002fThreeDStuff\u002ft1.png';
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb.<.ctor>b__89
  function XQIABukdTT_agbFObg1yIYQ(b)
  {
    b.display = 'block';
    b.textDecoration = 'none';
    b.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    b.textAlign = 'center';
  };

  // Closure type
  function Q5T2OHWMczurl6NDf3hUaA() {}  type$Q5T2OHWMczurl6NDf3hUaA = Q5T2OHWMczurl6NDf3hUaA.prototype =   {
    constructor: Q5T2OHWMczurl6NDf3hUaA,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassbe.<.ctor>b__46
  type$Q5T2OHWMczurl6NDf3hUaA.__ctor_b__46 = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function oZkgWLGvbDu3qV7sCKjb8Q() {}  type$oZkgWLGvbDu3qV7sCKjb8Q = oZkgWLGvbDu3qV7sCKjb8Q.prototype =   {
    constructor: oZkgWLGvbDu3qV7sCKjb8Q,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    x: null,
    y: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc0.<.ctor>b__49
  type$oZkgWLGvbDu3qV7sCKjb8Q.__ctor_b__49 = function (b)
  {
    var a = this, c, d;

    d = (b.get_x() == a.x);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = (b.get_y() == a.y);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function u6yA3RyAwj_a9iJWYoYGToA() {}  type$u6yA3RyAwj_a9iJWYoYGToA = u6yA3RyAwj_a9iJWYoYGToA.prototype =   {
    constructor: u6yA3RyAwj_a9iJWYoYGToA,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    c: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc2.<.ctor>b__4d
  type$u6yA3RyAwj_a9iJWYoYGToA.__ctor_b__4d = function ()
  {
    var a = this, b;

    b = mwAABuVHczWYsGvbmU49oA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__localsbc.data, new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__4e')));
    a.CS___8__localsbc.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(a.CS___8__localsbc.data, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_x(), b.get_y(), a.c)));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc2.<.ctor>b__4e
  type$u6yA3RyAwj_a9iJWYoYGToA.__ctor_b__4e = function (b)
  {
    return (b.get_color() == this.CS___8__localsbc.TileColor);
  };

  // Closure type
  function _349HLZNy5jCRTM89hXkvyg() {}  type$_349HLZNy5jCRTM89hXkvyg = _349HLZNy5jCRTM89hXkvyg.prototype =   {
    constructor: _349HLZNy5jCRTM89hXkvyg,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    c: null,
    src: null,
    h: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4.<.ctor>b__51
  type$_349HLZNy5jCRTM89hXkvyg.__ctor_b__51 = function (b)
  {
    return (b.get_color() == this.c);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4.<.ctor>b__52
  type$_349HLZNy5jCRTM89hXkvyg.__ctor_b__52 = function (b)
  {
    return new ctor$igAABvWqKz2I8o1VI_b3Oew(b, tAAABrjicT6QHyVOJrkEhA(this.src.Invoke()));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4.<.ctor>b__53
  type$_349HLZNy5jCRTM89hXkvyg.__ctor_b__53 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new ojAkIpp9qzmPAXYyP1Ef6A();
    c.CS___8__localsc5 = a;
    c.CS___8__localsbc = a.CS___8__localsbc;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.__h__TransparentIdentifier2 = b;
    d = new ctor$yAEABvPdMjeIiYgGPXrH0g(c.__h__TransparentIdentifier2, new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__54'));
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4.<.ctor>b__55
  type$_349HLZNy5jCRTM89hXkvyg.__ctor_b__55 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new HWBbddXtGjGBF1xFkmwfzg();
    c.CS___8__localsc5 = a;
    c.CS___8__localsbc = a.CS___8__localsbc;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.__h__TransparentIdentifier3 = b;
    d = new ctor$zgEABgCTSzewK2TmHqW_bXg(c.__h__TransparentIdentifier3, kQUABuKCPTKGRKjkr5dWuA(mQAABuVHczWYsGvbmU49oA(c.__h__TransparentIdentifier3.get___h__TransparentIdentifier2().get_img(), new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '__ctor_b__56')), a.CS___8__localsb6.arena.Layers.Canvas));
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4.<.ctor>b__57
  type$_349HLZNy5jCRTM89hXkvyg.__ctor_b__57 = function (b)
  {
    var a = this, c, d, e;

    c = new ctor$SQAABnNDFD_aHU01yVc_agBg();
    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = b.get___h__TransparentIdentifier3().get___h__TransparentIdentifier2().get_point().get_x();
    d.Y = b.get___h__TransparentIdentifier3().get___h__TransparentIdentifier2().get_point().get_y();
    c.Position = d;
    c.Image = b.get___h__TransparentIdentifier3().get___h__TransparentIdentifier2().get_img();
    c.Source = a.src.Invoke();
    e = c;
    return e;
  };

  // Closure type
  function ojAkIpp9qzmPAXYyP1Ef6A() {}  type$ojAkIpp9qzmPAXYyP1Ef6A = ojAkIpp9qzmPAXYyP1Ef6A.prototype =   {
    constructor: ojAkIpp9qzmPAXYyP1Ef6A,
    CS___8__localsc5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    __h__TransparentIdentifier2: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4+<>c__DisplayClassc6.<.ctor>b__54
  type$ojAkIpp9qzmPAXYyP1Ef6A.__ctor_b__54 = function ()
  {
    var a = this;

    a.CS___8__localsbc.ApplyTileToCanvas.Invoke(a.__h__TransparentIdentifier2.get_point().get_x(), a.__h__TransparentIdentifier2.get_point().get_y(), a.__h__TransparentIdentifier2.get_img(), a.CS___8__localsc5.h);
  };

  // Closure type
  function HWBbddXtGjGBF1xFkmwfzg() {}  type$HWBbddXtGjGBF1xFkmwfzg = HWBbddXtGjGBF1xFkmwfzg.prototype =   {
    constructor: HWBbddXtGjGBF1xFkmwfzg,
    CS___8__localsc5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    __h__TransparentIdentifier3: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassc4+<>c__DisplayClassc8.<.ctor>b__56
  type$HWBbddXtGjGBF1xFkmwfzg.__ctor_b__56 = function (b)
  {
    var a = this;

    a.__h__TransparentIdentifier3.get_update().Invoke();
  };

  // Closure type
  function DGPLCJEgSzO0z2afqkBp8w() {}  type$DGPLCJEgSzO0z2afqkBp8w = DGPLCJEgSzO0z2afqkBp8w.prototype =   {
    constructor: DGPLCJEgSzO0z2afqkBp8w,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    road: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassca.<.ctor>b__5a
  type$DGPLCJEgSzO0z2afqkBp8w.__ctor_b__5a = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(this.road.get_x(), b, this.road.get_color());
  };

  // Closure type
  function glsg88C7ZTyX5xovhoGziw() {}  type$glsg88C7ZTyX5xovhoGziw = glsg88C7ZTyX5xovhoGziw.prototype =   {
    constructor: glsg88C7ZTyX5xovhoGziw,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    road: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasscc.<.ctor>b__5d
  type$glsg88C7ZTyX5xovhoGziw.__ctor_b__5d = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, this.road.get_y(), this.road.get_color());
  };

  // Closure type
  function _11LEahQYYDGB2Ys3q0wYew() {}  type$_11LEahQYYDGB2Ys3q0wYew = _11LEahQYYDGB2Ys3q0wYew.prototype =   {
    constructor: _11LEahQYYDGB2Ys3q0wYew,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    a: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClassd2.<.ctor>b__63
  type$_11LEahQYYDGB2Ys3q0wYew.__ctor_b__63 = function (b)
  {
    var a = this, c, d, e;

    c = (b.get_color() == a.CS___8__localsbc.TileColorRoad2);
    d = ((b.get_x() != a.a.get_x()) ? 0 : (b.get_y() == a.a.get_y()));
    e = (c && d);
    return e;
  };

  // Closure type
  function fXXApXV1LDugVZDr6zIatg() {}  var _6AEABHV1LDugVZDr6zIatg = null;
  var _6QEABHV1LDugVZDr6zIatg = null;
  var _6gEABHV1LDugVZDr6zIatg = null;
  var _6wEABHV1LDugVZDr6zIatg = null;
  var _7AEABHV1LDugVZDr6zIatg = null;
  var _7QEABHV1LDugVZDr6zIatg = null;
  var _7gEABHV1LDugVZDr6zIatg = null;
  type$fXXApXV1LDugVZDr6zIatg = fXXApXV1LDugVZDr6zIatg.prototype =   {
    constructor: fXXApXV1LDugVZDr6zIatg,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    SpawnLookingDude: null,
    Dudes: null,
    GetRandomCanvasPosition: null,
    CreateDude: null,
    GetNearestMapPosition: null,
    GetTileElementsAt: null,
    AddTileElement: null,
    RemoveAllTilesAt: null,
    ReplaceTileWithDirt: null,
    ReplaceTileWithNewBuilding: null,
    IsGrass: null,
    IsGrassStrict: null,
    IsRoad1: null,
    IsRoad2: null,
    IsTrack1: null,
    IsTree: null,
    IsTileSelector: null,
    infotoolbar: null,
    toolbar: null,
    toolbar_btn_demolish: null,
    ShowingTileSelector: null,
    toolbar_btn_track1: null,
    toolbar_btn_road2: null,
    toolbar_btn_road1: null,
    toolbar_btn_road1_road2: null,
    toolbar_btn_trees: null,
    TileSelectorModes: null,
    toolbar_btngroup: null,
    toolbar_btn_city: null,
    MultipleTileSelector: null,
    MultipleTileSelector_Clear: null,
    MultipleTileSelector_Add: null,
    GetActivatedTileSelectorMode: null,
    UseCurrentToolAt: null,
    toolbar_btn_city_StopTimer: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__74
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__74 = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.CS___8__localsb6.RotationA) == 45);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__75
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__75 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = new ctor$RQAABvWf_aTisnHwd9OZ7jQ();
    f.OwAABvWf_aTisnHwd9OZ7jQ(b);
    e = f;
    e.AnimationInfo.Frames_Stand = b;

    if (!(_6AEABHV1LDugVZDr6zIatg))
    {
      _6AEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'lQIABnV1LDugVZDr6zIatg');
    }

    e.Zoom.DynamicZoomFunc = _6AEABHV1LDugVZDr6zIatg;
    e.Zoom.WwAABuqx2zmaq5bgaWr1zw(1);
    e.SgAABvWf_aTisnHwd9OZ7jQ(48, 72);
    e.IQAABnS9Rj2LTMsPW407VQ(c, d);
    kQUABuKCPTKGRKjkr5dWuA(e.Control, a.CS___8__localsb6.arena.Layers.Canvas);
    e.PgAABvWf_aTisnHwd9OZ7jQ((IQAABuTOYTqpYs14xNZZlQ(3.14159265358979) * 2));
    g = e;
    return g;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__77
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__77 = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    b = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__localsb6.MapSize.Width - 1)) + a.CS___8__localsb6.MapSize.Left) + 1);
    c = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__localsb6.MapSize.Height - 1)) + a.CS___8__localsb6.MapSize.Top) + 1);
    d = a.CS___8__localsbc.Translate.Invoke(b, c);
    e = a.CS___8__localsb6.GetCenter.Invoke();
    g = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    g.X = JgAABuTOYTqpYs14xNZZlQ((d.X + e.X));
    g.Y = JgAABuTOYTqpYs14xNZZlQ((d.Y + e.Y));
    f = g;
    h = f;
    return h;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__78
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__78 = function (b, c, d)
  {
    var a = this, e, f, g, h;

    f = /* DOMCreateType */new iMfDh2_aKSziHCGKTDCgt2A();
    f.CS___8__localse5 = a;
    f.CS___8__localsbc = a.CS___8__localsbc;
    f.CS___8__localsb6 = a.CS___8__localsb6;
    f.idle = c;
    e = a.GetRandomCanvasPosition.Invoke();
    f.w2 = a.SpawnLookingDude.Invoke(b.Frames_Stand, IwAABuTOYTqpYs14xNZZlQ(e.X), IwAABuTOYTqpYs14xNZZlQ(e.Y));
    f.w2.Zoom.WwAABuqx2zmaq5bgaWr1zw(d);
    f.w2.AnimationInfo.Frames_Walk = b.Frames_Walk;
    f.w2.TargetLocationDistanceMultiplier = 1;
    f.GoSomeWhere = new ctor$PgcABj6AjDWT6PYg1Srvkg(f, '__ctor_b__79');
    f.WaitSomeAndGoSomeWhere = null;
    f.WaitSomeAndGoSomeWhere = new ctor$QgcABmsdnzuyVw4sufJzAw(f, '__ctor_b__7a');
    h = !f.idle;

    if (!h)
    {
      f.WaitSomeAndGoSomeWhere.Invoke();
    }

    g = f.w2;
    return g;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__7d
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__7d = function ()
  {
    var a = this;

    a.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__localsb6.MyFrames_Soldier, 1, 0.5));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__7e
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__7e = function ()
  {
    var a = this;

    a.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__localsb6.MyFrames_Imp, 2, 0.5));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__7f
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__7f = function ()
  {
    var a = this;

    a.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__localsb6.MyFrames_Bus, 0, 1));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__80
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__80 = function (b)
  {
    return GAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(this.CS___8__localsbc.Translator.ConvertCanvasToMap.Invoke(JAAABuTOYTqpYs14xNZZlQ(b))), this.CS___8__localsb6.MapSize);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__81
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__81 = function (b)
  {
    var a = this, c, d, e, f;

    c = a.GetNearestMapPosition.Invoke(new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.Left, b.Top));
    d = a.GetNearestMapPosition.Invoke(new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.yQMABkJB5jyxJFE8zncqBQ(), b.ywMABkJB5jyxJFE8zncqBQ()));
    e = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    e.Left = JgAABuTOYTqpYs14xNZZlQ(c.X);
    e.Top = JgAABuTOYTqpYs14xNZZlQ(c.Y);
    e.ygMABkJB5jyxJFE8zncqBQ(JgAABuTOYTqpYs14xNZZlQ(d.X));
    e.zAMABkJB5jyxJFE8zncqBQ(JgAABuTOYTqpYs14xNZZlQ(d.Y));
    f = e;
    return f;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__82
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__82 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new Z8PfHEHGXTqr19nAH_aQJIA();
    c.CS___8__localse5 = a;
    c.CS___8__localsbc = a.CS___8__localsbc;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.map_coords = b;

    if (!(_6QEABHV1LDugVZDr6zIatg))
    {
      _6QEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'lgIABnV1LDugVZDr6zIatg');
    }

    d = LgAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__localsbc.KnownTileElements, _6QEABHV1LDugVZDr6zIatg), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__84'));
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__85
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__85 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = new ctor$SQAABnNDFD_aHU01yVc_agBg();
    f.Position = b;
    f.Image = tAAABrjicT6QHyVOJrkEhA(c);
    f.Source = c;
    f.Height = d;
    e = f;
    a.CS___8__localsbc.KnownTileElements.TgMABtmlXD2_bMcNB1Zdfiw(e);
    a.CS___8__localsbc.ApplyTileToCanvas.Invoke(b.X, b.Y, e.Image, d);
    kQUABuKCPTKGRKjkr5dWuA(e.Image, a.CS___8__localsb6.arena.Layers.Canvas);
    g = e;
    return g;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__86
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__86 = function (b)
  {
    var a = this, c, d, e, f;

    d = QQAABne06jm5i7qNIX6ZzA(a.GetTileElementsAt.Invoke(b));

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      jwUABuKCPTKGRKjkr5dWuA(c.Image);
      EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownTileElements);
      EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__87
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__87 = function (b)
  {
    var a = this, c, d;

    a.RemoveAllTilesAt.Invoke(b);
    c = a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Dirt().get_Source(), a.CS___8__localsb6.TileResources.get_Dirt().get_Height());
    EwAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
    d = c;
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__88
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__88 = function (b)
  {
    var a = this, c, d;

    c = a.ReplaceTileWithDirt.Invoke(b);
    c.DirtAge = (-200 - (3 + IgAABuTOYTqpYs14xNZZlQ(5)));
    d = c;
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8a
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8a = function (b)
  {
    var a = this;

    a.infotoolbar.AwAABifqmzCdBJzheZlXAA();
    a.toolbar.AwAABifqmzCdBJzheZlXAA();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8b
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8b = function (b)
  {
    var a = this, c;

    a.CS___8__localsb6.paused = b.EgAABqa_byTe4naXjCYFE3A();
    c = !a.CS___8__localsb6.paused;

    if (!c)
    {
      a.CS___8__localsb6.PauseFogTween.vAQABszZwj2ydi0fLFN2tw(0.5);
    }
    else
    {
      a.CS___8__localsb6.PauseFogTween.vAQABszZwj2ydi0fLFN2tw(0);
    }

    a.Dudes.TQMABtmlXD2_bMcNB1Zdfiw(new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__8c'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8d
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8d = function (b)
  {
    var a = this;

    jAUABuKCPTKGRKjkr5dWuA(a.infotoolbar.Control, b.EgAABqa_byTe4naXjCYFE3A());
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8e
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8e = function ()
  {
    return this.toolbar_btngroup.CwAABnhQZT_a3V_bbFIHlRVw();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8f
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8f = function ()
  {
    var a = this, b, c, d, e;

    c = a.MultipleTileSelector.RwMABtmlXD2_bMcNB1Zdfiw();

    for (d = 0; (d < c.length); d++)
    {
      b = c[d];
      e = (b.Image == null);

      if (!e)
      {
        jwUABuKCPTKGRKjkr5dWuA(b.Image);
        b.Image = null;
      }

      EgAABuTOYTqpYs14xNZZlQ(b, a.CS___8__localsbc.KnownTileElements);
    }

    a.MultipleTileSelector.UAMABtmlXD2_bMcNB1Zdfiw();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__90
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__90 = function (b)
  {
    var a = this;

    EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_TileSelector().get_Source(), a.CS___8__localsb6.TileResources.get_TileSelector().get_Height()), a.MultipleTileSelector);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__91
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__91 = function (b)
  {
    var a = this, c, d, e;

    e = !a.CS___8__localsb6.paused;

    if (!e)
    {
      return;
    }

    e = !a.ShowingTileSelector.Invoke();

    if (!e)
    {
      e = !a.CS___8__localsb6.arena.GwAABowIkzCWm4XSKspi6g();

      if (!e)
      {
        return;
      }

      c = a.GetNearestMapPosition.Invoke(b);
      e = !(a.MultipleTileSelector.UwMABtmlXD2_bMcNB1Zdfiw() == 1);

      if (!e)
      {
        d = QAAABne06jm5i7qNIX6ZzA(a.MultipleTileSelector);
        a.CS___8__localsbc.ApplyTileToCanvas.Invoke(c.X, c.Y, d.Image, d.Height);
      }
      else
      {
        a.MultipleTileSelector_Clear.Invoke();
        a.MultipleTileSelector_Add.Invoke(c);
      }

    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__92
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__92 = function ()
  {
    var a = this, b, c;

    c = !(a.toolbar_btngroup.DAAABnhQZT_a3V_bbFIHlRVw() == null);

    if (!c)
    {
      b = 0;
      return b;
    }

    c = a.TileSelectorModes.lQYABoWbgjizz5alTdsqog(a.toolbar_btngroup.DAAABnhQZT_a3V_bbFIHlRVw());

    if (!c)
    {
      b = 0;
      return b;
    }

    b = a.TileSelectorModes.mgYABoWbgjizz5alTdsqog(a.toolbar_btngroup.DAAABnhQZT_a3V_bbFIHlRVw());
    return b;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__93
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__93 = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m, n, o;

    k = !a.CS___8__localsb6.paused;

    if (!k)
    {
      return;
    }

    k = a.ShowingTileSelector.Invoke();

    if (!k)
    {
      return;
    }

    d = new ctor$_2gEABocsVjino_bAdFkiwpQ(a.GetNearestMapPosition.Invoke(b), a.GetNearestMapPosition.Invoke(c));
    e = a.GetActivatedTileSelectorMode.Invoke();
    k = !!e;

    if (!k)
    {
      return;
    }

    k = !(e == 4);

    if (!k)
    {
      k = !(DwAABuTOYTqpYs14xNZZlQ((d.get_from().X - d.get_to().X)) > DwAABuTOYTqpYs14xNZZlQ((d.get_from().Y - d.get_to().Y)));

      if (!k)
      {
        e = 2;
      }
      else
      {
        e = 3;
      }

    }

    k = !(e == 2);

    if (!k)
    {
      a.MultipleTileSelector_Clear.Invoke();
      l = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().X), JgAABuTOYTqpYs14xNZZlQ(d.get_to().X));

      for (m = 0; (m < l.length); m++)
      {
        f = l[m];
        g = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        g.X = f;
        g.Y = d.get_from().Y;
        a.MultipleTileSelector_Add.Invoke(g);
      }

    }

    k = !(e == 3);

    if (!k)
    {
      a.MultipleTileSelector_Clear.Invoke();
      l = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(d.get_to().Y));

      for (m = 0; (m < l.length); m++)
      {
        h = l[m];
        i = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        i.X = d.get_from().X;
        i.Y = h;
        a.MultipleTileSelector_Add.Invoke(i);
      }

    }

    k = !(e == 5);

    if (!k)
    {
      a.MultipleTileSelector_Clear.Invoke();
      l = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().X), JgAABuTOYTqpYs14xNZZlQ(d.get_to().X));

      for (m = 0; (m < l.length); m++)
      {
        f = l[m];
        n = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(d.get_to().Y));

        for (o = 0; (o < n.length); o++)
        {
          h = n[o];
          j = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
          j.X = f;
          j.Y = h;
          a.MultipleTileSelector_Add.Invoke(j);
        }

      }

    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__94
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__94 = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;

    n = null;
    o = null;
    p = null;
    q = null;
    d = QQAABne06jm5i7qNIX6ZzA(a.GetTileElementsAt.Invoke(b));

    if (!(_6gEABHV1LDugVZDr6zIatg))
    {
      _6gEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'mAIABnV1LDugVZDr6zIatg');
    }

    e = LAAABne06jm5i7qNIX6ZzA(d, _6gEABHV1LDugVZDr6zIatg);
    r = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_demolish);

    if (!r)
    {
      a.ReplaceTileWithDirt.Invoke(b);
    }

    r = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_trees);

    if (!r)
    {

      if (!n)
      {
        n = new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__96');
      }

      f = n;
      g = new ctor$_4AEABurfVzS0dQcAeWhcww(MQAABne06jm5i7qNIX6ZzA(e, a.IsGrassStrict), MQAABne06jm5i7qNIX6ZzA(e, f));
      r = g.get_Other();

      if (!r)
      {
        r = g.get_GrassStrict();

        if (!r)
        {
          a.RemoveAllTilesAt.Invoke(b);
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Grass().get_Source(), a.CS___8__localsb6.TileResources.get_Grass().get_Height());
        }

        a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Tree().get_Source(), a.CS___8__localsb6.TileResources.get_Tree().get_Height());
      }

    }

    r = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_track1);

    if (!r)
    {

      if (!o)
      {
        o = new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__97');
      }

      f = o;
      h = new ctor$_5gEABrJ7nzakC8wkDP1aTg(MQAABne06jm5i7qNIX6ZzA(e, a.IsGrass), MQAABne06jm5i7qNIX6ZzA(e, a.IsRoad2), MQAABne06jm5i7qNIX6ZzA(e, f));
      r = h.get_Other();

      if (!r)
      {
        a.RemoveAllTilesAt.Invoke(b);
        r = h.get_Road2();

        if (!r)
        {
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Track1().get_Source(), a.CS___8__localsb6.TileResources.get_Track1().get_Height());
        }
        else
        {
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road2_Track1().get_Source(), a.CS___8__localsb6.TileResources.get_Road2_Track1().get_Height());
        }

      }
      else
      {
        NwAABuTOYTqpYs14xNZZlQ('Cannot build tracks\u0021');
        s = d;

        for (t = 0; (t < s.length); t++)
        {
          i = s[t];
          NwAABuTOYTqpYs14xNZZlQ(i.Source);
        }

      }

    }

    j = EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road1);
    k = EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road2);
    r = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road1_road2);

    if (!r)
    {
      j = (c == 2);
      k = (c == 3);
    }

    r = !j;

    if (!r)
    {

      if (!p)
      {
        p = new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__98');
      }

      f = p;
      l = new ctor$_7QEABnHvFz6qekxOo5_bgCA(MQAABne06jm5i7qNIX6ZzA(e, a.IsGrass), MQAABne06jm5i7qNIX6ZzA(e, a.IsRoad2), MQAABne06jm5i7qNIX6ZzA(e, a.IsTrack1), MQAABne06jm5i7qNIX6ZzA(e, f));
      r = l.get_Other();

      if (!r)
      {
        a.RemoveAllTilesAt.Invoke(b);
        r = l.get_Road2();

        if (!r)
        {
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road1().get_Source(), a.CS___8__localsb6.TileResources.get_Road1().get_Height());
        }
        else
        {
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road1_Road2().get_Source(), a.CS___8__localsb6.TileResources.get_Road1_Road2().get_Height());
        }

      }
      else
      {
        NwAABuTOYTqpYs14xNZZlQ('Cannot build tracks\u0021');
      }

    }

    r = !k;

    if (!r)
    {

      if (!q)
      {
        q = new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__99');
      }

      f = q;
      m = new ctor$_9QEABrGlpjipA8QbfeSbbQ(MQAABne06jm5i7qNIX6ZzA(e, a.IsGrass), MQAABne06jm5i7qNIX6ZzA(e, a.IsRoad1), MQAABne06jm5i7qNIX6ZzA(e, a.IsTrack1), MQAABne06jm5i7qNIX6ZzA(e, f));
      r = m.get_Other();

      if (!r)
      {
        a.RemoveAllTilesAt.Invoke(b);
        r = !m.get_Road1();

        if (!r)
        {
          a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road1_Road2().get_Source(), a.CS___8__localsb6.TileResources.get_Road1_Road2().get_Height());
        }
        else
        {
          r = m.get_Track1();

          if (!r)
          {
            a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road2().get_Source(), a.CS___8__localsb6.TileResources.get_Road2().get_Height());
          }
          else
          {
            a.AddTileElement.Invoke(b, a.CS___8__localsb6.TileResources.get_Road2_Track1().get_Source(), a.CS___8__localsb6.TileResources.get_Road2_Track1().get_Height());
          }

        }

      }
      else
      {
        NwAABuTOYTqpYs14xNZZlQ('Cannot build tracks\u0021');
      }

    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__9a
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__9a = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j, k, l, m, n, o, p;

    l = a.ShowingTileSelector.Invoke();

    if (!l)
    {
      return;
    }

    l = !a.CS___8__localsb6.paused;

    if (!l)
    {
      return;
    }

    e = new ctor$_2gEABocsVjino_bAdFkiwpQ(a.GetNearestMapPosition.Invoke(b), a.GetNearestMapPosition.Invoke(c));
    f = a.GetActivatedTileSelectorMode.Invoke();
    l = !!f;

    if (!l)
    {
      return;
    }

    l = !(f == 4);

    if (!l)
    {
      l = !(DwAABuTOYTqpYs14xNZZlQ((e.get_from().X - e.get_to().X)) > DwAABuTOYTqpYs14xNZZlQ((e.get_from().Y - e.get_to().Y)));

      if (!l)
      {
        f = 2;
      }
      else
      {
        f = 3;
      }

    }

    awQABh78uTmU7_bAOPst6lA(_8AQABpT92DaiMvTduyyLZQ('mode: ', f));
    l = !(f == 3);

    if (!l)
    {
      a.MultipleTileSelector_Clear.Invoke();
      m = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(e.get_to().Y));

      for (n = 0; (n < m.length); n++)
      {
        g = m[n];
        h = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        h.X = e.get_from().X;
        h.Y = g;
        a.UseCurrentToolAt.Invoke(h, f);
      }

    }

    l = !(f == 2);

    if (!l)
    {
      a.MultipleTileSelector_Clear.Invoke();
      m = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().X), JgAABuTOYTqpYs14xNZZlQ(e.get_to().X));

      for (n = 0; (n < m.length); n++)
      {
        i = m[n];
        j = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        j.X = i;
        j.Y = e.get_from().Y;
        a.UseCurrentToolAt.Invoke(j, f);
      }

    }

    l = !(f == 5);

    if (!l)
    {
      a.MultipleTileSelector_Clear.Invoke();
      m = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().X), JgAABuTOYTqpYs14xNZZlQ(e.get_to().X));

      for (n = 0; (n < m.length); n++)
      {
        i = m[n];
        o = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(e.get_to().Y));

        for (p = 0; (p < o.length); p++)
        {
          g = o[p];
          k = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
          k.X = i;
          k.Y = g;
          a.UseCurrentToolAt.Invoke(k, f);
        }

      }

    }

    a.MultipleTileSelector_Clear.Invoke();
    a.MultipleTileSelector_Add.Invoke(e.get_to());
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__9b
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__9b = function (b, c)
  {
    var a = this, d, e, f, g;

    g = !a.CS___8__localsb6.paused;

    if (!g)
    {
      return;
    }

    g = a.ShowingTileSelector.Invoke();

    if (!g)
    {
      return;
    }

    d = a.GetNearestMapPosition.Invoke(b);
    e = a.GetActivatedTileSelectorMode.Invoke();
    g = !!e;

    if (!g)
    {
      return;
    }

    g = !(e == 4);

    if (!g)
    {
      f = DQAABuTOYTqpYs14xNZZlQ(DgAABuTOYTqpYs14xNZZlQ(a.CS___8__localsbc.Translator.ConvertCanvasToMap.Invoke(JAAABuTOYTqpYs14xNZZlQ(b)), 1));
      g = !(f.X > f.Y);

      if (!g)
      {
        e = 2;
      }
      else
      {
        e = 3;
      }

    }

    a.UseCurrentToolAt.Invoke(d, e);
    a.MultipleTileSelector_Clear.Invoke();
    a.MultipleTileSelector_Add.Invoke(d);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__9c
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__9c = function (b)
  {
    var a = this, c;

    a.CS___8__localsb6.arena.ShowSelectionRectangle = !a.ShowingTileSelector.Invoke();
    c = a.ShowingTileSelector.Invoke();

    if (!c)
    {
      a.MultipleTileSelector_Clear.Invoke();
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__9d
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__9d = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m;

    h = null;
    i = null;
    j = null;
    k = /* DOMCreateType */new XP67nvyRYDSwUQ_aMEoIiWg();
    k.CS___8__localse5 = a;
    k.CS___8__localsbc = a.CS___8__localsbc;
    k.CS___8__localsb6 = a.CS___8__localsb6;
    l = !a.CS___8__localsb6.paused;

    if (!l)
    {
      return;
    }

    l = !a.ShowingTileSelector.Invoke();

    if (!l)
    {
      return;
    }


    if (!(_6wEABHV1LDugVZDr6zIatg))
    {
      _6wEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'nQIABnV1LDugVZDr6zIatg');
    }

    k.selection = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.Dudes, _6wEABHV1LDugVZDr6zIatg));
    k.target = GAAABuTOYTqpYs14xNZZlQ(a.CS___8__localsbc.Translator.ConvertCanvasToMap.Invoke(JAAABuTOYTqpYs14xNZZlQ(b)), a.CS___8__localsb6.MapSize);
    l = !!k.selection.length;

    if (!l)
    {
      return;
    }

    l = !(k.selection.length == 1);

    if (!l)
    {
      d = /* DOMCreateType */new TM5onLT_bMD_aLwIARDfpT9Q();
      d.CS___8__localsf8 = k;
      d.CS___8__localse5 = a;
      d.CS___8__localsbc = a.CS___8__localsbc;
      d.CS___8__localsb6 = a.CS___8__localsb6;
      d.canvas = a.CS___8__localsbc.Translator.ConvertMapToCanvas.Invoke(k.target);
      nAAABuVHczWYsGvbmU49oA(k.selection, new ctor$PgcABj6AjDWT6PYg1Srvkg(d, '__ctor_b__9f'));
    }
    else
    {
      g = /* DOMCreateType */new IaU674FP4zeW8dDvmLfBAw();
      g.CS___8__localsf8 = k;
      g.CS___8__localse5 = a;
      g.CS___8__localsbc = a.CS___8__localsbc;
      g.CS___8__localsb6 = a.CS___8__localsb6;
      g.center = a.CS___8__localsb6.GetCenter.Invoke();

      if (!h)
      {
        h = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(k, '__ctor_b__a0');
      }

      g.GetRotatedTargetPoint = h;
      g.OffsetToCenter = new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__a1');

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_7AEABHV1LDugVZDr6zIatg))
      {
        _7AEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ngIABnV1LDugVZDr6zIatg');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_7AEABHV1LDugVZDr6zIatg))
      {
        _7AEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ngIABnV1LDugVZDr6zIatg');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _7AEABHV1LDugVZDr6zIatg);

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a2');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_7AEABHV1LDugVZDr6zIatg))
      {
        _7AEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'ngIABnV1LDugVZDr6zIatg');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _7AEABHV1LDugVZDr6zIatg), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__a4'));

      if (!j)
      {
        j = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__a5');
      }

      e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _7AEABHV1LDugVZDr6zIatg), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__a4')), j), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__a6'));
      m = e.NgEABnMeWzaNooAKOmFm5g();
      try
      {
        while (m.qAAABu7N0xGI6ACQJ1TEOg())
        {
          f = m.xQAABrYmRzSu_anO2U_bk1MA();
          k.selection[f.get_index()].UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(f.get_canvas()));
        }
      }
      finally
      {
        l = (m == null);

        if (!l)
        {
          m.xAAABq_bUDz_aWf_aXPRTEtLA();
        }

      }
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__a7
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__a7 = function (b, c)
  {
    var a = this, d, e, f;

    e = !a.CS___8__localsb6.paused;

    if (!e)
    {
      return;
    }

    e = !a.ShowingTileSelector.Invoke();

    if (!e)
    {
      return;
    }

    f = a.Dudes.VwMABtmlXD2_bMcNB1Zdfiw();
    try
    {
      while (f.XgMABpJ7HjuHnaRo44rmHw())
      {
        d = f.WwMABpJ7HjuHnaRo44rmHw();
        e = !c.shiftKey;

        if (!e)
        {
          d.KAAABnS9Rj2LTMsPW407VQ((d.JwAABnS9Rj2LTMsPW407VQ() | b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ()))));
        }
        else
        {
          d.KAAABnS9Rj2LTMsPW407VQ(b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ())));
        }

      }
    }
    finally
    {
      ;
      f.xAAABq_bUDz_aWf_aXPRTEtLA();
    }
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__a8
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__a8 = function (b)
  {
    var a = this, c, d, e, f;

    e = /* DOMCreateType */new z1ycLg_asPzSsMJsA6aL4Qw();
    e.CS___8__localse5 = a;
    e.CS___8__localsbc = a.CS___8__localsbc;
    e.CS___8__localsb6 = a.CS___8__localsb6;
    f = (a.toolbar_btn_city_StopTimer == null);

    if (!f)
    {
      awQABh78uTmU7_bAOPst6lA('stopping city building');
      a.toolbar_btn_city_StopTimer.Invoke();
      a.toolbar_btn_city_StopTimer = null;
      return;
    }

    e.TryBuildHere = new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__a9');

    if (!(_7QEABHV1LDugVZDr6zIatg))
    {
      _7QEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'nwIABnV1LDugVZDr6zIatg');
    }


    if (!(_7QEABHV1LDugVZDr6zIatg))
    {
      _7QEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'nwIABnV1LDugVZDr6zIatg');
    }

    LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(a.CS___8__localsbc.KnownTileElements, new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__ab')), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__ac')), _7QEABHV1LDugVZDr6zIatg);

    if (!(_7gEABHV1LDugVZDr6zIatg))
    {
      _7gEABHV1LDugVZDr6zIatg = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'oAIABnV1LDugVZDr6zIatg');
    }

    c = LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(a.CS___8__localsbc.KnownTileElements, new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__ab')), new ctor$BQAABkGjlTKl11x0SjZu8g(e, '__ctor_b__ac')), _7QEABHV1LDugVZDr6zIatg), _7gEABHV1LDugVZDr6zIatg);
    d = mgAABuVHczWYsGvbmU49oA(c);
    awQABh78uTmU7_bAOPst6lA('starting city building');
    a.toolbar_btn_city_StopTimer = CgAABuTOYTqpYs14xNZZlQ(c, 2000, new ctor$PgcABj6AjDWT6PYg1Srvkg(e, '__ctor_b__af'), new ctor$QgcABmsdnzuyVw4sufJzAw(a.toolbar_btn_city, 'GgAABqa_byTe4naXjCYFE3A'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__b0
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__b0 = function (b)
  {
    var a = this, c, d, e, f, g, h;

    e = !a.CS___8__localsb6.paused;

    if (!e)
    {
      return;
    }

    NwAABuTOYTqpYs14xNZZlQ('got dirt?');
    f = a.CS___8__localsbc.KnownDirtTileElements.RwMABtmlXD2_bMcNB1Zdfiw();

    for (g = 0; (g < f.length); g++)
    {
      c = f[g];
      NQAABuTOYTqpYs14xNZZlQ(new ctor$KAIABoITKTuU4e_bczSaFkQ(c.DirtAge, c.Position.X, c.Position.Y));
      e = !(c.DirtAge > 5);

      if (!e)
      {
        EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_House5a().get_Source());

      if (!e)
      {
        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_House5b().get_Source(), a.CS___8__localsb6.TileResources.get_House5b().get_Height()), a.CS___8__localsbc.KnownDirtTileElements);
        }

      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_House5b().get_Source());

      if (!e)
      {
        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_House5c().get_Source(), a.CS___8__localsb6.TileResources.get_House5c().get_Height()), a.CS___8__localsbc.KnownDirtTileElements);
        }

      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_House5c().get_Source());

      if (!e)
      {
        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_House5().get_Source(), a.CS___8__localsb6.TileResources.get_House5().get_Height());
        }

      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_Dirt().get_Source());

      if (!e)
      {
        e = !(c.DirtAge == -200);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          h = [
            a.CS___8__localsb6.TileResources.get_House1(),
            a.CS___8__localsb6.TileResources.get_House2(),
            a.CS___8__localsb6.TileResources.get_House3(),
            a.CS___8__localsb6.TileResources.get_House4(),
            a.CS___8__localsb6.TileResources.get_House5a(),
            a.CS___8__localsb6.TileResources.get_House5a()
          ];
          d = mwAABuVHczWYsGvbmU49oA(h);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, d.get_Source(), d.get_Height()), a.CS___8__localsbc.KnownDirtTileElements);
        }

        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_DirtDirtGrass().get_Source(), a.CS___8__localsb6.TileResources.get_DirtDirtGrass().get_Height()), a.CS___8__localsbc.KnownDirtTileElements);
        }

      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_DirtDirtGrass().get_Source());

      if (!e)
      {
        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_DirtGrassGrass().get_Source(), a.CS___8__localsb6.TileResources.get_DirtGrassGrass().get_Height()), a.CS___8__localsbc.KnownDirtTileElements);
        }

      }

      e = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__localsb6.TileResources.get_DirtGrassGrass().get_Source());

      if (!e)
      {
        e = !(c.DirtAge > 3);

        if (!e)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__localsbc.KnownDirtTileElements);
          a.AddTileElement.Invoke(c.Position, a.CS___8__localsb6.TileResources.get_Grass().get_Source(), a.CS___8__localsb6.TileResources.get_Grass().get_Height());
        }

      }

      c.DirtAge = (c.DirtAge + 1);
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__76
  function lQIABnV1LDugVZDr6zIatg(b)
  {
    return 1;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__83
  function lgIABnV1LDugVZDr6zIatg(b)
  {
    return !(b == null);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__8c
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__8c = function (b)
  {
    var a = this;

    b.NgAABvWf_aTisnHwd9OZ7jQ(a.CS___8__localsb6.paused);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__95
  function mAIABnV1LDugVZDr6zIatg(b)
  {
    return b.Source;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__96
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__96 = function (b)
  {
    var a = this, c;

    c = (!a.IsGrass.Invoke(b) && !a.IsTileSelector.Invoke(b));
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__97
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__97 = function (b)
  {
    var a = this, c;

    c = (!a.IsRoad2.Invoke(b) && (!a.IsGrass.Invoke(b) && (!a.IsTree.Invoke(b) && !a.IsTileSelector.Invoke(b))));
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__98
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__98 = function (b)
  {
    var a = this, c;

    c = (!a.IsRoad2.Invoke(b) && (!a.IsTrack1.Invoke(b) && (!a.IsGrass.Invoke(b) && (!a.IsTree.Invoke(b) && !a.IsTileSelector.Invoke(b)))));
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__99
  type$fXXApXV1LDugVZDr6zIatg.__ctor_b__99 = function (b)
  {
    var a = this, c;

    c = (!a.IsRoad1.Invoke(b) && (!a.IsTrack1.Invoke(b) && (!a.IsGrass.Invoke(b) && (!a.IsTree.Invoke(b) && !a.IsTileSelector.Invoke(b)))));
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__9e
  function nQIABnV1LDugVZDr6zIatg(b)
  {
    return b.JwAABnS9Rj2LTMsPW407VQ();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__a3
  function ngIABnV1LDugVZDr6zIatg(b)
  {
    return new ctor$__bQEABslePDOfsQtqymKt9w(b, 0.5);
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__ad
  function nwIABnV1LDugVZDr6zIatg(b)
  {
    var c;

    c = (b.get___h__TransparentIdentifierb().get_Road2() || b.get_Road1());
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4.<.ctor>b__ae
  function oAIABnV1LDugVZDr6zIatg(b)
  {
    return new ctor$GwIABi2GKDSIyfC5xktlTw(b.get___h__TransparentIdentifierb().get_i(), b.get_Road1(), b.get___h__TransparentIdentifierb().get_Road2());
  };

  // Closure type
  function iMfDh2_aKSziHCGKTDCgt2A() {}  var _9gEABG_aKSziHCGKTDCgt2A = null;
  type$iMfDh2_aKSziHCGKTDCgt2A = iMfDh2_aKSziHCGKTDCgt2A.prototype =   {
    constructor: iMfDh2_aKSziHCGKTDCgt2A,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    w2: null,
    GoSomeWhere: null,
    WaitSomeAndGoSomeWhere: null,
    idle: 0
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClasse7.<.ctor>b__79
  type$iMfDh2_aKSziHCGKTDCgt2A.__ctor_b__79 = function (b)
  {
    var a = this;

    a.w2.TQAABvWf_aTisnHwd9OZ7jQ(b);
    a.w2.UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(a.CS___8__localse5.GetRandomCanvasPosition.Invoke()));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClasse7.<.ctor>b__7a
  type$iMfDh2_aKSziHCGKTDCgt2A.__ctor_b__7a = function ()
  {
    var a = this;

    KQAABuTOYTqpYs14xNZZlQ(IgAABuTOYTqpYs14xNZZlQ(5000), new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__7b'));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClasse7.<.ctor>b__7b
  type$iMfDh2_aKSziHCGKTDCgt2A.__ctor_b__7b = function (b)
  {
    var a = this, c, d;

    d = !a.CS___8__localsb6.paused;

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }


    if (!(_9gEABG_aKSziHCGKTDCgt2A))
    {
      _9gEABG_aKSziHCGKTDCgt2A = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'pQIABm_aKSziHCGKTDCgt2A');
    }

    c = NgAABne06jm5i7qNIX6ZzA(a.CS___8__localse5.Dudes, _9gEABG_aKSziHCGKTDCgt2A);
    d = !a.w2.OAAABvWf_aTisnHwd9OZ7jQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JwAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JQAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !(c > 3);

    if (!d)
    {
      a.w2.PgAABvWf_aTisnHwd9OZ7jQ(IQAABuTOYTqpYs14xNZZlQ(6.28318530717959));
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !(a.idle == 2);

    if (!d)
    {
      a.GoSomeWhere.Invoke(a.WaitSomeAndGoSomeWhere);
      return;
    }

    a.WaitSomeAndGoSomeWhere.Invoke();
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClasse7.<.ctor>b__7c
  function pQIABm_aKSziHCGKTDCgt2A(b)
  {
    return b.OAAABvWf_aTisnHwd9OZ7jQ();
  };

  // Closure type
  function Z8PfHEHGXTqr19nAH_aQJIA() {}  type$Z8PfHEHGXTqr19nAH_aQJIA = Z8PfHEHGXTqr19nAH_aQJIA.prototype =   {
    constructor: Z8PfHEHGXTqr19nAH_aQJIA,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    map_coords: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClasseb.<.ctor>b__84
  type$Z8PfHEHGXTqr19nAH_aQJIA.__ctor_b__84 = function (b)
  {
    var a = this, c;

    c = ((b.Position.X != a.map_coords.X) ? 0 : (b.Position.Y == a.map_coords.Y));
    return c;
  };

  // Closure type
  function XP67nvyRYDSwUQ_aMEoIiWg() {}  type$XP67nvyRYDSwUQ_aMEoIiWg = XP67nvyRYDSwUQ_aMEoIiWg.prototype =   {
    constructor: XP67nvyRYDSwUQ_aMEoIiWg,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    selection: null,
    target: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassf7.<.ctor>b__a0
  type$XP67nvyRYDSwUQ_aMEoIiWg.__ctor_b__a0 = function (b, c)
  {
    var a = this, d, e;

    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = (a.target.X + (ewYABlp1gTixwdv_axCXc_aQ(b) * c));
    d.Y = (a.target.Y + (fAYABlp1gTixwdv_axCXc_aQ(b) * c));
    e = d;
    return e;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassf7.<.ctor>b__a2
  type$XP67nvyRYDSwUQ_aMEoIiWg.__ctor_b__a2 = function (b)
  {
    return new ctor$_7AAABnSvaDGF0W_bnoNUWDw(b, NQAABuTOYTqpYs14xNZZlQ(((b / this.selection.length) * 6.28318530717959)));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassf7.<.ctor>b__a5
  type$XP67nvyRYDSwUQ_aMEoIiWg.__ctor_b__a5 = function (b)
  {
    return new ctor$CQIABt5khzWGJ6v7z840ow(b, this.CS___8__localsbc.Translate.Invoke(b.get_mtarget().X, b.get_mtarget().Y));
  };

  // Closure type
  function TM5onLT_bMD_aLwIARDfpT9Q() {}  type$TM5onLT_bMD_aLwIARDfpT9Q = TM5onLT_bMD_aLwIARDfpT9Q.prototype =   {
    constructor: TM5onLT_bMD_aLwIARDfpT9Q,
    CS___8__localsf8: null,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    canvas: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassf9.<.ctor>b__9f
  type$TM5onLT_bMD_aLwIARDfpT9Q.__ctor_b__9f = function (b)
  {
    var a = this;

    b.UgAABvWf_aTisnHwd9OZ7jQ(a.canvas);
  };

  // Closure type
  function IaU674FP4zeW8dDvmLfBAw() {}  type$IaU674FP4zeW8dDvmLfBAw = IaU674FP4zeW8dDvmLfBAw.prototype =   {
    constructor: IaU674FP4zeW8dDvmLfBAw,
    CS___8__localsf8: null,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    center: null,
    GetRotatedTargetPoint: null,
    OffsetToCenter: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassfb.<.ctor>b__a1
  type$IaU674FP4zeW8dDvmLfBAw.__ctor_b__a1 = function (b)
  {
    var a = this, c, d;

    c = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    c.X = JgAABuTOYTqpYs14xNZZlQ((b.X + a.center.X));
    c.Y = JgAABuTOYTqpYs14xNZZlQ((b.Y + a.center.Y));
    d = c;
    return d;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassfb.<.ctor>b__a4
  type$IaU674FP4zeW8dDvmLfBAw.__ctor_b__a4 = function (b)
  {
    return new ctor$AwIABtvoED2v_bfWn3BCsMA(b, this.GetRotatedTargetPoint.Invoke(b.get___h__TransparentIdentifier7().get_direction(), b.get_distance()));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassfb.<.ctor>b__a6
  type$IaU674FP4zeW8dDvmLfBAw.__ctor_b__a6 = function (b)
  {
    return new ctor$BAEABm2dlTCHt7YU0FRUmw(b.get___h__TransparentIdentifier9().get___h__TransparentIdentifier8().get___h__TransparentIdentifier7().get_index(), this.OffsetToCenter.Invoke(b.get_mcanvas()));
  };

  // Closure type
  function z1ycLg_asPzSsMJsA6aL4Qw() {}  type$z1ycLg_asPzSsMJsA6aL4Qw = z1ycLg_asPzSsMJsA6aL4Qw.prototype =   {
    constructor: z1ycLg_asPzSsMJsA6aL4Qw,
    CS___8__localse5: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    TryBuildHere: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassff.<.ctor>b__a9
  type$z1ycLg_asPzSsMJsA6aL4Qw.__ctor_b__a9 = function (b)
  {
    var a = this, c, d;

    d = !a.CS___8__localsbc.IsDefined.Invoke(b.X, b.Y);

    if (!d)
    {
      d = !MgAABne06jm5i7qNIX6ZzA(a.CS___8__localse5.GetTileElementsAt.Invoke(b), new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__aa'));

      if (!d)
      {
        a.CS___8__localse5.ReplaceTileWithNewBuilding.Invoke(b);
        c = 1;
        return c;
      }

    }

    c = 0;
    return c;
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassff.<.ctor>b__ab
  type$z1ycLg_asPzSsMJsA6aL4Qw.__ctor_b__ab = function (b)
  {
    return new ctor$DwIABq15Cj2ZDwNvMzqA_ag(b, this.CS___8__localse5.IsRoad2.Invoke(b.Source));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassff.<.ctor>b__ac
  type$z1ycLg_asPzSsMJsA6aL4Qw.__ctor_b__ac = function (b)
  {
    return new ctor$FQIABrGs9zy6ToERd_beewg(b, this.CS___8__localse5.IsRoad1.Invoke(b.get_i().Source));
  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassff.<.ctor>b__af
  type$z1ycLg_asPzSsMJsA6aL4Qw.__ctor_b__af = function (b)
  {
    var a = this, c;

    bAQABh78uTmU7_bAOPst6lA('try building city at road {0}', new ctor$IgIABm036jqRbwnH9ZjRfg(b.get_i().Position.X, b.get_i().Position.Y));
    c = !b.get_Road2();

    if (!c)
    {
      a.TryBuildHere.Invoke(DAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(b.get_i().Position), -1, 0));
      a.TryBuildHere.Invoke(DAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(b.get_i().Position), 1, 0));
    }

    c = !b.get_Road1();

    if (!c)
    {
      a.TryBuildHere.Invoke(DAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(b.get_i().Position), 0, -1));
      a.TryBuildHere.Invoke(DAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(b.get_i().Position), 0, 1));
    }

  };

  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassbb+<>c__DisplayClasse4+<>c__DisplayClassff.<.ctor>b__aa
  type$z1ycLg_asPzSsMJsA6aL4Qw.__ctor_b__aa = function (b)
  {
    return this.CS___8__localse5.IsGrassStrict.Invoke(b.Source);
  };

  // Closure type
  function RV6dsOF2ZTyNQmq6lIWK8Q() {}  type$RV6dsOF2ZTyNQmq6lIWK8Q = RV6dsOF2ZTyNQmq6lIWK8Q.prototype =   {
    constructor: RV6dsOF2ZTyNQmq6lIWK8Q,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassce.<.ctor>b__5f
  type$RV6dsOF2ZTyNQmq6lIWK8Q.__ctor_b__5f = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new V3jmhItv5DmCEWOMbPrKlA();
    c.CS___8__localscf = a;
    c.CS___8__localsbc = a.CS___8__localsbc;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__localsbc.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__localsbc.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__localsbc.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__60'));
    return d;
  };

  // Closure type
  function V3jmhItv5DmCEWOMbPrKlA() {}  type$V3jmhItv5DmCEWOMbPrKlA = V3jmhItv5DmCEWOMbPrKlA.prototype =   {
    constructor: V3jmhItv5DmCEWOMbPrKlA,
    v: null,
    CS___8__localscf: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassce+<>c__DisplayClassd0.<.ctor>b__60
  type$V3jmhItv5DmCEWOMbPrKlA.__ctor_b__60 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == b.get_y()));
    return c;
  };

  // Closure type
  function CDlEaxwCyze922_a5rl3i3w() {}  type$CDlEaxwCyze922_a5rl3i3w = CDlEaxwCyze922_a5rl3i3w.prototype =   {
    constructor: CDlEaxwCyze922_a5rl3i3w,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    v: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassd5.<.ctor>b__67
  type$CDlEaxwCyze922_a5rl3i3w.__ctor_b__67 = function (b)
  {
    var a = this, c, d;

    d = !(b == a.v.get_a());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b == a.v.get_b());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function xCmE1OXG7jqwtUei7ExJxg() {}  type$xCmE1OXG7jqwtUei7ExJxg = xCmE1OXG7jqwtUei7ExJxg.prototype =   {
    constructor: xCmE1OXG7jqwtUei7ExJxg,
    CS___8__localsbc: null,
    CS___8__localsb6: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassd7.<.ctor>b__69
  type$xCmE1OXG7jqwtUei7ExJxg.__ctor_b__69 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new QE5e3vf6AjmfjbHm_biGM_aA();
    c.CS___8__localsd8 = a;
    c.CS___8__localsbc = a.CS___8__localsbc;
    c.CS___8__localsb6 = a.CS___8__localsb6;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__localsbc.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__localsbc.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__localsbc.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__6a'));
    return d;
  };

  // Closure type
  function QE5e3vf6AjmfjbHm_biGM_aA() {}  type$QE5e3vf6AjmfjbHm_biGM_aA = QE5e3vf6AjmfjbHm_biGM_aA.prototype =   {
    constructor: QE5e3vf6AjmfjbHm_biGM_aA,
    v: null,
    CS___8__localsd8: null,
    CS___8__localsbc: null,
    CS___8__localsb6: null
  }
;
  // ThreeDStuff.js.Tycoon4+<>c__DisplayClassb5+<>c__DisplayClassd7+<>c__DisplayClassd9.<.ctor>b__6a
  type$QE5e3vf6AjmfjbHm_biGM_aA.__ctor_b__6a = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == a.v.get_y()));
    return c;
  };

  // Closure type
  function C5_bxBHnXdjWMKAzpOMykvA() {}  var NwIABHnXdjWMKAzpOMykvA = null;
  var OAIABHnXdjWMKAzpOMykvA = null;
  var OQIABHnXdjWMKAzpOMykvA = null;
  type$C5_bxBHnXdjWMKAzpOMykvA = C5_bxBHnXdjWMKAzpOMykvA.prototype =   {
    constructor: C5_bxBHnXdjWMKAzpOMykvA,
    GetCenter: null,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    MapSize: null,
    bg_size: null,
    Translate: null,
    ApplyPosition: null,
    TileColor: null,
    TileColorRoad1: null,
    TileColorRoad2: null,
    TileColorRoad3: null,
    data: null,
    bg_update_WithHeight: null,
    SpawnLookingDude: null,
    dude: null,
    imp: null,
    loaded: 0,
    loaded_done: null,
    loadone: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__d
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__d = function (b, c)
  {
    var a = this, d, e, f, g, h;

    d = a.GetCenter.Invoke();
    e = (MQAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) + a.RotationA);
    f = ((LgAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) * a.bg_size.get_h()) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(e) * f);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(e) * f) * a.RotationB);
    g = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    g.X = b;
    g.Y = c;
    h = g;
    return h;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__e
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__e = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new A9TbyLegNzWujcVec_aiDkg();
    j.CS___8__locals67 = a;
    j._x = b;
    j._y = c;
    try
    {
      e = a.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.Zoom * a.Dot));
      pgAABgnDWDenzWX06iPvnw(d.style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);
      kAUABuKCPTKGRKjkr5dWuA(d);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__f');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__10
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__10 = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__11
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__11 = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new Pouh_ac5kHTW621t5P9ulsg();
    d.CS___8__locals67 = a;
    d.x = b;
    d.y = c;
    e = MQAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(d, '__ctor_b__12'));
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__13
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__13 = function (b)
  {
    return IwAABne06jm5i7qNIX6ZzA(this.MapSize.get_Top(), this.MapSize.get_Height());
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__14
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__14 = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__15
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__15 = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new R8vFyHcsTTmQ9BQnbH2gAg();
    d.CS___8__locals67 = a;
    d.c = c;
    HgAABuTOYTqpYs14xNZZlQ(b, new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__16'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__18
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__18 = function (b, c, d, e)
  {
    var a = this, f, g, h, i, j;

    e = (e * a.Zoom);
    f = a.GetCenter.Invoke();
    g = a.Translate.Invoke(b, c);
    f.X = (f.X + KAAABuTOYTqpYs14xNZZlQ(g.X, (a.bg_size.get_w() / 2)));
    f.Y = (f.Y + KAAABuTOYTqpYs14xNZZlQ(g.Y, (a.bg_size.get_h() / 2)));
    h = (f.X - (a.bg_size.get_w() / 2));
    i = ((f.Y - (a.bg_size.get_h() / 2)) - (e - a.bg_size.get_h()));
    pgAABgnDWDenzWX06iPvnw(d.style, JgAABuTOYTqpYs14xNZZlQ(h), JgAABuTOYTqpYs14xNZZlQ(i), a.bg_size.get_w(), JgAABuTOYTqpYs14xNZZlQ(e));
    j = !(e > a.bg_size.get_h());

    if (!j)
    {
      d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(((i + e) - (a.bg_size.get_h() / 2)));
    }

  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__19
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__19 = function (b, c, d)
  {
    var a = this, e, f, g;

    g = /* DOMCreateType */new BRBIW18i9TiQE_aBaBP_angg();
    g.CS___8__locals67 = a;
    g.c = b;
    g.src = c;
    g.h = d;

    if (!(NwIABHnXdjWMKAzpOMykvA))
    {
      NwIABHnXdjWMKAzpOMykvA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, '_3AIABnnXdjWMKAzpOMykvA');
    }


    if (!(NwIABHnXdjWMKAzpOMykvA))
    {
      NwIABHnXdjWMKAzpOMykvA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, '_3AIABnnXdjWMKAzpOMykvA');
    }

    LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1a')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1b')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1c')), NwIABHnXdjWMKAzpOMykvA);

    if (!(OAIABHnXdjWMKAzpOMykvA))
    {
      OAIABHnXdjWMKAzpOMykvA = new ctor$BQAABkGjlTKl11x0SjZu8g(null, '_3QIABnnXdjWMKAzpOMykvA');
    }

    e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1a')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1b')), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__1c')), NwIABHnXdjWMKAzpOMykvA), OAIABHnXdjWMKAzpOMykvA);

    if (!(OQIABHnXdjWMKAzpOMykvA))
    {
      OQIABHnXdjWMKAzpOMykvA = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, '_3gIABnnXdjWMKAzpOMykvA');
    }

    f = nAAABuVHczWYsGvbmU49oA(QQAABne06jm5i7qNIX6ZzA(e), OQIABHnXdjWMKAzpOMykvA);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__22
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__22 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__23
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__23 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new thJMClRE_bjCM8nKmV3prEw();
    c.CS___8__locals67 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Top(), a.MapSize.get_Height()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__24'))));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__25
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__25 = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__26
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__26 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new GS7m05hOajqooTwFa9rGFQ();
    c.CS___8__locals67 = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.get_Left(), a.MapSize.get_Width()), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__27'))));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__28
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__28 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__2b
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__2b = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__2c
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__2c = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new glrBPMsLHjWm822gLBHTzA();
    c.CS___8__locals67 = a;
    c.a = b;
    d = new ctor$owAABriW_aT2Zoc9EA_aVyNA(c.a, PAAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__2d')));
    return d;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__2f
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__2f = function (b)
  {
    return new ctor$qQAABtmOyTCjIOK5nXjUGg(b, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_a().get_x(), b.get_a().get_y(), this.TileColorRoad3));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__32
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__32 = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__3c
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__3c = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.RotationA) == 45);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__42
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__42 = function (b)
  {
    var a = this, c;

    a.loaded = (a.loaded - 1);
    c = !!a.loaded;

    if (!c)
    {
      a.loaded_done.Invoke();
    }

  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__43
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__43 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__44'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__45
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__45 = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__46'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__48
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__48 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__49'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__4a
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__4a = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__4b'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__4d
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__4d = function ()
  {
    var a = this, b;

    b = /* DOMCreateType */new _0YMmMpeFtz_aNP7cIwjuuNw();
    b.CS___8__locals67 = a;
    b.GetRandomCanvasPosition = new ctor$AQAABnzJ4DW0TmzxD3LiJg(b, '__ctor_b__4e');
    b.Dudes = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    b.CreateDude = new ctor$BQAABkGjlTKl11x0SjZu8g(b, '__ctor_b__4f');
    HgAABuTOYTqpYs14xNZZlQ(4, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__54'));
    HgAABuTOYTqpYs14xNZZlQ(4, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__55'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__1e
  function _3AIABnnXdjWMKAzpOMykvA(b)
  {
    var c, d;

    c = /* DOMCreateType */new kFmHNYz5ozqlJZGtSGoIng();
    c.__h__TransparentIdentifier2 = b;
    d = new ctor$lgAABgsJ9zWGYfBUozCjKg(c.__h__TransparentIdentifier2, kAUABuKCPTKGRKjkr5dWuA(mQAABuVHczWYsGvbmU49oA(c.__h__TransparentIdentifier2.get___h__TransparentIdentifier1().get_img(), new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '__ctor_b__1f'))));
    return d;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__20
  function _3QIABnnXdjWMKAzpOMykvA(b)
  {
    return new ctor$nAAABvQbCDWguI23OE0esw(b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_point(), b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_img(), b.get___h__TransparentIdentifier2().get_update());
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__21
  function _3gIABnnXdjWMKAzpOMykvA(b)
  {
    b.get_update().Invoke();
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__44
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__44 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__46
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__46 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__47'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__47
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__47 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__49
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__49 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__4b
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__4b = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__4c'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66.<.ctor>b__4c
  type$C5_bxBHnXdjWMKAzpOMykvA.__ctor_b__4c = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // Closure type
  function A9TbyLegNzWujcVec_aiDkg() {}  type$A9TbyLegNzWujcVec_aiDkg = A9TbyLegNzWujcVec_aiDkg.prototype =   {
    constructor: A9TbyLegNzWujcVec_aiDkg,
    CS___8__locals67: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass69.<.ctor>b__f
  type$A9TbyLegNzWujcVec_aiDkg.__ctor_b__f = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function Pouh_ac5kHTW621t5P9ulsg() {}  type$Pouh_ac5kHTW621t5P9ulsg = Pouh_ac5kHTW621t5P9ulsg.prototype =   {
    constructor: Pouh_ac5kHTW621t5P9ulsg,
    CS___8__locals67: null,
    x: null,
    y: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass6b.<.ctor>b__12
  type$Pouh_ac5kHTW621t5P9ulsg.__ctor_b__12 = function (b)
  {
    var a = this, c, d;

    d = (b.get_x() == a.x);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = (b.get_y() == a.y);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function R8vFyHcsTTmQ9BQnbH2gAg() {}  type$R8vFyHcsTTmQ9BQnbH2gAg = R8vFyHcsTTmQ9BQnbH2gAg.prototype =   {
    constructor: R8vFyHcsTTmQ9BQnbH2gAg,
    CS___8__locals67: null,
    c: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass6d.<.ctor>b__16
  type$R8vFyHcsTTmQ9BQnbH2gAg.__ctor_b__16 = function ()
  {
    var a = this, b;

    b = mwAABuVHczWYsGvbmU49oA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__locals67.data, new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__17')));
    a.CS___8__locals67.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals67.data, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_x(), b.get_y(), a.c)));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass6d.<.ctor>b__17
  type$R8vFyHcsTTmQ9BQnbH2gAg.__ctor_b__17 = function (b)
  {
    return (b.get_color() == this.CS___8__locals67.TileColor);
  };

  // Closure type
  function BRBIW18i9TiQE_aBaBP_angg() {}  type$BRBIW18i9TiQE_aBaBP_angg = BRBIW18i9TiQE_aBaBP_angg.prototype =   {
    constructor: BRBIW18i9TiQE_aBaBP_angg,
    CS___8__locals67: null,
    c: null,
    src: null,
    h: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass72.<.ctor>b__1a
  type$BRBIW18i9TiQE_aBaBP_angg.__ctor_b__1a = function (b)
  {
    return (b.get_color() == this.c);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass72.<.ctor>b__1b
  type$BRBIW18i9TiQE_aBaBP_angg.__ctor_b__1b = function (b)
  {
    return new ctor$igAABvWqKz2I8o1VI_b3Oew(b, tAAABrjicT6QHyVOJrkEhA(this.src.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass72.<.ctor>b__1c
  type$BRBIW18i9TiQE_aBaBP_angg.__ctor_b__1c = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new Bws_bprJfXDSQxc4z9zDG_bw();
    c.CS___8__locals73 = a;
    c.CS___8__locals67 = a.CS___8__locals67;
    c.__h__TransparentIdentifier1 = b;
    d = new ctor$kAAABggiQzKMV4NqKAcaWg(c.__h__TransparentIdentifier1, new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__1d'));
    return d;
  };

  // Closure type
  function Bws_bprJfXDSQxc4z9zDG_bw() {}  type$Bws_bprJfXDSQxc4z9zDG_bw = Bws_bprJfXDSQxc4z9zDG_bw.prototype =   {
    constructor: Bws_bprJfXDSQxc4z9zDG_bw,
    CS___8__locals73: null,
    CS___8__locals67: null,
    __h__TransparentIdentifier1: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass72+<>c__DisplayClass74.<.ctor>b__1d
  type$Bws_bprJfXDSQxc4z9zDG_bw.__ctor_b__1d = function ()
  {
    var a = this;

    a.CS___8__locals67.bg_update_WithHeight.Invoke(a.__h__TransparentIdentifier1.get_point().get_x(), a.__h__TransparentIdentifier1.get_point().get_y(), a.__h__TransparentIdentifier1.get_img(), a.CS___8__locals73.h);
  };

  // Closure type
  function kFmHNYz5ozqlJZGtSGoIng() {}  type$kFmHNYz5ozqlJZGtSGoIng = kFmHNYz5ozqlJZGtSGoIng.prototype =   {
    constructor: kFmHNYz5ozqlJZGtSGoIng,
    __h__TransparentIdentifier2: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass76.<.ctor>b__1f
  type$kFmHNYz5ozqlJZGtSGoIng.__ctor_b__1f = function (b)
  {
    var a = this;

    a.__h__TransparentIdentifier2.get_update().Invoke();
  };

  // Closure type
  function thJMClRE_bjCM8nKmV3prEw() {}  type$thJMClRE_bjCM8nKmV3prEw = thJMClRE_bjCM8nKmV3prEw.prototype =   {
    constructor: thJMClRE_bjCM8nKmV3prEw,
    CS___8__locals67: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass78.<.ctor>b__24
  type$thJMClRE_bjCM8nKmV3prEw.__ctor_b__24 = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(this.road.get_x(), b, this.road.get_color());
  };

  // Closure type
  function GS7m05hOajqooTwFa9rGFQ() {}  type$GS7m05hOajqooTwFa9rGFQ = GS7m05hOajqooTwFa9rGFQ.prototype =   {
    constructor: GS7m05hOajqooTwFa9rGFQ,
    CS___8__locals67: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass7a.<.ctor>b__27
  type$GS7m05hOajqooTwFa9rGFQ.__ctor_b__27 = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, this.road.get_y(), this.road.get_color());
  };

  // Closure type
  function glrBPMsLHjWm822gLBHTzA() {}  type$glrBPMsLHjWm822gLBHTzA = glrBPMsLHjWm822gLBHTzA.prototype =   {
    constructor: glrBPMsLHjWm822gLBHTzA,
    CS___8__locals67: null,
    a: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass80.<.ctor>b__2d
  type$glrBPMsLHjWm822gLBHTzA.__ctor_b__2d = function (b)
  {
    var a = this, c, d, e;

    c = (b.get_color() == a.CS___8__locals67.TileColorRoad2);
    d = ((b.get_x() != a.a.get_x()) ? 0 : (b.get_y() == a.a.get_y()));
    e = (c && d);
    return e;
  };

  // Closure type
  function _0YMmMpeFtz_aNP7cIwjuuNw() {}  type$_0YMmMpeFtz_aNP7cIwjuuNw = _0YMmMpeFtz_aNP7cIwjuuNw.prototype =   {
    constructor: _0YMmMpeFtz_aNP7cIwjuuNw,
    CS___8__locals67: null,
    GetRandomCanvasPosition: null,
    Dudes: null,
    CreateDude: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a.<.ctor>b__4e
  type$_0YMmMpeFtz_aNP7cIwjuuNw.__ctor_b__4e = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    b = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals67.MapSize.get_Width() - 1)) + a.CS___8__locals67.MapSize.get_Left()) + 1);
    c = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals67.MapSize.get_Height() - 1)) + a.CS___8__locals67.MapSize.get_Top()) + 1);
    d = a.CS___8__locals67.Translate.Invoke(b, c);
    e = a.CS___8__locals67.GetCenter.Invoke();
    g = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    g.X = JgAABuTOYTqpYs14xNZZlQ((d.X + e.X));
    g.Y = JgAABuTOYTqpYs14xNZZlQ((d.Y + e.Y));
    f = g;
    h = f;
    return h;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a.<.ctor>b__4f
  type$_0YMmMpeFtz_aNP7cIwjuuNw.__ctor_b__4f = function (b)
  {
    var a = this, c, d, e;

    d = /* DOMCreateType */new pZzHxuZqOTSs0nS2HSkCpQ();
    d.CS___8__locals8b = a;
    d.CS___8__locals67 = a.CS___8__locals67;
    c = a.GetRandomCanvasPosition.Invoke();
    d.w2 = a.CS___8__locals67.SpawnLookingDude.Invoke(b.Frames_Stand, IwAABuTOYTqpYs14xNZZlQ(c.X), IwAABuTOYTqpYs14xNZZlQ(c.Y));
    d.w2.Zoom.WwAABuqx2zmaq5bgaWr1zw(0.5);
    d.w2.AnimationInfo.Frames_Walk = b.Frames_Walk;
    d.w2.TargetLocationDistanceMultiplier = 1;
    d.GoSomeWhere = new ctor$PgcABj6AjDWT6PYg1Srvkg(d, '__ctor_b__50');
    d.WaitSomeAndGoSomeWhere = null;
    d.WaitSomeAndGoSomeWhere = new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__51');
    d.WaitSomeAndGoSomeWhere.Invoke();
    e = d.w2;
    return e;
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a.<.ctor>b__54
  type$_0YMmMpeFtz_aNP7cIwjuuNw.__ctor_b__54 = function ()
  {
    var a = this;

    a.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__locals67.dude));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a.<.ctor>b__55
  type$_0YMmMpeFtz_aNP7cIwjuuNw.__ctor_b__55 = function ()
  {
    var a = this;

    a.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__locals67.imp));
  };

  // Closure type
  function pZzHxuZqOTSs0nS2HSkCpQ() {}  var WQIABOZqOTSs0nS2HSkCpQ = null;
  type$pZzHxuZqOTSs0nS2HSkCpQ = pZzHxuZqOTSs0nS2HSkCpQ.prototype =   {
    constructor: pZzHxuZqOTSs0nS2HSkCpQ,
    CS___8__locals8b: null,
    CS___8__locals67: null,
    w2: null,
    GoSomeWhere: null,
    WaitSomeAndGoSomeWhere: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a+<>c__DisplayClass8c.<.ctor>b__50
  type$pZzHxuZqOTSs0nS2HSkCpQ.__ctor_b__50 = function (b)
  {
    var a = this;

    a.w2.TQAABvWf_aTisnHwd9OZ7jQ(b);
    a.w2.UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(a.CS___8__locals8b.GetRandomCanvasPosition.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a+<>c__DisplayClass8c.<.ctor>b__51
  type$pZzHxuZqOTSs0nS2HSkCpQ.__ctor_b__51 = function ()
  {
    var a = this;

    KQAABuTOYTqpYs14xNZZlQ(IgAABuTOYTqpYs14xNZZlQ(5000), new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__52'));
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a+<>c__DisplayClass8c.<.ctor>b__52
  type$pZzHxuZqOTSs0nS2HSkCpQ.__ctor_b__52 = function (b)
  {
    var a = this, c, d;


    if (!(WQIABOZqOTSs0nS2HSkCpQ))
    {
      WQIABOZqOTSs0nS2HSkCpQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'AwMABuZqOTSs0nS2HSkCpQ');
    }

    c = NgAABne06jm5i7qNIX6ZzA(a.CS___8__locals8b.Dudes, WQIABOZqOTSs0nS2HSkCpQ);
    d = !(c > 3);

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JwAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    a.GoSomeWhere.Invoke(a.WaitSomeAndGoSomeWhere);
  };

  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass66+<>c__DisplayClass8a+<>c__DisplayClass8c.<.ctor>b__53
  function AwMABuZqOTSs0nS2HSkCpQ(b)
  {
    return b.OAAABvWf_aTisnHwd9OZ7jQ();
  };

  // Closure type
  function EP8NrrWwwDWSCkQ1aiMluw() {}  type$EP8NrrWwwDWSCkQ1aiMluw = EP8NrrWwwDWSCkQ1aiMluw.prototype =   {
    constructor: EP8NrrWwwDWSCkQ1aiMluw,
    CS___8__locals67: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass7c.<.ctor>b__29
  type$EP8NrrWwwDWSCkQ1aiMluw.__ctor_b__29 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new _9EsvypXwyDOR6p9FrTLb4g();
    c.CS___8__locals7d = a;
    c.CS___8__locals67 = a.CS___8__locals67;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals67.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals67.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals67.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__2a'));
    return d;
  };

  // Closure type
  function _9EsvypXwyDOR6p9FrTLb4g() {}  type$_9EsvypXwyDOR6p9FrTLb4g = _9EsvypXwyDOR6p9FrTLb4g.prototype =   {
    constructor: _9EsvypXwyDOR6p9FrTLb4g,
    v: null,
    CS___8__locals7d: null,
    CS___8__locals67: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass7c+<>c__DisplayClass7e.<.ctor>b__2a
  type$_9EsvypXwyDOR6p9FrTLb4g.__ctor_b__2a = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == b.get_y()));
    return c;
  };

  // Closure type
  function Tke9028Y_bj_abtEMN4PmPyg() {}  type$Tke9028Y_bj_abtEMN4PmPyg = Tke9028Y_bj_abtEMN4PmPyg.prototype =   {
    constructor: Tke9028Y_bj_abtEMN4PmPyg,
    CS___8__locals67: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass83.<.ctor>b__31
  type$Tke9028Y_bj_abtEMN4PmPyg.__ctor_b__31 = function (b)
  {
    var a = this, c, d;

    d = !(b == a.v.get_a());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b == a.v.get_b());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function qLjK4r_b01zuEFO8OMKHRqg() {}  type$qLjK4r_b01zuEFO8OMKHRqg = qLjK4r_b01zuEFO8OMKHRqg.prototype =   {
    constructor: qLjK4r_b01zuEFO8OMKHRqg,
    CS___8__locals67: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass85.<.ctor>b__33
  type$qLjK4r_b01zuEFO8OMKHRqg.__ctor_b__33 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new TusUdV0LbTCMb5MHpjEb9Q();
    c.CS___8__locals86 = a;
    c.CS___8__locals67 = a.CS___8__locals67;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals67.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals67.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals67.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__34'));
    return d;
  };

  // Closure type
  function TusUdV0LbTCMb5MHpjEb9Q() {}  type$TusUdV0LbTCMb5MHpjEb9Q = TusUdV0LbTCMb5MHpjEb9Q.prototype =   {
    constructor: TusUdV0LbTCMb5MHpjEb9Q,
    CS___8__locals86: null,
    CS___8__locals67: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithNatureBoy+<>c__DisplayClass85+<>c__DisplayClass87.<.ctor>b__34
  type$TusUdV0LbTCMb5MHpjEb9Q.__ctor_b__34 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == a.v.get_y()));
    return c;
  };

  // Anonymous type
  function AlR49GZH2z_a9ptWMqyUZ3g() {}  type$AlR49GZH2z_a9ptWMqyUZ3g = AlR49GZH2z_a9ptWMqyUZ3g.prototype =   {
    constructor: AlR49GZH2z_a9ptWMqyUZ3g,
    _Grass_i__Field: null,
    _Rocks_i__Field: null,
    _TileSelector_i__Field: null,
    _RoughLand_i__Field: null,
    _Dirt_i__Field: null,
    _DirtDirtGrass_i__Field: null,
    _DirtGrassGrass_i__Field: null,
    _Track1_i__Field: null,
    _Road2_i__Field: null,
    _Road2_Track1_i__Field: null,
    _Tree_i__Field: null,
    _House3_i__Field: null
  }
;
  // <>f__AnonymousType25`12.get_Grass
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType25`12.get_Rocks
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Rocks = function ()
  {
    return this._Rocks_i__Field;
  };

  // <>f__AnonymousType25`12.get_TileSelector
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_TileSelector = function ()
  {
    return this._TileSelector_i__Field;
  };

  // <>f__AnonymousType25`12.get_RoughLand
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_RoughLand = function ()
  {
    return this._RoughLand_i__Field;
  };

  // <>f__AnonymousType25`12.get_Dirt
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Dirt = function ()
  {
    return this._Dirt_i__Field;
  };

  // <>f__AnonymousType25`12.get_DirtDirtGrass
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_DirtDirtGrass = function ()
  {
    return this._DirtDirtGrass_i__Field;
  };

  // <>f__AnonymousType25`12.get_DirtGrassGrass
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_DirtGrassGrass = function ()
  {
    return this._DirtGrassGrass_i__Field;
  };

  // <>f__AnonymousType25`12.get_Track1
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Track1 = function ()
  {
    return this._Track1_i__Field;
  };

  // <>f__AnonymousType25`12.get_Road2
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Road2 = function ()
  {
    return this._Road2_i__Field;
  };

  // <>f__AnonymousType25`12.get_Road2_Track1
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Road2_Track1 = function ()
  {
    return this._Road2_Track1_i__Field;
  };

  // <>f__AnonymousType25`12.get_Tree
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_Tree = function ()
  {
    return this._Tree_i__Field;
  };

  // <>f__AnonymousType25`12.get_House3
  type$AlR49GZH2z_a9ptWMqyUZ3g.get_House3 = function ()
  {
    return this._House3_i__Field;
  };

  // <>f__AnonymousType25`12.ToString
  type$AlR49GZH2z_a9ptWMqyUZ3g.toString /* <>f__AnonymousType25`12.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Rocks = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Rocks_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', TileSelector = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._TileSelector_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', RoughLand = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._RoughLand_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Dirt = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Dirt_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', DirtDirtGrass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._DirtDirtGrass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', DirtGrassGrass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._DirtGrassGrass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Road2_Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Road2_Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Tree = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Tree_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', House3 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._House3_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    AlR49GZH2z_a9ptWMqyUZ3g.prototype.toString /* System.Object.ToString */ = AlR49GZH2z_a9ptWMqyUZ3g.prototype.toString /* <>f__AnonymousType25`12.ToString */;

  // <>f__AnonymousType25`12.Equals
  type$AlR49GZH2z_a9ptWMqyUZ3g.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    AlR49GZH2z_a9ptWMqyUZ3g.prototype.AwAABnwCHD6Y1dqcmGKqIQ = AlR49GZH2z_a9ptWMqyUZ3g.prototype.Equals;

  // <>f__AnonymousType25`12.GetHashCode
  type$AlR49GZH2z_a9ptWMqyUZ3g.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    AlR49GZH2z_a9ptWMqyUZ3g.prototype.BwAABnwCHD6Y1dqcmGKqIQ = AlR49GZH2z_a9ptWMqyUZ3g.prototype.GetHashCode;

  // <>f__AnonymousType25`12..ctor
  type$AlR49GZH2z_a9ptWMqyUZ3g.DgMABmZH2z_a9ptWMqyUZ3g = function (b, c, d, e, f, g, h, i, j, k, l, m)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Rocks_i__Field = c;
    a._TileSelector_i__Field = d;
    a._RoughLand_i__Field = e;
    a._Dirt_i__Field = f;
    a._DirtDirtGrass_i__Field = g;
    a._DirtGrassGrass_i__Field = h;
    a._Track1_i__Field = i;
    a._Road2_i__Field = j;
    a._Road2_Track1_i__Field = k;
    a._Tree_i__Field = l;
    a._House3_i__Field = m;
  };
  var ctor$DgMABmZH2z_a9ptWMqyUZ3g = $ctor$(null, 'DgMABmZH2z_a9ptWMqyUZ3g', type$AlR49GZH2z_a9ptWMqyUZ3g);
  // Anonymous type
  function LuLPCmsigjKpVZ_bIsMgm2w() {}  type$LuLPCmsigjKpVZ_bIsMgm2w = LuLPCmsigjKpVZ_bIsMgm2w.prototype =   {
    constructor: LuLPCmsigjKpVZ_bIsMgm2w,
    _Grass_i__Field: null,
    _Track1_i__Field: null,
    _Other_i__Field: null
  }
;
  // <>f__AnonymousType26`3.get_Grass
  type$LuLPCmsigjKpVZ_bIsMgm2w.get_Grass = function ()
  {
    return this._Grass_i__Field;
  };

  // <>f__AnonymousType26`3.get_Track1
  type$LuLPCmsigjKpVZ_bIsMgm2w.get_Track1 = function ()
  {
    return this._Track1_i__Field;
  };

  // <>f__AnonymousType26`3.get_Other
  type$LuLPCmsigjKpVZ_bIsMgm2w.get_Other = function ()
  {
    return this._Other_i__Field;
  };

  // <>f__AnonymousType26`3.ToString
  type$LuLPCmsigjKpVZ_bIsMgm2w.toString /* <>f__AnonymousType26`3.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ Grass = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Grass_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Track1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Track1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', Other = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._Other_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    LuLPCmsigjKpVZ_bIsMgm2w.prototype.toString /* System.Object.ToString */ = LuLPCmsigjKpVZ_bIsMgm2w.prototype.toString /* <>f__AnonymousType26`3.ToString */;

  // <>f__AnonymousType26`3.Equals
  type$LuLPCmsigjKpVZ_bIsMgm2w.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    LuLPCmsigjKpVZ_bIsMgm2w.prototype.AwAABnwCHD6Y1dqcmGKqIQ = LuLPCmsigjKpVZ_bIsMgm2w.prototype.Equals;

  // <>f__AnonymousType26`3.GetHashCode
  type$LuLPCmsigjKpVZ_bIsMgm2w.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    LuLPCmsigjKpVZ_bIsMgm2w.prototype.BwAABnwCHD6Y1dqcmGKqIQ = LuLPCmsigjKpVZ_bIsMgm2w.prototype.GetHashCode;

  // <>f__AnonymousType26`3..ctor
  type$LuLPCmsigjKpVZ_bIsMgm2w.HgMABmsigjKpVZ_bIsMgm2w = function (b, c, d)
  {
    var a = this;

    a._Grass_i__Field = b;
    a._Track1_i__Field = c;
    a._Other_i__Field = d;
  };
  var ctor$HgMABmsigjKpVZ_bIsMgm2w = $ctor$(null, 'HgMABmsigjKpVZ_bIsMgm2w', type$LuLPCmsigjKpVZ_bIsMgm2w);
  // Closure type
  function HsOh2PlXITmucTeoS5o0mw() {}  var lAIABPlXITmucTeoS5o0mw = null;
  var lQIABPlXITmucTeoS5o0mw = null;
  var lgIABPlXITmucTeoS5o0mw = null;
  var lwIABPlXITmucTeoS5o0mw = null;
  var mAIABPlXITmucTeoS5o0mw = null;
  var mQIABPlXITmucTeoS5o0mw = null;
  var mgIABPlXITmucTeoS5o0mw = null;
  var mwIABPlXITmucTeoS5o0mw = null;
  var nAIABPlXITmucTeoS5o0mw = null;
  var nQIABPlXITmucTeoS5o0mw = null;
  var ngIABPlXITmucTeoS5o0mw = null;
  var nwIABPlXITmucTeoS5o0mw = null;
  type$HsOh2PlXITmucTeoS5o0mw = HsOh2PlXITmucTeoS5o0mw.prototype =   {
    constructor: HsOh2PlXITmucTeoS5o0mw,
    info_text: null,
    info: null,
    paused: false,
    ZeroPoint: null,
    RotationA: null,
    RotationB: null,
    Zoom: 0,
    Dot: 0,
    MapSize: null,
    MapMargins: null,
    bg_size: null,
    GetCenter: null,
    arena: null,
    TileResources: null,
    Translate: null,
    GetCanvasPosition: null,
    ApplyPosition: null,
    TileColor: null,
    TileColorHouse1: null,
    TileColorHouse2: null,
    TileColorHouse3: null,
    TileColorTree1: null,
    TileColorRoad1: null,
    TileColorRoad2: null,
    TileColorRoad3: null,
    data: null,
    IsDefined: null,
    ApplyTileToCanvas: null,
    KnownTileElements: null,
    KnownDirtTileElements: null,
    SpawnItems: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__22
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__22 = function ()
  {
    var a = this, b, c;

    b = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    b.X = ((a.bg_size.get_w() * (a.MapSize.Width + a.MapMargins.X)) / 2);
    b.Y = ((a.bg_size.get_h() * (a.MapSize.Height + a.MapMargins.Y)) / 2);
    c = b;
    return c;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__23
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__23 = function (b)
  {
    var a = this;

    pgAABgnDWDenzWX06iPvnw(a.info.style, 4, 4, (EwQABrc98zqfJJxE_at_bcTw(window) - 8), 0);
    a.info.style.height = 'auto';
    a.arena.CgAABtH5gzGOe58n5cZeTA(zgMABkJB5jyxJFE8zncqBQ(0, 0, EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window)));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__24
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__24 = function (b, c)
  {
    var a = this, d, e, f, g;

    d = (MQAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) + a.RotationA);
    e = ((LgAABuTOYTqpYs14xNZZlQ(a.ZeroPoint, b, c) * a.bg_size.get_h()) * OgAABuTOYTqpYs14xNZZlQ(2));
    b = (ewYABlp1gTixwdv_axCXc_aQ(d) * e);
    c = ((fAYABlp1gTixwdv_axCXc_aQ(d) * e) * a.RotationB);
    f = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    f.X = b;
    f.Y = c;
    g = f;
    return g;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__25
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__25 = function (b)
  {
    var a = this, c, d, e;

    c = a.Translate.Invoke(b.X, b.Y);
    d = a.GetCenter.Invoke();
    c.X = (c.X + d.X);
    c.Y = (c.Y + d.Y);
    e = c;
    return e;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__26
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__26 = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j;

    i = null;
    j = /* DOMCreateType */new dQJYbkFpPDWk_bCYADHDc0A();
    j.CS___8__locals9e = a;
    j._x = b;
    j._y = c;
    try
    {
      e = a.GetCenter.Invoke();
      f = a.Translate.Invoke(j._x, j._y);
      g = IwAABuTOYTqpYs14xNZZlQ((a.Zoom * a.Dot));
      pgAABgnDWDenzWX06iPvnw(d.style, (JgAABuTOYTqpYs14xNZZlQ((e.X + f.X)) - (g / 2)), (JgAABuTOYTqpYs14xNZZlQ((e.Y + f.Y)) - (g / 2)), g, g);
      kAUABuKCPTKGRKjkr5dWuA(d);

      if (!i)
      {
        i = new ctor$dwMABqGrgDi0RzjV63Di8A(j, '__ctor_b__27');
      }

      QwAABgAjajq2ygojxk6uUQ(d, i);
    }
    catch (__exc)
    {
      h = __exc;
      OAAABuTOYTqpYs14xNZZlQ(h);
    }
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__28
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__28 = function (b, c)
  {
    var a = this, d, e;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.ApplyPosition.Invoke(b, c, d);
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__29
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__29 = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new mIMGJN76tTeVTxHI50gn7Q();
    d.CS___8__locals9e = a;
    d.x = b;
    d.y = c;
    e = MQAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(d, '__ctor_b__2a'));
    return e;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__2b
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__2b = function (b)
  {
    return IwAABne06jm5i7qNIX6ZzA(this.MapSize.Top, (this.MapSize.Height + 1));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__2c
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__2c = function (b, c)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, c, this.TileColor);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__2d
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__2d = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new Y2oN6Loaxji7_avxqV1wjFg();
    d.CS___8__locals9e = a;
    d.c = c;
    HgAABuTOYTqpYs14xNZZlQ(b, new ctor$QgcABmsdnzuyVw4sufJzAw(d, '__ctor_b__2e'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__30
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__30 = function (b, c, d, e)
  {
    var a = this, f, g, h, i, j;

    e = (e * a.Zoom);
    f = a.GetCenter.Invoke();
    g = a.Translate.Invoke(b, c);
    f.X = (f.X + KAAABuTOYTqpYs14xNZZlQ(g.X, (a.bg_size.get_w() / 2)));
    f.Y = (f.Y + KAAABuTOYTqpYs14xNZZlQ(g.Y, (a.bg_size.get_h() / 2)));
    h = (f.X - (a.bg_size.get_w() / 2));
    i = ((f.Y - (a.bg_size.get_h() / 2)) - (e - a.bg_size.get_h()));
    pgAABgnDWDenzWX06iPvnw(d.style, JgAABuTOYTqpYs14xNZZlQ(h), JgAABuTOYTqpYs14xNZZlQ(i), a.bg_size.get_w(), JgAABuTOYTqpYs14xNZZlQ(e));
    j = !(e > a.bg_size.get_h());

    if (!j)
    {
      d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(((i + e) - (a.bg_size.get_h() / 2)));
      return;
    }

    d.style.zIndex = JgAABuTOYTqpYs14xNZZlQ(i);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__31
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__31 = function (b, c, d)
  {
    var a = this, e, f;

    f = /* DOMCreateType */new ljyGT9iVvTi2aPmxSPPomw();
    f.CS___8__locals9e = a;
    f.c = b;
    f.src = c;
    f.h = d;
    e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__32')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__33')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__34')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__36')), new ctor$BQAABkGjlTKl11x0SjZu8g(f, '__ctor_b__38'));
    a.KnownTileElements.TwMABtmlXD2_bMcNB1Zdfiw(QQAABne06jm5i7qNIX6ZzA(e));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__39
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__39 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__3a
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__3a = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new QcrDKLyi0DiPtpnuQm5uaw();
    c.CS___8__locals9e = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.Top, a.MapSize.Height), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__3b'))));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__3c
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__3c = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__3d
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__3d = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new WmF7UQLKxTOztNkCZNNxeg();
    c.CS___8__locals9e = a;
    c.road = b;
    a.data = QQAABne06jm5i7qNIX6ZzA(KgAABne06jm5i7qNIX6ZzA(a.data, LAAABne06jm5i7qNIX6ZzA(IwAABne06jm5i7qNIX6ZzA(a.MapSize.Left, a.MapSize.Width), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__3e'))));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__3f
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__3f = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__42
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__42 = function (b)
  {
    return (b.get_color() == this.TileColorRoad1);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__43
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__43 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new LbaTB4gJ3jaS6jScQGbhng();
    c.CS___8__locals9e = a;
    c.a = b;
    d = new ctor$owAABriW_aT2Zoc9EA_aVyNA(c.a, PAAABne06jm5i7qNIX6ZzA(a.data, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__44')));
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__46
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__46 = function (b)
  {
    return new ctor$qQAABtmOyTCjIOK5nXjUGg(b, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_a().get_x(), b.get_a().get_y(), this.TileColorRoad3));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__49
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__49 = function (b)
  {
    return (b.get_color() == this.TileColorRoad2);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__4c
  type$HsOh2PlXITmucTeoS5o0mw.__ctor_b__4c = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n;

    m = /* DOMCreateType */new ZWVxUm99Qj2G3LVxCXvdPQ();
    m.CS___8__locals9e = a;

    if (!(lAIABPlXITmucTeoS5o0mw))
    {
      lAIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'PAMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColor, lAIABPlXITmucTeoS5o0mw, 32);

    if (!(lQIABPlXITmucTeoS5o0mw))
    {
      lQIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'PQMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorRoad1, lQIABPlXITmucTeoS5o0mw, 32);

    if (!(lgIABPlXITmucTeoS5o0mw))
    {
      lgIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'PgMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorRoad2, lgIABPlXITmucTeoS5o0mw, 32);

    if (!(lwIABPlXITmucTeoS5o0mw))
    {
      lwIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'PwMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorRoad3, lwIABPlXITmucTeoS5o0mw, 32);

    if (!(mAIABPlXITmucTeoS5o0mw))
    {
      mAIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'QAMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorHouse1, mAIABPlXITmucTeoS5o0mw, 52);

    if (!(mQIABPlXITmucTeoS5o0mw))
    {
      mQIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'QQMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorHouse2, mQIABPlXITmucTeoS5o0mw, 96);

    if (!(mgIABPlXITmucTeoS5o0mw))
    {
      mgIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'QgMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorHouse3, mgIABPlXITmucTeoS5o0mw, 50);

    if (!(mwIABPlXITmucTeoS5o0mw))
    {
      mwIABPlXITmucTeoS5o0mw = new ctor$AQAABnzJ4DW0TmzxD3LiJg(null, 'QwMABvlXITmucTeoS5o0mw');
    }

    a.SpawnItems.Invoke(a.TileColorTree1, mwIABPlXITmucTeoS5o0mw, 65);
    b = new ctor$AQAABnzJ4DW0TmzxD3LiJg(m, '__ctor_b__55');
    m.SpawnLookingDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(m, '__ctor_b__56');
    j = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    j.Frames_Stand = AQAABsQegDePdXlnkXNNUg();
    j.Frames_Walk = AgAABsQegDePdXlnkXNNUg();
    m.dude = j;
    k = new ctor$LgAABr8tDDudJ3SEJYLbKw();
    k.Frames_Stand = AwAABsQegDePdXlnkXNNUg();
    k.Frames_Walk = BAAABsQegDePdXlnkXNNUg();
    m.imp = k;
    m.loaded = 0;

    if (!(nAIABPlXITmucTeoS5o0mw))
    {
      nAIABPlXITmucTeoS5o0mw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'RAMABvlXITmucTeoS5o0mw');
    }

    m.loaded = (m.loaded + (m.dude.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(m.dude.Frames_Walk, nAIABPlXITmucTeoS5o0mw)));

    if (!(nQIABPlXITmucTeoS5o0mw))
    {
      nQIABPlXITmucTeoS5o0mw = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'RQMABvlXITmucTeoS5o0mw');
    }

    m.loaded = (m.loaded + (m.imp.Frames_Stand.length + HQAABne06jm5i7qNIX6ZzA(m.imp.Frames_Walk, nQIABPlXITmucTeoS5o0mw)));

    if (!(ngIABPlXITmucTeoS5o0mw))
    {
      ngIABPlXITmucTeoS5o0mw = new ctor$QgcABmsdnzuyVw4sufJzAw(null, 'RgMABvlXITmucTeoS5o0mw');
    }

    m.loaded_done = ngIABPlXITmucTeoS5o0mw;
    m.loadone = new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__5b');
    OQAABgAjajq2ygojxk6uUQ(a.info, 'Loading images...');
    nAAABuVHczWYsGvbmU49oA(m.dude.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__5c'));
    nAAABuVHczWYsGvbmU49oA(m.dude.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__5e'));
    nAAABuVHczWYsGvbmU49oA(m.imp.Frames_Stand, new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__61'));
    nAAABuVHczWYsGvbmU49oA(m.imp.Frames_Walk, new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__63'));
    m.Dudes = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    m.loaded_done = iwYABnzY4jaVovIDSMIxgQ(m.loaded_done, new ctor$QgcABmsdnzuyVw4sufJzAw(m, '__ctor_b__66'));
    m.GetMapPosition = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__6f');
    c = NwYABnNsjTy5GU2G_aZC6tw(0, 128, 0);
    m.infotoolbar = AQAABifqmzCdBJzheZlXAA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(64, 64), new ctor$_3QMABjE9ID2bvdJDtEkvJw(200, 64), c);
    d = kQUABuKCPTKGRKjkr5dWuA(JQcABjQynDSNZ0PXHA8v4w(), m.infotoolbar.Control);
    pgAABgnDWDenzWX06iPvnw(d.style, 2, 8, (m.infotoolbar.Size.X - 6), (m.infotoolbar.Size.Y - 12));
    FQAABuTOYTqpYs14xNZZlQ(d, m.infotoolbar.Color, 0);
    RwAABgAjajq2ygojxk6uUQ(d, EQYABoBglTi7pLOKu9nnAQ());

    if (!(nwIABPlXITmucTeoS5o0mw))
    {
      nwIABPlXITmucTeoS5o0mw = new ctor$PgcABj6AjDWT6PYg1Srvkg(null, 'RwMABvlXITmucTeoS5o0mw');
    }

    e = nwIABPlXITmucTeoS5o0mw;
    mQAABuVHczWYsGvbmU49oA(kQUABuKCPTKGRKjkr5dWuA(WwcABoxi_bTa9qR7vPH8NUg('http:\u002f\u002fzproxy.wordpress.com', 'zproxy.wordpress.com'), d).style, e);
    mQAABuVHczWYsGvbmU49oA(kQUABuKCPTKGRKjkr5dWuA(WwcABoxi_bTa9qR7vPH8NUg('http:\u002f\u002fjsc.sf.net', 'jsc.sf.net'), d).style, e);
    f = new ctor$_3QMABjE9ID2bvdJDtEkvJw(96, 32);
    g = new ctor$_3QMABjE9ID2bvdJDtEkvJw(8, ((EgQABrc98zqfJJxE_at_bcTw(window) - f.Y) - 8));
    m.toolbar = AQAABifqmzCdBJzheZlXAA(g, f, c);
    CQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(m, '__ctor_b__71'));
    jQUABuKCPTKGRKjkr5dWuA(m.infotoolbar.Control);
    kAUABuKCPTKGRKjkr5dWuA(m.infotoolbar.Control);
    kAUABuKCPTKGRKjkr5dWuA(m.toolbar.Control);
    m.toolbar_btn_pause = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_pause.png');
    m.toolbar_btn_pause.FwAABqa_byTe4naXjCYFE3A(new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__72'));
    m.toolbar_btn_demolish = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_demolish.png');
    m.GetNearestMapPosition = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__74');
    h = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__75');
    m.GetTileElementsAt = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__76');
    m.AddTileElement = new ctor$DQAABl1a_aj69OXVnEw9Zyw(m, '__ctor_b__79');
    m.RemoveAllTilesAt = new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__7a');
    m.ReplaceTileWithDirt = new ctor$BQAABkGjlTKl11x0SjZu8g(m, '__ctor_b__7b');
    m.ShowingTileSelector = null;
    m.toolbar_btn_track1 = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_track1.png');
    m.toolbar_btn_road2 = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_road2.png');
    m.toolbar_btn_trees = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_trees.png');
    l = new ctor$DQAABnhQZT_a3V_bbFIHlRVw();
    n = [
      m.toolbar_btn_demolish,
      m.toolbar_btn_track1,
      m.toolbar_btn_road2,
      m.toolbar_btn_trees
    ];
    l.BwAABnhQZT_a3V_bbFIHlRVw(n);
    m.toolbar_btngroup = l;
    i = new ctor$GQAABqa_byTe4naXjCYFE3A(m.toolbar, 'assets\u002fThreeDStuff\u002fbtn_landinfo.png');
    i.FwAABqa_byTe4naXjCYFE3A(new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__7c'));
    m.ShowingTileSelector = new ctor$AQAABnzJ4DW0TmzxD3LiJg(m, '__ctor_b__7d');
    m.MultipleTileSelector = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    m.MultipleTileSelector_Clear = new ctor$QgcABmsdnzuyVw4sufJzAw(m, '__ctor_b__7e');
    m.MultipleTileSelector_Add = new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__7f');
    a.arena.FAAABowIkzCWm4XSKspi6g(new ctor$dwMABqGrgDi0RzjV63Di8A(m, '__ctor_b__80'));
    a.arena.GQAABowIkzCWm4XSKspi6g(new ctor$RgcABgrHJTi_bnqNd49nRag(m, '__ctor_b__81'));
    m.UseCurrentToolAt = new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__82');
    a.arena.IQAABowIkzCWm4XSKspi6g(new ctor$SgcABoyOgDytaxFtvtvirA(m, '__ctor_b__87'));
    a.arena.HQAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(m, '__ctor_b__8a'));
    m.toolbar_btngroup.CAAABnhQZT_a3V_bbFIHlRVw(new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__8b'));
    a.arena.HQAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(m, '__ctor_b__8c'));
    a.arena.HwAABowIkzCWm4XSKspi6g(new ctor$cwMABiML1zCpgoIc6G5ceg(m, '__ctor_b__96'));
    KgAABuTOYTqpYs14xNZZlQ(1500, new ctor$PgcABj6AjDWT6PYg1Srvkg(m, '__ctor_b__97'));
    AQQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(m, '__ctor_b__98'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__4d
  function PAMABvlXITmucTeoS5o0mw()
  {
    var b, c;

    c = !IAAABuTOYTqpYs14xNZZlQ(0.05);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f1.png';
      return b;
    }

    c = !IAAABuTOYTqpYs14xNZZlQ(0.09);

    if (!c)
    {
      b = 'assets\u002fThreeDStuff\u002f2.png';
      return b;
    }

    b = 'assets\u002fThreeDStuff\u002f0.png';
    return b;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__4e
  function PQMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fr1.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__4f
  function PgMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fr2.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__50
  function PwMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fr3.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__51
  function QAMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fh1.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__52
  function QQMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fh2.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__53
  function QgMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002fh3.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__54
  function QwMABvlXITmucTeoS5o0mw()
  {
    return 'assets\u002fThreeDStuff\u002ft1.png';
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__58
  function RAMABvlXITmucTeoS5o0mw(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__59
  function RQMABvlXITmucTeoS5o0mw(b)
  {
    return b.length;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__5a
  function RgMABvlXITmucTeoS5o0mw()
  {
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d.<.ctor>b__70
  function RwMABvlXITmucTeoS5o0mw(b)
  {
    b.display = 'block';
    b.textDecoration = 'none';
    b.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    b.textAlign = 'center';
  };

  // Closure type
  function dQJYbkFpPDWk_bCYADHDc0A() {}  type$dQJYbkFpPDWk_bCYADHDc0A = dQJYbkFpPDWk_bCYADHDc0A.prototype =   {
    constructor: dQJYbkFpPDWk_bCYADHDc0A,
    CS___8__locals9e: null,
    _x: null,
    _y: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa0.<.ctor>b__27
  type$dQJYbkFpPDWk_bCYADHDc0A.__ctor_b__27 = function (b)
  {
    var a = this;

    document.title = (new ctor$fQAABhxG1zG2OUKpXX027w(a._x, a._y)+'');
  };

  // Closure type
  function mIMGJN76tTeVTxHI50gn7Q() {}  type$mIMGJN76tTeVTxHI50gn7Q = mIMGJN76tTeVTxHI50gn7Q.prototype =   {
    constructor: mIMGJN76tTeVTxHI50gn7Q,
    CS___8__locals9e: null,
    x: null,
    y: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa2.<.ctor>b__2a
  type$mIMGJN76tTeVTxHI50gn7Q.__ctor_b__2a = function (b)
  {
    var a = this, c, d;

    d = (b.get_x() == a.x);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = (b.get_y() == a.y);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function Y2oN6Loaxji7_avxqV1wjFg() {}  type$Y2oN6Loaxji7_avxqV1wjFg = Y2oN6Loaxji7_avxqV1wjFg.prototype =   {
    constructor: Y2oN6Loaxji7_avxqV1wjFg,
    CS___8__locals9e: null,
    c: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa4.<.ctor>b__2e
  type$Y2oN6Loaxji7_avxqV1wjFg.__ctor_b__2e = function ()
  {
    var a = this, b;

    b = mwAABuVHczWYsGvbmU49oA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__locals9e.data, new ctor$BQAABkGjlTKl11x0SjZu8g(a, '__ctor_b__2f')));
    a.CS___8__locals9e.data = QQAABne06jm5i7qNIX6ZzA(HQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.data, new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b.get_x(), b.get_y(), a.c)));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa4.<.ctor>b__2f
  type$Y2oN6Loaxji7_avxqV1wjFg.__ctor_b__2f = function (b)
  {
    return (b.get_color() == this.CS___8__locals9e.TileColor);
  };

  // Closure type
  function ljyGT9iVvTi2aPmxSPPomw() {}  type$ljyGT9iVvTi2aPmxSPPomw = ljyGT9iVvTi2aPmxSPPomw.prototype =   {
    constructor: ljyGT9iVvTi2aPmxSPPomw,
    CS___8__locals9e: null,
    c: null,
    src: null,
    h: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6.<.ctor>b__32
  type$ljyGT9iVvTi2aPmxSPPomw.__ctor_b__32 = function (b)
  {
    return (b.get_color() == this.c);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6.<.ctor>b__33
  type$ljyGT9iVvTi2aPmxSPPomw.__ctor_b__33 = function (b)
  {
    return new ctor$igAABvWqKz2I8o1VI_b3Oew(b, tAAABrjicT6QHyVOJrkEhA(this.src.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6.<.ctor>b__34
  type$ljyGT9iVvTi2aPmxSPPomw.__ctor_b__34 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new GcGKUXrVUjCdUd6iz_bjFnA();
    c.CS___8__localsa7 = a;
    c.CS___8__locals9e = a.CS___8__locals9e;
    c.__h__TransparentIdentifier1 = b;
    d = new ctor$kAAABggiQzKMV4NqKAcaWg(c.__h__TransparentIdentifier1, new ctor$QgcABmsdnzuyVw4sufJzAw(c, '__ctor_b__35'));
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6.<.ctor>b__36
  type$ljyGT9iVvTi2aPmxSPPomw.__ctor_b__36 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new TMM_b3ibdZDaMMW6h_aV_aejQ();
    c.CS___8__localsa7 = a;
    c.CS___8__locals9e = a.CS___8__locals9e;
    c.__h__TransparentIdentifier2 = b;
    d = new ctor$lgAABgsJ9zWGYfBUozCjKg(c.__h__TransparentIdentifier2, kQUABuKCPTKGRKjkr5dWuA(mQAABuVHczWYsGvbmU49oA(c.__h__TransparentIdentifier2.get___h__TransparentIdentifier1().get_img(), new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '__ctor_b__37')), a.CS___8__locals9e.arena.Layers.Canvas));
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6.<.ctor>b__38
  type$ljyGT9iVvTi2aPmxSPPomw.__ctor_b__38 = function (b)
  {
    var a = this, c, d, e;

    c = new ctor$YAAABg2chjKpXgd_bOuCCDw();
    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_point().get_x();
    d.Y = b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_point().get_y();
    c.Position = d;
    c.Image = b.get___h__TransparentIdentifier2().get___h__TransparentIdentifier1().get_img();
    c.Source = a.src.Invoke();
    e = c;
    return e;
  };

  // Closure type
  function GcGKUXrVUjCdUd6iz_bjFnA() {}  type$GcGKUXrVUjCdUd6iz_bjFnA = GcGKUXrVUjCdUd6iz_bjFnA.prototype =   {
    constructor: GcGKUXrVUjCdUd6iz_bjFnA,
    CS___8__localsa7: null,
    CS___8__locals9e: null,
    __h__TransparentIdentifier1: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6+<>c__DisplayClassa8.<.ctor>b__35
  type$GcGKUXrVUjCdUd6iz_bjFnA.__ctor_b__35 = function ()
  {
    var a = this;

    a.CS___8__locals9e.ApplyTileToCanvas.Invoke(a.__h__TransparentIdentifier1.get_point().get_x(), a.__h__TransparentIdentifier1.get_point().get_y(), a.__h__TransparentIdentifier1.get_img(), a.CS___8__localsa7.h);
  };

  // Closure type
  function TMM_b3ibdZDaMMW6h_aV_aejQ() {}  type$TMM_b3ibdZDaMMW6h_aV_aejQ = TMM_b3ibdZDaMMW6h_aV_aejQ.prototype =   {
    constructor: TMM_b3ibdZDaMMW6h_aV_aejQ,
    CS___8__localsa7: null,
    CS___8__locals9e: null,
    __h__TransparentIdentifier2: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassa6+<>c__DisplayClassaa.<.ctor>b__37
  type$TMM_b3ibdZDaMMW6h_aV_aejQ.__ctor_b__37 = function (b)
  {
    var a = this;

    a.__h__TransparentIdentifier2.get_update().Invoke();
  };

  // Closure type
  function QcrDKLyi0DiPtpnuQm5uaw() {}  type$QcrDKLyi0DiPtpnuQm5uaw = QcrDKLyi0DiPtpnuQm5uaw.prototype =   {
    constructor: QcrDKLyi0DiPtpnuQm5uaw,
    CS___8__locals9e: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassac.<.ctor>b__3b
  type$QcrDKLyi0DiPtpnuQm5uaw.__ctor_b__3b = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(this.road.get_x(), b, this.road.get_color());
  };

  // Closure type
  function WmF7UQLKxTOztNkCZNNxeg() {}  type$WmF7UQLKxTOztNkCZNNxeg = WmF7UQLKxTOztNkCZNNxeg.prototype =   {
    constructor: WmF7UQLKxTOztNkCZNNxeg,
    CS___8__locals9e: null,
    road: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassae.<.ctor>b__3e
  type$WmF7UQLKxTOztNkCZNNxeg.__ctor_b__3e = function (b)
  {
    return new ctor$gwAABhh1kTOuv2bZ_a6JGSA(b, this.road.get_y(), this.road.get_color());
  };

  // Closure type
  function LbaTB4gJ3jaS6jScQGbhng() {}  type$LbaTB4gJ3jaS6jScQGbhng = LbaTB4gJ3jaS6jScQGbhng.prototype =   {
    constructor: LbaTB4gJ3jaS6jScQGbhng,
    CS___8__locals9e: null,
    a: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassb4.<.ctor>b__44
  type$LbaTB4gJ3jaS6jScQGbhng.__ctor_b__44 = function (b)
  {
    var a = this, c, d, e;

    c = (b.get_color() == a.CS___8__locals9e.TileColorRoad2);
    d = ((b.get_x() != a.a.get_x()) ? 0 : (b.get_y() == a.a.get_y()));
    e = (c && d);
    return e;
  };

  // Closure type
  function ZWVxUm99Qj2G3LVxCXvdPQ() {}  var _0wIABG99Qj2G3LVxCXvdPQ = null;
  var _1AIABG99Qj2G3LVxCXvdPQ = null;
  var _1QIABG99Qj2G3LVxCXvdPQ = null;
  var _1gIABG99Qj2G3LVxCXvdPQ = null;
  var _1wIABG99Qj2G3LVxCXvdPQ = null;
  var _2AIABG99Qj2G3LVxCXvdPQ = null;
  type$ZWVxUm99Qj2G3LVxCXvdPQ = ZWVxUm99Qj2G3LVxCXvdPQ.prototype =   {
    constructor: ZWVxUm99Qj2G3LVxCXvdPQ,
    toolbar: null,
    CS___8__locals9e: null,
    SpawnLookingDude: null,
    dude: null,
    imp: null,
    loaded: 0,
    loaded_done: null,
    loadone: null,
    Dudes: null,
    GetMapPosition: null,
    infotoolbar: null,
    toolbar_btn_pause: null,
    toolbar_btn_demolish: null,
    GetNearestMapPosition: null,
    GetTileElementsAt: null,
    AddTileElement: null,
    RemoveAllTilesAt: null,
    ReplaceTileWithDirt: null,
    ShowingTileSelector: null,
    toolbar_btn_track1: null,
    toolbar_btn_road2: null,
    toolbar_btn_trees: null,
    toolbar_btngroup: null,
    MultipleTileSelector: null,
    MultipleTileSelector_Clear: null,
    MultipleTileSelector_Add: null,
    UseCurrentToolAt: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__71
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__71 = function (b)
  {
    var a = this;

    a.infotoolbar.AwAABifqmzCdBJzheZlXAA();
    a.toolbar.AwAABifqmzCdBJzheZlXAA();
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__55
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__55 = function ()
  {
    return (NAAABuTOYTqpYs14xNZZlQ(this.CS___8__locals9e.RotationA) == 45);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__56
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__56 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = new ctor$RQAABvWf_aTisnHwd9OZ7jQ();
    f.OwAABvWf_aTisnHwd9OZ7jQ(b);
    e = f;
    e.AnimationInfo.Frames_Stand = b;

    if (!(_0wIABG99Qj2G3LVxCXvdPQ))
    {
      _0wIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'fwMABm99Qj2G3LVxCXvdPQ');
    }

    e.Zoom.DynamicZoomFunc = _0wIABG99Qj2G3LVxCXvdPQ;
    e.Zoom.WwAABuqx2zmaq5bgaWr1zw(1);
    e.SgAABvWf_aTisnHwd9OZ7jQ(48, 72);
    e.IQAABnS9Rj2LTMsPW407VQ(c, d);
    kQUABuKCPTKGRKjkr5dWuA(e.Control, a.CS___8__locals9e.arena.Layers.Canvas);
    e.PgAABvWf_aTisnHwd9OZ7jQ((IQAABuTOYTqpYs14xNZZlQ(3.14159265358979) * 2));
    g = e;
    return g;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__5b
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__5b = function (b)
  {
    var a = this, c;

    a.loaded = (a.loaded - 1);
    c = !!a.loaded;

    if (!c)
    {
      a.loaded_done.Invoke();
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__5c
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__5c = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__5d'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__5e
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__5e = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__5f'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__61
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__61 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__62'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__63
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__63 = function (b)
  {
    var a = this;

    nAAABuVHczWYsGvbmU49oA(b, new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__64'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__66
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__66 = function ()
  {
    var a = this, b;

    b = /* DOMCreateType */new ieMJc_arzcjmIgQdecfpDVg();
    b.CS___8__localsca = a;
    b.CS___8__locals9e = a.CS___8__locals9e;
    OQAABgAjajq2ygojxk6uUQ(a.CS___8__locals9e.info, 'Loading images... done');
    b.GetRandomCanvasPosition = new ctor$AQAABnzJ4DW0TmzxD3LiJg(b, '__ctor_b__67');
    b.CreateDude = new ctor$DQAABl1a_aj69OXVnEw9Zyw(b, '__ctor_b__68');
    a.CS___8__locals9e.info.innerHTML = 'Creating dudes...';
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__6d'));
    HgAABuTOYTqpYs14xNZZlQ(8, new ctor$QgcABmsdnzuyVw4sufJzAw(b, '__ctor_b__6e'));
    a.CS___8__locals9e.info.innerHTML = a.CS___8__locals9e.info_text;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__6f
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__6f = function (b)
  {
    var a = this, c, d, e, f, g, h, i, j;

    c = a.CS___8__locals9e.GetCenter.Invoke();
    h = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    h.X = (b.X - c.X);
    h.Y = ((b.Y - c.Y) / a.CS___8__locals9e.RotationB);
    d = h;
    e = (LQAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.ZeroPoint, d) / (a.CS___8__locals9e.bg_size.get_h() * OgAABuTOYTqpYs14xNZZlQ(2)));
    f = (MAAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.ZeroPoint, d) - a.CS___8__locals9e.RotationA);
    i = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    i.X = (ewYABlp1gTixwdv_axCXc_aQ(f) * e);
    i.Y = (fAYABlp1gTixwdv_axCXc_aQ(f) * e);
    g = i;
    j = g;
    return j;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__72
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__72 = function (b)
  {
    var a = this;

    a.CS___8__locals9e.paused = b.EgAABqa_byTe4naXjCYFE3A();
    a.Dudes.TQMABtmlXD2_bMcNB1Zdfiw(new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__73'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__74
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__74 = function (b)
  {
    return GAAABuTOYTqpYs14xNZZlQ(GQAABuTOYTqpYs14xNZZlQ(this.GetMapPosition.Invoke(b)), this.CS___8__locals9e.MapSize);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__75
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__75 = function (b)
  {
    var a = this, c, d, e, f;

    c = a.GetNearestMapPosition.Invoke(new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.Left, b.Top));
    d = a.GetNearestMapPosition.Invoke(new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.yQMABkJB5jyxJFE8zncqBQ(), b.ywMABkJB5jyxJFE8zncqBQ()));
    e = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    e.Left = JgAABuTOYTqpYs14xNZZlQ(c.X);
    e.Top = JgAABuTOYTqpYs14xNZZlQ(c.Y);
    e.ygMABkJB5jyxJFE8zncqBQ(JgAABuTOYTqpYs14xNZZlQ(d.X));
    e.zAMABkJB5jyxJFE8zncqBQ(JgAABuTOYTqpYs14xNZZlQ(d.Y));
    f = e;
    return f;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__76
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__76 = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new gj6Bd4SM_bjq2AFi9StdE_bQ();
    c.CS___8__localsca = a;
    c.CS___8__locals9e = a.CS___8__locals9e;
    c.map_coords = b;

    if (!(_1AIABG99Qj2G3LVxCXvdPQ))
    {
      _1AIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'hwMABm99Qj2G3LVxCXvdPQ');
    }

    d = LgAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.CS___8__locals9e.KnownTileElements, _1AIABG99Qj2G3LVxCXvdPQ), new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__78'));
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__79
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__79 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = new ctor$YAAABg2chjKpXgd_bOuCCDw();
    f.Position = b;
    f.Image = tAAABrjicT6QHyVOJrkEhA(c);
    f.Source = c;
    f.Height = d;
    e = f;
    a.CS___8__locals9e.KnownTileElements.TgMABtmlXD2_bMcNB1Zdfiw(e);
    a.CS___8__locals9e.ApplyTileToCanvas.Invoke(b.X, b.Y, e.Image, d);
    kQUABuKCPTKGRKjkr5dWuA(e.Image, a.CS___8__locals9e.arena.Layers.Canvas);
    g = e;
    return g;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7a
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7a = function (b)
  {
    var a = this, c, d, e, f;

    d = QQAABne06jm5i7qNIX6ZzA(a.GetTileElementsAt.Invoke(b));

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      jwUABuKCPTKGRKjkr5dWuA(c.Image);
      EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownTileElements);
      EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7b
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7b = function (b)
  {
    var a = this, c, d;

    a.RemoveAllTilesAt.Invoke(b);
    c = a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Dirt().get_Source(), a.CS___8__locals9e.TileResources.get_Dirt().get_Height());
    EwAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
    d = c;
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7c
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7c = function (b)
  {
    var a = this;

    jAUABuKCPTKGRKjkr5dWuA(a.infotoolbar.Control, b.EgAABqa_byTe4naXjCYFE3A());
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7d
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7d = function ()
  {
    return this.toolbar_btngroup.CwAABnhQZT_a3V_bbFIHlRVw();
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7e
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7e = function ()
  {
    var a = this, b, c, d, e;

    c = a.MultipleTileSelector.RwMABtmlXD2_bMcNB1Zdfiw();

    for (d = 0; (d < c.length); d++)
    {
      b = c[d];
      e = (b.Image == null);

      if (!e)
      {
        jwUABuKCPTKGRKjkr5dWuA(b.Image);
        b.Image = null;
      }

      EgAABuTOYTqpYs14xNZZlQ(b, a.CS___8__locals9e.KnownTileElements);
    }

    a.MultipleTileSelector.UAMABtmlXD2_bMcNB1Zdfiw();
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__7f
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__7f = function (b)
  {
    var a = this;

    EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_TileSelector().get_Source(), a.CS___8__locals9e.TileResources.get_TileSelector().get_Height()), a.MultipleTileSelector);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__80
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__80 = function (b)
  {
    var a = this, c, d, e;

    e = !a.CS___8__locals9e.paused;

    if (!e)
    {
      return;
    }

    e = !a.ShowingTileSelector.Invoke();

    if (!e)
    {
      e = !a.CS___8__locals9e.arena.GwAABowIkzCWm4XSKspi6g();

      if (!e)
      {
        return;
      }

      c = a.GetNearestMapPosition.Invoke(b);
      e = !(a.MultipleTileSelector.UwMABtmlXD2_bMcNB1Zdfiw() == 1);

      if (!e)
      {
        d = QAAABne06jm5i7qNIX6ZzA(a.MultipleTileSelector);
        a.CS___8__locals9e.ApplyTileToCanvas.Invoke(c.X, c.Y, d.Image, d.Height);
      }
      else
      {
        a.MultipleTileSelector_Clear.Invoke();
        a.MultipleTileSelector_Add.Invoke(c);
      }

    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__81
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__81 = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m, n;

    j = !a.CS___8__locals9e.paused;

    if (!j)
    {
      return;
    }

    j = a.ShowingTileSelector.Invoke();

    if (!j)
    {
      return;
    }

    d = new ctor$_2gEABocsVjino_bAdFkiwpQ(a.GetNearestMapPosition.Invoke(b), a.GetNearestMapPosition.Invoke(c));
    j = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_track1);

    if (!j)
    {
      a.MultipleTileSelector_Clear.Invoke();
      k = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().X), JgAABuTOYTqpYs14xNZZlQ(d.get_to().X));

      for (l = 0; (l < k.length); l++)
      {
        e = k[l];
        f = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        f.X = e;
        f.Y = d.get_from().Y;
        a.MultipleTileSelector_Add.Invoke(f);
      }

    }

    j = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road2);

    if (!j)
    {
      a.MultipleTileSelector_Clear.Invoke();
      k = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(d.get_to().Y));

      for (l = 0; (l < k.length); l++)
      {
        g = k[l];
        h = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        h.X = d.get_from().X;
        h.Y = g;
        a.MultipleTileSelector_Add.Invoke(h);
      }

    }

    j = (!EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_demolish) && !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_trees));

    if (!j)
    {
      a.MultipleTileSelector_Clear.Invoke();
      k = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().X), JgAABuTOYTqpYs14xNZZlQ(d.get_to().X));

      for (l = 0; (l < k.length); l++)
      {
        e = k[l];
        m = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(d.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(d.get_to().Y));

        for (n = 0; (n < m.length); n++)
        {
          g = m[n];
          i = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
          i.X = e;
          i.Y = g;
          a.MultipleTileSelector_Add.Invoke(i);
        }

      }

    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__82
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__82 = function (b)
  {
    var a = this, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;

    k = null;
    l = null;
    m = null;
    n = /* DOMCreateType */new _6e4yEo4fHTydqrl4n6cN6A();
    n.CS___8__localsca = a;
    n.CS___8__locals9e = a.CS___8__locals9e;
    o = [
      a.CS___8__locals9e.TileResources.get_Grass().get_Source(),
      a.CS___8__locals9e.TileResources.get_Dirt().get_Source(),
      a.CS___8__locals9e.TileResources.get_DirtDirtGrass().get_Source(),
      a.CS___8__locals9e.TileResources.get_DirtGrassGrass().get_Source(),
      a.CS___8__locals9e.TileResources.get_Rocks().get_Source(),
      a.CS___8__locals9e.TileResources.get_RoughLand().get_Source()
    ];
    n.IsGrass = FgAABuTOYTqpYs14xNZZlQ(o);
    c = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Grass().get_Source());
    n.IsRoad2 = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Road2().get_Source());
    n.IsTrack1 = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Track1().get_Source());
    n.IsTree = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Tree().get_Source());
    n.IsTileSelector = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_TileSelector().get_Source());
    d = QQAABne06jm5i7qNIX6ZzA(a.GetTileElementsAt.Invoke(b));

    if (!(_1QIABG99Qj2G3LVxCXvdPQ))
    {
      _1QIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'iAMABm99Qj2G3LVxCXvdPQ');
    }

    e = LAAABne06jm5i7qNIX6ZzA(d, _1QIABG99Qj2G3LVxCXvdPQ);
    p = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_demolish);

    if (!p)
    {
      a.ReplaceTileWithDirt.Invoke(b);
    }

    p = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_trees);

    if (!p)
    {

      if (!k)
      {
        k = new ctor$BQAABkGjlTKl11x0SjZu8g(n, '__ctor_b__84');
      }

      f = k;
      g = new ctor$_4AEABurfVzS0dQcAeWhcww(MQAABne06jm5i7qNIX6ZzA(e, c), MQAABne06jm5i7qNIX6ZzA(e, f));
      p = g.get_Other();

      if (!p)
      {
        p = g.get_GrassStrict();

        if (!p)
        {
          a.RemoveAllTilesAt.Invoke(b);
          a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Grass().get_Source(), a.CS___8__locals9e.TileResources.get_Grass().get_Height());
        }

        a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Tree().get_Source(), a.CS___8__locals9e.TileResources.get_Tree().get_Height());
      }

    }

    p = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_track1);

    if (!p)
    {

      if (!l)
      {
        l = new ctor$BQAABkGjlTKl11x0SjZu8g(n, '__ctor_b__85');
      }

      f = l;
      h = new ctor$_5gEABrJ7nzakC8wkDP1aTg(MQAABne06jm5i7qNIX6ZzA(e, n.IsGrass), MQAABne06jm5i7qNIX6ZzA(e, n.IsRoad2), MQAABne06jm5i7qNIX6ZzA(e, f));
      p = h.get_Other();

      if (!p)
      {
        a.RemoveAllTilesAt.Invoke(b);
        p = h.get_Road2();

        if (!p)
        {
          a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Track1().get_Source(), a.CS___8__locals9e.TileResources.get_Track1().get_Height());
        }
        else
        {
          a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Road2_Track1().get_Source(), a.CS___8__locals9e.TileResources.get_Road2_Track1().get_Height());
        }

      }
      else
      {
        NwAABuTOYTqpYs14xNZZlQ('Cannot build tracks\u0021');
        q = d;

        for (r = 0; (r < q.length); r++)
        {
          i = q[r];
          NwAABuTOYTqpYs14xNZZlQ(i.Source);
        }

      }

    }

    p = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road2);

    if (!p)
    {

      if (!m)
      {
        m = new ctor$BQAABkGjlTKl11x0SjZu8g(n, '__ctor_b__86');
      }

      f = m;
      j = new ctor$HgMABmsigjKpVZ_bIsMgm2w(MQAABne06jm5i7qNIX6ZzA(e, n.IsGrass), MQAABne06jm5i7qNIX6ZzA(e, n.IsTrack1), MQAABne06jm5i7qNIX6ZzA(e, f));
      p = j.get_Other();

      if (!p)
      {
        a.RemoveAllTilesAt.Invoke(b);
        p = j.get_Track1();

        if (!p)
        {
          a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Road2().get_Source(), a.CS___8__locals9e.TileResources.get_Road2().get_Height());
        }
        else
        {
          a.AddTileElement.Invoke(b, a.CS___8__locals9e.TileResources.get_Road2_Track1().get_Source(), a.CS___8__locals9e.TileResources.get_Road2_Track1().get_Height());
        }

      }
      else
      {
        NwAABuTOYTqpYs14xNZZlQ('Cannot build tracks\u0021');
      }

    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__87
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__87 = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _26, _27;

    u = null;
    v = /* DOMCreateType */new N3kgOOvmnDWVOwAKQxiY3Q();
    v.CS___8__localsca = a;
    v.CS___8__locals9e = a.CS___8__locals9e;
    w = a.ShowingTileSelector.Invoke();

    if (!w)
    {
      return;
    }

    w = !a.CS___8__locals9e.paused;

    if (!w)
    {
      return;
    }

    e = new ctor$_2gEABocsVjino_bAdFkiwpQ(a.GetNearestMapPosition.Invoke(b), a.GetNearestMapPosition.Invoke(c));
    x = [
      a.CS___8__locals9e.TileResources.get_Grass().get_Source(),
      a.CS___8__locals9e.TileResources.get_Dirt().get_Source(),
      a.CS___8__locals9e.TileResources.get_DirtDirtGrass().get_Source(),
      a.CS___8__locals9e.TileResources.get_DirtGrassGrass().get_Source(),
      a.CS___8__locals9e.TileResources.get_Rocks().get_Source(),
      a.CS___8__locals9e.TileResources.get_RoughLand().get_Source()
    ];
    v.IsGrass = FgAABuTOYTqpYs14xNZZlQ(x);
    f = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Road2().get_Source());
    g = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Track1().get_Source());
    h = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_Tree().get_Source());
    i = FwAABuTOYTqpYs14xNZZlQ(a.CS___8__locals9e.TileResources.get_TileSelector().get_Source());
    w = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_road2);

    if (!w)
    {
      a.MultipleTileSelector_Clear.Invoke();
      y = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(e.get_to().Y));

      for (z = 0; (z < y.length); z++)
      {
        j = y[z];
        q = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        q.X = e.get_from().X;
        q.Y = j;
        a.UseCurrentToolAt.Invoke(q);
        w = !IAAABuTOYTqpYs14xNZZlQ(0.5);

        if (!w)
        {
          k = (e.get_from().X + hwYABlp1gTixwdv_axCXc_aQ((e.get_to().Y - e.get_from().Y)));
          p = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
          p.X = k;
          p.Y = j;
          l = p;
          w = !a.CS___8__locals9e.IsDefined.Invoke(k, j);

          if (!w)
          {
            m = QQAABne06jm5i7qNIX6ZzA(a.GetTileElementsAt.Invoke(l));

            if (!(_1gIABG99Qj2G3LVxCXvdPQ))
            {
              _1gIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'iQMABm99Qj2G3LVxCXvdPQ');
            }

            n = LAAABne06jm5i7qNIX6ZzA(m, _1gIABG99Qj2G3LVxCXvdPQ);

            if (!u)
            {
              u = new ctor$BQAABkGjlTKl11x0SjZu8g(v, '__ctor_b__89');
            }

            w = MQAABne06jm5i7qNIX6ZzA(n, u);

            if (!w)
            {
              o = a.ReplaceTileWithDirt.Invoke(l);
              o.DirtAge = -205;
            }

          }

        }

      }

    }

    w = !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_track1);

    if (!w)
    {
      a.MultipleTileSelector_Clear.Invoke();
      y = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().X), JgAABuTOYTqpYs14xNZZlQ(e.get_to().X));

      for (z = 0; (z < y.length); z++)
      {
        r = y[z];
        s = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
        s.X = r;
        s.Y = e.get_from().Y;
        a.UseCurrentToolAt.Invoke(s);
      }

    }

    w = (!EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_demolish) && !EQAABqa_byTe4naXjCYFE3A(a.toolbar_btn_trees));

    if (!w)
    {
      a.MultipleTileSelector_Clear.Invoke();
      y = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().X), JgAABuTOYTqpYs14xNZZlQ(e.get_to().X));

      for (z = 0; (z < y.length); z++)
      {
        r = y[z];
        _26 = EQAABuTOYTqpYs14xNZZlQ(JgAABuTOYTqpYs14xNZZlQ(e.get_from().Y), JgAABuTOYTqpYs14xNZZlQ(e.get_to().Y));

        for (_27 = 0; (_27 < _26.length); _27++)
        {
          j = _26[_27];
          t = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
          t.X = r;
          t.Y = j;
          a.UseCurrentToolAt.Invoke(t);
        }

      }

    }

    a.MultipleTileSelector_Clear.Invoke();
    a.MultipleTileSelector_Add.Invoke(e.get_to());
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__8a
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__8a = function (b, c)
  {
    var a = this, d, e;

    e = !a.CS___8__locals9e.paused;

    if (!e)
    {
      return;
    }

    e = a.ShowingTileSelector.Invoke();

    if (!e)
    {
      return;
    }

    d = a.GetNearestMapPosition.Invoke(b);
    a.UseCurrentToolAt.Invoke(d);
    a.MultipleTileSelector_Clear.Invoke();
    a.MultipleTileSelector_Add.Invoke(d);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__8b
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__8b = function (b)
  {
    var a = this, c;

    a.CS___8__locals9e.arena.ShowSelectionRectangle = !a.ShowingTileSelector.Invoke();
    c = a.ShowingTileSelector.Invoke();

    if (!c)
    {
      a.MultipleTileSelector_Clear.Invoke();
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__8c
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__8c = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m;

    h = null;
    i = null;
    j = null;
    k = /* DOMCreateType */new rA4FCF_bFMDGMmNH_bx_bUPpg();
    k.CS___8__localsca = a;
    k.CS___8__locals9e = a.CS___8__locals9e;
    l = !a.CS___8__locals9e.paused;

    if (!l)
    {
      return;
    }

    l = !a.ShowingTileSelector.Invoke();

    if (!l)
    {
      return;
    }


    if (!(_1wIABG99Qj2G3LVxCXvdPQ))
    {
      _1wIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'igMABm99Qj2G3LVxCXvdPQ');
    }

    k.selection = QQAABne06jm5i7qNIX6ZzA(LgAABne06jm5i7qNIX6ZzA(a.Dudes, _1wIABG99Qj2G3LVxCXvdPQ));
    k.target = GAAABuTOYTqpYs14xNZZlQ(a.GetMapPosition.Invoke(b), a.CS___8__locals9e.MapSize);
    l = !!k.selection.length;

    if (!l)
    {
      return;
    }

    l = !(k.selection.length == 1);

    if (!l)
    {
      d = /* DOMCreateType */new _53ie2ahBZTukrNFJTHczTw();
      d.CS___8__localse4 = k;
      d.CS___8__localsca = a;
      d.CS___8__locals9e = a.CS___8__locals9e;
      d.canvas = a.CS___8__locals9e.GetCanvasPosition.Invoke(k.target);
      nAAABuVHczWYsGvbmU49oA(k.selection, new ctor$PgcABj6AjDWT6PYg1Srvkg(d, '__ctor_b__8e'));
    }
    else
    {
      g = /* DOMCreateType */new _48BTE682ODiwdNMvjvuWQA();
      g.CS___8__localse4 = k;
      g.CS___8__localsca = a;
      g.CS___8__locals9e = a.CS___8__locals9e;
      g.center = a.CS___8__locals9e.GetCenter.Invoke();

      if (!h)
      {
        h = new ctor$CQAABq0_bqDi8hIGe5YJ9Ww(k, '__ctor_b__8f');
      }

      g.GetRotatedTargetPoint = h;
      g.OffsetToCenter = new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__90');

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_2AIABG99Qj2G3LVxCXvdPQ))
      {
        _2AIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'iwMABm99Qj2G3LVxCXvdPQ');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_2AIABG99Qj2G3LVxCXvdPQ))
      {
        _2AIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'iwMABm99Qj2G3LVxCXvdPQ');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _2AIABG99Qj2G3LVxCXvdPQ);

      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }


      if (!i)
      {
        i = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__91');
      }

      LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i);

      if (!(_2AIABG99Qj2G3LVxCXvdPQ))
      {
        _2AIABG99Qj2G3LVxCXvdPQ = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'iwMABm99Qj2G3LVxCXvdPQ');
      }

      LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _2AIABG99Qj2G3LVxCXvdPQ), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__93'));

      if (!j)
      {
        j = new ctor$BQAABkGjlTKl11x0SjZu8g(k, '__ctor_b__94');
      }

      e = LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(LAAABne06jm5i7qNIX6ZzA(HAAABuTOYTqpYs14xNZZlQ(k.selection.length), i), _2AIABG99Qj2G3LVxCXvdPQ), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__93')), j), new ctor$BQAABkGjlTKl11x0SjZu8g(g, '__ctor_b__95'));
      m = e.NgEABnMeWzaNooAKOmFm5g();
      try
      {
        while (m.qAAABu7N0xGI6ACQJ1TEOg())
        {
          f = m.xQAABrYmRzSu_anO2U_bk1MA();
          k.selection[f.get_index()].UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(f.get_canvas()));
        }
      }
      finally
      {
        l = (m == null);

        if (!l)
        {
          m.xAAABq_bUDz_aWf_aXPRTEtLA();
        }

      }
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__96
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__96 = function (b, c)
  {
    var a = this, d, e, f;

    e = !a.CS___8__locals9e.paused;

    if (!e)
    {
      return;
    }

    e = !a.ShowingTileSelector.Invoke();

    if (!e)
    {
      return;
    }

    f = a.Dudes.VwMABtmlXD2_bMcNB1Zdfiw();
    try
    {
      while (f.XgMABpJ7HjuHnaRo44rmHw())
      {
        d = f.WwMABpJ7HjuHnaRo44rmHw();
        e = !c.shiftKey;

        if (!e)
        {
          d.KAAABnS9Rj2LTMsPW407VQ((d.JwAABnS9Rj2LTMsPW407VQ() | b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ()))));
        }
        else
        {
          d.KAAABnS9Rj2LTMsPW407VQ(b.wwMABkJB5jyxJFE8zncqBQ(JQAABuTOYTqpYs14xNZZlQ(d.GwAABnS9Rj2LTMsPW407VQ())));
        }

      }
    }
    finally
    {
      ;
      f.xAAABq_bUDz_aWf_aXPRTEtLA();
    }
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__97
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__97 = function (b)
  {
    var a = this, c, d, e, f;

    d = !a.CS___8__locals9e.paused;

    if (!d)
    {
      return;
    }

    NwAABuTOYTqpYs14xNZZlQ('got dirt?');
    e = a.CS___8__locals9e.KnownDirtTileElements.RwMABtmlXD2_bMcNB1Zdfiw();

    for (f = 0; (f < e.length); f++)
    {
      c = e[f];
      NQAABuTOYTqpYs14xNZZlQ(new ctor$KAIABoITKTuU4e_bczSaFkQ(c.DirtAge, c.Position.X, c.Position.Y));
      d = !(c.DirtAge == 100);

      if (!d)
      {
        EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownTileElements);
      }

      d = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__locals9e.TileResources.get_Dirt().get_Source());

      if (!d)
      {
        d = !(c.DirtAge == -200);

        if (!d)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
          a.AddTileElement.Invoke(c.Position, a.CS___8__locals9e.TileResources.get_House3().get_Source(), a.CS___8__locals9e.TileResources.get_House3().get_Height());
        }

        d = !(c.DirtAge > 3);

        if (!d)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__locals9e.TileResources.get_DirtDirtGrass().get_Source(), a.CS___8__locals9e.TileResources.get_DirtDirtGrass().get_Height()), a.CS___8__locals9e.KnownDirtTileElements);
        }

      }

      d = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__locals9e.TileResources.get_DirtDirtGrass().get_Source());

      if (!d)
      {
        d = !(c.DirtAge > 3);

        if (!d)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
          EwAABuTOYTqpYs14xNZZlQ(a.AddTileElement.Invoke(c.Position, a.CS___8__locals9e.TileResources.get_DirtGrassGrass().get_Source(), a.CS___8__locals9e.TileResources.get_DirtGrassGrass().get_Height()), a.CS___8__locals9e.KnownDirtTileElements);
        }

      }

      d = !CQUABpT92DaiMvTduyyLZQ(c.Source, a.CS___8__locals9e.TileResources.get_DirtGrassGrass().get_Source());

      if (!d)
      {
        d = !(c.DirtAge > 3);

        if (!d)
        {
          a.RemoveAllTilesAt.Invoke(c.Position);
          EgAABuTOYTqpYs14xNZZlQ(c, a.CS___8__locals9e.KnownDirtTileElements);
          a.AddTileElement.Invoke(c.Position, a.CS___8__locals9e.TileResources.get_Grass().get_Source(), a.CS___8__locals9e.TileResources.get_Grass().get_Height());
        }

      }

      c.DirtAge = (c.DirtAge + 1);
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__98
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__98 = function (b)
  {
    var a = this, c;

    c = a.toolbar_btn_pause.EgAABqa_byTe4naXjCYFE3A();

    if (!c)
    {
      a.toolbar_btn_pause.GgAABqa_byTe4naXjCYFE3A();
    }

  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__57
  function fwMABm99Qj2G3LVxCXvdPQ(b)
  {
    return 1;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__5d
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__5d = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__5f
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__5f = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__60'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__60
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__60 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__62
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__62 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__64
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__64 = function (b)
  {
    var a = this;

    uAAABrjicT6QHyVOJrkEhA(b.KwAABnVABTKsBEu_atoOJeA(), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '__ctor_b__65'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__65
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__65 = function (b)
  {
    var a = this;

    a.loadone.Invoke(b);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__73
  type$ZWVxUm99Qj2G3LVxCXvdPQ.__ctor_b__73 = function (b)
  {
    var a = this;

    b.NgAABvWf_aTisnHwd9OZ7jQ(a.CS___8__locals9e.paused);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__77
  function hwMABm99Qj2G3LVxCXvdPQ(b)
  {
    return !(b == null);
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__83
  function iAMABm99Qj2G3LVxCXvdPQ(b)
  {
    return b.Source;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__88
  function iQMABm99Qj2G3LVxCXvdPQ(b)
  {
    return b.Source;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__8d
  function igMABm99Qj2G3LVxCXvdPQ(b)
  {
    return b.JwAABnS9Rj2LTMsPW407VQ();
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9.<.ctor>b__92
  function iwMABm99Qj2G3LVxCXvdPQ(b)
  {
    return new ctor$_8gAABjYdFjuC9C2KyY35Nw(b, 0.5);
  };

  // Closure type
  function ieMJc_arzcjmIgQdecfpDVg() {}  type$ieMJc_arzcjmIgQdecfpDVg = ieMJc_arzcjmIgQdecfpDVg.prototype =   {
    constructor: ieMJc_arzcjmIgQdecfpDVg,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    GetRandomCanvasPosition: null,
    CreateDude: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc.<.ctor>b__67
  type$ieMJc_arzcjmIgQdecfpDVg.__ctor_b__67 = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    b = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals9e.MapSize.Width - 1)) + a.CS___8__locals9e.MapSize.Left) + 1);
    c = ((IgAABuTOYTqpYs14xNZZlQ((a.CS___8__locals9e.MapSize.Height - 1)) + a.CS___8__locals9e.MapSize.Top) + 1);
    d = a.CS___8__locals9e.Translate.Invoke(b, c);
    e = a.CS___8__locals9e.GetCenter.Invoke();
    g = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    g.X = JgAABuTOYTqpYs14xNZZlQ((d.X + e.X));
    g.Y = JgAABuTOYTqpYs14xNZZlQ((d.Y + e.Y));
    f = g;
    h = f;
    return h;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc.<.ctor>b__68
  type$ieMJc_arzcjmIgQdecfpDVg.__ctor_b__68 = function (b, c, d)
  {
    var a = this, e, f, g;

    f = /* DOMCreateType */new nlBRDGcIpz6XGah1H4MSig();
    f.CS___8__localscd = a;
    f.CS___8__localsca = a.CS___8__localsca;
    f.CS___8__locals9e = a.CS___8__locals9e;
    f.ScoutIfIdle = c;
    e = a.GetRandomCanvasPosition.Invoke();
    f.w2 = a.CS___8__localsca.SpawnLookingDude.Invoke(b.Frames_Stand, IwAABuTOYTqpYs14xNZZlQ(e.X), IwAABuTOYTqpYs14xNZZlQ(e.Y));
    f.w2.Zoom.WwAABuqx2zmaq5bgaWr1zw(d);
    f.w2.AnimationInfo.Frames_Walk = b.Frames_Walk;
    f.w2.TargetLocationDistanceMultiplier = 1;
    f.GoSomeWhere = new ctor$PgcABj6AjDWT6PYg1Srvkg(f, '__ctor_b__69');
    f.WaitSomeAndGoSomeWhere = null;
    f.WaitSomeAndGoSomeWhere = new ctor$QgcABmsdnzuyVw4sufJzAw(f, '__ctor_b__6a');
    f.WaitSomeAndGoSomeWhere.Invoke();
    g = f.w2;
    return g;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc.<.ctor>b__6d
  type$ieMJc_arzcjmIgQdecfpDVg.__ctor_b__6d = function ()
  {
    var a = this;

    a.CS___8__localsca.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__localsca.dude, 0, 0.5));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc.<.ctor>b__6e
  type$ieMJc_arzcjmIgQdecfpDVg.__ctor_b__6e = function ()
  {
    var a = this;

    a.CS___8__localsca.Dudes.TgMABtmlXD2_bMcNB1Zdfiw(a.CreateDude.Invoke(a.CS___8__localsca.imp, 1, 0.5));
  };

  // Closure type
  function nlBRDGcIpz6XGah1H4MSig() {}  var _5AIABGcIpz6XGah1H4MSig = null;
  type$nlBRDGcIpz6XGah1H4MSig = nlBRDGcIpz6XGah1H4MSig.prototype =   {
    constructor: nlBRDGcIpz6XGah1H4MSig,
    CS___8__localscd: null,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    w2: null,
    GoSomeWhere: null,
    WaitSomeAndGoSomeWhere: null,
    ScoutIfIdle: false
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc+<>c__DisplayClassce.<.ctor>b__69
  type$nlBRDGcIpz6XGah1H4MSig.__ctor_b__69 = function (b)
  {
    var a = this;

    a.w2.TQAABvWf_aTisnHwd9OZ7jQ(b);
    a.w2.UgAABvWf_aTisnHwd9OZ7jQ(JAAABuTOYTqpYs14xNZZlQ(a.CS___8__localscd.GetRandomCanvasPosition.Invoke()));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc+<>c__DisplayClassce.<.ctor>b__6a
  type$nlBRDGcIpz6XGah1H4MSig.__ctor_b__6a = function ()
  {
    var a = this;

    KQAABuTOYTqpYs14xNZZlQ(IgAABuTOYTqpYs14xNZZlQ(5000), new ctor$PgcABj6AjDWT6PYg1Srvkg(a, '__ctor_b__6b'));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc+<>c__DisplayClassce.<.ctor>b__6b
  type$nlBRDGcIpz6XGah1H4MSig.__ctor_b__6b = function (b)
  {
    var a = this, c, d;

    d = !a.CS___8__locals9e.paused;

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }


    if (!(_5AIABGcIpz6XGah1H4MSig))
    {
      _5AIABGcIpz6XGah1H4MSig = new ctor$BQAABkGjlTKl11x0SjZu8g(null, 'lQMABmcIpz6XGah1H4MSig');
    }

    c = NgAABne06jm5i7qNIX6ZzA(a.CS___8__localsca.Dudes, _5AIABGcIpz6XGah1H4MSig);
    d = !a.w2.OAAABvWf_aTisnHwd9OZ7jQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JwAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.w2.JQAABnS9Rj2LTMsPW407VQ();

    if (!d)
    {
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !(c > 3);

    if (!d)
    {
      a.w2.PgAABvWf_aTisnHwd9OZ7jQ(IQAABuTOYTqpYs14xNZZlQ(6.28318530717959));
      a.WaitSomeAndGoSomeWhere.Invoke();
      return;
    }

    d = !a.ScoutIfIdle;

    if (!d)
    {
      a.GoSomeWhere.Invoke(a.WaitSomeAndGoSomeWhere);
      return;
    }

    a.WaitSomeAndGoSomeWhere.Invoke();
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasscc+<>c__DisplayClassce.<.ctor>b__6c
  function lQMABmcIpz6XGah1H4MSig(b)
  {
    return b.OAAABvWf_aTisnHwd9OZ7jQ();
  };

  // Closure type
  function gj6Bd4SM_bjq2AFi9StdE_bQ() {}  type$gj6Bd4SM_bjq2AFi9StdE_bQ = gj6Bd4SM_bjq2AFi9StdE_bQ.prototype =   {
    constructor: gj6Bd4SM_bjq2AFi9StdE_bQ,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    map_coords: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClassd2.<.ctor>b__78
  type$gj6Bd4SM_bjq2AFi9StdE_bQ.__ctor_b__78 = function (b)
  {
    var a = this, c;

    c = ((b.Position.X != a.map_coords.X) ? 0 : (b.Position.Y == a.map_coords.Y));
    return c;
  };

  // Closure type
  function _6e4yEo4fHTydqrl4n6cN6A() {}  type$_6e4yEo4fHTydqrl4n6cN6A = _6e4yEo4fHTydqrl4n6cN6A.prototype =   {
    constructor: _6e4yEo4fHTydqrl4n6cN6A,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    IsGrass: null,
    IsRoad2: null,
    IsTrack1: null,
    IsTree: null,
    IsTileSelector: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClassd8.<.ctor>b__84
  type$_6e4yEo4fHTydqrl4n6cN6A.__ctor_b__84 = function (b)
  {
    var a = this, c;

    c = (!a.IsGrass.Invoke(b) && !a.IsTileSelector.Invoke(b));
    return c;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClassd8.<.ctor>b__85
  type$_6e4yEo4fHTydqrl4n6cN6A.__ctor_b__85 = function (b)
  {
    var a = this, c;

    c = (!a.IsRoad2.Invoke(b) && (!a.IsGrass.Invoke(b) && (!a.IsTree.Invoke(b) && !a.IsTileSelector.Invoke(b))));
    return c;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClassd8.<.ctor>b__86
  type$_6e4yEo4fHTydqrl4n6cN6A.__ctor_b__86 = function (b)
  {
    var a = this, c;

    c = (!a.IsTrack1.Invoke(b) && (!a.IsGrass.Invoke(b) && (!a.IsTree.Invoke(b) && !a.IsTileSelector.Invoke(b))));
    return c;
  };

  // Closure type
  function N3kgOOvmnDWVOwAKQxiY3Q() {}  type$N3kgOOvmnDWVOwAKQxiY3Q = N3kgOOvmnDWVOwAKQxiY3Q.prototype =   {
    constructor: N3kgOOvmnDWVOwAKQxiY3Q,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    IsGrass: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClassdc.<.ctor>b__89
  type$N3kgOOvmnDWVOwAKQxiY3Q.__ctor_b__89 = function (b)
  {
    return !this.IsGrass.Invoke(b);
  };

  // Closure type
  function rA4FCF_bFMDGMmNH_bx_bUPpg() {}  type$rA4FCF_bFMDGMmNH_bx_bUPpg = rA4FCF_bFMDGMmNH_bx_bUPpg.prototype =   {
    constructor: rA4FCF_bFMDGMmNH_bx_bUPpg,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    selection: null,
    target: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse3.<.ctor>b__8f
  type$rA4FCF_bFMDGMmNH_bx_bUPpg.__ctor_b__8f = function (b, c)
  {
    var a = this, d, e;

    d = new ctor$_1QMABo9DxTqFY3fWlQmzeQ();
    d.X = (a.target.X + (ewYABlp1gTixwdv_axCXc_aQ(b) * c));
    d.Y = (a.target.Y + (fAYABlp1gTixwdv_axCXc_aQ(b) * c));
    e = d;
    return e;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse3.<.ctor>b__91
  type$rA4FCF_bFMDGMmNH_bx_bUPpg.__ctor_b__91 = function (b)
  {
    return new ctor$_7AAABnSvaDGF0W_bnoNUWDw(b, NQAABuTOYTqpYs14xNZZlQ(((b / this.selection.length) * 6.28318530717959)));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse3.<.ctor>b__94
  type$rA4FCF_bFMDGMmNH_bx_bUPpg.__ctor_b__94 = function (b)
  {
    return new ctor$__bgAABsMs9zKjscGqZxx_b6g(b, this.CS___8__locals9e.Translate.Invoke(b.get_mtarget().X, b.get_mtarget().Y));
  };

  // Closure type
  function _53ie2ahBZTukrNFJTHczTw() {}  type$_53ie2ahBZTukrNFJTHczTw = _53ie2ahBZTukrNFJTHczTw.prototype =   {
    constructor: _53ie2ahBZTukrNFJTHczTw,
    CS___8__localse4: null,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    canvas: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse5.<.ctor>b__8e
  type$_53ie2ahBZTukrNFJTHczTw.__ctor_b__8e = function (b)
  {
    var a = this;

    b.UgAABvWf_aTisnHwd9OZ7jQ(a.canvas);
  };

  // Closure type
  function _48BTE682ODiwdNMvjvuWQA() {}  type$_48BTE682ODiwdNMvjvuWQA = _48BTE682ODiwdNMvjvuWQA.prototype =   {
    constructor: _48BTE682ODiwdNMvjvuWQA,
    CS___8__localse4: null,
    CS___8__localsca: null,
    CS___8__locals9e: null,
    center: null,
    GetRotatedTargetPoint: null,
    OffsetToCenter: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse7.<.ctor>b__90
  type$_48BTE682ODiwdNMvjvuWQA.__ctor_b__90 = function (b)
  {
    var a = this, c, d;

    c = new ctor$_3AMABjE9ID2bvdJDtEkvJw();
    c.X = JgAABuTOYTqpYs14xNZZlQ((b.X + a.center.X));
    c.Y = JgAABuTOYTqpYs14xNZZlQ((b.Y + a.center.Y));
    d = c;
    return d;
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse7.<.ctor>b__93
  type$_48BTE682ODiwdNMvjvuWQA.__ctor_b__93 = function (b)
  {
    return new ctor$__aAAABp27jTS5KZx4JLqP_bw(b, this.GetRotatedTargetPoint.Invoke(b.get___h__TransparentIdentifier6().get_direction(), b.get_distance()));
  };

  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClass9d+<>c__DisplayClassc9+<>c__DisplayClasse7.<.ctor>b__95
  type$_48BTE682ODiwdNMvjvuWQA.__ctor_b__95 = function (b)
  {
    return new ctor$BAEABm2dlTCHt7YU0FRUmw(b.get___h__TransparentIdentifier8().get___h__TransparentIdentifier7().get___h__TransparentIdentifier6().get_index(), this.OffsetToCenter.Invoke(b.get_mcanvas()));
  };

  // Closure type
  function bTHY5anvljizKRMiXkPXqQ() {}  type$bTHY5anvljizKRMiXkPXqQ = bTHY5anvljizKRMiXkPXqQ.prototype =   {
    constructor: bTHY5anvljizKRMiXkPXqQ,
    CS___8__locals9e: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClassb0.<.ctor>b__40
  type$bTHY5anvljizKRMiXkPXqQ.__ctor_b__40 = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new HcNPzQcFFD2ezn6dyeLQ2w();
    c.CS___8__localsb1 = a;
    c.CS___8__locals9e = a.CS___8__locals9e;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals9e.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals9e.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals9e.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__41'));
    return d;
  };

  // Closure type
  function HcNPzQcFFD2ezn6dyeLQ2w() {}  type$HcNPzQcFFD2ezn6dyeLQ2w = HcNPzQcFFD2ezn6dyeLQ2w.prototype =   {
    constructor: HcNPzQcFFD2ezn6dyeLQ2w,
    CS___8__localsb1: null,
    CS___8__locals9e: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClassb0+<>c__DisplayClassb2.<.ctor>b__41
  type$HcNPzQcFFD2ezn6dyeLQ2w.__ctor_b__41 = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == b.get_y()));
    return c;
  };

  // Closure type
  function T6ur59waKTycSs6_b8ewhSQ() {}  type$T6ur59waKTycSs6_b8ewhSQ = T6ur59waKTycSs6_b8ewhSQ.prototype =   {
    constructor: T6ur59waKTycSs6_b8ewhSQ,
    CS___8__locals9e: null,
    v: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClassb7.<.ctor>b__48
  type$T6ur59waKTycSs6_b8ewhSQ.__ctor_b__48 = function (b)
  {
    var a = this, c, d;

    d = !(b == a.v.get_a());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b == a.v.get_b());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // Closure type
  function GTB23gYouTODuVxXPWczrA() {}  type$GTB23gYouTODuVxXPWczrA = GTB23gYouTODuVxXPWczrA.prototype =   {
    constructor: GTB23gYouTODuVxXPWczrA,
    CS___8__locals9e: null,
    AllRoads: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClassb9.<.ctor>b__4a
  type$GTB23gYouTODuVxXPWczrA.__ctor_b__4a = function (b)
  {
    var a = this, c, d, e;

    c = /* DOMCreateType */new F_apY7w0K8TWvo_ahCVozSRg();
    c.CS___8__localsba = a;
    c.CS___8__locals9e = a.CS___8__locals9e;
    c.v = b;
    e = !(c.v.get_color() == a.CS___8__locals9e.TileColor);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals9e.TileColorRoad1);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(c.v.get_color() == a.CS___8__locals9e.TileColorRoad2);

    if (!e)
    {
      d = 1;
      return d;
    }

    d = !MQAABne06jm5i7qNIX6ZzA(a.AllRoads, new ctor$BQAABkGjlTKl11x0SjZu8g(c, '__ctor_b__4b'));
    return d;
  };

  // Closure type
  function F_apY7w0K8TWvo_ahCVozSRg() {}  type$F_apY7w0K8TWvo_ahCVozSRg = F_apY7w0K8TWvo_ahCVozSRg.prototype =   {
    constructor: F_apY7w0K8TWvo_ahCVozSRg,
    v: null,
    CS___8__localsba: null,
    CS___8__locals9e: null
  }
;
  // ThreeDStuff.js.IsometricWithToolbar+<>c__DisplayClassb9+<>c__DisplayClassbb.<.ctor>b__4b
  type$F_apY7w0K8TWvo_ahCVozSRg.__ctor_b__4b = function (b)
  {
    var a = this, c;

    c = ((b.get_x() != a.v.get_x()) ? 0 : (b.get_y() == a.v.get_y()));
    return c;
  };

  // Anonymous type
  function K_a_bmSfqz_bja0qL_blBfteKA() {}  type$K_a_bmSfqz_bja0qL_blBfteKA = K_a_bmSfqz_bja0qL_blBfteKA.prototype =   {
    constructor: K_a_bmSfqz_bja0qL_blBfteKA,
    _t_i__Field: null,
    _d_i__Field: null
  }
;
  // <>f__AnonymousType27`2.get_t
  type$K_a_bmSfqz_bja0qL_blBfteKA.get_t = function ()
  {
    return this._t_i__Field;
  };

  // <>f__AnonymousType27`2.get_d
  type$K_a_bmSfqz_bja0qL_blBfteKA.get_d = function ()
  {
    return this._d_i__Field;
  };

  // <>f__AnonymousType27`2.ToString
  type$K_a_bmSfqz_bja0qL_blBfteKA.toString /* <>f__AnonymousType27`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ t = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._t_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', d = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._d_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    K_a_bmSfqz_bja0qL_blBfteKA.prototype.toString /* System.Object.ToString */ = K_a_bmSfqz_bja0qL_blBfteKA.prototype.toString /* <>f__AnonymousType27`2.ToString */;

  // <>f__AnonymousType27`2.Equals
  type$K_a_bmSfqz_bja0qL_blBfteKA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    K_a_bmSfqz_bja0qL_blBfteKA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = K_a_bmSfqz_bja0qL_blBfteKA.prototype.Equals;

  // <>f__AnonymousType27`2.GetHashCode
  type$K_a_bmSfqz_bja0qL_blBfteKA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    K_a_bmSfqz_bja0qL_blBfteKA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = K_a_bmSfqz_bja0qL_blBfteKA.prototype.GetHashCode;

  // <>f__AnonymousType27`2..ctor
  type$K_a_bmSfqz_bja0qL_blBfteKA.sgMABvqz_bja0qL_blBfteKA = function (b, c)
  {
    var a = this;

    a._t_i__Field = b;
    a._d_i__Field = c;
  };
  var ctor$sgMABvqz_bja0qL_blBfteKA = $ctor$(null, 'sgMABvqz_bja0qL_blBfteKA', type$K_a_bmSfqz_bja0qL_blBfteKA);
  // Anonymous type
  function DBpQt9TGuTunbAxPv5O9nA() {}  type$DBpQt9TGuTunbAxPv5O9nA = DBpQt9TGuTunbAxPv5O9nA.prototype =   {
    constructor: DBpQt9TGuTunbAxPv5O9nA,
    ___h__TransparentIdentifier0_i__Field: null,
    _attribute_i__Field: null
  }
;
  // <>f__AnonymousType28`2.get_<>h__TransparentIdentifier0
  type$DBpQt9TGuTunbAxPv5O9nA.get___h__TransparentIdentifier0 = function ()
  {
    return this.___h__TransparentIdentifier0_i__Field;
  };

  // <>f__AnonymousType28`2.get_attribute
  type$DBpQt9TGuTunbAxPv5O9nA.get_attribute = function ()
  {
    return this._attribute_i__Field;
  };

  // <>f__AnonymousType28`2.ToString
  type$DBpQt9TGuTunbAxPv5O9nA.toString /* <>f__AnonymousType28`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier0 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier0_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', attribute = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._attribute_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    DBpQt9TGuTunbAxPv5O9nA.prototype.toString /* System.Object.ToString */ = DBpQt9TGuTunbAxPv5O9nA.prototype.toString /* <>f__AnonymousType28`2.ToString */;

  // <>f__AnonymousType28`2.Equals
  type$DBpQt9TGuTunbAxPv5O9nA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    DBpQt9TGuTunbAxPv5O9nA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = DBpQt9TGuTunbAxPv5O9nA.prototype.Equals;

  // <>f__AnonymousType28`2.GetHashCode
  type$DBpQt9TGuTunbAxPv5O9nA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    DBpQt9TGuTunbAxPv5O9nA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = DBpQt9TGuTunbAxPv5O9nA.prototype.GetHashCode;

  // <>f__AnonymousType28`2..ctor
  type$DBpQt9TGuTunbAxPv5O9nA.uAMABtTGuTunbAxPv5O9nA = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier0_i__Field = b;
    a._attribute_i__Field = c;
  };
  var ctor$uAMABtTGuTunbAxPv5O9nA = $ctor$(null, 'uAMABtTGuTunbAxPv5O9nA', type$DBpQt9TGuTunbAxPv5O9nA);
  // Anonymous type
  function __ajhOAtr8YzOaiTf4h_aL9qg() {}  type$__ajhOAtr8YzOaiTf4h_aL9qg = __ajhOAtr8YzOaiTf4h_aL9qg.prototype =   {
    constructor: __ajhOAtr8YzOaiTf4h_aL9qg,
    ___h__TransparentIdentifier1_i__Field: null,
    _anchor_i__Field: null
  }
;
  // <>f__AnonymousType29`2.get_<>h__TransparentIdentifier1
  type$__ajhOAtr8YzOaiTf4h_aL9qg.get___h__TransparentIdentifier1 = function ()
  {
    return this.___h__TransparentIdentifier1_i__Field;
  };

  // <>f__AnonymousType29`2.get_anchor
  type$__ajhOAtr8YzOaiTf4h_aL9qg.get_anchor = function ()
  {
    return this._anchor_i__Field;
  };

  // <>f__AnonymousType29`2.ToString
  type$__ajhOAtr8YzOaiTf4h_aL9qg.toString /* <>f__AnonymousType29`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ <>h__TransparentIdentifier1 = ');
    b.DgcABpZhQDOiq3eX08UFDA(a.___h__TransparentIdentifier1_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', anchor = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._anchor_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    __ajhOAtr8YzOaiTf4h_aL9qg.prototype.toString /* System.Object.ToString */ = __ajhOAtr8YzOaiTf4h_aL9qg.prototype.toString /* <>f__AnonymousType29`2.ToString */;

  // <>f__AnonymousType29`2.Equals
  type$__ajhOAtr8YzOaiTf4h_aL9qg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    __ajhOAtr8YzOaiTf4h_aL9qg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = __ajhOAtr8YzOaiTf4h_aL9qg.prototype.Equals;

  // <>f__AnonymousType29`2.GetHashCode
  type$__ajhOAtr8YzOaiTf4h_aL9qg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    __ajhOAtr8YzOaiTf4h_aL9qg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = __ajhOAtr8YzOaiTf4h_aL9qg.prototype.GetHashCode;

  // <>f__AnonymousType29`2..ctor
  type$__ajhOAtr8YzOaiTf4h_aL9qg.vgMABtr8YzOaiTf4h_aL9qg = function (b, c)
  {
    var a = this;

    a.___h__TransparentIdentifier1_i__Field = b;
    a._anchor_i__Field = c;
  };
  var ctor$vgMABtr8YzOaiTf4h_aL9qg = $ctor$(null, 'vgMABtr8YzOaiTf4h_aL9qg', type$__ajhOAtr8YzOaiTf4h_aL9qg);
  // Anonymous type
  function Vy1HxnmSUzeRDib0kvt7pg() {}  type$Vy1HxnmSUzeRDib0kvt7pg = Vy1HxnmSUzeRDib0kvt7pg.prototype =   {
    constructor: Vy1HxnmSUzeRDib0kvt7pg,
    _anchor_i__Field: null,
    _attribute_i__Field: null
  }
;
  // <>f__AnonymousType2a`2.get_anchor
  type$Vy1HxnmSUzeRDib0kvt7pg.get_anchor = function ()
  {
    return this._anchor_i__Field;
  };

  // <>f__AnonymousType2a`2.get_attribute
  type$Vy1HxnmSUzeRDib0kvt7pg.get_attribute = function ()
  {
    return this._attribute_i__Field;
  };

  // <>f__AnonymousType2a`2.ToString
  type$Vy1HxnmSUzeRDib0kvt7pg.toString /* <>f__AnonymousType2a`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ anchor = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._anchor_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(', attribute = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._attribute_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    Vy1HxnmSUzeRDib0kvt7pg.prototype.toString /* System.Object.ToString */ = Vy1HxnmSUzeRDib0kvt7pg.prototype.toString /* <>f__AnonymousType2a`2.ToString */;

  // <>f__AnonymousType2a`2.Equals
  type$Vy1HxnmSUzeRDib0kvt7pg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    Vy1HxnmSUzeRDib0kvt7pg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = Vy1HxnmSUzeRDib0kvt7pg.prototype.Equals;

  // <>f__AnonymousType2a`2.GetHashCode
  type$Vy1HxnmSUzeRDib0kvt7pg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    Vy1HxnmSUzeRDib0kvt7pg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = Vy1HxnmSUzeRDib0kvt7pg.prototype.GetHashCode;

  // <>f__AnonymousType2a`2..ctor
  type$Vy1HxnmSUzeRDib0kvt7pg.xAMABnmSUzeRDib0kvt7pg = function (b, c)
  {
    var a = this;

    a._anchor_i__Field = b;
    a._attribute_i__Field = c;
  };
  var ctor$xAMABnmSUzeRDib0kvt7pg = $ctor$(null, 'xAMABnmSUzeRDib0kvt7pg', type$Vy1HxnmSUzeRDib0kvt7pg);
  // Closure type
  function z2rF6mAJSTyLCGQJy86E9Q() {}  type$z2rF6mAJSTyLCGQJy86E9Q = z2rF6mAJSTyLCGQJy86E9Q.prototype =   {
    constructor: z2rF6mAJSTyLCGQJy86E9Q,
    Menu: null,
    CreateAnchor: null
  }
;
  // ThreeDStuff.js.ThreeDStuff+<>c__DisplayClass14.<.ctor>b__4
  type$z2rF6mAJSTyLCGQJy86E9Q.__ctor_b__4 = function (b, c, d)
  {
    var a = this, e, f, g, h;

    f = /* DOMCreateType */new thf0cmLnHzuP7WEiS6Nj5w();
    f.CS___8__locals15 = a;
    f.t = d;
    f.a = WwcABoxi_bTa9qR7vPH8NUg(b, '');
    e = HgcABkjEbDO_alxfCOX592w(f.t.zAQABqOBvjOuSkQZrCdfWA());
    e.style.fontWeight = 'bold';
    f.a.appendChild(e);
    f.a.appendChild(BwcABjUINT_a1xkfbdB8Ksw());
    h = [
      c
    ];
    IgAABtvq0jCU0R1GsbOa4g(f.a, h);
    f.a.style.display = 'block';
    QwAABgAjajq2ygojxk6uUQ(f.a, new ctor$dwMABqGrgDi0RzjV63Di8A(f, '__ctor_b__5'));
    RQAABgAjajq2ygojxk6uUQ(f.a, new ctor$dwMABqGrgDi0RzjV63Di8A(f, '__ctor_b__6'));
    f.a.style.textDecoration = 'none';
    f.a.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
    PwAABgAjajq2ygojxk6uUQ(f.a, new ctor$dwMABqGrgDi0RzjV63Di8A(f, '__ctor_b__7'));
    g = f.a;
    return g;
  };

  // ThreeDStuff.js.ThreeDStuff+<>c__DisplayClass14.<.ctor>b__b
  type$z2rF6mAJSTyLCGQJy86E9Q.__ctor_b__b = function (b)
  {
    return new ctor$vgMABtr8YzOaiTf4h_aL9qg(b, this.CreateAnchor.Invoke(_8gQABpT92DaiMvTduyyLZQ(b.get___h__TransparentIdentifier0().get_t().zAQABqOBvjOuSkQZrCdfWA(), '.htm'), b.get_attribute().Description, b.get___h__TransparentIdentifier0().get_t()));
  };

  // Closure type
  function thf0cmLnHzuP7WEiS6Nj5w() {}  type$thf0cmLnHzuP7WEiS6Nj5w = thf0cmLnHzuP7WEiS6Nj5w.prototype =   {
    constructor: thf0cmLnHzuP7WEiS6Nj5w,
    CS___8__locals15: null,
    a: null,
    t: null
  }
;
  // ThreeDStuff.js.ThreeDStuff+<>c__DisplayClass14+<>c__DisplayClass16.<.ctor>b__5
  type$thf0cmLnHzuP7WEiS6Nj5w.__ctor_b__5 = function (b)
  {
    var a = this;

    a.a.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(PgYABnNsjTy5GU2G_aZC6tw());
    a.a.style.color = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
  };

  // ThreeDStuff.js.ThreeDStuff+<>c__DisplayClass14+<>c__DisplayClass16.<.ctor>b__6
  type$thf0cmLnHzuP7WEiS6Nj5w.__ctor_b__6 = function (b)
  {
    var a = this;

    a.a.style.backgroundColor = '';
    a.a.style.color = NAYABnNsjTy5GU2G_aZC6tw(PQYABnNsjTy5GU2G_aZC6tw());
  };

  // ThreeDStuff.js.ThreeDStuff+<>c__DisplayClass14+<>c__DisplayClass16.<.ctor>b__7
  type$thf0cmLnHzuP7WEiS6Nj5w.__ctor_b__7 = function (b)
  {
    var a = this;

    document.body.style.background = '';
    rQUABuSquTGLE3NPwKQpLw(b);
    jwUABuKCPTKGRKjkr5dWuA(a.CS___8__locals15.Menu);
    HwAABuTOYTqpYs14xNZZlQ(a.t);
  };

  // Anonymous type
  function _5UBlUUpJ2TWvTX03YND9rg() {}  type$_5UBlUUpJ2TWvTX03YND9rg = _5UBlUUpJ2TWvTX03YND9rg.prototype =   {
    constructor: _5UBlUUpJ2TWvTX03YND9rg,
    _location_i__Field: null
  }
;
  // <>f__AnonymousType2b`1.get_location
  type$_5UBlUUpJ2TWvTX03YND9rg.get_location = function ()
  {
    return this._location_i__Field;
  };

  // <>f__AnonymousType2b`1.ToString
  type$_5UBlUUpJ2TWvTX03YND9rg.toString /* <>f__AnonymousType2b`1.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$DAcABpZhQDOiq3eX08UFDA();
    b.DQcABpZhQDOiq3eX08UFDA('{ location = ');
    b.DgcABpZhQDOiq3eX08UFDA(a._location_i__Field);
    b.DQcABpZhQDOiq3eX08UFDA(' }');
    c = (b+'');
    return c;
  };
    _5UBlUUpJ2TWvTX03YND9rg.prototype.toString /* System.Object.ToString */ = _5UBlUUpJ2TWvTX03YND9rg.prototype.toString /* <>f__AnonymousType2b`1.ToString */;

  // <>f__AnonymousType2b`1.Equals
  type$_5UBlUUpJ2TWvTX03YND9rg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    _5UBlUUpJ2TWvTX03YND9rg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = _5UBlUUpJ2TWvTX03YND9rg.prototype.Equals;

  // <>f__AnonymousType2b`1.GetHashCode
  type$_5UBlUUpJ2TWvTX03YND9rg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    _5UBlUUpJ2TWvTX03YND9rg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = _5UBlUUpJ2TWvTX03YND9rg.prototype.GetHashCode;

  // <>f__AnonymousType2b`1..ctor
  type$_5UBlUUpJ2TWvTX03YND9rg._0QMABkpJ2TWvTX03YND9rg = function (b)
  {
    var a = this;

    a._location_i__Field = b;
  };
  var ctor$_0QMABkpJ2TWvTX03YND9rg = $ctor$(null, '_0QMABkpJ2TWvTX03YND9rg', type$_5UBlUUpJ2TWvTX03YND9rg);
  // Are the references up to date?
  // Are they imported in the dependency sort order?
  QlrH3C1_bAE_ajjtEm31jA_aA.Types = [e5_bcs1vbEzGAi7zZIoF3xw,l_bAMjxh2DT_adBFutKnrrVw,WTq4VC_aqQD20Pfjzm0Td5w,_9Ua8mqRtPjKg0uSNiUWm9g,oMTOVHNDFD_aHU01yVc_agBg,z_a_bP27NDmDCQEyNatd_bw5w,U1sairr1izywrSF9lxm2xw,S_af08vLF3zGZi85QdUb0eQ,_9fxRNg2chjKpXgd_bOuCCDw,za4hDU0xfT6ITo5F4Wz1xQ,AOuU2NqhKzq_anMcSMU23kw];
  QlrH3C1_bAE_ajjtEm31jA_aA.References = [gY9CmVzyG0GIRbq1ldkO9A,xOC_bJt9X6EiIwJv2ZgzKmA,j_byYSnJ60UWkB6gQoWq_aOA,jKhVRFM7_aEWMBSkNSR2WxQ,__bB46LpLlw02atk_au_bX0c8w];

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$e5_bcs1vbEzGAi7zZIoF3xw)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$l_bAMjxh2DT_adBFutKnrrVw)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$WTq4VC_aqQD20Pfjzm0Td5w)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$_9Ua8mqRtPjKg0uSNiUWm9g)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$U1sairr1izywrSF9lxm2xw)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$S_af08vLF3zGZi85QdUb0eQ)));
  }
  )();

  (function()
  {
    OwAABuTOYTqpYs14xNZZlQ(_1gQABmIY_az6vz_alg_a0hAHA(new ctor$__bQUABqACZzKSGrrnqJ3SYw(type$AOuU2NqhKzq_anMcSMU23kw)));
  }
  )();

