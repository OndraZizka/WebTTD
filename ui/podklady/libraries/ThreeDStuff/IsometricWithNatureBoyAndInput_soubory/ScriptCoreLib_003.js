  var jKhVRFM7_aEWMBSkNSR2WxQ = {Name:{Name:"ScriptCoreLib.Controls.LayeredControl",FullName:"ScriptCoreLib.Controls.LayeredControl, Version\x3d1.0.0.0, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl
  function b_bin1dH5gzGOe58n5cZeTA(){};
  b_bin1dH5gzGOe58n5cZeTA.TypeName = "LayeredControl";
  b_bin1dH5gzGOe58n5cZeTA.Assembly = jKhVRFM7_aEWMBSkNSR2WxQ;
  var type$b_bin1dH5gzGOe58n5cZeTA = b_bin1dH5gzGOe58n5cZeTA.prototype;
  type$b_bin1dH5gzGOe58n5cZeTA = b_bin1dH5gzGOe58n5cZeTA.prototype =   {
    constructor: b_bin1dH5gzGOe58n5cZeTA,
    Control: null,
    Layers: null,
    CurrentCanvasPosition: null,
    CanvasViewChanged: null,
    CurrentCanvasSize: null,
    CurrentLocation: null
  }
;
  var basector$b_bin1dH5gzGOe58n5cZeTA = $ctor$(null, null, type$b_bin1dH5gzGOe58n5cZeTA);
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl..ctor
  type$b_bin1dH5gzGOe58n5cZeTA.AQAABtH5gzGOe58n5cZeTA = function ()
  {
    var a = this, b;

    a.Control = JQcABjQynDSNZ0PXHA8v4w();
    a.Layers = new ctor$DgAABmfcIT_ayMVP3GMmv4w();
    a.CurrentCanvasPosition = _2wMABjE9ID2bvdJDtEkvJw();
    a.CurrentCanvasSize = _2wMABjE9ID2bvdJDtEkvJw();
    a.CurrentLocation = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    a.Control.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(OwYABnNsjTy5GU2G_aZC6tw());
    a.Control.style.position = 'absolute';
    a.Control.style.overflow = 'hidden';
    a.Layers.Canvas.style.overflow = 'hidden';
    a.Layers.Canvas.style.position = 'absolute';
    a.Layers.CanvasInfo.style.position = 'absolute';
    a.Layers.Info.style.position = 'absolute';
    a.Layers.User.style.position = 'absolute';
    b = [
      a.Layers.Canvas,
      a.Layers.CanvasInfo,
      a.Layers.Info,
      a.Layers.User
    ];
    IQAABtvq0jCU0R1GsbOa4g(a.Control, b);
    a.Layers.Canvas.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(QAYABnNsjTy5GU2G_aZC6tw());
    a.Layers.User.style.backgroundImage = 'url(assets\u002fControls\u002fLayeredControl\u002fempty.gif)';
  };
  var ctor$AQAABtH5gzGOe58n5cZeTA = b_bin1dH5gzGOe58n5cZeTA.ctor = $ctor$(null, 'AQAABtH5gzGOe58n5cZeTA', type$b_bin1dH5gzGOe58n5cZeTA);

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.add_CanvasViewChanged
  type$b_bin1dH5gzGOe58n5cZeTA.AgAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.CanvasViewChanged = iwYABnzY4jaVovIDSMIxgQ(a.CanvasViewChanged, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.remove_CanvasViewChanged
  type$b_bin1dH5gzGOe58n5cZeTA.AwAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.CanvasViewChanged = jQYABnzY4jaVovIDSMIxgQ(a.CanvasViewChanged, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.InternalSetCanvasPosition
  type$b_bin1dH5gzGOe58n5cZeTA.BAAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this, c;

    a.CurrentCanvasPosition = b._2QMABjE9ID2bvdJDtEkvJw(new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0))._2gMABjE9ID2bvdJDtEkvJw(new ctor$_3QMABjE9ID2bvdJDtEkvJw((a.CurrentLocation.Width - a.CurrentCanvasSize.X), (a.CurrentLocation.Height - a.CurrentCanvasSize.Y)));
    c = !(a.CurrentLocation.Height > a.CurrentCanvasSize.Y);

    if (!c)
    {
      a.CurrentCanvasPosition.Y = ((a.CurrentLocation.Height - a.CurrentCanvasSize.Y) / 2);
    }

    c = !(a.CurrentLocation.Width > a.CurrentCanvasSize.X);

    if (!c)
    {
      a.CurrentCanvasPosition.X = ((a.CurrentLocation.Width - a.CurrentCanvasSize.X) / 2);
    }

    pQAABgnDWDenzWX06iPvnw(a.Layers.Canvas.style, a.CurrentCanvasPosition.X, a.CurrentCanvasPosition.Y);
    pQAABgnDWDenzWX06iPvnw(a.Layers.CanvasInfo.style, a.CurrentCanvasPosition.X, a.CurrentCanvasPosition.Y);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.SetCanvasPosition
  type$b_bin1dH5gzGOe58n5cZeTA.BQAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.BAAABtH5gzGOe58n5cZeTA(b);
    a.BwAABtH5gzGOe58n5cZeTA();
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.SetCanvasViewCenter
  type$b_bin1dH5gzGOe58n5cZeTA.BgAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.BAAABtH5gzGOe58n5cZeTA(new ctor$_3QMABjE9ID2bvdJDtEkvJw(((a.CurrentLocation.Width / 2) - b.X), ((a.CurrentLocation.Height / 2) - b.Y)));
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.RaiseCanvasViewChanged
  type$b_bin1dH5gzGOe58n5cZeTA.BwAABtH5gzGOe58n5cZeTA = function ()
  {
    var a = this, b;

    b = !(a.CanvasViewChanged == null);

    if (!b)
    {
      return;
    }

    a.CanvasViewChanged.Invoke(a.CAAABtH5gzGOe58n5cZeTA());
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.get_CanvasView
  type$b_bin1dH5gzGOe58n5cZeTA.CAAABtH5gzGOe58n5cZeTA = function ()
  {
    var a = this, b, c;

    b = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    b.Left = (-a.CurrentCanvasPosition.X);
    b.Top = (-a.CurrentCanvasPosition.Y);
    b.Width = a.CurrentLocation.Width;
    b.Height = a.CurrentLocation.Height;
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.SetCanvasSize
  type$b_bin1dH5gzGOe58n5cZeTA.CQAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.CurrentCanvasSize = new ctor$_3QMABjE9ID2bvdJDtEkvJw(gAYABlp1gTixwdv_axCXc_aQ(b.X), gAYABlp1gTixwdv_axCXc_aQ(b.Y));
    qAAABgnDWDenzWX06iPvnw(a.Layers.Canvas.style, b.X, b.Y);
    qAAABgnDWDenzWX06iPvnw(a.Layers.CanvasInfo.style, b.X, b.Y);
    a.BQAABtH5gzGOe58n5cZeTA(a.CurrentCanvasPosition);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.SetLocation
  type$b_bin1dH5gzGOe58n5cZeTA.CgAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this;

    a.CurrentLocation = b;
    rgAABgnDWDenzWX06iPvnw(a.Control.style, b);
    pgAABgnDWDenzWX06iPvnw(a.Layers.Info.style, 0, 0, b.Width, b.Height);
    pgAABgnDWDenzWX06iPvnw(a.Layers.User.style, 0, 0, b.Width, b.Height);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.DrawRectangleToCanvas
  type$b_bin1dH5gzGOe58n5cZeTA.CwAABtH5gzGOe58n5cZeTA = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new V0Mc6cvlrDC2at3agVlSbw();
    c.x = JQcABjQynDSNZ0PXHA8v4w();
    c.x.style.overflow = 'hidden';
    b._Dispose = new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '_DrawRectangleToCanvas_b__0');
    b._Update = new ctor$PgcABj6AjDWT6PYg1Srvkg(c, '_DrawRectangleToCanvas_b__1');
    b.DwAABiaSfjeFDrpK6t64Qw();
    a.Layers.Canvas.appendChild(c.x);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.DrawRectangleToCanvas
  type$b_bin1dH5gzGOe58n5cZeTA.DAAABtH5gzGOe58n5cZeTA = function (b, c)
  {
    var a = this, d;

    d = JQcABjQynDSNZ0PXHA8v4w();
    d.style.overflow = 'hidden';
    pgAABgnDWDenzWX06iPvnw(d.style, b.Left, b.Top, b.Width, b.Height);
    d.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(c);
    a.Layers.Canvas.appendChild(d);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl.InitializeCanvasDrag
  type$b_bin1dH5gzGOe58n5cZeTA.DQAABtH5gzGOe58n5cZeTA = function ()
  {
    var a = this, b, c;

    c = /* DOMCreateType */new SUVueTmTgzW6hAf1U9mt0w();
    c.__4__this = a;
    c.drag_enabled = 0;
    c.drag_start = _2wMABjE9ID2bvdJDtEkvJw();
    b = a.Layers.User;
    RwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasDrag_b__4'));
    SwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasDrag_b__5'));
    SQAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasDrag_b__6'));
    RQAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasDrag_b__7'));
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+LayersGroup
  function Ju6r3mfcIT_ayMVP3GMmv4w(){};
  Ju6r3mfcIT_ayMVP3GMmv4w.TypeName = "LayersGroup";
  Ju6r3mfcIT_ayMVP3GMmv4w.Assembly = jKhVRFM7_aEWMBSkNSR2WxQ;
  var type$Ju6r3mfcIT_ayMVP3GMmv4w = Ju6r3mfcIT_ayMVP3GMmv4w.prototype;
  type$Ju6r3mfcIT_ayMVP3GMmv4w = Ju6r3mfcIT_ayMVP3GMmv4w.prototype =   {
    constructor: Ju6r3mfcIT_ayMVP3GMmv4w,
    Canvas: null,
    CanvasInfo: null,
    Info: null,
    User: null
  }
;
  var basector$Ju6r3mfcIT_ayMVP3GMmv4w = $ctor$(null, null, type$Ju6r3mfcIT_ayMVP3GMmv4w);
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+LayersGroup..ctor
  type$Ju6r3mfcIT_ayMVP3GMmv4w.DgAABmfcIT_ayMVP3GMmv4w = function ()
  {
    var a = this;

    a.Canvas = JQcABjQynDSNZ0PXHA8v4w();
    a.CanvasInfo = JQcABjQynDSNZ0PXHA8v4w();
    a.Info = JQcABjQynDSNZ0PXHA8v4w();
    a.User = JQcABjQynDSNZ0PXHA8v4w();
  };
  var ctor$DgAABmfcIT_ayMVP3GMmv4w = Ju6r3mfcIT_ayMVP3GMmv4w.ctor = $ctor$(null, 'DgAABmfcIT_ayMVP3GMmv4w', type$Ju6r3mfcIT_ayMVP3GMmv4w);

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+CanvasRectangle
  function RzJJ5CaSfjeFDrpK6t64Qw(){};
  RzJJ5CaSfjeFDrpK6t64Qw.TypeName = "CanvasRectangle";
  RzJJ5CaSfjeFDrpK6t64Qw.Assembly = jKhVRFM7_aEWMBSkNSR2WxQ;
  var type$RzJJ5CaSfjeFDrpK6t64Qw = RzJJ5CaSfjeFDrpK6t64Qw.prototype;
  type$RzJJ5CaSfjeFDrpK6t64Qw = RzJJ5CaSfjeFDrpK6t64Qw.prototype =   {
    constructor: RzJJ5CaSfjeFDrpK6t64Qw,
    Location: null,
    BackgroundColor: null,
    _Update: null,
    _Dispose: null
  }
;
  var basector$RzJJ5CaSfjeFDrpK6t64Qw = $ctor$(null, null, type$RzJJ5CaSfjeFDrpK6t64Qw);
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+CanvasRectangle..ctor
  type$RzJJ5CaSfjeFDrpK6t64Qw.EQAABiaSfjeFDrpK6t64Qw = function ()
  {
    var a = this;

  };
  var ctor$EQAABiaSfjeFDrpK6t64Qw = RzJJ5CaSfjeFDrpK6t64Qw.ctor = $ctor$(null, 'EQAABiaSfjeFDrpK6t64Qw', type$RzJJ5CaSfjeFDrpK6t64Qw);

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+CanvasRectangle.Update
  type$RzJJ5CaSfjeFDrpK6t64Qw.DwAABiaSfjeFDrpK6t64Qw = function ()
  {
    var a = this;

    a._Update.Invoke(a);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+CanvasRectangle.Dispose
  type$RzJJ5CaSfjeFDrpK6t64Qw.EAAABiaSfjeFDrpK6t64Qw = function ()
  {
    var a = this;

    a._Dispose.Invoke(a);
  };

  // System.IDisposable
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+CanvasRectangle
  (function (i)  {
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.EAAABiaSfjeFDrpK6t64Qw;
  }
  )(type$RzJJ5CaSfjeFDrpK6t64Qw);
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl
  function OIJ6CIwIkzCWm4XSKspi6g(){};
  OIJ6CIwIkzCWm4XSKspi6g.TypeName = "ArenaControl";
  OIJ6CIwIkzCWm4XSKspi6g.Assembly = jKhVRFM7_aEWMBSkNSR2WxQ;
  var type$OIJ6CIwIkzCWm4XSKspi6g = OIJ6CIwIkzCWm4XSKspi6g.prototype;
  type$OIJ6CIwIkzCWm4XSKspi6g = OIJ6CIwIkzCWm4XSKspi6g.prototype =   {
    constructor: OIJ6CIwIkzCWm4XSKspi6g,
    MouseMove: null,
    SelectionMinimumSize: 0,
    ShowSelectionRectangle: false,
    SelectionPreview: null,
    SelectionPointsPreview: null,
    _InSelectionMode: false,
    SelectionClick: null,
    ApplySelection: null,
    ApplyPointsSelection: null
  }
;
  var basector$OIJ6CIwIkzCWm4XSKspi6g = $ctor$(basector$b_bin1dH5gzGOe58n5cZeTA, null, type$OIJ6CIwIkzCWm4XSKspi6g);
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl..ctor
  type$OIJ6CIwIkzCWm4XSKspi6g.EgAABowIkzCWm4XSKspi6g = function ()
  {
    var a = this;

    a.SelectionMinimumSize = 4;
    a.ShowSelectionRectangle = 1;
    a._InSelectionMode = 0;
    a.AQAABtH5gzGOe58n5cZeTA();
    a.HAAABowIkzCWm4XSKspi6g();
    a.DQAABtH5gzGOe58n5cZeTA();
    a.EwAABowIkzCWm4XSKspi6g();
  };
  var ctor$EgAABowIkzCWm4XSKspi6g = OIJ6CIwIkzCWm4XSKspi6g.ctor = $ctor$(basector$b_bin1dH5gzGOe58n5cZeTA, 'EgAABowIkzCWm4XSKspi6g', type$OIJ6CIwIkzCWm4XSKspi6g);

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.InitializeMouseMove
  type$OIJ6CIwIkzCWm4XSKspi6g.EwAABowIkzCWm4XSKspi6g = function ()
  {
    var a = this, b, c;

    c = /* DOMCreateType */new _0qO0BLfCBDuIRfIunRfrqA();
    c.__4__this = a;
    c.state = 1;
    b = a.Layers.User;
    RwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeMouseMove_b__0'));
    SQAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeMouseMove_b__1'));
    SwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeMouseMove_b__2'));
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_MouseMove
  type$OIJ6CIwIkzCWm4XSKspi6g.FAAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.MouseMove = iwYABnzY4jaVovIDSMIxgQ(a.MouseMove, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_MouseMove
  type$OIJ6CIwIkzCWm4XSKspi6g.FQAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.MouseMove = jQYABnzY4jaVovIDSMIxgQ(a.MouseMove, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.IsSelectionMinimumSize
  type$OIJ6CIwIkzCWm4XSKspi6g.FgAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this, c, d, e;

    c = (b.Width < a.SelectionMinimumSize);
    d = (b.Height < a.SelectionMinimumSize);
    e = (c || d);
    return e;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_SelectionPreview
  type$OIJ6CIwIkzCWm4XSKspi6g.FwAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionPreview = iwYABnzY4jaVovIDSMIxgQ(a.SelectionPreview, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_SelectionPreview
  type$OIJ6CIwIkzCWm4XSKspi6g.GAAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionPreview = jQYABnzY4jaVovIDSMIxgQ(a.SelectionPreview, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_SelectionPointsPreview
  type$OIJ6CIwIkzCWm4XSKspi6g.GQAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionPointsPreview = iwYABnzY4jaVovIDSMIxgQ(a.SelectionPointsPreview, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_SelectionPointsPreview
  type$OIJ6CIwIkzCWm4XSKspi6g.GgAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionPointsPreview = jQYABnzY4jaVovIDSMIxgQ(a.SelectionPointsPreview, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.get_InSelectionMode
  type$OIJ6CIwIkzCWm4XSKspi6g.GwAABowIkzCWm4XSKspi6g = function ()
  {
    var a = this, b;

    b = a._InSelectionMode;
    return b;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.InitializeCanvasSelection
  type$OIJ6CIwIkzCWm4XSKspi6g.HAAABowIkzCWm4XSKspi6g = function ()
  {
    var a = this, b, c;

    c = /* DOMCreateType */new Yez2UjAbxzu2wu9FUjXeeA();
    c.__4__this = a;
    b = a.Layers.User;
    c.selection = JQcABjQynDSNZ0PXHA8v4w();
    c.selection.style.border = '1px solid #ffffff';
    c.selection.style.overflow = 'hidden';
    c.selection_start = _2wMABjE9ID2bvdJDtEkvJw();
    c.selection_end = _2wMABjE9ID2bvdJDtEkvJw();
    c.selection_rect = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    c.UpdateSelection = new ctor$ewMABju_bQzuieaLNynM0gA(c, '_InitializeCanvasSelection_b__6');
    RwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasSelection_b__7'));
    SwAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasSelection_b__8'));
    SQAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasSelection_b__9'));
    RQAABgAjajq2ygojxk6uUQ(b, new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_InitializeCanvasSelection_b__a'));
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_SelectionClick
  type$OIJ6CIwIkzCWm4XSKspi6g.HQAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionClick = iwYABnzY4jaVovIDSMIxgQ(a.SelectionClick, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_SelectionClick
  type$OIJ6CIwIkzCWm4XSKspi6g.HgAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.SelectionClick = jQYABnzY4jaVovIDSMIxgQ(a.SelectionClick, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_ApplySelection
  type$OIJ6CIwIkzCWm4XSKspi6g.HwAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.ApplySelection = iwYABnzY4jaVovIDSMIxgQ(a.ApplySelection, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_ApplySelection
  type$OIJ6CIwIkzCWm4XSKspi6g.IAAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.ApplySelection = jQYABnzY4jaVovIDSMIxgQ(a.ApplySelection, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.add_ApplyPointsSelection
  type$OIJ6CIwIkzCWm4XSKspi6g.IQAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.ApplyPointsSelection = iwYABnzY4jaVovIDSMIxgQ(a.ApplyPointsSelection, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.remove_ApplyPointsSelection
  type$OIJ6CIwIkzCWm4XSKspi6g.IgAABowIkzCWm4XSKspi6g = function (b)
  {
    var a = this;

    a.ApplyPointsSelection = jQYABnzY4jaVovIDSMIxgQ(a.ApplyPointsSelection, b);
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl.DrawTextToInfo
  type$OIJ6CIwIkzCWm4XSKspi6g.IwAABowIkzCWm4XSKspi6g = function (b, c, d)
  {
    var a = this, e;

    e = HgcABkjEbDO_alxfCOX592w(b);
    pQAABgnDWDenzWX06iPvnw(e.style, c.X, c.Y);
    e.style.color = NAYABnNsjTy5GU2G_aZC6tw(d);
    a.Layers.Info.appendChild(e);
  };

  // Closure type
  function V0Mc6cvlrDC2at3agVlSbw() {}  type$V0Mc6cvlrDC2at3agVlSbw = V0Mc6cvlrDC2at3agVlSbw.prototype =   {
    constructor: V0Mc6cvlrDC2at3agVlSbw,
    x: null
  }
;
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass2.<DrawRectangleToCanvas>b__0
  type$V0Mc6cvlrDC2at3agVlSbw._DrawRectangleToCanvas_b__0 = function (b)
  {
    var a = this, c;

    c = !(a.x == null);

    if (!c)
    {
      return;
    }

    jwUABuKCPTKGRKjkr5dWuA(a.x);
    a.x = null;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass2.<DrawRectangleToCanvas>b__1
  type$V0Mc6cvlrDC2at3agVlSbw._DrawRectangleToCanvas_b__1 = function (b)
  {
    var a = this, c, d;

    d = !(a.x == null);

    if (!d)
    {
      return;
    }

    c = b.Location;
    pgAABgnDWDenzWX06iPvnw(a.x.style, c.Left, c.Top, c.Width, c.Height);
    a.x.style.backgroundColor = NAYABnNsjTy5GU2G_aZC6tw(b.BackgroundColor);
  };

  // Closure type
  function SUVueTmTgzW6hAf1U9mt0w() {}  type$SUVueTmTgzW6hAf1U9mt0w = SUVueTmTgzW6hAf1U9mt0w.prototype =   {
    constructor: SUVueTmTgzW6hAf1U9mt0w,
    drag_enabled: false,
    drag_start: null,
    __4__this: null
  }
;
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass8.<InitializeCanvasDrag>b__4
  type$SUVueTmTgzW6hAf1U9mt0w._InitializeCanvasDrag_b__4 = function (b)
  {
    var a = this, c;

    c = !(qgUABuSquTGLE3NPwKQpLw(b) == 2);

    if (!c)
    {
      a.drag_enabled = 1;
      a.drag_start = _4gMABjE9ID2bvdJDtEkvJw(pQUABuSquTGLE3NPwKQpLw(b), a.__4__this.CurrentCanvasPosition);
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass8.<InitializeCanvasDrag>b__5
  type$SUVueTmTgzW6hAf1U9mt0w._InitializeCanvasDrag_b__5 = function (b)
  {
    var a = this, c;

    c = !a.drag_enabled;

    if (!c)
    {
      a.__4__this.BQAABtH5gzGOe58n5cZeTA(_4gMABjE9ID2bvdJDtEkvJw(pQUABuSquTGLE3NPwKQpLw(b), a.drag_start));
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass8.<InitializeCanvasDrag>b__6
  type$SUVueTmTgzW6hAf1U9mt0w._InitializeCanvasDrag_b__6 = function (b)
  {
    var a = this, c;

    c = !(qgUABuSquTGLE3NPwKQpLw(b) == 2);

    if (!c)
    {
      a.drag_enabled = 0;
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.LayeredControl+<>c__DisplayClass8.<InitializeCanvasDrag>b__7
  type$SUVueTmTgzW6hAf1U9mt0w._InitializeCanvasDrag_b__7 = function (b)
  {
    var a = this, c;

    c = !a.drag_enabled;

    if (!c)
    {
      a.drag_enabled = 0;
    }

  };

  // Closure type
  function _0qO0BLfCBDuIRfIunRfrqA() {}  type$_0qO0BLfCBDuIRfIunRfrqA = _0qO0BLfCBDuIRfIunRfrqA.prototype =   {
    constructor: _0qO0BLfCBDuIRfIunRfrqA,
    state: false,
    __4__this: null
  }
;
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClass3.<InitializeMouseMove>b__0
  type$_0qO0BLfCBDuIRfIunRfrqA._InitializeMouseMove_b__0 = function (b)
  {
    var a = this;

    a.state = 0;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClass3.<InitializeMouseMove>b__1
  type$_0qO0BLfCBDuIRfIunRfrqA._InitializeMouseMove_b__1 = function (b)
  {
    var a = this;

    a.state = 1;
  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClass3.<InitializeMouseMove>b__2
  type$_0qO0BLfCBDuIRfIunRfrqA._InitializeMouseMove_b__2 = function (b)
  {
    var a = this, c;

    try
    {
      c = !a.state;

      if (!c)
      {
        sAIABgLCITuEwr97s3dlTA(a.__4__this.MouseMove, _4gMABjE9ID2bvdJDtEkvJw(pQUABuSquTGLE3NPwKQpLw(b), a.__4__this.CurrentCanvasPosition));
      }

    }
    catch (__exc){ }
  };

  // Closure type
  function Yez2UjAbxzu2wu9FUjXeeA() {}  type$Yez2UjAbxzu2wu9FUjXeeA = Yez2UjAbxzu2wu9FUjXeeA.prototype =   {
    constructor: Yez2UjAbxzu2wu9FUjXeeA,
    selection: null,
    selection_start: null,
    selection_end: null,
    selection_rect: null,
    UpdateSelection: null,
    __4__this: null
  }
;
  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClassb.<InitializeCanvasSelection>b__6
  type$Yez2UjAbxzu2wu9FUjXeeA._InitializeCanvasSelection_b__6 = function ()
  {
    var a = this, b, c;

    b = _4gMABjE9ID2bvdJDtEkvJw(a.selection_end, a.selection_start);
    c = !(b.X < 0);

    if (!c)
    {
      a.selection_rect.Left = (a.selection_start.X + b.X);
      a.selection_rect.Width = (-b.X);
    }
    else
    {
      a.selection_rect.Left = a.selection_start.X;
      a.selection_rect.Width = b.X;
    }

    c = !(b.Y < 0);

    if (!c)
    {
      a.selection_rect.Top = (a.selection_start.Y + b.Y);
      a.selection_rect.Height = (-b.Y);
    }
    else
    {
      a.selection_rect.Top = a.selection_start.Y;
      a.selection_rect.Height = b.Y;
    }

    c = !a.__4__this.ShowSelectionRectangle;

    if (!c)
    {
      c = !a.__4__this.FgAABowIkzCWm4XSKspi6g(a.selection_rect);

      if (!c)
      {
        a.selection.style.display = 'none';
      }
      else
      {
        a.selection.style.display = 'block';
        rgAABgnDWDenzWX06iPvnw(a.selection.style, a.selection_rect);
      }

    }

    c = (a.__4__this.SelectionPreview == null);

    if (!c)
    {
      a.__4__this.SelectionPreview.Invoke(a.selection_rect);
    }

    c = (a.__4__this.SelectionPointsPreview == null);

    if (!c)
    {
      a.__4__this.SelectionPointsPreview.Invoke(a.selection_start, a.selection_end);
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClassb.<InitializeCanvasSelection>b__7
  type$Yez2UjAbxzu2wu9FUjXeeA._InitializeCanvasSelection_b__7 = function (b)
  {
    var a = this, c;

    c = !(qgUABuSquTGLE3NPwKQpLw(b) == 1);

    if (!c)
    {
      a.__4__this._InSelectionMode = 1;
      c = !a.__4__this.ShowSelectionRectangle;

      if (!c)
      {
        a.__4__this.Layers.CanvasInfo.appendChild(a.selection);
      }

      a.selection_start = _4gMABjE9ID2bvdJDtEkvJw(pQUABuSquTGLE3NPwKQpLw(b), a.__4__this.CurrentCanvasPosition);
      a.selection_end = a.selection_start;
      a.UpdateSelection.Invoke();
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClassb.<InitializeCanvasSelection>b__8
  type$Yez2UjAbxzu2wu9FUjXeeA._InitializeCanvasSelection_b__8 = function (b)
  {
    var a = this, c;

    c = !a.__4__this._InSelectionMode;

    if (!c)
    {
      a.selection_end = _4gMABjE9ID2bvdJDtEkvJw(pQUABuSquTGLE3NPwKQpLw(b), a.__4__this.CurrentCanvasPosition);
      a.UpdateSelection.Invoke();
    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClassb.<InitializeCanvasSelection>b__9
  type$Yez2UjAbxzu2wu9FUjXeeA._InitializeCanvasSelection_b__9 = function (b)
  {
    var a = this, c, d, e, f;

    f = !a.__4__this._InSelectionMode;

    if (!f)
    {
      f = !(qgUABuSquTGLE3NPwKQpLw(b) == 1);

      if (!f)
      {
        a.__4__this._InSelectionMode = 0;
        f = !a.__4__this.FgAABowIkzCWm4XSKspi6g(a.selection_rect);

        if (!f)
        {
          c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(a.selection_end.X, a.selection_end.Y);
          f = (a.__4__this.SelectionClick == null);

          if (!f)
          {
            a.__4__this.SelectionClick.Invoke(c, b);
          }

        }
        else
        {
          e = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
          e.Left = a.selection_rect.Left;
          e.Top = a.selection_rect.Top;
          e.Width = a.selection_rect.Width;
          e.Height = a.selection_rect.Height;
          d = e;
          f = (a.__4__this.ApplySelection == null);

          if (!f)
          {
            a.__4__this.ApplySelection.Invoke(d, b);
          }

          f = (a.__4__this.ApplyPointsSelection == null);

          if (!f)
          {
            a.__4__this.ApplyPointsSelection.Invoke(a.selection_start, a.selection_end, b);
          }

        }

        f = !a.__4__this.ShowSelectionRectangle;

        if (!f)
        {
          a.__4__this.Layers.CanvasInfo.removeChild(a.selection);
        }

      }

    }

  };

  // ScriptCoreLib.JavaScript.Controls.LayeredControl.ArenaControl+<>c__DisplayClassb.<InitializeCanvasSelection>b__a
  type$Yez2UjAbxzu2wu9FUjXeeA._InitializeCanvasSelection_b__a = function (b)
  {
    var a = this, c;

    c = !a.__4__this._InSelectionMode;

    if (!c)
    {
      a.__4__this._InSelectionMode = 0;
      c = !a.__4__this.ShowSelectionRectangle;

      if (!c)
      {
        a.__4__this.Layers.CanvasInfo.removeChild(a.selection);
      }

    }

  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  jKhVRFM7_aEWMBSkNSR2WxQ.Types = [b_bin1dH5gzGOe58n5cZeTA,Ju6r3mfcIT_ayMVP3GMmv4w,RzJJ5CaSfjeFDrpK6t64Qw,OIJ6CIwIkzCWm4XSKspi6g];
  jKhVRFM7_aEWMBSkNSR2WxQ.References = [gY9CmVzyG0GIRbq1ldkO9A];

