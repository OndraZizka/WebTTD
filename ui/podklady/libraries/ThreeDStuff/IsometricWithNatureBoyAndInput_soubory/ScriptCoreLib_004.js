    function $ctor$(/* base, null */ p, /* string, null*/ b, /* object */ x)
    {
        var f = null;
        var z = x[b];
        
        
        // 'this' is only valid due to 'new' keyword
        if (p) // defined ctor is wrapped, inheritance is applied
        {
            f = function ()
            {
                var a = this;
                var n = new p();

                for (var i in n) 
                     if (a[i] == void(0)) a[i] = n[i];
                    
                var i = 'toString';
                    if (a[i] == void(0)) a[i] = n[i];
                
                if (z)
                    z.apply(a, arguments);        
            };
        }
        else if (z) // defined ctor is reused
        {
            f = z;
        }
        else // a default ctor will be created
        {
            f = function () { };
        }

        f.prototype = x;

        return f;
    }
  var gY9CmVzyG0GIRbq1ldkO9A = {Name:{Name:"ScriptCoreLib",FullName:"ScriptCoreLib, Version\x3d3.0.2924.30390, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object
  function PtRYyqrEITqyE_a1vEl3Jnw(){};
  PtRYyqrEITqyE_a1vEl3Jnw.TypeName = "Object";
  PtRYyqrEITqyE_a1vEl3Jnw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$PtRYyqrEITqyE_a1vEl3Jnw = PtRYyqrEITqyE_a1vEl3Jnw.prototype;
  var basector$PtRYyqrEITqyE_a1vEl3Jnw = $ctor$(null, null, type$PtRYyqrEITqyE_a1vEl3Jnw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object..ctor
  type$PtRYyqrEITqyE_a1vEl3Jnw.vwMABqrEITqyE_a1vEl3Jnw = function ()
  {
    var a = this;

  };
  var ctor$vwMABqrEITqyE_a1vEl3Jnw = PtRYyqrEITqyE_a1vEl3Jnw.ctor = $ctor$(null, 'vwMABqrEITqyE_a1vEl3Jnw', type$PtRYyqrEITqyE_a1vEl3Jnw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.ReferenceEquals
  var uAMABqrEITqyE_a1vEl3Jnw = function () { return yAAABtd5xTKztToDDBg08A.apply(null, arguments); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.GetPrototype
  function uQMABqrEITqyE_a1vEl3Jnw(i) { return i.constructor.prototype; };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.GetType
  function ugMABqrEITqyE_a1vEl3Jnw(a)
  {
    var b, c;

    b = new ctor$__bQUABqACZzKSGrrnqJ3SYw(uQMABqrEITqyE_a1vEl3Jnw(a));
    c = _1gQABmIY_az6vz_alg_a0hAHA(AAYABqACZzKSGrrnqJ3SYw(b));
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.Equals
  function uwMABqrEITqyE_a1vEl3Jnw(b, c)
  {
    var d, e;

    e = !(b == c);

    if (!e)
    {
      d = 1;
      return d;
    }

    e = (!b || (c == null));

    if (!e)
    {
      d = b.vAMABqrEITqyE_a1vEl3Jnw(c);
      return d;
    }

    d = 0;
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.Equals
  type$PtRYyqrEITqyE_a1vEl3Jnw.vAMABqrEITqyE_a1vEl3Jnw = function (b)
  {
    var a = this, c;

    c = (a == b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.GetHashCode
  type$PtRYyqrEITqyE_a1vEl3Jnw.vQMABqrEITqyE_a1vEl3Jnw = function ()
  {
    var a = this, b;

    b = 0;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.ToString
  type$PtRYyqrEITqyE_a1vEl3Jnw.toString /* ScriptCoreLib.JavaScript.BCLImplementation.System.__Object.ToString */ = function ()
  {
    var a = this, b;

    b = null;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__TimeSpan
  function d6YuYoce8juyvuYFZ_b3B3Q(){};
  d6YuYoce8juyvuYFZ_b3B3Q.TypeName = "TimeSpan";
  d6YuYoce8juyvuYFZ_b3B3Q.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$d6YuYoce8juyvuYFZ_b3B3Q = d6YuYoce8juyvuYFZ_b3B3Q.prototype;
  var basector$d6YuYoce8juyvuYFZ_b3B3Q = $ctor$(null, null, type$d6YuYoce8juyvuYFZ_b3B3Q);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__TimeSpan..ctor
  type$d6YuYoce8juyvuYFZ_b3B3Q.twMABoce8juyvuYFZ_b3B3Q = function ()
  {
    var a = this;

  };
  var ctor$twMABoce8juyvuYFZ_b3B3Q = d6YuYoce8juyvuYFZ_b3B3Q.ctor = $ctor$(null, 'twMABoce8juyvuYFZ_b3B3Q', type$d6YuYoce8juyvuYFZ_b3B3Q);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__TimeSpan.Parse
  function tgMABoce8juyvuYFZ_b3B3Q(b)
  {
    var c, d;

    d = void(0);
    c = d;
    return c;
  };

  // ScriptCoreLib.Shared.Pair`1
  function BWCzNdQrzziMkurQX9FmIw(){};
  BWCzNdQrzziMkurQX9FmIw.TypeName = "Pair_1";
  BWCzNdQrzziMkurQX9FmIw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$BWCzNdQrzziMkurQX9FmIw = BWCzNdQrzziMkurQX9FmIw.prototype;
  type$BWCzNdQrzziMkurQX9FmIw = BWCzNdQrzziMkurQX9FmIw.prototype =   {
    constructor: BWCzNdQrzziMkurQX9FmIw,
    A: null,
    B: null
  }
;
  var basector$BWCzNdQrzziMkurQX9FmIw = $ctor$(null, null, type$BWCzNdQrzziMkurQX9FmIw);
  // ScriptCoreLib.Shared.Pair`1..ctor
  type$BWCzNdQrzziMkurQX9FmIw.pwMABtQrzziMkurQX9FmIw = function ()
  {
    var a = this;

  };
  var ctor$pwMABtQrzziMkurQX9FmIw = BWCzNdQrzziMkurQX9FmIw.ctor = $ctor$(null, 'pwMABtQrzziMkurQX9FmIw', type$BWCzNdQrzziMkurQX9FmIw);

  // ScriptCoreLib.Shared.Pair`2
  function pVWuSHbYXDqhdVFSIrxEhA(){};
  pVWuSHbYXDqhdVFSIrxEhA.TypeName = "Pair_2";
  pVWuSHbYXDqhdVFSIrxEhA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$pVWuSHbYXDqhdVFSIrxEhA = pVWuSHbYXDqhdVFSIrxEhA.prototype;
  type$pVWuSHbYXDqhdVFSIrxEhA = pVWuSHbYXDqhdVFSIrxEhA.prototype =   {
    constructor: pVWuSHbYXDqhdVFSIrxEhA,
    A: null,
    B: null
  }
;
  var basector$pVWuSHbYXDqhdVFSIrxEhA = $ctor$(null, null, type$pVWuSHbYXDqhdVFSIrxEhA);
  // ScriptCoreLib.Shared.Pair`2..ctor
  type$pVWuSHbYXDqhdVFSIrxEhA.pgMABnbYXDqhdVFSIrxEhA = function (b, c)
  {
    var a = this;

    a.A = b;
    a.B = c;
  };
  var ctor$pgMABnbYXDqhdVFSIrxEhA = $ctor$(null, 'pgMABnbYXDqhdVFSIrxEhA', type$pVWuSHbYXDqhdVFSIrxEhA);

  // ScriptCoreLib.Shared.JSONBase
  function OyB2uGzs_aDCyZwiCU6LT8Q(){};
  OyB2uGzs_aDCyZwiCU6LT8Q.TypeName = "JSONBase";
  OyB2uGzs_aDCyZwiCU6LT8Q.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$OyB2uGzs_aDCyZwiCU6LT8Q = OyB2uGzs_aDCyZwiCU6LT8Q.prototype;
  var basector$OyB2uGzs_aDCyZwiCU6LT8Q = $ctor$(null, null, type$OyB2uGzs_aDCyZwiCU6LT8Q);
  // ScriptCoreLib.Shared.JSONBase..ctor
  type$OyB2uGzs_aDCyZwiCU6LT8Q.pQMABmzs_aDCyZwiCU6LT8Q = function ()
  {
    var a = this;

  };
  var ctor$pQMABmzs_aDCyZwiCU6LT8Q = OyB2uGzs_aDCyZwiCU6LT8Q.ctor = $ctor$(null, 'pQMABmzs_aDCyZwiCU6LT8Q', type$OyB2uGzs_aDCyZwiCU6LT8Q);

  // ScriptCoreLib.Shared.MyTransportDescriptor`1
  function nlnLQS64YTmR3ZfBT8DZBA(){};
  nlnLQS64YTmR3ZfBT8DZBA.TypeName = "MyTransportDescriptor_1";
  nlnLQS64YTmR3ZfBT8DZBA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$nlnLQS64YTmR3ZfBT8DZBA = nlnLQS64YTmR3ZfBT8DZBA.prototype;
  type$nlnLQS64YTmR3ZfBT8DZBA = nlnLQS64YTmR3ZfBT8DZBA.prototype =   {
    constructor: nlnLQS64YTmR3ZfBT8DZBA,
    Callback: null,
    Description: null,
    Data: null
  }
;
  type$nlnLQS64YTmR3ZfBT8DZBA.$0 = {};
  type$nlnLQS64YTmR3ZfBT8DZBA.$0.$0 = 'MyTransportDescriptor`1';
  type$nlnLQS64YTmR3ZfBT8DZBA.$0.$1 = 'qAMABi64YTmR3ZfBT8DZBA';

  var basector$nlnLQS64YTmR3ZfBT8DZBA = $ctor$(basector$OyB2uGzs_aDCyZwiCU6LT8Q, null, type$nlnLQS64YTmR3ZfBT8DZBA);
  // ScriptCoreLib.Shared.MyTransportDescriptor`1..ctor
  type$nlnLQS64YTmR3ZfBT8DZBA.qAMABi64YTmR3ZfBT8DZBA = function ()
  {
    var a = this;

    a.pQMABmzs_aDCyZwiCU6LT8Q();
  };
  var ctor$qAMABi64YTmR3ZfBT8DZBA = nlnLQS64YTmR3ZfBT8DZBA.ctor = $ctor$(basector$OyB2uGzs_aDCyZwiCU6LT8Q, 'qAMABi64YTmR3ZfBT8DZBA', type$nlnLQS64YTmR3ZfBT8DZBA);

  // ScriptCoreLib.Shared.Predicate
  function htk8Mgklzj_aswDwOFNiiFQ(){};
  htk8Mgklzj_aswDwOFNiiFQ.TypeName = "Predicate";
  htk8Mgklzj_aswDwOFNiiFQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$htk8Mgklzj_aswDwOFNiiFQ = htk8Mgklzj_aswDwOFNiiFQ.prototype;
  type$htk8Mgklzj_aswDwOFNiiFQ = htk8Mgklzj_aswDwOFNiiFQ.prototype =   {
    constructor: htk8Mgklzj_aswDwOFNiiFQ,
    Value: false
  }
;
  var basector$htk8Mgklzj_aswDwOFNiiFQ = $ctor$(null, null, type$htk8Mgklzj_aswDwOFNiiFQ);
  // ScriptCoreLib.Shared.Predicate..ctor
  type$htk8Mgklzj_aswDwOFNiiFQ.mQMABgklzj_aswDwOFNiiFQ = function ()
  {
    var a = this;

  };
  var ctor$mQMABgklzj_aswDwOFNiiFQ = htk8Mgklzj_aswDwOFNiiFQ.ctor = $ctor$(null, 'mQMABgklzj_aswDwOFNiiFQ', type$htk8Mgklzj_aswDwOFNiiFQ);

  // ScriptCoreLib.Shared.Predicate.Invoke
  function lgMABgklzj_aswDwOFNiiFQ(b, c)
  {
    var d, e;

    d = new ctor$pAMABowegTqJlyQCc2XwcQ();
    d.Target = b;
    d.ogMABowegTqJlyQCc2XwcQ(c);
    e = d.Value;
    return e;
  };

  // ScriptCoreLib.Shared.Predicate.Invoke
  function lwMABgklzj_aswDwOFNiiFQ(b, c, d)
  {
    var e, f;

    e = mwMABijGoDahhzeuMwWstw(b, c);
    e.nAMABijGoDahhzeuMwWstw(d);
    f = e.Value;
    return f;
  };

  // ScriptCoreLib.Shared.Predicate.Invoke
  type$htk8Mgklzj_aswDwOFNiiFQ.kwMABgklzj_aswDwOFNiiFQ = function (b)
  {
    var a = this;

    sAIABgLCITuEwr97s3dlTA(b, a);
  };

  // ScriptCoreLib.Shared.Predicate.Is
  function lAMABgklzj_aswDwOFNiiFQ(b)
  {
    var c;

    c = lQMABgklzj_aswDwOFNiiFQ(b, 0);
    return c;
  };

  // ScriptCoreLib.Shared.Predicate.Is
  function lQMABgklzj_aswDwOFNiiFQ(b, c)
  {
    var d, e;

    d = new ctor$mQMABgklzj_aswDwOFNiiFQ();
    d.Value = c;
    d.kwMABgklzj_aswDwOFNiiFQ(b);
    e = d.Value;
    return e;
  };

  // ScriptCoreLib.Shared.Predicate.op_Implicit
  function mAMABgklzj_aswDwOFNiiFQ(b)
  {
    var c;

    c = b.Value;
    return c;
  };

  // ScriptCoreLib.Shared.Predicate`1
  function m3ML74wegTqJlyQCc2XwcQ(){};
  m3ML74wegTqJlyQCc2XwcQ.TypeName = "Predicate_1";
  m3ML74wegTqJlyQCc2XwcQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$m3ML74wegTqJlyQCc2XwcQ = m3ML74wegTqJlyQCc2XwcQ.prototype;
  type$m3ML74wegTqJlyQCc2XwcQ = m3ML74wegTqJlyQCc2XwcQ.prototype =   {
    constructor: m3ML74wegTqJlyQCc2XwcQ,
    Target: null
  }
;
  var basector$m3ML74wegTqJlyQCc2XwcQ = $ctor$(basector$htk8Mgklzj_aswDwOFNiiFQ, null, type$m3ML74wegTqJlyQCc2XwcQ);
  // ScriptCoreLib.Shared.Predicate`1..ctor
  type$m3ML74wegTqJlyQCc2XwcQ.pAMABowegTqJlyQCc2XwcQ = function ()
  {
    var a = this;

    a.mQMABgklzj_aswDwOFNiiFQ();
  };
  var ctor$pAMABowegTqJlyQCc2XwcQ = m3ML74wegTqJlyQCc2XwcQ.ctor = $ctor$(basector$htk8Mgklzj_aswDwOFNiiFQ, 'pAMABowegTqJlyQCc2XwcQ', type$m3ML74wegTqJlyQCc2XwcQ);

  // ScriptCoreLib.Shared.Predicate`1.Invoke
  type$m3ML74wegTqJlyQCc2XwcQ.ogMABowegTqJlyQCc2XwcQ = function (b)
  {
    var a = this;

    sAIABgLCITuEwr97s3dlTA(b, a);
  };

  // ScriptCoreLib.Shared.Predicate`1.op_Implicit
  function owMABowegTqJlyQCc2XwcQ(b)
  {
    var c;

    c = b.Target;
    return c;
  };

  // ScriptCoreLib.Shared.Predicate`2
  function sLm0UyjGoDahhzeuMwWstw(){};
  sLm0UyjGoDahhzeuMwWstw.TypeName = "Predicate_2";
  sLm0UyjGoDahhzeuMwWstw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$sLm0UyjGoDahhzeuMwWstw = sLm0UyjGoDahhzeuMwWstw.prototype;
  type$sLm0UyjGoDahhzeuMwWstw = sLm0UyjGoDahhzeuMwWstw.prototype =   {
    constructor: sLm0UyjGoDahhzeuMwWstw,
    TargetIn: null,
    TargetOut: null
  }
;
  var basector$sLm0UyjGoDahhzeuMwWstw = $ctor$(basector$htk8Mgklzj_aswDwOFNiiFQ, null, type$sLm0UyjGoDahhzeuMwWstw);
  // ScriptCoreLib.Shared.Predicate`2..ctor
  type$sLm0UyjGoDahhzeuMwWstw.nQMABijGoDahhzeuMwWstw = function ()
  {
    var a = this;

    a.mQMABgklzj_aswDwOFNiiFQ();
  };
  var ctor$nQMABijGoDahhzeuMwWstw = sLm0UyjGoDahhzeuMwWstw.ctor = $ctor$(basector$htk8Mgklzj_aswDwOFNiiFQ, 'nQMABijGoDahhzeuMwWstw', type$sLm0UyjGoDahhzeuMwWstw);

  // ScriptCoreLib.Shared.Predicate`2.Invoke
  function mgMABijGoDahhzeuMwWstw(b, c, d)
  {
    var e, f;

    e = mwMABijGoDahhzeuMwWstw(b, c);
    e.nAMABijGoDahhzeuMwWstw(d);
    f = e.Value;
    return f;
  };

  // ScriptCoreLib.Shared.Predicate`2.Of
  function mwMABijGoDahhzeuMwWstw(b, c)
  {
    var d, e;

    d = new ctor$nQMABijGoDahhzeuMwWstw();
    d.TargetIn = b;
    d.TargetOut = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Predicate`2.Invoke
  type$sLm0UyjGoDahhzeuMwWstw.nAMABijGoDahhzeuMwWstw = function (b)
  {
    var a = this;

    sAIABgLCITuEwr97s3dlTA(b, a);
  };

  // ScriptCoreLib.Shared.ConvertTo`2
  function BVJIYTfPjjq4PHK5A3c_auA(){};
  BVJIYTfPjjq4PHK5A3c_auA.TypeName = "ConvertTo_2";
  BVJIYTfPjjq4PHK5A3c_auA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$BVJIYTfPjjq4PHK5A3c_auA = BVJIYTfPjjq4PHK5A3c_auA.prototype;
  type$BVJIYTfPjjq4PHK5A3c_auA = BVJIYTfPjjq4PHK5A3c_auA.prototype =   {
    constructor: BVJIYTfPjjq4PHK5A3c_auA,
    TargetInComparer: null
  }
;
  var basector$BVJIYTfPjjq4PHK5A3c_auA = $ctor$(basector$sLm0UyjGoDahhzeuMwWstw, null, type$BVJIYTfPjjq4PHK5A3c_auA);
  // ScriptCoreLib.Shared.ConvertTo`2..ctor
  type$BVJIYTfPjjq4PHK5A3c_auA.oQMABjfPjjq4PHK5A3c_auA = function ()
  {
    var a = this;

    a.nQMABijGoDahhzeuMwWstw();
  };
  var ctor$oQMABjfPjjq4PHK5A3c_auA = BVJIYTfPjjq4PHK5A3c_auA.ctor = $ctor$(basector$sLm0UyjGoDahhzeuMwWstw, 'oQMABjfPjjq4PHK5A3c_auA', type$BVJIYTfPjjq4PHK5A3c_auA);

  // ScriptCoreLib.Shared.ConvertTo`2.set_Item
  type$BVJIYTfPjjq4PHK5A3c_auA.ngMABjfPjjq4PHK5A3c_auA = function (b, c)
  {
    var a = this, d;

    d = !lwMABgklzj_aswDwOFNiiFQ(a.TargetIn, b, a.TargetInComparer);

    if (!d)
    {
      a.TargetOut = c;
      a.Value = 1;
    }

  };

  // ScriptCoreLib.Shared.ConvertTo`2.Invoke
  type$BVJIYTfPjjq4PHK5A3c_auA.nwMABjfPjjq4PHK5A3c_auA = function (b)
  {
    var a = this;

    sAIABgLCITuEwr97s3dlTA(b, a);
  };

  // ScriptCoreLib.Shared.ConvertTo`2.Convert
  function oAMABjfPjjq4PHK5A3c_auA(b, c)
  {
    var d, e;

    d = new ctor$oQMABjfPjjq4PHK5A3c_auA();
    d.TargetIn = b;
    d.nwMABjfPjjq4PHK5A3c_auA(c);
    e = d.TargetOut;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument+__IXMLDocument_Native.selectSingleNode
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument+__IXMLDocument_Native.selectNodes
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__EventArgs
  function DGgonvGADTGzgnargCk3yQ(){};
  DGgonvGADTGzgnargCk3yQ.TypeName = "EventArgs";
  DGgonvGADTGzgnargCk3yQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$DGgonvGADTGzgnargCk3yQ = DGgonvGADTGzgnargCk3yQ.prototype;
  var vgEABPGADTGzgnargCk3yQ = null;
  var basector$DGgonvGADTGzgnargCk3yQ = $ctor$(null, null, type$DGgonvGADTGzgnargCk3yQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__EventArgs..ctor
  type$DGgonvGADTGzgnargCk3yQ.YwMABvGADTGzgnargCk3yQ = function ()
  {
    var a = this;

  };
  var ctor$YwMABvGADTGzgnargCk3yQ = DGgonvGADTGzgnargCk3yQ.ctor = $ctor$(null, 'YwMABvGADTGzgnargCk3yQ', type$DGgonvGADTGzgnargCk3yQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__EventArgs.op_Implicit
  function YQMABvGADTGzgnargCk3yQ(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__EventArgs.op_Implicit
  function YgMABvGADTGzgnargCk3yQ(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs
  function _8UxK8Ja6ijqX3_bj1t7LVxA(){};
  _8UxK8Ja6ijqX3_bj1t7LVxA.TypeName = "ListChangedEventArgs";
  _8UxK8Ja6ijqX3_bj1t7LVxA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_8UxK8Ja6ijqX3_bj1t7LVxA = _8UxK8Ja6ijqX3_bj1t7LVxA.prototype;
  type$_8UxK8Ja6ijqX3_bj1t7LVxA = _8UxK8Ja6ijqX3_bj1t7LVxA.prototype =   {
    constructor: _8UxK8Ja6ijqX3_bj1t7LVxA,
    listChangedType: 0,
    newIndex: 0,
    oldIndex: 0
  }
;
  var basector$_8UxK8Ja6ijqX3_bj1t7LVxA = $ctor$(basector$DGgonvGADTGzgnargCk3yQ, null, type$_8UxK8Ja6ijqX3_bj1t7LVxA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs..ctor
  type$_8UxK8Ja6ijqX3_bj1t7LVxA.ZwMABpa6ijqX3_bj1t7LVxA = function (b, c)
  {
    var a = this;

    a.YwMABvGADTGzgnargCk3yQ();
    a.listChangedType = b;
    a.newIndex = c;
    a.oldIndex = -1;
  };
  var ctor$ZwMABpa6ijqX3_bj1t7LVxA = $ctor$(basector$DGgonvGADTGzgnargCk3yQ, 'ZwMABpa6ijqX3_bj1t7LVxA', type$_8UxK8Ja6ijqX3_bj1t7LVxA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs..ctor
  type$_8UxK8Ja6ijqX3_bj1t7LVxA.aAMABpa6ijqX3_bj1t7LVxA = function (b, c, d)
  {
    var a = this;

    a.YwMABvGADTGzgnargCk3yQ();
    a.listChangedType = b;
    a.newIndex = c;
    a.oldIndex = d;
  };
  var ctor$aAMABpa6ijqX3_bj1t7LVxA = $ctor$(basector$DGgonvGADTGzgnargCk3yQ, 'aAMABpa6ijqX3_bj1t7LVxA', type$_8UxK8Ja6ijqX3_bj1t7LVxA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs.get_ListChangedType
  type$_8UxK8Ja6ijqX3_bj1t7LVxA.ZAMABpa6ijqX3_bj1t7LVxA = function ()
  {
    var a = this, b;

    b = a.listChangedType;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs.get_NewIndex
  type$_8UxK8Ja6ijqX3_bj1t7LVxA.ZQMABpa6ijqX3_bj1t7LVxA = function ()
  {
    var a = this, b;

    b = a.newIndex;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventArgs.get_OldIndex
  type$_8UxK8Ja6ijqX3_bj1t7LVxA.ZgMABpa6ijqX3_bj1t7LVxA = function ()
  {
    var a = this, b;

    b = a.oldIndex;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator
  function bPpijZJ7HjuHnaRo44rmHw(){};
  bPpijZJ7HjuHnaRo44rmHw.TypeName = "Enumerator";
  bPpijZJ7HjuHnaRo44rmHw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$bPpijZJ7HjuHnaRo44rmHw = bPpijZJ7HjuHnaRo44rmHw.prototype;
  type$bPpijZJ7HjuHnaRo44rmHw = bPpijZJ7HjuHnaRo44rmHw.prototype =   {
    constructor: bPpijZJ7HjuHnaRo44rmHw,
    value: null
  }
;
  var basector$bPpijZJ7HjuHnaRo44rmHw = $ctor$(null, null, type$bPpijZJ7HjuHnaRo44rmHw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator..ctor
  type$bPpijZJ7HjuHnaRo44rmHw.WgMABpJ7HjuHnaRo44rmHw = function (b)
  {
    var a = this;

    a.value = _8AYABiqwCTeO3EKf_biz5wQ(b.RwMABtmlXD2_bMcNB1Zdfiw()).NgEABnMeWzaNooAKOmFm5g();
  };
  var ctor$WgMABpJ7HjuHnaRo44rmHw = $ctor$(null, 'WgMABpJ7HjuHnaRo44rmHw', type$bPpijZJ7HjuHnaRo44rmHw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator.System.Collections.IEnumerator.get_Current
  type$bPpijZJ7HjuHnaRo44rmHw.XQMABpJ7HjuHnaRo44rmHw = function ()
  {
    var a = this, b;

    b = a.value.xQAABrYmRzSu_anO2U_bk1MA();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator.get_Current
  type$bPpijZJ7HjuHnaRo44rmHw.WwMABpJ7HjuHnaRo44rmHw = function ()
  {
    var a = this, b;

    b = a.value.xQAABrYmRzSu_anO2U_bk1MA();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator.Dispose
  type$bPpijZJ7HjuHnaRo44rmHw.XAMABpJ7HjuHnaRo44rmHw = function ()
  {
    var a = this;

    a.value.xAAABq_bUDz_aWf_aXPRTEtLA();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator.MoveNext
  type$bPpijZJ7HjuHnaRo44rmHw.XgMABpJ7HjuHnaRo44rmHw = function ()
  {
    var a = this, b;

    b = a.value.qAAABu7N0xGI6ACQJ1TEOg();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator.Reset
  type$bPpijZJ7HjuHnaRo44rmHw.XwMABpJ7HjuHnaRo44rmHw = function ()
  {
    var a = this;

    a.value.qgAABu7N0xGI6ACQJ1TEOg();
  };

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1+__Enumerator
  (function (i)  {
    i.xQAABrYmRzSu_anO2U_bk1MA = i.WwMABpJ7HjuHnaRo44rmHw;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.XAMABpJ7HjuHnaRo44rmHw;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.XgMABpJ7HjuHnaRo44rmHw;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.XQMABpJ7HjuHnaRo44rmHw;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.XwMABpJ7HjuHnaRo44rmHw;
  }
  )(type$bPpijZJ7HjuHnaRo44rmHw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1
  function E_bYRj9mlXD2_bMcNB1Zdfiw(){};
  E_bYRj9mlXD2_bMcNB1Zdfiw.TypeName = "List_1";
  E_bYRj9mlXD2_bMcNB1Zdfiw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$E_bYRj9mlXD2_bMcNB1Zdfiw = E_bYRj9mlXD2_bMcNB1Zdfiw.prototype;
  type$E_bYRj9mlXD2_bMcNB1Zdfiw = E_bYRj9mlXD2_bMcNB1Zdfiw.prototype =   {
    constructor: E_bYRj9mlXD2_bMcNB1Zdfiw,
    _items: null
  }
;
  var basector$E_bYRj9mlXD2_bMcNB1Zdfiw = $ctor$(null, null, type$E_bYRj9mlXD2_bMcNB1Zdfiw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1..ctor
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.RQMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this;

    a._items = uAEABh33sTm5Ql7VEPKRUg();
  };
  var ctor$RQMABtmlXD2_bMcNB1Zdfiw = E_bYRj9mlXD2_bMcNB1Zdfiw.ctor = $ctor$(null, 'RQMABtmlXD2_bMcNB1Zdfiw', type$E_bYRj9mlXD2_bMcNB1Zdfiw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1..ctor
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.RgMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c;

    a._items = uAEABh33sTm5Ql7VEPKRUg();
    c = !(b == null);

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('collection is null');
    }

    a.TwMABtmlXD2_bMcNB1Zdfiw(b);
  };
  var ctor$RgMABtmlXD2_bMcNB1Zdfiw = $ctor$(null, 'RgMABtmlXD2_bMcNB1Zdfiw', type$E_bYRj9mlXD2_bMcNB1Zdfiw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.WAMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this, b;

    b = a.VwMABtmlXD2_bMcNB1Zdfiw();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.System.Collections.IEnumerable.GetEnumerator
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.WQMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this, b;

    b = a.VwMABtmlXD2_bMcNB1Zdfiw();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.ToArray
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.RwMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this, b;

    b = xgEABh33sTm5Ql7VEPKRUg(a._items);
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.IndexOf
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.SAMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d, e, f;

    c = -1;

    for (d = 0; (d < a.UwMABtmlXD2_bMcNB1Zdfiw()); d++)
    {
      f = !yAAABtd5xTKztToDDBg08A(a.SwMABtmlXD2_bMcNB1Zdfiw(d), b);

      if (!f)
      {
        c = d;
        break;
      }

    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.Insert
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.SQMABtmlXD2_bMcNB1Zdfiw = function (b, c)
  {
    var a = this;

    a._items.splice(b, 0, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.RemoveAt
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.SgMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c;

    c = (b < a.UwMABtmlXD2_bMcNB1Zdfiw());

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRangeException');
    }

    a._items.splice(b, 1);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.get_Item
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.SwMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d;

    d = (b < a.UwMABtmlXD2_bMcNB1Zdfiw());

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRangeException');
    }

    c = xAEABh33sTm5Ql7VEPKRUg(a._items, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.set_Item
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.TAMABtmlXD2_bMcNB1Zdfiw = function (b, c)
  {
    var a = this, d;

    d = (b < a.UwMABtmlXD2_bMcNB1Zdfiw());

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRangeException');
    }

    xQEABh33sTm5Ql7VEPKRUg(a._items, b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.ForEach
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.TQMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d;

    d = !(b == null);

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRangeException');
    }


    for (c = 0; (c < a.UwMABtmlXD2_bMcNB1Zdfiw()); c++)
    {
      b.Invoke(xAEABh33sTm5Ql7VEPKRUg(a._items, c));
    }

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.Add
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.TgMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this;

    a._items.push(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.AddRange
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.TwMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d, e;

    d = _8AYABiqwCTeO3EKf_biz5wQ(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (d.qAAABu7N0xGI6ACQJ1TEOg())
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
        a.TgMABtmlXD2_bMcNB1Zdfiw(c);
      }
    }
    finally
    {
      e = (d == null);

      if (!e)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.Clear
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.UAMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this;

    a._items.splice(0, a.UwMABtmlXD2_bMcNB1Zdfiw());
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.Contains
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.UQMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d, e, f;

    c = 0;

    for (d = 0; (d < a.UwMABtmlXD2_bMcNB1Zdfiw()); d++)
    {
      f = !yAAABtd5xTKztToDDBg08A(a.SwMABtmlXD2_bMcNB1Zdfiw(d), b);

      if (!f)
      {
        c = 1;
        break;
      }

    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.CopyTo
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.UgMABtmlXD2_bMcNB1Zdfiw = function (b, c)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.get_Count
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.UwMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this, b;

    b = a._items.length;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.get_IsReadOnly
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.VAMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.Remove
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.VQMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d, e;

    c = a.SAMABtmlXD2_bMcNB1Zdfiw(b);
    e = !(c == -1);

    if (!e)
    {
      d = 0;
      return d;
    }

    a.SgMABtmlXD2_bMcNB1Zdfiw(c);
    d = 1;
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.RemoveAll
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.VgMABtmlXD2_bMcNB1Zdfiw = function (b)
  {
    var a = this, c, d, e, f;

    c = 0;

    for (d = 0; (d < a.UwMABtmlXD2_bMcNB1Zdfiw()); d++)
    {
      f = !b.Invoke(a.SwMABtmlXD2_bMcNB1Zdfiw(d));

      if (!f)
      {
        a.SgMABtmlXD2_bMcNB1Zdfiw(c);
        c--;
      }

      c++;
    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1.GetEnumerator
  type$E_bYRj9mlXD2_bMcNB1Zdfiw.VwMABtmlXD2_bMcNB1Zdfiw = function ()
  {
    var a = this, b;

    b = new ctor$WgMABpJ7HjuHnaRo44rmHw(a);
    return b;
  };

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__List`1
  (function (i)  {
    i.vxkABiRqbTmIbxb0k2jSqw = i.SwMABtmlXD2_bMcNB1Zdfiw;
    i.wBkABiRqbTmIbxb0k2jSqw = i.TAMABtmlXD2_bMcNB1Zdfiw;
    i.wRkABiRqbTmIbxb0k2jSqw = i.SAMABtmlXD2_bMcNB1Zdfiw;
    i.whkABiRqbTmIbxb0k2jSqw = i.SQMABtmlXD2_bMcNB1Zdfiw;
    i.wxkABiRqbTmIbxb0k2jSqw = i.SgMABtmlXD2_bMcNB1Zdfiw;
    // 
    i.DBkABnTAkDm_aGe9ZbsQrAQ = i.UwMABtmlXD2_bMcNB1Zdfiw;
    i.DRkABnTAkDm_aGe9ZbsQrAQ = i.VAMABtmlXD2_bMcNB1Zdfiw;
    i.DhkABnTAkDm_aGe9ZbsQrAQ = i.TgMABtmlXD2_bMcNB1Zdfiw;
    i.DxkABnTAkDm_aGe9ZbsQrAQ = i.UAMABtmlXD2_bMcNB1Zdfiw;
    i.EBkABnTAkDm_aGe9ZbsQrAQ = i.UQMABtmlXD2_bMcNB1Zdfiw;
    i.ERkABnTAkDm_aGe9ZbsQrAQ = i.UgMABtmlXD2_bMcNB1Zdfiw;
    i.EhkABnTAkDm_aGe9ZbsQrAQ = i.VQMABtmlXD2_bMcNB1Zdfiw;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.WAMABtmlXD2_bMcNB1Zdfiw;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.WQMABtmlXD2_bMcNB1Zdfiw;
  }
  )(type$E_bYRj9mlXD2_bMcNB1Zdfiw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Double
  function GSwyCzlSSjyYW_bdV9BZBCQ(){};
  GSwyCzlSSjyYW_bdV9BZBCQ.TypeName = "Double";
  GSwyCzlSSjyYW_bdV9BZBCQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$GSwyCzlSSjyYW_bdV9BZBCQ = GSwyCzlSSjyYW_bdV9BZBCQ.prototype;
  var basector$GSwyCzlSSjyYW_bdV9BZBCQ = $ctor$(null, null, type$GSwyCzlSSjyYW_bdV9BZBCQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Double..ctor
  type$GSwyCzlSSjyYW_bdV9BZBCQ.RAMABjlSSjyYW_bdV9BZBCQ = function ()
  {
    var a = this;

  };
  var ctor$RAMABjlSSjyYW_bdV9BZBCQ = GSwyCzlSSjyYW_bdV9BZBCQ.ctor = $ctor$(null, 'RAMABjlSSjyYW_bdV9BZBCQ', type$GSwyCzlSSjyYW_bdV9BZBCQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Double.Parse
  function QgMABjlSSjyYW_bdV9BZBCQ(e) { return parseFloat(e); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Double.CompareTo
  function QwMABjlSSjyYW_bdV9BZBCQ(a, b)
  {
    var c;

    c = _0QAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  var rQEABALCITuEwr97s3dlTA = null;
  var rgEABALCITuEwr97s3dlTA = null;
  // ScriptCoreLib.Shared.Helper.Invoke
  function sAIABgLCITuEwr97s3dlTA(b, c)
  {
    var d, e;

    e = (b == null);

    if (!e)
    {
      b.Invoke(c);
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Helper.VariableEquals
  function tAIABgLCITuEwr97s3dlTA(a, b) { return a == b; };
  // ScriptCoreLib.Shared.Helper.get_BuildDateString
  function rgIABgLCITuEwr97s3dlTA() { return "3.01.2008 14:53:24 UTC"; };
  // ScriptCoreLib.Shared.Helper.get_CompilerBuildDateString
  function rwIABgLCITuEwr97s3dlTA() { return "2.01.2008 13:45:43 UTC"; };
  // ScriptCoreLib.Shared.Helper.Invoke
  function sQIABgLCITuEwr97s3dlTA(b)
  {
    var c;

    c = !(b == null);

    if (!c)
    {
      return;
    }

    b.Invoke();
  };

  // ScriptCoreLib.Shared.Helper.Join
  function sgIABgLCITuEwr97s3dlTA(b, c)
  {
    var d, e, f, g;

    d = '';

    for (e = 0; (e < c.length); e++)
    {
      g = !(e > 0);

      if (!g)
      {
        d = _8gQABpT92DaiMvTduyyLZQ(d, b);
      }

      d = _8AQABpT92DaiMvTduyyLZQ(d, c[e]);
    }

    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Helper.DefaultString
  function swIABgLCITuEwr97s3dlTA(b, c)
  {
    var d, e;

    e = !(c == null);

    if (!e)
    {
      d = b;
      return d;
    }

    e = !CQUABpT92DaiMvTduyyLZQ(c, '');

    if (!e)
    {
      d = b;
      return d;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Helper.InvokeTry
  function tQIABgLCITuEwr97s3dlTA(b)
  {
    var c, d;

    c = 1;
    try
    {
      sQIABgLCITuEwr97s3dlTA(b);
    }
    catch (__exc)
    {
      c = 0;
    }
    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1
  function soDt7aJ45j6g37Cm4Q3HvQ(){};
  soDt7aJ45j6g37Cm4Q3HvQ.TypeName = "SZArrayEnumerator_1";
  soDt7aJ45j6g37Cm4Q3HvQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$soDt7aJ45j6g37Cm4Q3HvQ = soDt7aJ45j6g37Cm4Q3HvQ.prototype;
  type$soDt7aJ45j6g37Cm4Q3HvQ = soDt7aJ45j6g37Cm4Q3HvQ.prototype =   {
    constructor: soDt7aJ45j6g37Cm4Q3HvQ,
    _array: null,
    _index: 0,
    _endIndex: 0
  }
;
  var basector$soDt7aJ45j6g37Cm4Q3HvQ = $ctor$(null, null, type$soDt7aJ45j6g37Cm4Q3HvQ);
  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1..ctor
  type$soDt7aJ45j6g37Cm4Q3HvQ.pQIABqJ45j6g37Cm4Q3HvQ = function (b)
  {
    var a = this, c;

    c = !(b == null);

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentNullException');
    }

    a._array = b;
    a._index = -1;
    a._endIndex = b.length;
  };
  var ctor$pQIABqJ45j6g37Cm4Q3HvQ = $ctor$(null, 'pQIABqJ45j6g37Cm4Q3HvQ', type$soDt7aJ45j6g37Cm4Q3HvQ);

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator
  type$soDt7aJ45j6g37Cm4Q3HvQ.pgIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this, b, c;

    c = !(a._index == -1);

    if (!c)
    {
      b = a;
      return b;
    }

    b = new ctor$pQIABqJ45j6g37Cm4Q3HvQ(a._array);
    return b;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.System.Collections.IEnumerable.GetEnumerator
  type$soDt7aJ45j6g37Cm4Q3HvQ.pwIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this, b, c;

    c = !(a._index == -1);

    if (!c)
    {
      b = a;
      return b;
    }

    b = new ctor$pQIABqJ45j6g37Cm4Q3HvQ(a._array);
    return b;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.System.Collections.IEnumerator.get_Current
  type$soDt7aJ45j6g37Cm4Q3HvQ.qgIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this, b;

    b = a.qAIABqJ45j6g37Cm4Q3HvQ();
    return b;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.get_Current
  type$soDt7aJ45j6g37Cm4Q3HvQ.qAIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this, b, c;

    c = !(a._index < 0);

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('InvalidOperation_EnumNotStarted');
    }

    c = (a._index < a._endIndex);

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('InvalidOperation_EnumEnded');
    }

    b = a._array[a._index];
    return b;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.Dispose
  type$soDt7aJ45j6g37Cm4Q3HvQ.qQIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this;

    a._index = -1;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.MoveNext
  type$soDt7aJ45j6g37Cm4Q3HvQ.qwIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this, b, c;

    c = !(a._index < a._endIndex);

    if (!c)
    {
      a._index = (a._index + 1);
      b = (a._index < a._endIndex);
      return b;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.Reset
  type$soDt7aJ45j6g37Cm4Q3HvQ.rAIABqJ45j6g37Cm4Q3HvQ = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1.op_Implicit
  function rQIABqJ45j6g37Cm4Q3HvQ(b)
  {
    var c, d;

    d = !(b == null);

    if (!d)
    {
      c = null;
      return c;
    }

    c = new ctor$pQIABqJ45j6g37Cm4Q3HvQ(b);
    return c;
  };

  // 
  // ScriptCoreLib.Shared.Query.SZArrayEnumerator`1
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.pgIABqJ45j6g37Cm4Q3HvQ;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.pwIABqJ45j6g37Cm4Q3HvQ;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.qAIABqJ45j6g37Cm4Q3HvQ;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.qQIABqJ45j6g37Cm4Q3HvQ;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.qwIABqJ45j6g37Cm4Q3HvQ;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.qgIABqJ45j6g37Cm4Q3HvQ;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.rAIABqJ45j6g37Cm4Q3HvQ;
  }
  )(type$soDt7aJ45j6g37Cm4Q3HvQ);
  // ScriptCoreLib.Shared.Serialized.DualNotation`1
  function _5bmQU8LVSDGzpIpi6kIvEg(){};
  _5bmQU8LVSDGzpIpi6kIvEg.TypeName = "DualNotation_1";
  _5bmQU8LVSDGzpIpi6kIvEg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_5bmQU8LVSDGzpIpi6kIvEg = _5bmQU8LVSDGzpIpi6kIvEg.prototype;
  type$_5bmQU8LVSDGzpIpi6kIvEg = _5bmQU8LVSDGzpIpi6kIvEg.prototype =   {
    constructor: _5bmQU8LVSDGzpIpi6kIvEg,
    Stream: null,
    IsBase64: false,
    Target: null
  }
;
  var basector$_5bmQU8LVSDGzpIpi6kIvEg = $ctor$(null, null, type$_5bmQU8LVSDGzpIpi6kIvEg);
  // ScriptCoreLib.Shared.Serialized.DualNotation`1..ctor
  type$_5bmQU8LVSDGzpIpi6kIvEg.oQIABsLVSDGzpIpi6kIvEg = function ()
  {
    var a = this;

  };
  var ctor$oQIABsLVSDGzpIpi6kIvEg = _5bmQU8LVSDGzpIpi6kIvEg.ctor = $ctor$(null, 'oQIABsLVSDGzpIpi6kIvEg', type$_5bmQU8LVSDGzpIpi6kIvEg);

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ActiveBorder
  function ewIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ActiveBorder');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ActiveCaption
  function fAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ActiveCaption');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_AppWorkspace
  function fQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('AppWorkspace');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_Background
  function fgIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('Background');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ButtonFace
  function fwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ButtonFace');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ButtonHighlight
  function gAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ButtonHighlight');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ButtonShadow
  function gQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ButtonShadow');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ButtonText
  function ggIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ButtonText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_CaptionText
  function gwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('CaptionText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_GrayText
  function hAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('GrayText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_Highlight
  function hQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('Highlight');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_HighlightText
  function hgIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('HighlightText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_InactiveBorder
  function hwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('InactiveBorder');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_InactiveCaption
  function iAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('InactiveCaption');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_InactiveCaptionText
  function iQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('InactiveCaptionText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_InfoBackground
  function igIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('InfoBackground');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_InfoText
  function iwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('InfoText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_Menu
  function jAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('Menu');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_MenuText
  function jQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('MenuText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_Scrollbar
  function jgIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('Scrollbar');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ThreeDDarkShadow
  function jwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ThreeDDarkShadow');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ThreeDFace
  function kAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ThreeDFace');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ThreeDHighlight
  function kQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ThreeDHighlight');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ThreeDLightShadow
  function kgIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ThreeDLightShadow');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_ThreeDShadow
  function kwIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('ThreeDShadow');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_Window
  function lAIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('Window');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_WindowFrame
  function lQIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('WindowFrame');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor+System.get_WindowText
  function lgIABhoNOD21QBVZxr5D6w()
  {
    var b;

    b = cAIABtKQCTqkPkZLKIEBZQ('WindowText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor
  function opwL_bdKQCTqkPkZLKIEBZQ(){};
  opwL_bdKQCTqkPkZLKIEBZQ.TypeName = "JSColor";
  opwL_bdKQCTqkPkZLKIEBZQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$opwL_bdKQCTqkPkZLKIEBZQ = opwL_bdKQCTqkPkZLKIEBZQ.prototype;
  var oQEABNKQCTqkPkZLKIEBZQ = null;
  var ogEABNKQCTqkPkZLKIEBZQ = null;
  var owEABNKQCTqkPkZLKIEBZQ = null;
  var pAEABNKQCTqkPkZLKIEBZQ = null;
  var pQEABNKQCTqkPkZLKIEBZQ = null;
  var pgEABNKQCTqkPkZLKIEBZQ = null;
  type$opwL_bdKQCTqkPkZLKIEBZQ = opwL_bdKQCTqkPkZLKIEBZQ.prototype =   {
    constructor: opwL_bdKQCTqkPkZLKIEBZQ,
    R: null,
    G: null,
    B: null,
    Value: null,
    H: null,
    L: null,
    S: null,
    isHLS: false
  }
;
  var basector$opwL_bdKQCTqkPkZLKIEBZQ = $ctor$(null, null, type$opwL_bdKQCTqkPkZLKIEBZQ);
  // ScriptCoreLib.JavaScript.Runtime.JSColor..ctor
  type$opwL_bdKQCTqkPkZLKIEBZQ.eQIABtKQCTqkPkZLKIEBZQ = function ()
  {
    var a = this;

  };
  var ctor$eQIABtKQCTqkPkZLKIEBZQ = opwL_bdKQCTqkPkZLKIEBZQ.ctor = $ctor$(null, 'eQIABtKQCTqkPkZLKIEBZQ', type$opwL_bdKQCTqkPkZLKIEBZQ);

  // ScriptCoreLib.JavaScript.Runtime.JSColor.get_Red
  function bAIABtKQCTqkPkZLKIEBZQ()
  {
    var b;

    b = dQIABtKQCTqkPkZLKIEBZQ(255, 0, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.get_Green
  function bQIABtKQCTqkPkZLKIEBZQ()
  {
    var b;

    b = dQIABtKQCTqkPkZLKIEBZQ(0, 255, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.get_Blue
  function bgIABtKQCTqkPkZLKIEBZQ()
  {
    var b;

    b = dQIABtKQCTqkPkZLKIEBZQ(0, 0, 255);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.get_Cyan
  function bwIABtKQCTqkPkZLKIEBZQ()
  {
    var b;

    b = dQIABtKQCTqkPkZLKIEBZQ(0, 255, 255);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.FromValue
  function cAIABtKQCTqkPkZLKIEBZQ(b)
  {
    var c, d;

    c = new ctor$eQIABtKQCTqkPkZLKIEBZQ();
    c.Value = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.HueToRGB
  function cQIABtKQCTqkPkZLKIEBZQ(b, c, d)
  {
    var e, f;

    f = !(d < 0);

    if (!f)
    {
      d = (d + 240);
    }

    f = !(d > 240);

    if (!f)
    {
      d = (d - 240);
    }

    f = !(d < 40);

    if (!f)
    {
      e = (b + ((((c - b) * d) + 20) / 40));
      return e;
    }

    f = !(d < 120);

    if (!f)
    {
      e = c;
      return e;
    }

    f = !(d < 160);

    if (!f)
    {
      e = (b + ((((c - b) * (160 - d)) + 20) / 40));
      return e;
    }

    e = b;
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.ToRGB
  type$opwL_bdKQCTqkPkZLKIEBZQ.cgIABtKQCTqkPkZLKIEBZQ = function ()
  {
    var a = this, b, c, d, e, f, g;

    b = new ctor$eQIABtKQCTqkPkZLKIEBZQ();
    g = !!a.S;

    if (!g)
    {
      c = ((a.L * 255) / 240);
      b.R = c;
      b.G = c;
      b.B = c;
      g = (a.H == 160);

      if (!g)
      {
      }

    }
    else
    {
      g = (a.L > 120);

      if (!g)
      {
        e = (((a.L * (240 + a.S)) + 120) / 240);
      }
      else
      {
        e = ((a.L + a.S) - (((a.L * a.S) + 120) / 240));
      }

      d = ((2 * a.L) - e);
      b.R = RAUABjNS0TGvUudj270IOg((((cQIABtKQCTqkPkZLKIEBZQ(d, e, (a.H + 80)) * 255) + 120) / 240));
      b.G = RAUABjNS0TGvUudj270IOg((((cQIABtKQCTqkPkZLKIEBZQ(d, e, a.H) * 255) + 120) / 240));
      b.B = RAUABjNS0TGvUudj270IOg((((cQIABtKQCTqkPkZLKIEBZQ(d, e, (a.H - 80)) * 255) + 120) / 240));
    }

    f = b;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.ToHLS
  type$opwL_bdKQCTqkPkZLKIEBZQ.cwIABtKQCTqkPkZLKIEBZQ = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l;

    b = new ctor$eQIABtKQCTqkPkZLKIEBZQ();
    b.isHLS = 1;
    c = Math.max(Math.max(a.R, a.G), a.B);
    d = Math.min(Math.min(a.R, a.G), a.B);
    f = ((((c + d) * 240) + 255) / 510);
    l = !(c == d);

    if (!l)
    {
      g = 0;
      e = 160;
    }
    else
    {
      l = (f > 120);

      if (!l)
      {
        g = ((((c - d) * 240) + ((c + d) / 2)) / (c + d));
      }
      else
      {
        g = ((((c - d) * 240) + (((510 - c) - d) / 2)) / ((510 - c) - d));
      }

      h = ((((c - a.R) * 40) + ((c - d) / 2)) / (c - d));
      i = ((((c - a.G) * 40) + ((c - d) / 2)) / (c - d));
      j = ((((c - a.B) * 40) + ((c - d) / 2)) / (c - d));
      l = !(a.R == c);

      if (!l)
      {
        e = (j - i);
      }
      else
      {
        l = !(a.G == c);

        if (!l)
        {
          e = ((80 + h) - j);
        }
        else
        {
          e = ((160 + i) - h);
        }

      }

      l = !(e < 0);

      if (!l)
      {
        e += 240;
      }

      l = !(e > 240);

      if (!l)
      {
        e -= 240;
      }

    }

    b.H = RAUABjNS0TGvUudj270IOg(e);
    b.L = RAUABjNS0TGvUudj270IOg(f);
    b.S = RAUABjNS0TGvUudj270IOg(g);
    k = b;
    return k;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.FromHLS
  function dAIABtKQCTqkPkZLKIEBZQ(b, c, d)
  {
    var e, f;

    e = new ctor$eQIABtKQCTqkPkZLKIEBZQ();
    e.H = b;
    e.L = c;
    e.S = d;
    e.isHLS = 1;
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.FromRGB
  function dQIABtKQCTqkPkZLKIEBZQ(b, c, d)
  {
    var e, f;

    e = new ctor$eQIABtKQCTqkPkZLKIEBZQ();
    e.R = b;
    e.G = c;
    e.B = d;
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.FromGray
  function dgIABtKQCTqkPkZLKIEBZQ(b)
  {
    var c;

    c = dQIABtKQCTqkPkZLKIEBZQ(b, b, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.op_Implicit
  function dwIABtKQCTqkPkZLKIEBZQ(b)
  {
    var c;

    c = (b+'');
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.JSColor.ToString
  type$opwL_bdKQCTqkPkZLKIEBZQ.toString /* ScriptCoreLib.JavaScript.Runtime.JSColor.ToString */ = function ()
  {
    var a = this, b, c, d, e;

    b = a;
    d = (b.Value == null);

    if (!d)
    {
      c = b.Value;
      return c;
    }

    d = !b.isHLS;

    if (!d)
    {
      b = b.cgIABtKQCTqkPkZLKIEBZQ();
    }

    e = [
      'RGB(',
      b.R,
      ', ',
      b.G,
      ', ',
      b.B,
      ')'
    ];
    c = _7gQABpT92DaiMvTduyyLZQ(e);
    return c;
  };
    opwL_bdKQCTqkPkZLKIEBZQ.prototype.toString /* System.Object.ToString */ = opwL_bdKQCTqkPkZLKIEBZQ.prototype.toString /* ScriptCoreLib.JavaScript.Runtime.JSColor.ToString */;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Activator
  function pmo5MnSooDmIzsqJ4hEpXA(){};
  pmo5MnSooDmIzsqJ4hEpXA.TypeName = "Activator";
  pmo5MnSooDmIzsqJ4hEpXA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$pmo5MnSooDmIzsqJ4hEpXA = pmo5MnSooDmIzsqJ4hEpXA.prototype;
  var basector$pmo5MnSooDmIzsqJ4hEpXA = $ctor$(null, null, type$pmo5MnSooDmIzsqJ4hEpXA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Activator..ctor
  type$pmo5MnSooDmIzsqJ4hEpXA.awIABnSooDmIzsqJ4hEpXA = function ()
  {
    var a = this;

  };
  var ctor$awIABnSooDmIzsqJ4hEpXA = pmo5MnSooDmIzsqJ4hEpXA.ctor = $ctor$(null, 'awIABnSooDmIzsqJ4hEpXA', type$pmo5MnSooDmIzsqJ4hEpXA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Activator.CreateInstance
  function agIABnSooDmIzsqJ4hEpXA(b)
  {
    var c, d, e, f, g;

    f = b._0QQABmIY_az6vz_alg_a0hAHA();
    c = _9AAABtd5xTKztToDDBg08A(f.get_Value());
    d = __aAAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(c.constructor), 'ctor');
    g = !(d == null);

    if (!g)
    {
      throw DAIABoJO8je05HfkC2K_atQ(b.zAQABqOBvjOuSkQZrCdfWA());
    }

    e = mgcABgSuBDKy7HYgwkRSdg(d);
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Attribute
  function wck7fY2kQTGGuWYmEJ1BJQ(){};
  wck7fY2kQTGGuWYmEJ1BJQ.TypeName = "Attribute";
  wck7fY2kQTGGuWYmEJ1BJQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$wck7fY2kQTGGuWYmEJ1BJQ = wck7fY2kQTGGuWYmEJ1BJQ.prototype;
  var basector$wck7fY2kQTGGuWYmEJ1BJQ = $ctor$(null, null, type$wck7fY2kQTGGuWYmEJ1BJQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Attribute..ctor
  type$wck7fY2kQTGGuWYmEJ1BJQ.aQIABo2kQTGGuWYmEJ1BJQ = function ()
  {
    var a = this;

  };
  var ctor$aQIABo2kQTGGuWYmEJ1BJQ = wck7fY2kQTGGuWYmEJ1BJQ.ctor = $ctor$(null, 'aQIABo2kQTGGuWYmEJ1BJQ', type$wck7fY2kQTGGuWYmEJ1BJQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.__ArrayList
  function _5_bQe45rmBjKN18EFKOJ2hQ(){};
  _5_bQe45rmBjKN18EFKOJ2hQ.TypeName = "ArrayList";
  _5_bQe45rmBjKN18EFKOJ2hQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_5_bQe45rmBjKN18EFKOJ2hQ = _5_bQe45rmBjKN18EFKOJ2hQ.prototype;
  type$_5_bQe45rmBjKN18EFKOJ2hQ = _5_bQe45rmBjKN18EFKOJ2hQ.prototype =   {
    constructor: _5_bQe45rmBjKN18EFKOJ2hQ,
    items: null
  }
;
  var basector$_5_bQe45rmBjKN18EFKOJ2hQ = $ctor$(null, null, type$_5_bQe45rmBjKN18EFKOJ2hQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.__ArrayList..ctor
  type$_5_bQe45rmBjKN18EFKOJ2hQ.aAIABprmBjKN18EFKOJ2hQ = function ()
  {
    var a = this;

    a.items = uAEABh33sTm5Ql7VEPKRUg();
  };
  var ctor$aAIABprmBjKN18EFKOJ2hQ = _5_bQe45rmBjKN18EFKOJ2hQ.ctor = $ctor$(null, 'aAIABprmBjKN18EFKOJ2hQ', type$_5_bQe45rmBjKN18EFKOJ2hQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.__ArrayList.Add
  type$_5_bQe45rmBjKN18EFKOJ2hQ.ZwIABprmBjKN18EFKOJ2hQ = function (b)
  {
    var a = this;

    a.items.push(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debugger
  function JCzk97Y3EjOS9TaQCZahOQ(){};
  JCzk97Y3EjOS9TaQCZahOQ.TypeName = "Debugger";
  JCzk97Y3EjOS9TaQCZahOQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$JCzk97Y3EjOS9TaQCZahOQ = JCzk97Y3EjOS9TaQCZahOQ.prototype;
  var basector$JCzk97Y3EjOS9TaQCZahOQ = $ctor$(null, null, type$JCzk97Y3EjOS9TaQCZahOQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debugger..ctor
  type$JCzk97Y3EjOS9TaQCZahOQ.ZgIABrY3EjOS9TaQCZahOQ = function ()
  {
    var a = this;

  };
  var ctor$ZgIABrY3EjOS9TaQCZahOQ = JCzk97Y3EjOS9TaQCZahOQ.ctor = $ctor$(null, 'ZgIABrY3EjOS9TaQCZahOQ', type$JCzk97Y3EjOS9TaQCZahOQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debugger.Break
  function ZQIABrY3EjOS9TaQCZahOQ() { debugger; };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Monitor
  function Hh_bdEygrxDyNPB865w5uMg(){};
  Hh_bdEygrxDyNPB865w5uMg.TypeName = "Monitor";
  Hh_bdEygrxDyNPB865w5uMg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Hh_bdEygrxDyNPB865w5uMg = Hh_bdEygrxDyNPB865w5uMg.prototype;
  var basector$Hh_bdEygrxDyNPB865w5uMg = $ctor$(null, null, type$Hh_bdEygrxDyNPB865w5uMg);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Monitor..ctor
  type$Hh_bdEygrxDyNPB865w5uMg.QQIABigrxDyNPB865w5uMg = function ()
  {
    var a = this;

  };
  var ctor$QQIABigrxDyNPB865w5uMg = Hh_bdEygrxDyNPB865w5uMg.ctor = $ctor$(null, 'QQIABigrxDyNPB865w5uMg', type$Hh_bdEygrxDyNPB865w5uMg);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Monitor.Enter
  function PwIABigrxDyNPB865w5uMg(b)
  {
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Monitor.Exit
  function QAIABigrxDyNPB865w5uMg(b)
  {
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__WeakReference
  function uD8G7SCtYj_afDA208lh0Jg(){};
  uD8G7SCtYj_afDA208lh0Jg.TypeName = "WeakReference";
  uD8G7SCtYj_afDA208lh0Jg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$uD8G7SCtYj_afDA208lh0Jg = uD8G7SCtYj_afDA208lh0Jg.prototype;
  var basector$uD8G7SCtYj_afDA208lh0Jg = $ctor$(null, null, type$uD8G7SCtYj_afDA208lh0Jg);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__WeakReference..ctor
  type$uD8G7SCtYj_afDA208lh0Jg.PgIABiCtYj_afDA208lh0Jg = function (b)
  {
    var a = this;

  };
  var ctor$PgIABiCtYj_afDA208lh0Jg = $ctor$(null, 'PgIABiCtYj_afDA208lh0Jg', type$uD8G7SCtYj_afDA208lh0Jg);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Component
  function _0Szxsd6xITuR7mFWWLTkwQ(){};
  _0Szxsd6xITuR7mFWWLTkwQ.TypeName = "Component";
  _0Szxsd6xITuR7mFWWLTkwQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_0Szxsd6xITuR7mFWWLTkwQ = _0Szxsd6xITuR7mFWWLTkwQ.prototype;
  type$_0Szxsd6xITuR7mFWWLTkwQ = _0Szxsd6xITuR7mFWWLTkwQ.prototype =   {
    constructor: _0Szxsd6xITuR7mFWWLTkwQ,
    _DesignMode_k__BackingField: false
  }
;
  var basector$_0Szxsd6xITuR7mFWWLTkwQ = $ctor$(null, null, type$_0Szxsd6xITuR7mFWWLTkwQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Component..ctor
  type$_0Szxsd6xITuR7mFWWLTkwQ.EAIABt6xITuR7mFWWLTkwQ = function ()
  {
    var a = this;

  };
  var ctor$EAIABt6xITuR7mFWWLTkwQ = _0Szxsd6xITuR7mFWWLTkwQ.ctor = $ctor$(null, 'EAIABt6xITuR7mFWWLTkwQ', type$_0Szxsd6xITuR7mFWWLTkwQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Component.Dispose
  type$_0Szxsd6xITuR7mFWWLTkwQ.DQIABt6xITuR7mFWWLTkwQ = function (b)
  {
    var a = this, c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Component.get_DesignMode
  type$_0Szxsd6xITuR7mFWWLTkwQ.DgIABt6xITuR7mFWWLTkwQ = function ()
  {
    return this._DesignMode_k__BackingField;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Component.set_DesignMode
  type$_0Szxsd6xITuR7mFWWLTkwQ.DwIABt6xITuR7mFWWLTkwQ = function (b)
  {
    var a = this;

    a._DesignMode_k__BackingField = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Exception.get_Message
  function BAIABszpcz2K4r_a_alajjmQ(a)
  {
    var b;

    b = GAEABvMRUT_abDUr1bMIlNw(FgEABvMRUT_abDUr1bMIlNw(a), 'message');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Exception.InternalConstructor
  function BgIABszpcz2K4r_a_alajjmQ(e) { return new Error(e); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Exception.InternalConstructor
  function CAIABszpcz2K4r_a_alajjmQ() { return new Error(); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__NotSupportedException.InternalConstructor
  function CwIABoJO8je05HfkC2K_atQ()
  {
    var b;

    b = BgIABszpcz2K4r_a_alajjmQ('NotSupportedException');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__NotSupportedException.InternalConstructor
  function DAIABoJO8je05HfkC2K_atQ(b)
  {
    var c;

    c = BgIABszpcz2K4r_a_alajjmQ(_8gQABpT92DaiMvTduyyLZQ('NotSupportedException: ', b));
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IMath.ceil
  // ScriptCoreLib.JavaScript.DOM.IMath.floor
  // ScriptCoreLib.JavaScript.DOM.IMath.abs
  // ScriptCoreLib.JavaScript.DOM.IMath.acos
  // ScriptCoreLib.JavaScript.DOM.IMath.asin
  // ScriptCoreLib.JavaScript.DOM.IMath.atan
  // ScriptCoreLib.JavaScript.DOM.IMath.atan2
  // ScriptCoreLib.JavaScript.DOM.IMath.cos
  // ScriptCoreLib.JavaScript.DOM.IMath.exp
  // ScriptCoreLib.JavaScript.DOM.IMath.log
  // ScriptCoreLib.JavaScript.DOM.IMath.sin
  // ScriptCoreLib.JavaScript.DOM.IMath.sqrt
  // ScriptCoreLib.JavaScript.DOM.IMath.round
  // ScriptCoreLib.JavaScript.DOM.IMath.tan
  // ScriptCoreLib.JavaScript.DOM.IMath.random
  // ScriptCoreLib.JavaScript.DOM.IMath.max
  // ScriptCoreLib.JavaScript.DOM.IMath.max
  // ScriptCoreLib.JavaScript.DOM.IMath.min
  // ScriptCoreLib.JavaScript.DOM.IMath.min
  // ScriptCoreLib.JavaScript.DOM.IMath.pow
  // ScriptCoreLib.JavaScript.DOM.IMath.minmax
  function _4gEABjDE4T6zbJ_aB6QdH4w(a, b, c, d)
  {
    var e;

    e = a.max(a.min(b, c), d);
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1+IncludeArgs
  function qqzCoassczCmdk3CD3yzxA(){};
  qqzCoassczCmdk3CD3yzxA.TypeName = "IncludeArgs";
  qqzCoassczCmdk3CD3yzxA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$qqzCoassczCmdk3CD3yzxA = qqzCoassczCmdk3CD3yzxA.prototype;
  type$qqzCoassczCmdk3CD3yzxA = qqzCoassczCmdk3CD3yzxA.prototype =   {
    constructor: qqzCoassczCmdk3CD3yzxA,
    Include: false,
    Item: null
  }
;
  var basector$qqzCoassczCmdk3CD3yzxA = $ctor$(null, null, type$qqzCoassczCmdk3CD3yzxA);
  // ScriptCoreLib.JavaScript.DOM.IArray`1+IncludeArgs..ctor
  type$qqzCoassczCmdk3CD3yzxA.zQEABqssczCmdk3CD3yzxA = function ()
  {
    var a = this;

    a.Include = 0;
  };
  var ctor$zQEABqssczCmdk3CD3yzxA = qqzCoassczCmdk3CD3yzxA.ctor = $ctor$(null, 'zQEABqssczCmdk3CD3yzxA', type$qqzCoassczCmdk3CD3yzxA);

  // ScriptCoreLib.JavaScript.DOM.IArray`1.Find
  function tAEABh33sTm5Ql7VEPKRUg(a, b)
  {
    var c, d, e, f;

    c = tQEABh33sTm5Ql7VEPKRUg(a, b);
    e = !(c == null);

    if (!e)
    {
      f = void(0);
      d = f;
      return d;
    }

    d = c.Item;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.FindMember
  function tQEABh33sTm5Ql7VEPKRUg(a, b)
  {
    var c;

    c = _2wAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(a), b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.InternalConstructor
  function uAEABh33sTm5Ql7VEPKRUg() { return []; };
  // ScriptCoreLib.JavaScript.DOM.IArray`1.InternalConstructor
  function uQEABh33sTm5Ql7VEPKRUg(b, c)
  {
    var d, e, f, g, h, i, j;

    d = uAEABh33sTm5Ql7VEPKRUg();
    h = b;

    for (i = 0; (i < h.length); i++)
    {
      e = h[i];
      f = new ctor$zQEABqssczCmdk3CD3yzxA();
      f.Item = e;
      c.Invoke(f);
      j = !f.Include;

      if (!j)
      {
        d = ugEABh33sTm5Ql7VEPKRUg(d, e);
      }

    }

    g = d;
    return g;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.op_Addition
  function ugEABh33sTm5Ql7VEPKRUg(b, c)
  {
    var d;

    b.push(c);
    d = b;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.ForEach
  function uwEABh33sTm5Ql7VEPKRUg(a, b)
  {
    var c, d, e, f;

    d = xgEABh33sTm5Ql7VEPKRUg(a);

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      b.Invoke(c);
    }

  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.push
  // ScriptCoreLib.JavaScript.DOM.IArray`1.shift
  // ScriptCoreLib.JavaScript.DOM.IArray`1.unshift
  // ScriptCoreLib.JavaScript.DOM.IArray`1.pop
  // ScriptCoreLib.JavaScript.DOM.IArray`1.splice
  // ScriptCoreLib.JavaScript.DOM.IArray`1.splice
  // ScriptCoreLib.JavaScript.DOM.IArray`1.join
  // ScriptCoreLib.JavaScript.DOM.IArray`1.join
  // ScriptCoreLib.JavaScript.DOM.IArray`1.get_Item
  function xAEABh33sTm5Ql7VEPKRUg(a, b)
  {
    var c;

    c = _9gAABtd5xTKztToDDBg08A(a, new Number(b));
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.set_Item
  function xQEABh33sTm5Ql7VEPKRUg(a, b, c)
  {
    _9wAABtd5xTKztToDDBg08A(a, new Number(b), c);
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.ToArray
  function xgEABh33sTm5Ql7VEPKRUg(a)
  {
    var b;

    b = a;
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.op_Implicit
  function xwEABh33sTm5Ql7VEPKRUg(b)
  {
    var c;

    c = xgEABh33sTm5Ql7VEPKRUg(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.Split
  function yAEABh33sTm5Ql7VEPKRUg(e, d) { return e.split(d); };
  // ScriptCoreLib.JavaScript.DOM.IArray`1.sort
  // ScriptCoreLib.JavaScript.DOM.IArray`1.sort
  function ygEABh33sTm5Ql7VEPKRUg(a, b)
  {
    a.sort(b.InvokePointer);
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.get_IsArray
  function ywEABh33sTm5Ql7VEPKRUg(a)
  {
    var b;

    b = _6AAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(a));
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IArray`1.SplitLines
  function zAEABh33sTm5Ql7VEPKRUg(b)
  {
    var c, d, e;

    c = yAEABh33sTm5Ql7VEPKRUg(b, '\u000d\u000a');
    d = yAEABh33sTm5Ql7VEPKRUg(b, '\u000a');
    e = ((c.length >= d.length) ? c : d);
    return e;
  };

  // ScriptCoreLib.Shared.AssemblyInfo
  function vLZZVc8G1Tmigc4hFdru7w(){};
  vLZZVc8G1Tmigc4hFdru7w.TypeName = "AssemblyInfo";
  vLZZVc8G1Tmigc4hFdru7w.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$vLZZVc8G1Tmigc4hFdru7w = vLZZVc8G1Tmigc4hFdru7w.prototype;
  var TgEABM8G1Tmigc4hFdru7w = null;
  var basector$vLZZVc8G1Tmigc4hFdru7w = $ctor$(null, null, type$vLZZVc8G1Tmigc4hFdru7w);
  // ScriptCoreLib.Shared.AssemblyInfo..ctor
  type$vLZZVc8G1Tmigc4hFdru7w.sQEABs8G1Tmigc4hFdru7w = function ()
  {
    var a = this;

  };
  var ctor$sQEABs8G1Tmigc4hFdru7w = vLZZVc8G1Tmigc4hFdru7w.ctor = $ctor$(null, 'sQEABs8G1Tmigc4hFdru7w', type$vLZZVc8G1Tmigc4hFdru7w);

  // ScriptCoreLib.Shared.AssemblyInfo.get_BuildDateTimeString
  type$vLZZVc8G1Tmigc4hFdru7w.rwEABs8G1Tmigc4hFdru7w = function () { return '3.01.2008 14:53:26 UTC'; };
  // ScriptCoreLib.Shared.AssemblyInfo.get_ModuleName
  type$vLZZVc8G1Tmigc4hFdru7w.sAEABs8G1Tmigc4hFdru7w = function () { return 'ScriptCoreLib.dll'; };
  // ScriptCoreLib.Shared.IAssemblyInfo
  // ScriptCoreLib.Shared.AssemblyInfo
  (function (i)  {
    i.rQEABpv81zGcdvtIbfyHsA = i.rwEABs8G1Tmigc4hFdru7w;
    i.rgEABpv81zGcdvtIbfyHsA = i.sAEABs8G1Tmigc4hFdru7w;
  }
  )(type$vLZZVc8G1Tmigc4hFdru7w);
  // ScriptCoreLib.JavaScript.Runtime.Expando+FindArgs`1
  function c2nroNggdDyKychdSxdB1A(){};
  c2nroNggdDyKychdSxdB1A.TypeName = "FindArgs_1";
  c2nroNggdDyKychdSxdB1A.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$c2nroNggdDyKychdSxdB1A = c2nroNggdDyKychdSxdB1A.prototype;
  type$c2nroNggdDyKychdSxdB1A = c2nroNggdDyKychdSxdB1A.prototype =   {
    constructor: c2nroNggdDyKychdSxdB1A,
    Found: false,
    Member: null,
    Item: null
  }
;
  var basector$c2nroNggdDyKychdSxdB1A = $ctor$(null, null, type$c2nroNggdDyKychdSxdB1A);
  // ScriptCoreLib.JavaScript.Runtime.Expando+FindArgs`1..ctor
  type$c2nroNggdDyKychdSxdB1A.EwEABtggdDyKychdSxdB1A = function ()
  {
    var a = this;

    a.Found = 0;
  };
  var ctor$EwEABtggdDyKychdSxdB1A = c2nroNggdDyKychdSxdB1A.ctor = $ctor$(null, 'EwEABtggdDyKychdSxdB1A', type$c2nroNggdDyKychdSxdB1A);

  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeActivator
  function rWFg2tPNmT23yID5mDcKAw(){};
  rWFg2tPNmT23yID5mDcKAw.TypeName = "TypeActivator";
  rWFg2tPNmT23yID5mDcKAw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$rWFg2tPNmT23yID5mDcKAw = rWFg2tPNmT23yID5mDcKAw.prototype;
  type$rWFg2tPNmT23yID5mDcKAw = rWFg2tPNmT23yID5mDcKAw.prototype =   {
    constructor: rWFg2tPNmT23yID5mDcKAw,
    Type: null,
    TypeName: null,
    MemberActivator: null
  }
;
  var basector$rWFg2tPNmT23yID5mDcKAw = $ctor$(null, null, type$rWFg2tPNmT23yID5mDcKAw);
  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeActivator..ctor
  type$rWFg2tPNmT23yID5mDcKAw.EAEABtPNmT23yID5mDcKAw = function (b)
  {
    var a = this;

    a.MemberActivator = _2AAABtd5xTKztToDDBg08A();
    a.TypeName = b;
  };
  var ctor$EAEABtPNmT23yID5mDcKAw = $ctor$(null, 'EAEABtPNmT23yID5mDcKAw', type$rWFg2tPNmT23yID5mDcKAw);

  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeActivator.get_TypeExpando
  type$rWFg2tPNmT23yID5mDcKAw.DwEABtPNmT23yID5mDcKAw = function ()
  {
    var a = this, b;

    b = _9AAABtd5xTKztToDDBg08A(a.Type);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeActivator.set_Item
  type$rWFg2tPNmT23yID5mDcKAw.EQEABtPNmT23yID5mDcKAw = function (b, c)
  {
    var a = this;

    __aQAABtd5xTKztToDDBg08A(a.MemberActivator, b, c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeActivator.get_Item
  type$rWFg2tPNmT23yID5mDcKAw.EgEABtPNmT23yID5mDcKAw = function (b)
  {
    var a = this, c;

    c = __aAAABtd5xTKztToDDBg08A(a.MemberActivator, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeNameResolver
  function FM6Fly8dXDOohNvZCioIhA(){};
  FM6Fly8dXDOohNvZCioIhA.TypeName = "TypeNameResolver";
  FM6Fly8dXDOohNvZCioIhA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$FM6Fly8dXDOohNvZCioIhA = FM6Fly8dXDOohNvZCioIhA.prototype;
  type$FM6Fly8dXDOohNvZCioIhA = FM6Fly8dXDOohNvZCioIhA.prototype =   {
    constructor: FM6Fly8dXDOohNvZCioIhA,
    Type: null,
    TypeName: null
  }
;
  var basector$FM6Fly8dXDOohNvZCioIhA = $ctor$(null, null, type$FM6Fly8dXDOohNvZCioIhA);
  // ScriptCoreLib.JavaScript.Runtime.Expando+TypeNameResolver..ctor
  type$FM6Fly8dXDOohNvZCioIhA.DgEABi8dXDOohNvZCioIhA = function (b, c)
  {
    var a = this;

    a.Type = b;
    a.TypeName = c;
  };
  var ctor$DgEABi8dXDOohNvZCioIhA = $ctor$(null, 'DgEABi8dXDOohNvZCioIhA', type$FM6Fly8dXDOohNvZCioIhA);

  // ScriptCoreLib.JavaScript.Runtime.Expando.ReferenceEquals
  function yAAABtd5xTKztToDDBg08A(a, b) { return a === b; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.Compare
  function _0QAABtd5xTKztToDDBg08A(a, b) { return (a<b)?-1:(b<a?1:0); };
  // ScriptCoreLib.JavaScript.Runtime.Expando.Of
  function _9AAABtd5xTKztToDDBg08A(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMember
  function __aAAABtd5xTKztToDDBg08A(a, b)
  {
    var c;

    c = _9gAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.Find
  function _2wAABtd5xTKztToDDBg08A(a, b)
  {
    var c, d, e, f, g, h, i;

    c = _4wAABtd5xTKztToDDBg08A(a);
    d = new ctor$EwEABtggdDyKychdSxdB1A();
    g = c;

    for (h = 0; (h < g.length); h++)
    {
      e = g[h];
      d.Member = e;
      d.Item = _3gAABtd5xTKztToDDBg08A(e.xgAABmB4_aTOMaLVuXNcMxw());
      b.Invoke(d);
      i = !d.Found;

      if (!i)
      {
        break;
      }

    }

    f = ((d.Found) ? d : null);
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalGetMember
  function _9gAABtd5xTKztToDDBg08A(o, m) { return o[m] };
  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalSetMember
  function _9wAABtd5xTKztToDDBg08A(o, m, v) { o[m] = v };
  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsArray
  function _6AAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = (_8AAABtd5xTKztToDDBg08A(a) && _5wAABtd5xTKztToDDBg08A(a, window.Array));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.To
  function _3gAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = a;
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.SetMember
  function __aQAABtd5xTKztToDDBg08A(a, b, c)
  {
    _9wAABtd5xTKztToDDBg08A(a, b, c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMemberOf
  function __agAABtd5xTKztToDDBg08A(b, c, d, e)
  {
    var f;

    f = __awAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(b), c, d, e);
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMember
  function __awAABtd5xTKztToDDBg08A(a, b, c, d)
  {
    var e, f;

    f = !_9QAABtd5xTKztToDDBg08A(a, b);

    if (!f)
    {
      e = _9gAABtd5xTKztToDDBg08A(a, b);
      return e;
    }

    f = !_9QAABtd5xTKztToDDBg08A(a, c);

    if (!f)
    {
      e = _9gAABtd5xTKztToDDBg08A(a, c);
      return e;
    }

    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.ExportCallback
  function AwEABtd5xTKztToDDBg08A(b, c)
  {
    AgEABtd5xTKztToDDBg08A(b, ogcABgSuBDKy7HYgwkRSdg(c));
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.ResolveDualNotation
  function BQEABtd5xTKztToDDBg08A(b)
  {
    var c;

    c = !(b.Target == null);

    if (!c)
    {
      b.Target = _3gAABtd5xTKztToDDBg08A(zwAABtd5xTKztToDDBg08A(b.Stream, b.IsBase64));
    }

  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.ToJSON
  function yQAABtd5xTKztToDDBg08A(a)
  {
    var b, c, d, e, f, g;

    b = a;
    c = new ctor$vQYABmj2pj6v9xlugKAN2Q();
    g = !_6gAABtd5xTKztToDDBg08A(b);

    if (!g)
    {
      c.tQYABmj2pj6v9xlugKAN2Q('\"');
      c.tQYABmj2pj6v9xlugKAN2Q(zQAABtd5xTKztToDDBg08A(b));
      c.tQYABmj2pj6v9xlugKAN2Q('\"');
    }
    else
    {
      g = !_7wAABtd5xTKztToDDBg08A(b);

      if (!g)
      {
        c.tQYABmj2pj6v9xlugKAN2Q(b);
      }
      else
      {
        g = !_8AAABtd5xTKztToDDBg08A(b);

        if (!g)
        {
          g = !_8gAABtd5xTKztToDDBg08A(b);

          if (!g)
          {
            c.tQYABmj2pj6v9xlugKAN2Q('null');
          }
          else
          {
            g = !_6AAABtd5xTKztToDDBg08A(b);

            if (!g)
            {
              c.tQYABmj2pj6v9xlugKAN2Q('[');
            }
            else
            {
              c.tQYABmj2pj6v9xlugKAN2Q('{');
            }

            d = _5AAABtd5xTKztToDDBg08A(b);

            for (e = 0; (e < d.length); e++)
            {
              g = !(e > 0);

              if (!g)
              {
                c.tQYABmj2pj6v9xlugKAN2Q(',');
              }

              g = _6AAABtd5xTKztToDDBg08A(b);

              if (!g)
              {
                c.tQYABmj2pj6v9xlugKAN2Q(yQAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(d[e].Name)));
                c.tQYABmj2pj6v9xlugKAN2Q(':');
              }

              c.tQYABmj2pj6v9xlugKAN2Q(yQAABtd5xTKztToDDBg08A(d[e].xgAABmB4_aTOMaLVuXNcMxw()));
            }

            g = !_6AAABtd5xTKztToDDBg08A(b);

            if (!g)
            {
              c.tQYABmj2pj6v9xlugKAN2Q(']');
            }
            else
            {
              c.tQYABmj2pj6v9xlugKAN2Q('}');
            }

          }

        }
        else
        {
          g = !_7AAABtd5xTKztToDDBg08A(b);

          if (!g)
          {
            c.tQYABmj2pj6v9xlugKAN2Q(((_3gAABtd5xTKztToDDBg08A(b)) ? 'true' : 'false'));
          }

        }

      }

    }

    f = c.ugYABmj2pj6v9xlugKAN2Q();
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.Clone
  function ygAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = _2QAABtd5xTKztToDDBg08A(_4wAABtd5xTKztToDDBg08A(a));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.PHPSerialize
  function ywAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = zAAABtd5xTKztToDDBg08A(a, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.PHPSerialize
  function zAAABtd5xTKztToDDBg08A(a, b)
  {
    var c, d, e, f, g, h, i, j, k, l;

    c = new ctor$vQYABmj2pj6v9xlugKAN2Q();
    i = !_8AAABtd5xTKztToDDBg08A(a);

    if (!i)
    {
      d = _5AAABtd5xTKztToDDBg08A(a);
      c.tQYABmj2pj6v9xlugKAN2Q(_8QQABpT92DaiMvTduyyLZQ('a:', new Number(d.length), ':{'));
      e = new ctor$vQYABmj2pj6v9xlugKAN2Q();
      j = d;

      for (k = 0; (k < j.length); k++)
      {
        f = j[k];
        e.tQYABmj2pj6v9xlugKAN2Q(zAAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(f.Name), (b + 1)));
        e.tQYABmj2pj6v9xlugKAN2Q(zAAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw(), (b + 1)));
      }

      e.tAYABmj2pj6v9xlugKAN2Q();
      c.tQYABmj2pj6v9xlugKAN2Q(e.uwYABmj2pj6v9xlugKAN2Q(';'));
      c.tQYABmj2pj6v9xlugKAN2Q('}');
    }
    else
    {
      i = !_6gAABtd5xTKztToDDBg08A(a);

      if (!i)
      {
        g = _3QAABtd5xTKztToDDBg08A(a);
        l = [
          's:',
          new Number(_6wQABpT92DaiMvTduyyLZQ(g)),
          ':\"',
          g,
          '\"'
        ];
        c.tQYABmj2pj6v9xlugKAN2Q(_7gQABpT92DaiMvTduyyLZQ(l));
      }
      else
      {
        i = !_7AAABtd5xTKztToDDBg08A(a);

        if (!i)
        {
          c.tQYABmj2pj6v9xlugKAN2Q(_8AQABpT92DaiMvTduyyLZQ('i:', new Number((_3gAABtd5xTKztToDDBg08A(a) || 0))));
        }
        else
        {
          i = !_7wAABtd5xTKztToDDBg08A(a);

          if (!i)
          {
            i = !_7QAABtd5xTKztToDDBg08A(a);

            if (!i)
            {
              c.tQYABmj2pj6v9xlugKAN2Q(_8AQABpT92DaiMvTduyyLZQ('d:', _3gAABtd5xTKztToDDBg08A(a)));
            }
            else
            {
              c.tQYABmj2pj6v9xlugKAN2Q(_8AQABpT92DaiMvTduyyLZQ('i:', new Number(_3gAABtd5xTKztToDDBg08A(a))));
            }

          }

        }

      }

    }

    h = c.ugYABmj2pj6v9xlugKAN2Q();
    return h;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_Literal
  function zQAABtd5xTKztToDDBg08A(a)
  {
    var b, c, d, e, f, g, h, i;

    i = !_6gAABtd5xTKztToDDBg08A(a);

    if (!i)
    {
      b = new ctor$vQYABmj2pj6v9xlugKAN2Q();
      c = _3QAABtd5xTKztToDDBg08A(a);

      for (d = 0; (d < _6wQABpT92DaiMvTduyyLZQ(c)); d++)
      {
        e = _7AQABpT92DaiMvTduyyLZQ(c, d);
        f = _4wQABpT92DaiMvTduyyLZQ(c, d);
        i = !(_6QQABpT92DaiMvTduyyLZQ('\"\'\u005c\u0008\u000c\u000a\u000d\u0009', e) > -1);

        if (!i)
        {
          g = QAUABjNS0TGvUudj270IOg(f);
          i = (f > 255);

          if (!i)
          {
            g = _8gQABpT92DaiMvTduyyLZQ('00', g);
          }

          b.tQYABmj2pj6v9xlugKAN2Q(_8gQABpT92DaiMvTduyyLZQ('\u005cu', g));
        }
        else
        {
          i = !(f > 255);

          if (!i)
          {
            b.tQYABmj2pj6v9xlugKAN2Q(_8gQABpT92DaiMvTduyyLZQ('\u005cu', QAUABjNS0TGvUudj270IOg(f)));
          }
          else
          {
            b.tQYABmj2pj6v9xlugKAN2Q(e);
          }

        }

      }

      h = b.ugYABmj2pj6v9xlugKAN2Q();
      return h;
    }

    h = null;
    return h;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.FromJSONProtocolString
  function zgAABtd5xTKztToDDBg08A(b)
  {
    var c, d, e, f;

    c = _6gQABpT92DaiMvTduyyLZQ(b, 'json:\u002f\u002f');
    f = !(c > -1);

    if (!f)
    {
      d = AwUABpT92DaiMvTduyyLZQ(b, (c + _6wQABpT92DaiMvTduyyLZQ('json:\u002f\u002f')));
      e = _0AAABtd5xTKztToDDBg08A(d);
      return e;
    }

    e = null;
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.FromJSON
  function zwAABtd5xTKztToDDBg08A(b, c)
  {
    var d, e;

    e = !c;

    if (!e)
    {
      d = _0AAABtd5xTKztToDDBg08A(QwUABjNS0TGvUudj270IOg(b));
      return d;
    }

    d = _0AAABtd5xTKztToDDBg08A(b);
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.FromJSON
  function _0AAABtd5xTKztToDDBg08A(b)
  {
    var c, d, e;

    c = null;
    e = (b == null);

    if (!e)
    {
      try
      {
        c = mgcABgSuBDKy7HYgwkRSdg(new Function(_8wQABpT92DaiMvTduyyLZQ('return (', b, ');')));
      }
      catch (__exc)
      {
        throw BgIABszpcz2K4r_a_alajjmQ(_8gQABpT92DaiMvTduyyLZQ('Could not create object from json string : ', b));
      }
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_TypeMetaName
  function _0gAABtd5xTKztToDDBg08A(a)
  {
    var b, c;

    c = !(_1AAABtd5xTKztToDDBg08A(a) == null);

    if (!c)
    {
      b = null;
      return b;
    }

    b = _3QAABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(a), '$0'));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_TypeDefaultConstructor
  function _0wAABtd5xTKztToDDBg08A(a)
  {
    var b, c;

    c = !(_1AAABtd5xTKztToDDBg08A(a) == null);

    if (!c)
    {
      b = null;
      return b;
    }

    b = _3QAABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(a), '$1'));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_Metadata
  function _1AAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = __bQAABtd5xTKztToDDBg08A(a, '$0');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalConstructor
  function _2AAABtd5xTKztToDDBg08A() { return {}; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalConstructor
  function _2QAABtd5xTKztToDDBg08A(b)
  {
    var c, d;

    c = _2AAABtd5xTKztToDDBg08A();
    _3AAABtd5xTKztToDDBg08A(b, c);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalConstructor
  function _2gAABtd5xTKztToDDBg08A(ctor) { return new ctor(); };
  // ScriptCoreLib.JavaScript.Runtime.Expando.CopyTo
  function _3AAABtd5xTKztToDDBg08A(b, c)
  {
    var d, e, f, g;

    e = b;

    for (f = 0; (f < e.length); f++)
    {
      d = e[f];
      d.xwAABmB4_aTOMaLVuXNcMxw(c);
    }

  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetValue
  function _3QAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = (a+'');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalType
  function _3wAABtd5xTKztToDDBg08A(e) { return typeof e; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalGetMemberNames
  function _4AAABtd5xTKztToDDBg08A(e) { var x = []; for (var z in e) x.push(z); return x; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMemberNames
  function _4QAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = _4AAABtd5xTKztToDDBg08A(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMembers
  function _4gAABtd5xTKztToDDBg08A(a, b, c, d, e, f, g)
  {
    var h, i, j, k, l, m, n, o, p, q, r, s, t, u;

    h = uAEABh33sTm5Ql7VEPKRUg();
    s = _4QAABtd5xTKztToDDBg08A(a);

    for (t = 0; (t < s.length); t++)
    {
      i = s[t];
      j = 1;
      u = !CQUABpT92DaiMvTduyyLZQ(i, '$0');

      if (!u)
      {
        j = 0;
      }

      u = !j;

      if (!u)
      {
        k = new ctor$vwAABmB4_aTOMaLVuXNcMxw(a, i);
        l = (_6gAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && b);
        m = (_7AAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && c);
        n = (_7wAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && d);
        o = (_8AAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && e);
        p = (_6wAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && f);
        q = (_8QAABtd5xTKztToDDBg08A(k.xgAABmB4_aTOMaLVuXNcMxw()) && g);
        u = (!l && (!m && (!n && (!o && (!p && !q)))));

        if (!u)
        {
          h.push(k);
        }

      }

    }

    r = xgEABh33sTm5Ql7VEPKRUg(h);
    return r;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetMembers
  function _4wAABtd5xTKztToDDBg08A(a)
  {
    var b, c, d, e, f, g;

    b = uAEABh33sTm5Ql7VEPKRUg();
    e = _4QAABtd5xTKztToDDBg08A(a);

    for (f = 0; (f < e.length); f++)
    {
      c = e[f];
      b.push(new ctor$vwAABmB4_aTOMaLVuXNcMxw(a, c));
    }

    d = xgEABh33sTm5Ql7VEPKRUg(b);
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetFields
  function _5AAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = _4gAABtd5xTKztToDDBg08A(a, 1, 1, 1, 1, 0, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetFunctions
  function _5QAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = _4gAABtd5xTKztToDDBg08A(a, 0, 0, 0, 0, 1, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalIsInstanceOf
  function _5gAABtd5xTKztToDDBg08A(e, c) { return (e instanceof c); };
  // ScriptCoreLib.JavaScript.Runtime.Expando.IsInstanceOf
  function _5wAABtd5xTKztToDDBg08A(a, b)
  {
    var c;

    c = _5gAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.IsArrayOf
  function _6QAABtd5xTKztToDDBg08A(a, b)
  {
    var c, d, e, f;

    e = !_6AAABtd5xTKztToDDBg08A(a);

    if (!e)
    {
      c = _3gAABtd5xTKztToDDBg08A(a);
      e = !(c.length > 0);

      if (!e)
      {
        f = [
          b,
          xAEABh33sTm5Ql7VEPKRUg(c, 0)
        ];
        d = __bgAABtd5xTKztToDDBg08A(f);
        return d;
      }

    }

    d = 0;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsString
  function _6gAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'string');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsFunction
  function _6wAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'function');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsBoolean
  function _7AAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'boolean');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsDouble
  function _7QAABtd5xTKztToDDBg08A(a)
  {
    var b, c, d;

    d = _7wAABtd5xTKztToDDBg08A(a);

    if (!d)
    {
      c = 0;
      return c;
    }

    b = _3gAABtd5xTKztToDDBg08A(a);
    c = !(gAYABlp1gTixwdv_axCXc_aQ(b) == b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.IsNativeNumberObject
  function _7gAABtd5xTKztToDDBg08A(e) { return e instanceof Number; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsNumber
  function _7wAABtd5xTKztToDDBg08A(a)
  {
    var b, c;

    c = !_7gAABtd5xTKztToDDBg08A(a);

    if (!c)
    {
      b = 1;
      return b;
    }

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'number');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsObject
  function _8AAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'object');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsUndefined
  function _8QAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(_8wAABtd5xTKztToDDBg08A(a), 'undefined');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_IsNull
  function _8gAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = (_8AAABtd5xTKztToDDBg08A(a) && (_3gAABtd5xTKztToDDBg08A(a) == null));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_TypeString
  function _8wAABtd5xTKztToDDBg08A(a)
  {
    var b;

    b = _3wAABtd5xTKztToDDBg08A(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalIsMember
  function _9QAABtd5xTKztToDDBg08A(o, m) { try { return o[m] != void(0); } catch (exc) { return 'unknown'; }  };
  // ScriptCoreLib.JavaScript.Runtime.Expando.set_Item
  function __bAAABtd5xTKztToDDBg08A(a, b, c)
  {
    _9wAABtd5xTKztToDDBg08A(a, b, c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.get_Item
  function __bQAABtd5xTKztToDDBg08A(a, b)
  {
    var c;

    c = _9gAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.IsSameType
  function __bgAABtd5xTKztToDDBg08A(b)
  {
    var c, d, e, f, g;

    c = 1;
    g = !(b.length > 1);

    if (!g)
    {
      d = _9AAABtd5xTKztToDDBg08A(b[0]).constructor;

      for (e = 1; (e < b.length); e++)
      {
        g = (_9AAABtd5xTKztToDDBg08A(b[e]).constructor == d);

        if (!g)
        {
          f = 0;
          return f;
        }

      }

    }

    f = c;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.Invoke
  function __bwAABtd5xTKztToDDBg08A(o, m) { o[m](); };
  // ScriptCoreLib.JavaScript.Runtime.Expando.Invoke
  function AAEABtd5xTKztToDDBg08A(a, b)
  {
    __bwAABtd5xTKztToDDBg08A(a, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.CreateType
  function AQEABtd5xTKztToDDBg08A(a)
  {
    var b, c;

    b = mgcABgSuBDKy7HYgwkRSdg(a.constructor);
    AAEABtd5xTKztToDDBg08A(b, _0wAABtd5xTKztToDDBg08A(a));
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.ExportCallback
  function AgEABtd5xTKztToDDBg08A(b, c)
  {
    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('ExportCallback \u0040 ', b));
    __aQAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(window), b, c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.GetUniqueID
  function BAEABtd5xTKztToDDBg08A(b)
  {
    var c;

    c = _8gQABpT92DaiMvTduyyLZQ(b, QAUABjNS0TGvUudj270IOg(new ctor$EAcABo2LaDmnwTYyBjqFag().EgcABo2LaDmnwTYyBjqFag(32000)));
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.ToConsole
  function BgEABtd5xTKztToDDBg08A(a)
  {
    var b, c, d, e, f, g;

    awQABh78uTmU7_bAOPst6lA('functions:');
    b = 20;
    d = _5QAABtd5xTKztToDDBg08A(a);

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      awQABh78uTmU7_bAOPst6lA(__bgQABpT92DaiMvTduyyLZQ(c.Name, b));
    }

    awQABh78uTmU7_bAOPst6lA('fields:');
    d = _5AAABtd5xTKztToDDBg08A(a);

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      g = [
        __bgQABpT92DaiMvTduyyLZQ(c.Name, b),
        ' = (',
        _8wAABtd5xTKztToDDBg08A(c.xgAABmB4_aTOMaLVuXNcMxw()),
        ')',
        c.wQAABmB4_aTOMaLVuXNcMxw()
      ];
      awQABh78uTmU7_bAOPst6lA(_7gQABpT92DaiMvTduyyLZQ(g));
    }

  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalContains
  function BwEABtd5xTKztToDDBg08A(m, t) { return (m in t); };
  // ScriptCoreLib.JavaScript.Runtime.Expando.Contains
  function CAEABtd5xTKztToDDBg08A(a, b)
  {
    var c;

    c = BwEABtd5xTKztToDDBg08A(b, a);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.CopyTo
  function CQEABtd5xTKztToDDBg08A(a, b)
  {
    var c, d, e, f, g;

    c = _9AAABtd5xTKztToDDBg08A(b);
    e = _4wAABtd5xTKztToDDBg08A(a);

    for (f = 0; (f < e.length); f++)
    {
      d = e[f];
      d.xwAABmB4_aTOMaLVuXNcMxw(c);
    }

  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalRemove
  function CgEABtd5xTKztToDDBg08A(t, key) { delete t[key]; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.Remove
  function CwEABtd5xTKztToDDBg08A(a, b)
  {
    CgEABtd5xTKztToDDBg08A(a, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando.InternalRemoveAll
  function DAEABtd5xTKztToDDBg08A(t) { for (var i in t) delete t[i]; };
  // ScriptCoreLib.JavaScript.Runtime.Expando.RemoveAll
  // ScriptCoreLib.JavaScript.Runtime.Expando`2.InternalConstructor
  function FQEABvMRUT_abDUr1bMIlNw()
  {
    var b;

    b = _3gAABtd5xTKztToDDBg08A(_2AAABtd5xTKztToDDBg08A());
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando`2.Of
  function FgEABvMRUT_abDUr1bMIlNw(b)
  {
    var c;

    c = _3gAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(b));
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando`2.set_Item
  function FwEABvMRUT_abDUr1bMIlNw(a, b, c)
  {
    _9wAABtd5xTKztToDDBg08A(a, b, c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Expando`2.get_Item
  function GAEABvMRUT_abDUr1bMIlNw(a, b)
  {
    var c;

    c = _9gAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember
  function r9E_anmB4_aTOMaLVuXNcMxw(){};
  r9E_anmB4_aTOMaLVuXNcMxw.TypeName = "ExpandoMember";
  r9E_anmB4_aTOMaLVuXNcMxw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$r9E_anmB4_aTOMaLVuXNcMxw = r9E_anmB4_aTOMaLVuXNcMxw.prototype;
  type$r9E_anmB4_aTOMaLVuXNcMxw = r9E_anmB4_aTOMaLVuXNcMxw.prototype =   {
    constructor: r9E_anmB4_aTOMaLVuXNcMxw,
    Owner: null,
    Name: null
  }
;
  var basector$r9E_anmB4_aTOMaLVuXNcMxw = $ctor$(null, null, type$r9E_anmB4_aTOMaLVuXNcMxw);
  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember..ctor
  type$r9E_anmB4_aTOMaLVuXNcMxw.vwAABmB4_aTOMaLVuXNcMxw = function (b, c)
  {
    var a = this;

    a.Owner = b;
    a.Name = c;
  };
  var ctor$vwAABmB4_aTOMaLVuXNcMxw = $ctor$(null, 'vwAABmB4_aTOMaLVuXNcMxw', type$r9E_anmB4_aTOMaLVuXNcMxw);

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.Invoke
  type$r9E_anmB4_aTOMaLVuXNcMxw.vgAABmB4_aTOMaLVuXNcMxw = function (b)
  {
    var a = this, c;

    c = _3gAABtd5xTKztToDDBg08A(a.xgAABmB4_aTOMaLVuXNcMxw()).apply(a.Owner, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.get_Index
  type$r9E_anmB4_aTOMaLVuXNcMxw.wAAABmB4_aTOMaLVuXNcMxw = function ()
  {
    var a = this, b, c;

    c = !_6AAABtd5xTKztToDDBg08A(a.Owner);

    if (!c)
    {
      b = mwUABgPTBzS7KLCa_bUzFsA(a.Name);
      return b;
    }

    b = -1;
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.get_Value
  type$r9E_anmB4_aTOMaLVuXNcMxw.wQAABmB4_aTOMaLVuXNcMxw = function ()
  {
    var a = this, b;

    b = __aAAABtd5xTKztToDDBg08A(a.Owner, a.Name);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.set_Value
  type$r9E_anmB4_aTOMaLVuXNcMxw.wgAABmB4_aTOMaLVuXNcMxw = function (b)
  {
    var a = this;

    __aQAABtd5xTKztToDDBg08A(a.Owner, a.Name, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.get_TypeConstructorData
  type$r9E_anmB4_aTOMaLVuXNcMxw.wwAABmB4_aTOMaLVuXNcMxw = function ()
  {
    var a = this, b, c;

    c = !(_1AAABtd5xTKztToDDBg08A(a.Owner) == null);

    if (!c)
    {
      b = null;
      return b;
    }

    b = __bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(a.Owner), a.Name);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.ConstructorOfTypeName
  function xAAABmB4_aTOMaLVuXNcMxw(b)
  {
    var c;

    c = __aAAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(window), b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.get_TypeConstructor
  type$r9E_anmB4_aTOMaLVuXNcMxw.xQAABmB4_aTOMaLVuXNcMxw = function ()
  {
    var a = this, b, c, d;

    b = a.wwAABmB4_aTOMaLVuXNcMxw();
    d = !_6gAABtd5xTKztToDDBg08A(b);

    if (!d)
    {
      c = xAAABmB4_aTOMaLVuXNcMxw(_3QAABtd5xTKztToDDBg08A(b));
      return c;
    }

    d = !_6AAABtd5xTKztToDDBg08A(b);

    if (!d)
    {
      c = xAAABmB4_aTOMaLVuXNcMxw(_3QAABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(b, new Number(0))));
      return c;
    }

    c = null;
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.get_Self
  type$r9E_anmB4_aTOMaLVuXNcMxw.xgAABmB4_aTOMaLVuXNcMxw = function ()
  {
    var a = this, b;

    b = __aAAABtd5xTKztToDDBg08A(a.Owner, a.Name);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.ExpandoMember.CopyTo
  type$r9E_anmB4_aTOMaLVuXNcMxw.xwAABmB4_aTOMaLVuXNcMxw = function (b)
  {
    var a = this;

    __bAAABtd5xTKztToDDBg08A(b, a.Name, a.xgAABmB4_aTOMaLVuXNcMxw());
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.Apply
  function owAABgnDWDenzWX06iPvnw(a, b)
  {
    b.Invoke(a);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.ToCenter
  function pAAABgnDWDenzWX06iPvnw(a, b, c, d)
  {
    a.position = 'absolute';
    pgAABgnDWDenzWX06iPvnw(a, ((b.clientWidth - c) / 2), ((b.clientHeight - d) / 2), c, d);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetLocation
  function pQAABgnDWDenzWX06iPvnw(a, b, c)
  {
    a.position = 'absolute';
    a.left = _8AQABpT92DaiMvTduyyLZQ(new Number(b), 'px');
    a.top = _8AQABpT92DaiMvTduyyLZQ(new Number(c), 'px');
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetLocation
  function pgAABgnDWDenzWX06iPvnw(a, b, c, d, e)
  {
    pQAABgnDWDenzWX06iPvnw(a, b, c);
    qAAABgnDWDenzWX06iPvnw(a, d, e);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetLocation
  function pwAABgnDWDenzWX06iPvnw(a, b, c, d)
  {
    pQAABgnDWDenzWX06iPvnw(a, (b.offsetLeft - c), (b.offsetTop - d));
    qAAABgnDWDenzWX06iPvnw(a, (b.clientWidth + (c * 2)), (b.clientHeight + (d * 2)));
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetSize
  function qAAABgnDWDenzWX06iPvnw(a, b, c)
  {
    a.width = _8AQABpT92DaiMvTduyyLZQ(new Number(b), 'px');
    a.height = _8AQABpT92DaiMvTduyyLZQ(new Number(c), 'px');
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetSize
  function qQAABgnDWDenzWX06iPvnw(a, b)
  {
    qAAABgnDWDenzWX06iPvnw(a, b.clientWidth, b.clientHeight);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.__opacity_internal
  function qgAABgnDWDenzWX06iPvnw(a0, a1) { 
            a0.filter = 'Alpha(Opacity=' + (a1 * 100) + ')';
            a0.opacity = a1;
         };
  // ScriptCoreLib.JavaScript.DOM.IStyle.set_Opacity
  function qwAABgnDWDenzWX06iPvnw(a, b)
  {
    qgAABgnDWDenzWX06iPvnw(a, b);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.__float_internal
  function rAAABgnDWDenzWX06iPvnw(a0, a1) { 
            a0.cssFloat = a1;
            a0.styleFloat = a1;
         };
  // ScriptCoreLib.JavaScript.DOM.IStyle.set_Float
  function rQAABgnDWDenzWX06iPvnw(a, b)
  {
    rAAABgnDWDenzWX06iPvnw(a, b);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetLocation
  function rgAABgnDWDenzWX06iPvnw(a, b)
  {
    pgAABgnDWDenzWX06iPvnw(a, b.Left, b.Top, b.Width, b.Height);
  };

  // ScriptCoreLib.JavaScript.DOM.IStyle.SetBackground
  function rwAABgnDWDenzWX06iPvnw(a, b, c)
  {
    var d;

    a.backgroundImage = _8wQABpT92DaiMvTduyyLZQ('url(', b, ')');
    d = !c;

    if (!d)
    {
      a.backgroundRepeat = '';
      return;
    }

    a.backgroundRepeat = 'no-repeat';
  };

  var mAAABKElBDaCL8fVK_b1reA = null;
  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.get_Default
  function mAAABqElBDaCL8fVK_b1reA()
  {
    var b, c;

    c = !(mAAABKElBDaCL8fVK_b1reA == null);

    if (!c)
    {
      mAAABKElBDaCL8fVK_b1reA = mwAABqElBDaCL8fVK_b1reA();
    }

    b = mAAABKElBDaCL8fVK_b1reA;
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.get_Rules
  function mQAABqElBDaCL8fVK_b1reA(a)
  {
    var b, c;

    c = !_9QAABtd5xTKztToDDBg08A(a, 'cssRules');

    if (!c)
    {
      b = a.cssRules;
      return b;
    }

    c = !_9QAABtd5xTKztToDDBg08A(a, 'rules');

    if (!c)
    {
      b = a.rules;
      return b;
    }

    throw BgIABszpcz2K4r_a_alajjmQ('member IStyleSheet.Rules not found');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.InternalConstructor
  function mwAABqElBDaCL8fVK_b1reA()
  {
    var b, c, d, e;

    b = _8wYABm0Q7jGQg71RtFXS1A();
    c = document.getElementsByTagName('head');
    e = !(c.length > 0);

    if (!e)
    {
      c[0].appendChild(b);
    }
    else
    {
      kAUABuKCPTKGRKjkr5dWuA(b);
    }

    d = _8QYABm0Q7jGQg71RtFXS1A(b);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.addRule
  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.insertRule
  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.AddRule
  function ngAABqElBDaCL8fVK_b1reA(a, b, c, d)
  {
    var e, f;

    f = !_9QAABtd5xTKztToDDBg08A(a, 'insertRule');

    if (!f)
    {
      a.insertRule(_9AQABpT92DaiMvTduyyLZQ(b, '{', c, '}'), d);
    }
    else
    {
      f = !_9QAABtd5xTKztToDDBg08A(a, 'addRule');

      if (!f)
      {
        a.addRule(b, c, d);
      }
      else
      {
        throw BgIABszpcz2K4r_a_alajjmQ('fault at IStyleSheetRule.AddRule');
      }

    }

    e = mQAABqElBDaCL8fVK_b1reA(a)[d];
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.AddRule
  function nwAABqElBDaCL8fVK_b1reA(a, b)
  {
    var c;

    c = ngAABqElBDaCL8fVK_b1reA(a, b, '\u002f\u002a\u002a\u002f', mQAABqElBDaCL8fVK_b1reA(a).length);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.AddRule
  function oAAABqElBDaCL8fVK_b1reA(a, b)
  {
    var c;

    c = oQAABqElBDaCL8fVK_b1reA(a, b.FQUABrKDAjqsR3PJP_ajzDw(), b.FwUABrKDAjqsR3PJP_ajzDw());
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.AddRule
  function oQAABqElBDaCL8fVK_b1reA(a, b, c)
  {
    var d, e;

    d = nwAABqElBDaCL8fVK_b1reA(a, b);
    c.Invoke(d);
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IStyleSheet.get_Owner
  function ogAABqElBDaCL8fVK_b1reA(a)
  {
    var b, c;

    c = !_9QAABtd5xTKztToDDBg08A(a, 'ownerNode');

    if (!c)
    {
      b = a.ownerNode;
      return b;
    }

    c = !_9QAABtd5xTKztToDDBg08A(a, 'owningElement');

    if (!c)
    {
      b = a.owningElement;
      return b;
    }

    throw BgIABszpcz2K4r_a_alajjmQ('fault at IStyleSheet.Owner');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1
  function KCVs5nuf6DS_agqrBuEfFdw(){};
  KCVs5nuf6DS_agqrBuEfFdw.TypeName = "Collection_1";
  KCVs5nuf6DS_agqrBuEfFdw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$KCVs5nuf6DS_agqrBuEfFdw = KCVs5nuf6DS_agqrBuEfFdw.prototype;
  type$KCVs5nuf6DS_agqrBuEfFdw = KCVs5nuf6DS_agqrBuEfFdw.prototype =   {
    constructor: KCVs5nuf6DS_agqrBuEfFdw,
    items: null
  }
;
  var basector$KCVs5nuf6DS_agqrBuEfFdw = $ctor$(null, null, type$KCVs5nuf6DS_agqrBuEfFdw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1..ctor
  type$KCVs5nuf6DS_agqrBuEfFdw.ewAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this;

    a.items = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
  };
  var ctor$ewAABnuf6DS_agqrBuEfFdw = KCVs5nuf6DS_agqrBuEfFdw.ctor = $ctor$(null, 'ewAABnuf6DS_agqrBuEfFdw', type$KCVs5nuf6DS_agqrBuEfFdw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.global::System.Collections.IEnumerable.GetEnumerator
  type$KCVs5nuf6DS_agqrBuEfFdw.kAAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.InsertItemBody
  type$KCVs5nuf6DS_agqrBuEfFdw.fAAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.items.whkABiRqbTmIbxb0k2jSqw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.InsertItem
  type$KCVs5nuf6DS_agqrBuEfFdw.fQAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.fAAABnuf6DS_agqrBuEfFdw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.SetItemBody
  type$KCVs5nuf6DS_agqrBuEfFdw.fgAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.items.wBkABiRqbTmIbxb0k2jSqw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.SetItem
  type$KCVs5nuf6DS_agqrBuEfFdw.fwAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.fgAABnuf6DS_agqrBuEfFdw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.Add
  type$KCVs5nuf6DS_agqrBuEfFdw.gAAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this, c;

    c = a.items.DBkABnTAkDm_aGe9ZbsQrAQ();
    a.fQAABnuf6DS_agqrBuEfFdw(c, b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.Clear
  type$KCVs5nuf6DS_agqrBuEfFdw.gQAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this;

    a.ggAABnuf6DS_agqrBuEfFdw();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.ClearItems
  type$KCVs5nuf6DS_agqrBuEfFdw.ggAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this;

    a.items.DxkABnTAkDm_aGe9ZbsQrAQ();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.Remove
  type$KCVs5nuf6DS_agqrBuEfFdw.gwAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this, c, d, e;

    c = a.items.wRkABiRqbTmIbxb0k2jSqw(b);
    e = (c < 0);

    if (!e)
    {
      a.hQAABnuf6DS_agqrBuEfFdw(c);
      d = 1;
      return d;
    }

    d = 0;
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.RemoveItemBody
  type$KCVs5nuf6DS_agqrBuEfFdw.hAAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this;

    a.items.wxkABiRqbTmIbxb0k2jSqw(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.RemoveItem
  type$KCVs5nuf6DS_agqrBuEfFdw.hQAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this;

    a.hAAABnuf6DS_agqrBuEfFdw(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.IndexOf
  type$KCVs5nuf6DS_agqrBuEfFdw.hgAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this, c;

    c = a.items.wRkABiRqbTmIbxb0k2jSqw(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.Insert
  type$KCVs5nuf6DS_agqrBuEfFdw.hwAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.fQAABnuf6DS_agqrBuEfFdw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.RemoveAt
  type$KCVs5nuf6DS_agqrBuEfFdw.iAAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this;

    a.hQAABnuf6DS_agqrBuEfFdw(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.get_Item
  type$KCVs5nuf6DS_agqrBuEfFdw.iQAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this, c;

    c = a.items.vxkABiRqbTmIbxb0k2jSqw(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.set_Item
  type$KCVs5nuf6DS_agqrBuEfFdw.igAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.fwAABnuf6DS_agqrBuEfFdw(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.Contains
  type$KCVs5nuf6DS_agqrBuEfFdw.iwAABnuf6DS_agqrBuEfFdw = function (b)
  {
    var a = this, c;

    c = a.items.EBkABnTAkDm_aGe9ZbsQrAQ(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.CopyTo
  type$KCVs5nuf6DS_agqrBuEfFdw.jAAABnuf6DS_agqrBuEfFdw = function (b, c)
  {
    var a = this;

    a.items.ERkABnTAkDm_aGe9ZbsQrAQ(b, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.get_Count
  type$KCVs5nuf6DS_agqrBuEfFdw.jQAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this, b;

    b = a.items.DBkABnTAkDm_aGe9ZbsQrAQ();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.get_IsReadOnly
  type$KCVs5nuf6DS_agqrBuEfFdw.jgAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this, b;

    b = a.items.DRkABnTAkDm_aGe9ZbsQrAQ();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1.GetEnumerator
  type$KCVs5nuf6DS_agqrBuEfFdw.jwAABnuf6DS_agqrBuEfFdw = function ()
  {
    var a = this, b;

    b = a.items.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.ObjectModel.__Collection`1
  (function (i)  {
    i.vxkABiRqbTmIbxb0k2jSqw = i.iQAABnuf6DS_agqrBuEfFdw;
    i.wBkABiRqbTmIbxb0k2jSqw = i.igAABnuf6DS_agqrBuEfFdw;
    i.wRkABiRqbTmIbxb0k2jSqw = i.hgAABnuf6DS_agqrBuEfFdw;
    i.whkABiRqbTmIbxb0k2jSqw = i.hwAABnuf6DS_agqrBuEfFdw;
    i.wxkABiRqbTmIbxb0k2jSqw = i.iAAABnuf6DS_agqrBuEfFdw;
    // 
    i.DBkABnTAkDm_aGe9ZbsQrAQ = i.jQAABnuf6DS_agqrBuEfFdw;
    i.DRkABnTAkDm_aGe9ZbsQrAQ = i.jgAABnuf6DS_agqrBuEfFdw;
    i.DhkABnTAkDm_aGe9ZbsQrAQ = i.gAAABnuf6DS_agqrBuEfFdw;
    i.DxkABnTAkDm_aGe9ZbsQrAQ = i.gQAABnuf6DS_agqrBuEfFdw;
    i.EBkABnTAkDm_aGe9ZbsQrAQ = i.iwAABnuf6DS_agqrBuEfFdw;
    i.ERkABnTAkDm_aGe9ZbsQrAQ = i.jAAABnuf6DS_agqrBuEfFdw;
    i.EhkABnTAkDm_aGe9ZbsQrAQ = i.gwAABnuf6DS_agqrBuEfFdw;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.jwAABnuf6DS_agqrBuEfFdw;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.kAAABnuf6DS_agqrBuEfFdw;
  }
  )(type$KCVs5nuf6DS_agqrBuEfFdw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debug
  function oCU3_bDWf_bDqCFnRGNHTfuA(){};
  oCU3_bDWf_bDqCFnRGNHTfuA.TypeName = "Debug";
  oCU3_bDWf_bDqCFnRGNHTfuA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$oCU3_bDWf_bDqCFnRGNHTfuA = oCU3_bDWf_bDqCFnRGNHTfuA.prototype;
  var basector$oCU3_bDWf_bDqCFnRGNHTfuA = $ctor$(null, null, type$oCU3_bDWf_bDqCFnRGNHTfuA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debug..ctor
  type$oCU3_bDWf_bDqCFnRGNHTfuA.egAABjWf_bDqCFnRGNHTfuA = function ()
  {
    var a = this;

  };
  var ctor$egAABjWf_bDqCFnRGNHTfuA = oCU3_bDWf_bDqCFnRGNHTfuA.ctor = $ctor$(null, 'egAABjWf_bDqCFnRGNHTfuA', type$oCU3_bDWf_bDqCFnRGNHTfuA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debug.Assert
  function eAAABjWf_bDqCFnRGNHTfuA(b)
  {
    var c;

    c = b;

    if (!c)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('Assert failed');
    }

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Diagnostics.__Debug.Assert
  function eQAABjWf_bDqCFnRGNHTfuA(b, c)
  {
    var d;

    d = b;

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ(_8gQABpT92DaiMvTduyyLZQ('Assert failed: ', c));
    }

  };

  // ScriptCoreLib.JavaScript.DOM.ISink+EventNames
  function _1lN3JeC1pT24HkIKQVsIlA(){};
  _1lN3JeC1pT24HkIKQVsIlA.TypeName = "EventNames";
  _1lN3JeC1pT24HkIKQVsIlA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_1lN3JeC1pT24HkIKQVsIlA = _1lN3JeC1pT24HkIKQVsIlA.prototype;
  type$_1lN3JeC1pT24HkIKQVsIlA = _1lN3JeC1pT24HkIKQVsIlA.prototype =   {
    constructor: _1lN3JeC1pT24HkIKQVsIlA,
    EventListener: null,
    EventListenerAlt: null,
    Event: null,
    EventAlt: null
  }
;
  var basector$_1lN3JeC1pT24HkIKQVsIlA = $ctor$(null, null, type$_1lN3JeC1pT24HkIKQVsIlA);
  // ScriptCoreLib.JavaScript.DOM.ISink+EventNames..ctor
  type$_1lN3JeC1pT24HkIKQVsIlA.GQAABuC1pT24HkIKQVsIlA = function ()
  {
    var a = this;

  };
  var ctor$GQAABuC1pT24HkIKQVsIlA = _1lN3JeC1pT24HkIKQVsIlA.ctor = $ctor$(null, 'GQAABuC1pT24HkIKQVsIlA', type$_1lN3JeC1pT24HkIKQVsIlA);

  // ScriptCoreLib.JavaScript.DOM.ISink.InternalEvent
  function DwAABuRCAjuJ6J_b8mhba5w(a, b, c, d)
  {
    var e, f;

    try
    {
      e = c.InvokePointer;
      f = !b;

      if (!f)
      {
        f = !_9QAABtd5xTKztToDDBg08A(a, 'addEventListener');

        if (!f)
        {
          a.addEventListener(d.EventListener, e, 0);
          f = (d.EventListenerAlt == null);

          if (!f)
          {
            a.addEventListener(d.EventListenerAlt, e, 0);
          }

        }

        f = !_9QAABtd5xTKztToDDBg08A(a, 'attachEvent');

        if (!f)
        {
          a.attachEvent(d.Event, e);
          f = (d.EventAlt == null);

          if (!f)
          {
            a.attachEvent(d.EventAlt, e);
          }

        }

        return;
      }

      f = !_9QAABtd5xTKztToDDBg08A(a, 'removeEventListener');

      if (!f)
      {
        a.removeEventListener(d.EventListener, e, 0);
        f = (d.EventListenerAlt == null);

        if (!f)
        {
          a.removeEventListener(d.EventListenerAlt, e, 0);
        }

      }

      f = !_9QAABtd5xTKztToDDBg08A(a, 'detachEvent');

      if (!f)
      {
        a.detachEvent(d.Event, e);
        f = (d.EventAlt == null);

        if (!f)
        {
          a.detachEvent(d.EventAlt, e);
        }

      }

    }
    catch (_ne) {}
  };

  // ScriptCoreLib.JavaScript.DOM.ISink.InternalEvent
  function EAAABuRCAjuJ6J_b8mhba5w(a, b, c, d, e)
  {
    var f;

    try
    {
      f = new ctor$GQAABuC1pT24HkIKQVsIlA();
      f.Event = e;
      f.EventListener = d;
      DwAABuRCAjuJ6J_b8mhba5w(a, b, c, f);
    }
    catch (_ne) {}
  };

  // ScriptCoreLib.JavaScript.DOM.ISink.InternalEvent
  function EQAABuRCAjuJ6J_b8mhba5w(a, b, c, d)
  {
    try
    {
      EAAABuRCAjuJ6J_b8mhba5w(a, b, c, d, _8gQABpT92DaiMvTduyyLZQ('on', d));
    }
    catch (_ne) {}
  };

  // ScriptCoreLib.JavaScript.DOM.ISink.attachEvent
  // ScriptCoreLib.JavaScript.DOM.ISink.detachEvent
  // ScriptCoreLib.JavaScript.DOM.ISink.addEventListener
  function FAAABuRCAjuJ6J_b8mhba5w(a, b, c, d)
  {
    a.addEventListener(b, c.InvokePointer, d);
  };

  // ScriptCoreLib.JavaScript.DOM.ISink.removeEventListener
  function FQAABuRCAjuJ6J_b8mhba5w(a, b, c, d)
  {
    a.removeEventListener(b, c.InvokePointer, d);
  };

  // ScriptCoreLib.JavaScript.DOM.ISink.addEventListener
  // ScriptCoreLib.JavaScript.DOM.ISink.removeEventListener
  // ScriptCoreLib.JavaScript.DOM.INode.get_text
  function GwAABtvq0jCU0R1GsbOa4g(a)
  {
    var b, c, d;

    b = a;
    d = !_9QAABtd5xTKztToDDBg08A(b, 'text');

    if (!d)
    {
      c = b.text;
      return c;
    }

    d = !_9QAABtd5xTKztToDDBg08A(b, 'textContent');

    if (!d)
    {
      c = b.textContent;
      return c;
    }

    throw BgIABszpcz2K4r_a_alajjmQ('.text');
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.INode.cloneNode
  // ScriptCoreLib.JavaScript.DOM.INode.appendChild
  // ScriptCoreLib.JavaScript.DOM.INode.insertBefore
  // ScriptCoreLib.JavaScript.DOM.INode.insertPreviousSibling
  function HwAABtvq0jCU0R1GsbOa4g(a, b)
  {
    a.parentNode.insertBefore(b, a);
  };

  // ScriptCoreLib.JavaScript.DOM.INode.insertNextSibling
  function IAAABtvq0jCU0R1GsbOa4g(a, b)
  {
    var c;

    c = !(a.nextSibling == null);

    if (!c)
    {
      a.parentNode.appendChild(b);
      return;
    }

    HwAABtvq0jCU0R1GsbOa4g(a.nextSibling, b);
  };

  // ScriptCoreLib.JavaScript.DOM.INode.appendChild
  function IQAABtvq0jCU0R1GsbOa4g(a, b)
  {
    var c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      a.appendChild(c);
    }

  };

  // ScriptCoreLib.JavaScript.DOM.INode.appendChild
  function IgAABtvq0jCU0R1GsbOa4g(a, b)
  {
    var c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      a.appendChild(lgAABsR3Rz_a88wmXX2r7qw(a.ownerDocument, c));
    }

  };

  // ScriptCoreLib.JavaScript.DOM.INode.removeChild
  // ScriptCoreLib.JavaScript.DOM.IDocument.appendChild
  function GQEABiARdjyjDnv7Flb1qQ(a, b)
  {
    throw BgIABszpcz2K4r_a_alajjmQ('IDocument.appendChild is forbidden');
  };

  // ScriptCoreLib.JavaScript.DOM.IDocument.createTextNode
  // ScriptCoreLib.JavaScript.DOM.IDocument.hasChildNodes
  // ScriptCoreLib.JavaScript.DOM.IDocument`1.createElementNS
  // ScriptCoreLib.JavaScript.DOM.IDocument`1.createElement
  // ScriptCoreLib.JavaScript.DOM.IDocument`1.getElementsByTagName
  // ScriptCoreLib.JavaScript.DOM.IDocument`1.getElementById
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.selectSingleNode
  function agMABtsSrjyg1Cv12d3t0g(a, b)
  {
    var c, d, e, f;

    c = a;
    e = !GQQABpa5RDScaJjrjEx6Gg();

    if (!e)
    {
      d = c.selectSingleNode(b);
      return d;
    }

    e = !_9QAABtd5xTKztToDDBg08A(a, 'selectSingleNode');

    if (!e)
    {
      d = c.selectSingleNode(b);
      return d;
    }

    f = [
      b
    ];
    d = new Function('elementPath', '\u000d\u000a       var xpe = new XPathEvaluator();\u000d\u000a           var nsResolver = xpe.createNSResolver( this.ownerDocument == null ? this.documentElement : this.ownerDocument.documentElement);\u000d\u000a           var results = xpe.evaluate(elementPath,this,nsResolver,XPathResult.FIRST_ORDERED_NODE_TYPE, null);\u000d\u000a           return results.singleNodeValue;             \u000d\u000a            ').apply(a, f);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.selectNodes
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.InternalConstructor
  function bAMABtsSrjyg1Cv12d3t0g(name) { 
try
{
            return document.implementation.createDocument('', name, null);
}
catch (ex)
{
var z = new ActiveXObject('Microsoft.XMLDOM');
    z.documentElement = z.createElement(name);

            return z;
}


         };
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.ToXMLString
  function bQMABtsSrjyg1Cv12d3t0g(node) { 

  if (typeof XMLSerializer != 'undefined') {
    return new XMLSerializer().serializeToString(node);
  }
  else if (typeof node.xml != 'undefined') {
    return node.xml;
  }
  else {
    return '';
  }
 };
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.Parse
  function bgMABtsSrjyg1Cv12d3t0g(xml) { 

 var xmlDocument = null;
  if (typeof DOMParser != 'undefined') {
    xmlDocument = new DOMParser().parseFromString(xml,
'application/xml');
  }
  else if (typeof ActiveXObject != 'undefined') {
    /*@cc_on @*/
    /*@if (@_jscript_version >= 5)
    try {
      xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
      xmlDocument.loadXML(xml);
    }
    catch (e) { }
    @end @*/  
  }
  return xmlDocument;
 };
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLDocument.ToXMLString
  function bwMABtsSrjyg1Cv12d3t0g(a)
  {
    var b;

    b = bQMABtsSrjyg1Cv12d3t0g(a.documentElement);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.ITextNode.InternalConstructor
  function lAAABsR3Rz_a88wmXX2r7qw()
  {
    var b;

    b = lQAABsR3Rz_a88wmXX2r7qw('');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.ITextNode.InternalConstructor
  function lQAABsR3Rz_a88wmXX2r7qw(b)
  {
    var c;

    c = lgAABsR3Rz_a88wmXX2r7qw(document, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.ITextNode.InternalConstructor
  function lgAABsR3Rz_a88wmXX2r7qw(b, c)
  {
    var d;

    d = b.createTextNode(c);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IElement.setAttributeNS
  // ScriptCoreLib.JavaScript.DOM.IElement.setAttribute
  // ScriptCoreLib.JavaScript.DOM.IElement.getAttribute
  // ScriptCoreLib.JavaScript.DOM.IElement.hasAttribute
  // ScriptCoreLib.JavaScript.DOM.IElement.removeAttribute
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLElement.InternalConstructor
  function mQIABluHGDGhrmpOYXsYRA(b, c, d)
  {
    var e, f, g;

    e = b.createElement(c);
    g = !(d.length > 0);

    if (!g)
    {
      IQAABtvq0jCU0R1GsbOa4g(e, d);
    }

    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLElement.InternalConstructor
  function mgIABluHGDGhrmpOYXsYRA(b, c, d)
  {
    var e, f, g;

    e = b.createElement(c);
    g = (d == null);

    if (!g)
    {
      e.appendChild(lgAABsR3Rz_a88wmXX2r7qw(b, d));
    }

    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLElement.get_outerXML
  function mwIABluHGDGhrmpOYXsYRA(a)
  {
    var b;

    b = bQMABtsSrjyg1Cv12d3t0g(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLElement.get_innerXML
  function nAIABluHGDGhrmpOYXsYRA(a)
  {
    var b, c, d, e, f, g;

    b = uAEABh33sTm5Ql7VEPKRUg();
    e = a.childNodes;

    for (f = 0; (f < e.length); f++)
    {
      c = e[f];
      b.push(mwIABluHGDGhrmpOYXsYRA(c));
    }

    d = b.join();
    return d;
  };

  var MAAABAAjajq2ygojxk6uUQ = 0;
  var MQAABAAjajq2ygojxk6uUQ = null;
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function MQAABgAjajq2ygojxk6uUQ()
  {
    var b, c;

    c = [];
    b = NgAABgAjajq2ygojxk6uUQ(c);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function MgAABgAjajq2ygojxk6uUQ(b)
  {
    var c;

    c = document.createElement(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function MwAABgAjajq2ygojxk6uUQ(b)
  {
    var c;

    c = NQAABgAjajq2ygojxk6uUQ(b, null, null);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function NAAABgAjajq2ygojxk6uUQ(b, c)
  {
    var d;

    d = NQAABgAjajq2ygojxk6uUQ(b, c, null);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function NQAABgAjajq2ygojxk6uUQ(b, c, d)
  {
    var e, f, g, h;

    e = (!(d) ? document : d);
    f = e.createElement(b);
    h = (c == null);

    if (!h)
    {
      f.appendChild(lQAABsR3Rz_a88wmXX2r7qw(c));
    }

    g = f;
    return g;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function NgAABgAjajq2ygojxk6uUQ(b)
  {
    var c;

    c = NwAABgAjajq2ygojxk6uUQ('div', b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalConstructor
  function NwAABgAjajq2ygojxk6uUQ(b, c)
  {
    var d, e;

    d = NQAABgAjajq2ygojxk6uUQ(b, null, null);
    IQAABtvq0jCU0R1GsbOa4g(d, c);
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.get_innerText
  function OAAABgAjajq2ygojxk6uUQ(a)
  {
    var b, c;

    c = !(a.childNodes.length == 1);

    if (!c)
    {
      c = !(a.childNodes[0].nodeType == 3);

      if (!c)
      {
        b = a.childNodes[0].nodeValue;
        return b;
      }

    }

    b = '';
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.set_innerText
  function OQAABgAjajq2ygojxk6uUQ(a, b)
  {
    var c, d;

    c = null;
    d = !!a.childNodes.length;

    if (!d)
    {
      c = lAAABsR3Rz_a88wmXX2r7qw();
      a.appendChild(c);
    }
    else
    {
      d = !(a.childNodes.length == 1);

      if (!d)
      {
        d = !(a.childNodes[0].nodeType == 3);

        if (!d)
        {
          c = a.childNodes[0];
        }
        else
        {
          ZwAABgAjajq2ygojxk6uUQ(a);
          c = lAAABsR3Rz_a88wmXX2r7qw();
          a.appendChild(c);
        }

      }
      else
      {
        ZwAABgAjajq2ygojxk6uUQ(a);
        c = lAAABsR3Rz_a88wmXX2r7qw();
        a.appendChild(c);
      }

    }

    c.nodeValue = b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.op_Implicit
  function OgAABgAjajq2ygojxk6uUQ(b)
  {
    var c;

    c = b.style;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.blur
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.focus
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.SetCenteredLocation
  function PQAABgAjajq2ygojxk6uUQ(a, b)
  {
    PgAABgAjajq2ygojxk6uUQ(a, b.X, b.Y);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.SetCenteredLocation
  function PgAABgAjajq2ygojxk6uUQ(a, b, c)
  {
    a.style.position = 'absolute';
    pQAABgnDWDenzWX06iPvnw(a.style, (b - (a.clientWidth / 2)), (c - (a.clientHeight / 2)));
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onclick
  function PwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'click');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onclick
  function QAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'click');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_ondblclick
  function QQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'dblclick');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_ondblclick
  function QgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'dblclick');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmouseover
  function QwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseover');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmouseover
  function RAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseover');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmouseout
  function RQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseout');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmouseout
  function RgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseout');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmousedown
  function RwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mousedown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmousedown
  function SAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mousedown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmouseup
  function SQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmouseup
  function SgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmousemove
  function SwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mousemove');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmousemove
  function TAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mousemove');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onmousewheel
  function TQAABgAjajq2ygojxk6uUQ(a, b)
  {
    var c;

    c = new ctor$GQAABuC1pT24HkIKQVsIlA();
    c.Event = 'onmousewheel';
    c.EventListener = 'DOMMouseScroll';
    c.EventListenerAlt = 'mousewheel';
    DwAABuRCAjuJ6J_b8mhba5w(a, 1, b, c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onmousewheel
  function TgAABgAjajq2ygojxk6uUQ(a, b)
  {
    var c;

    c = new ctor$GQAABuC1pT24HkIKQVsIlA();
    c.Event = 'onmousewheel';
    c.EventListener = 'DOMMouseScroll';
    c.EventListenerAlt = 'mousewheel';
    DwAABuRCAjuJ6J_b8mhba5w(a, 0, b, c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_oncontextmenu
  function TwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'contextmenu');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_oncontextmenu
  function UAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'contextmenu');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onselectstart
  function UQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'selectstart');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onselectstart
  function UgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'selectstart');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onscroll
  function UwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'scroll');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onscroll
  function VAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'scroll');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onresize
  function VQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'resize');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onresize
  function VgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'resize');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_ondragdrop
  function VwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'dragdrop');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_ondragdrop
  function WAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'dragdrop');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onchange
  function WQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'change');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onchange
  function WgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'change');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onfocus
  function WwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'focus');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onfocus
  function XAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'focus');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onblur
  function XQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'blur');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onblur
  function XgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'blur');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onkeypress
  function XwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keypress');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onkeypress
  function YAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keypress');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onkeyup
  function YQAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keyup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onkeyup
  function YgAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keyup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.add_onkeydown
  function YwAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keydown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.remove_onkeydown
  function ZAAABgAjajq2ygojxk6uUQ(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keydown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.EnsureID
  function ZQAABgAjajq2ygojxk6uUQ(a)
  {
    var b;

    b = !CQUABpT92DaiMvTduyyLZQ(a.id, '');

    if (!b)
    {
      MAAABAAjajq2ygojxk6uUQ = (MAAABAAjajq2ygojxk6uUQ + 1);
      a.id = _8QQABpT92DaiMvTduyyLZQ(a.id, '$', new Number(MAAABAAjajq2ygojxk6uUQ));
    }

  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.ScrollToBottom
  function ZgAABgAjajq2ygojxk6uUQ(a)
  {
    a.scrollTop = (a.scrollHeight - a.clientHeight);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.removeChildren
  function ZwAABgAjajq2ygojxk6uUQ(a)
  {
    var b;

    while (!(a.firstChild == null))
    {
      a.removeChild(a.firstChild);
    }
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.FadeOut
  function aAAABgAjajq2ygojxk6uUQ(a)
  {
    rAYABsDFqTWU1aKDRaVUFw(a);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.replaceChildrenWith
  function aQAABgAjajq2ygojxk6uUQ(a, b)
  {
    var c;

    ZwAABgAjajq2ygojxk6uUQ(a);
    c = [
      b
    ];
    IgAABtvq0jCU0R1GsbOa4g(a, c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.DisableSelection
  function agAABgAjajq2ygojxk6uUQ(a)
  {
    RwAABgAjajq2ygojxk6uUQ(a, EQYABoBglTi7pLOKu9nnAQ());
    UQAABgAjajq2ygojxk6uUQ(a, EQYABoBglTi7pLOKu9nnAQ());
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.EnableSelection
  function awAABgAjajq2ygojxk6uUQ(a)
  {
    SAAABgAjajq2ygojxk6uUQ(a, EQYABoBglTi7pLOKu9nnAQ());
    UgAABgAjajq2ygojxk6uUQ(a, EQYABoBglTi7pLOKu9nnAQ());
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.get_Bounds
  function bAAABgAjajq2ygojxk6uUQ(a)
  {
    var b, c;

    b = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    b.Left = a.offsetLeft;
    b.Top = a.offsetTop;
    b.Width = a.scrollWidth;
    b.Height = a.scrollHeight;
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.DisableContextMenu
  function bQAABgAjajq2ygojxk6uUQ(a)
  {
    TwAABgAjajq2ygojxk6uUQ(a, EQYABoBglTi7pLOKu9nnAQ());
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.setCapture
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.releaseCapture
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.InternalCaptureMouse
  function cAAABgAjajq2ygojxk6uUQ(b)
  {
    var c, d, e, f, g, h, i;

    d = null;
    e = /* DOMCreateType */new GheAD_bL_bnDmFIZYC9hcUyQ();
    e.self = b;
    g = !CAEABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(e.self), 'setCapture');

    if (!g)
    {
      e.self.setCapture();

      if (!d)
      {
        d = new ctor$fwMABv596j_aor3Vx6iAI2g(e, '_InternalCaptureMouse_b__3');
      }

      f = d;
      return f;
    }

    e.flag = 0;
    e._capture = new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_InternalCaptureMouse_b__4');
    h = MQAABAAjajq2ygojxk6uUQ;

    for (i = 0; (i < h.length); i++)
    {
      c = h[i];
      FAAABuRCAjuJ6J_b8mhba5w(window, c, e._capture, 1);
    }

    f = new ctor$fwMABv596j_aor3Vx6iAI2g(e, '_InternalCaptureMouse_b__5');
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.CaptureMouse
  function cQAABgAjajq2ygojxk6uUQ(a)
  {
    var b;

    b = cAAABgAjajq2ygojxk6uUQ(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement.dispatchEvent
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLObject.InternalConstructor
  function tAMABgrQfzavXWW5fVDGBg()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('object');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLObject.Play
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLForm.InternalConstructor
  function sQMABkvsmDuXMUqcoEvlrA()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('form');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLForm.submit
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.AddRow
  function qgMABn8_bAjWfY82YILq2qw(a, b)
  {
    var c, d;

    d = [
      lQAABsR3Rz_a88wmXX2r7qw(b)
    ];
    c = qwMABn8_bAjWfY82YILq2qw(a, d);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.AddRow
  function qwMABn8_bAjWfY82YILq2qw(a, b)
  {
    var c, d, e, f, g, h, i, j;

    c = rgMABn8_bAjWfY82YILq2qw(a);
    h = b;

    for (i = 0; (i < h.length); i++)
    {
      d = h[i];
      e = LwYABtJBHjyxY_azsMvEMIQ();
      f = _9AAABtd5xTKztToDDBg08A(d);
      j = !(d == null);

      if (!j)
      {
      }
      else
      {
        j = !_6gAABtd5xTKztToDDBg08A(f);

        if (!j)
        {
          e.innerHTML = _3QAABtd5xTKztToDDBg08A(f);
        }
        else
        {
          e.appendChild(_3gAABtd5xTKztToDDBg08A(f));
        }

      }

      c.appendChild(e);
    }

    g = c;
    return g;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.AddRowAsColumns
  function rAMABn8_bAjWfY82YILq2qw(a, b)
  {
    var c, d, e, f;

    c = [];

    for (d = 0; (d < b.length); d++)
    {
      c[d] = lQAABsR3Rz_a88wmXX2r7qw(b[d]);
    }

    e = rQMABn8_bAjWfY82YILq2qw(a, c);
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.AddRowAsColumns
  function rQMABn8_bAjWfY82YILq2qw(a, b)
  {
    var c, d, e, f, g, h, i, j, k;

    c = [];
    d = rgMABn8_bAjWfY82YILq2qw(a);
    e = 0;
    i = b;

    for (j = 0; (j < i.length); j++)
    {
      f = i[j];
      g = LwYABtJBHjyxY_azsMvEMIQ();
      c[e++] = g;
      k = (f == null);

      if (!k)
      {
        g.appendChild(f);
      }

      d.appendChild(g);
    }

    h = c;
    return h;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.AddRow
  function rgMABn8_bAjWfY82YILq2qw(a)
  {
    var b, c;

    b = xwcABoNqKzyP9U_b3lcb_b_aw();
    a.appendChild(b);
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableBody.InternalConstructor
  function rwMABn8_bAjWfY82YILq2qw()
  {
    var b;

    b = document.createElement('tbody');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLMap.InternalConstructor
  function PQIABoZUdzqjPtYIQ3puUA()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('map');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLParam.InternalConstructor
  function OwIABqkk6jSdcmyPj4IrNg()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('param');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLApplet.InternalConstructor
  function AwIABj_ajtDmChXLhA_bF0Ag()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('applet');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElementTemplate.InternalConstructor
  function __aAEABrUUADKiOtyeP0igoQ() {  };
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTextArea.get_Lines
  function _8gEABrfjyTycktmZuHEM2g(a)
  {
    var b;

    b = zAEABh33sTm5Ql7VEPKRUg(a.value);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTextArea.InternalConstructor
  function _9QEABrfjyTycktmZuHEM2g()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('textarea');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTextArea.InternalConstructor
  function _9gEABrfjyTycktmZuHEM2g(b)
  {
    var c, d;

    c = _9QEABrfjyTycktmZuHEM2g();
    c.value = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.GetInteger
  function _5AEABkKBcDiG_aQKQkaqWEA(a)
  {
    var b;

    b = mwUABgPTBzS7KLCa_bUzFsA(a.value);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.GetDouble
  function _5QEABkKBcDiG_aQKQkaqWEA(a)
  {
    var b;

    b = QgMABjlSSjyYW_bdV9BZBCQ(a.value);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.get_IsInteger
  function _5gEABkKBcDiG_aQKQkaqWEA(a)
  {
    var b;

    b = !(vAUABsSpujGcYl3t9rOOPw().exec(a.value) == null);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.get_IsCurrency
  function _5wEABkKBcDiG_aQKQkaqWEA(a)
  {
    var b;

    b = !(vQUABsSpujGcYl3t9rOOPw().exec(a.value) == null);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.InternalConstructor
  function _7AEABkKBcDiG_aQKQkaqWEA()
  {
    var b;

    b = document.createElement('input');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.InternalConstructor
  function _7QEABkKBcDiG_aQKQkaqWEA(b)
  {
    var c, d, e, f, g;

    c = null;
    d = 'radio';
    f = !(b == d);

    if (!f)
    {
      g = [
        '<input type=\'radio\' name=\'\' value=\'\' \u002f>'
      ];
      c = new Function('e', '\u002f\u002a\u0040cc_on return this.createElement(e); \u0040\u002a\u002f return null;').apply(document, g);
    }

    f = !(c == null);

    if (!f)
    {
      c = _7AEABkKBcDiG_aQKQkaqWEA();
      c.type = b;
    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.InternalConstructor
  function _7gEABkKBcDiG_aQKQkaqWEA(b, c)
  {
    var d, e;

    d = _7QEABkKBcDiG_aQKQkaqWEA(b);
    d.value = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.InternalConstructor
  function _7wEABkKBcDiG_aQKQkaqWEA(b, c, d)
  {
    var e, f, g, h, i, j;

    e = null;
    f = 'radio';
    h = !(b == f);

    if (!h)
    {
      i = [];
      j = [
        '<input type=\'radio\' name=\'',
        c,
        '\' value=\'',
        d,
        '\' \u002f>'
      ];
      i[0] = _7gQABpT92DaiMvTduyyLZQ(j);
      e = new Function('e', '\u002f\u002a\u0040cc_on return this.createElement(e); \u0040\u002a\u002f return null;').apply(document, i);
    }

    h = !(e == null);

    if (!h)
    {
      e = _7AEABkKBcDiG_aQKQkaqWEA();
      e.type = b;
      e.name = c;
      e.value = d;
    }

    g = e;
    return g;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.CreateRadio
  function _8AEABkKBcDiG_aQKQkaqWEA(b, c, d)
  {
    var e, f, g, h, i, j;

    e = null;
    f = '';
    h = !d;

    if (!h)
    {
      f = ' checked=\'checked\'';
    }

    i = [];
    j = [
      '<input type=\'radio\' name=\'',
      b,
      '\' value=\'',
      c,
      '\'',
      f,
      ' \u002f>'
    ];
    i[0] = _7gQABpT92DaiMvTduyyLZQ(j);
    e = new Function('e', '\u002f\u002a\u0040cc_on return this.createElement(e); \u0040\u002a\u002f return null;').apply(document, i);
    h = !(e == null);

    if (!h)
    {
      e = _7wEABkKBcDiG_aQKQkaqWEA('radio', b, c);
      e.checked = d;
    }

    g = e;
    return g;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLInput.CreateCheckbox
  function _8QEABkKBcDiG_aQKQkaqWEA(b)
  {
    var c, d;

    c = _7QEABkKBcDiG_aQKQkaqWEA('checkbox');
    c.title = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLabel.InternalConstructor
  function JQEABiFg2TaIeNUnvGpGAA()
  {
    var b;

    b = document.createElement('label');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLabel.InternalConstructor
  function JgEABiFg2TaIeNUnvGpGAA(b)
  {
    var c, d, e;

    c = JQEABiFg2TaIeNUnvGpGAA();
    e = [
      b
    ];
    IgAABtvq0jCU0R1GsbOa4g(c, e);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLabel.InternalConstructor
  function JwEABiFg2TaIeNUnvGpGAA(b, c)
  {
    var d, e;

    d = JgEABiFg2TaIeNUnvGpGAA(b);
    ZQAABgAjajq2ygojxk6uUQ(c);
    d.htmlFor = c.id;
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.InternalConstructor
  function tAAABrjicT6QHyVOJrkEhA(b)
  {
    var c, d, e;

    try
    {
      c = new Image();
      c.src = b;
      e = c;
    }
    catch (__exc)
    {
      d = _8wQABpT92DaiMvTduyyLZQ('image failed to load: [', b, ']');
      awQABh78uTmU7_bAOPst6lA(d);
      throw BgIABszpcz2K4r_a_alajjmQ(d);
    }
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.add_onerror
  function tQAABrjicT6QHyVOJrkEhA(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'error');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.remove_onerror
  function tgAABrjicT6QHyVOJrkEhA(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'error');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.op_Implicit
  function twAABrjicT6QHyVOJrkEhA(b)
  {
    var c;

    c = tAAABrjicT6QHyVOJrkEhA(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.InvokeOnComplete
  function uAAABrjicT6QHyVOJrkEhA(a, b)
  {
    uQAABrjicT6QHyVOJrkEhA(a, b, 100);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.InvokeOnComplete
  function uQAABrjicT6QHyVOJrkEhA(a, b, c)
  {
    var d;

    d = /* DOMCreateType */new IPZmCyd8TDaYZ4lwXmTuUQ();
    d.e = b;
    d.__4__this = a;
    d.t = new ctor$hgQABtY33j68H_aZQYc4FRw();
    d.t.hAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_InvokeOnComplete_b__0'));
    d.t.jgQABtY33j68H_aZQYc4FRw(c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.Reload
  function ugAABrjicT6QHyVOJrkEhA(a)
  {
    var b;

    b = a.src;
    a.src = b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.ToDocumentBackground
  function uwAABrjicT6QHyVOJrkEhA(a)
  {
    vAAABrjicT6QHyVOJrkEhA(a, document.body.style);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.ToBackground
  function vAAABrjicT6QHyVOJrkEhA(a, b)
  {
    vQAABrjicT6QHyVOJrkEhA(a, b, 1);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage.ToBackground
  function vQAABrjicT6QHyVOJrkEhA(a, b, c)
  {
    rwAABgnDWDenzWX06iPvnw(b, a.src, c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLIFrame.InternalConstructor
  function dQAABl_a9AjS6RSHct9WG_ag()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('iframe');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLIFrame.add_onload
  function dgAABl_a9AjS6RSHct9WG_ag(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'load');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLIFrame.remove_onload
  function dwAABl_a9AjS6RSHct9WG_ag(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'load');
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool+EntryItem
  function HE_bSDEb_aqDOEejn2P_aOPqA(){};
  HE_bSDEb_aqDOEejn2P_aOPqA.TypeName = "EntryItem";
  HE_bSDEb_aqDOEejn2P_aOPqA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$HE_bSDEb_aqDOEejn2P_aOPqA = HE_bSDEb_aqDOEejn2P_aOPqA.prototype;
  type$HE_bSDEb_aqDOEejn2P_aOPqA = HE_bSDEb_aqDOEejn2P_aOPqA.prototype =   {
    constructor: HE_bSDEb_aqDOEejn2P_aOPqA,
    Key: null,
    Handler: null
  }
;
  var basector$HE_bSDEb_aqDOEejn2P_aOPqA = $ctor$(null, null, type$HE_bSDEb_aqDOEejn2P_aOPqA);
  // ScriptCoreLib.JavaScript.Runtime.WorkPool+EntryItem..ctor
  type$HE_bSDEb_aqDOEejn2P_aOPqA.DgAABkb_aqDOEejn2P_aOPqA = function ()
  {
    var a = this;

  };
  var ctor$DgAABkb_aqDOEejn2P_aOPqA = HE_bSDEb_aqDOEejn2P_aOPqA.ctor = $ctor$(null, 'DgAABkb_aqDOEejn2P_aOPqA', type$HE_bSDEb_aqDOEejn2P_aOPqA);

  // ScriptCoreLib.JavaScript.Runtime.WorkPool
  function _3URXzU4dNT6JcvJhlSjXvQ(){};
  _3URXzU4dNT6JcvJhlSjXvQ.TypeName = "WorkPool";
  _3URXzU4dNT6JcvJhlSjXvQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_3URXzU4dNT6JcvJhlSjXvQ = _3URXzU4dNT6JcvJhlSjXvQ.prototype;
  type$_3URXzU4dNT6JcvJhlSjXvQ = _3URXzU4dNT6JcvJhlSjXvQ.prototype =   {
    constructor: _3URXzU4dNT6JcvJhlSjXvQ,
    List: null,
    Worker: null,
    Interval: 0,
    Timeout: 0,
    Abort: null,
    Error: null
  }
;
  var basector$_3URXzU4dNT6JcvJhlSjXvQ = $ctor$(null, null, type$_3URXzU4dNT6JcvJhlSjXvQ);
  // ScriptCoreLib.JavaScript.Runtime.WorkPool..ctor
  type$_3URXzU4dNT6JcvJhlSjXvQ.AQAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this;

    a.AgAABk4dNT6JcvJhlSjXvQ();
    a.Interval = b;
  };
  var ctor$AQAABk4dNT6JcvJhlSjXvQ = $ctor$(null, 'AQAABk4dNT6JcvJhlSjXvQ', type$_3URXzU4dNT6JcvJhlSjXvQ);

  // ScriptCoreLib.JavaScript.Runtime.WorkPool..ctor
  type$_3URXzU4dNT6JcvJhlSjXvQ.AgAABk4dNT6JcvJhlSjXvQ = function ()
  {
    var a = this;

    a.List = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    a.Worker = new ctor$hgQABtY33j68H_aZQYc4FRw();
    a.Interval = 100;
    a.Timeout = 5000;
    a.Worker.hAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'BwAABk4dNT6JcvJhlSjXvQ'));
  };
  var ctor$AgAABk4dNT6JcvJhlSjXvQ = _3URXzU4dNT6JcvJhlSjXvQ.ctor = $ctor$(null, 'AgAABk4dNT6JcvJhlSjXvQ', type$_3URXzU4dNT6JcvJhlSjXvQ);

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.add_Abort
  type$_3URXzU4dNT6JcvJhlSjXvQ.AwAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this;

    a.Abort = iwYABnzY4jaVovIDSMIxgQ(a.Abort, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.remove_Abort
  type$_3URXzU4dNT6JcvJhlSjXvQ.BAAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this;

    a.Abort = jQYABnzY4jaVovIDSMIxgQ(a.Abort, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.add_Error
  type$_3URXzU4dNT6JcvJhlSjXvQ.BQAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this;

    a.Error = iwYABnzY4jaVovIDSMIxgQ(a.Error, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.remove_Error
  type$_3URXzU4dNT6JcvJhlSjXvQ.BgAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this;

    a.Error = jQYABnzY4jaVovIDSMIxgQ(a.Error, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.Worker_Tick
  type$_3URXzU4dNT6JcvJhlSjXvQ.BwAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this, c, d, e, f;

    try
    {
      c = a.List.SwMABtmlXD2_bMcNB1Zdfiw(0);
      a.List.SgMABtmlXD2_bMcNB1Zdfiw(0);
      d = lAcABvL8PjuDy4A7EiQEHA().getTime();
      c.Handler.Invoke();
      f = !((lAcABvL8PjuDy4A7EiQEHA().getTime() - d) > a.Timeout);

      if (!f)
      {
        awQABh78uTmU7_bAOPst6lA('workpool timeout exceeded');
        sAIABgLCITuEwr97s3dlTA(a.Abort, a);
        a.List.UAMABtmlXD2_bMcNB1Zdfiw();
      }

    }
    catch (__exc)
    {
      e = __exc;
      f = (a.Error == null);

      if (!f)
      {
        a.Error.Invoke(e);
      }

    }
    a.DQAABk4dNT6JcvJhlSjXvQ();
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.op_Addition
  function CAAABk4dNT6JcvJhlSjXvQ(b, c)
  {
    var d;

    b.CQAABk4dNT6JcvJhlSjXvQ(c);
    d = b;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.Add
  type$_3URXzU4dNT6JcvJhlSjXvQ.CQAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this, c;

    c = new ctor$DgAABkb_aqDOEejn2P_aOPqA();
    c.Handler = b;
    a.List.TgMABtmlXD2_bMcNB1Zdfiw(c);
    a.DQAABk4dNT6JcvJhlSjXvQ();
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.set_Item
  type$_3URXzU4dNT6JcvJhlSjXvQ.CgAABk4dNT6JcvJhlSjXvQ = function (b, c)
  {
    var a = this;

    a.DAAABk4dNT6JcvJhlSjXvQ(b);
    a.CwAABk4dNT6JcvJhlSjXvQ(c, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.Add
  type$_3URXzU4dNT6JcvJhlSjXvQ.CwAABk4dNT6JcvJhlSjXvQ = function (b, c)
  {
    var a = this, d;

    d = new ctor$DgAABkb_aqDOEejn2P_aOPqA();
    d.Handler = b;
    d.Key = c;
    a.List.TgMABtmlXD2_bMcNB1Zdfiw(d);
    a.DQAABk4dNT6JcvJhlSjXvQ();
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.Remove
  type$_3URXzU4dNT6JcvJhlSjXvQ.DAAABk4dNT6JcvJhlSjXvQ = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new CjjbANoWWTiRz3jh_ai65Pg();
    c.key = b;
    a.List.VgMABtmlXD2_bMcNB1Zdfiw(new ctor$OgcABln3ATCcyO9vA4i22w(c, '_Remove_b__0'));
    a.DQAABk4dNT6JcvJhlSjXvQ();
  };

  // ScriptCoreLib.JavaScript.Runtime.WorkPool.Touch
  type$_3URXzU4dNT6JcvJhlSjXvQ.DQAABk4dNT6JcvJhlSjXvQ = function ()
  {
    var a = this, b;

    b = !(a.List.UwMABtmlXD2_bMcNB1Zdfiw() > 0);

    if (!b)
    {
      a.Worker.kAQABtY33j68H_aZQYc4FRw(a.Interval);
      return;
    }

    a.Worker.kgQABtY33j68H_aZQYc4FRw();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__ArgumentNullException.InternalConstructor
  function wQMABvn_aUTCagioAtB0Eqw(b)
  {
    var c;

    c = BgIABszpcz2K4r_a_alajjmQ(_8gQABpT92DaiMvTduyyLZQ('ArgumentNullException: ', b));
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.RectangleInfo
  function Blz4Uaaxvz2TsHIKgQsagw(){};
  Blz4Uaaxvz2TsHIKgQsagw.TypeName = "RectangleInfo";
  Blz4Uaaxvz2TsHIKgQsagw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Blz4Uaaxvz2TsHIKgQsagw = Blz4Uaaxvz2TsHIKgQsagw.prototype;
  type$Blz4Uaaxvz2TsHIKgQsagw = Blz4Uaaxvz2TsHIKgQsagw.prototype =   {
    constructor: Blz4Uaaxvz2TsHIKgQsagw,
    Left: 0,
    Top: 0,
    Width: 0,
    Height: 0
  }
;
  type$Blz4Uaaxvz2TsHIKgQsagw.$0 = {};
  type$Blz4Uaaxvz2TsHIKgQsagw.$0.$0 = 'RectangleInfo';
  type$Blz4Uaaxvz2TsHIKgQsagw.$0.$1 = 'wgMABqaxvz2TsHIKgQsagw';

  var basector$Blz4Uaaxvz2TsHIKgQsagw = $ctor$(null, null, type$Blz4Uaaxvz2TsHIKgQsagw);
  // ScriptCoreLib.Shared.Drawing.RectangleInfo..ctor
  type$Blz4Uaaxvz2TsHIKgQsagw.wgMABqaxvz2TsHIKgQsagw = function ()
  {
    var a = this;

  };
  var ctor$wgMABqaxvz2TsHIKgQsagw = Blz4Uaaxvz2TsHIKgQsagw.ctor = $ctor$(null, 'wgMABqaxvz2TsHIKgQsagw', type$Blz4Uaaxvz2TsHIKgQsagw);

  // ScriptCoreLib.Shared.Drawing.Rectangle
  function HmilxEJB5jyxJFE8zncqBQ(){};
  HmilxEJB5jyxJFE8zncqBQ.TypeName = "Rectangle";
  HmilxEJB5jyxJFE8zncqBQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$HmilxEJB5jyxJFE8zncqBQ = HmilxEJB5jyxJFE8zncqBQ.prototype;
  var basector$HmilxEJB5jyxJFE8zncqBQ = $ctor$(basector$Blz4Uaaxvz2TsHIKgQsagw, null, type$HmilxEJB5jyxJFE8zncqBQ);
  // ScriptCoreLib.Shared.Drawing.Rectangle..ctor
  type$HmilxEJB5jyxJFE8zncqBQ._0gMABkJB5jyxJFE8zncqBQ = function ()
  {
    var a = this;

    a.wgMABqaxvz2TsHIKgQsagw();
  };
  var ctor$_0gMABkJB5jyxJFE8zncqBQ = HmilxEJB5jyxJFE8zncqBQ.ctor = $ctor$(basector$Blz4Uaaxvz2TsHIKgQsagw, '_0gMABkJB5jyxJFE8zncqBQ', type$HmilxEJB5jyxJFE8zncqBQ);

  // ScriptCoreLib.Shared.Drawing.Rectangle.Contains
  type$HmilxEJB5jyxJFE8zncqBQ.wwMABkJB5jyxJFE8zncqBQ = function (b)
  {
    var a = this, c, d;

    d = !(b.X < a.Left);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b.Y < a.Top);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b.X > a.yQMABkJB5jyxJFE8zncqBQ());

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b.Y > a.ywMABkJB5jyxJFE8zncqBQ());

    if (!d)
    {
      c = 0;
      return c;
    }

    c = 1;
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.op_Division
  function xAMABkJB5jyxJFE8zncqBQ(b, c)
  {
    var d;

    d = zgMABkJB5jyxJFE8zncqBQ((b.Left / c), (b.Top / c), (b.Width / c), (b.Height / c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.op_Multiply
  function xQMABkJB5jyxJFE8zncqBQ(b, c)
  {
    var d;

    d = zgMABkJB5jyxJFE8zncqBQ((b.Left * c), (b.Top * c), (b.Width * c), (b.Height * c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.get_Location
  type$HmilxEJB5jyxJFE8zncqBQ.xgMABkJB5jyxJFE8zncqBQ = function ()
  {
    var a = this, b;

    b = new ctor$_3QMABjE9ID2bvdJDtEkvJw(a.Left, a.Top);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.op_Implicit
  function xwMABkJB5jyxJFE8zncqBQ(b)
  {
    var c;

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.Left, b.Top);
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.get_Size
  type$HmilxEJB5jyxJFE8zncqBQ.yAMABkJB5jyxJFE8zncqBQ = function ()
  {
    var a = this, b;

    b = _0wMABq3UNDySOLyoR9etRw(a.Width, a.Height);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.get_Right
  type$HmilxEJB5jyxJFE8zncqBQ.yQMABkJB5jyxJFE8zncqBQ = function ()
  {
    var a = this, b;

    b = (a.Left + a.Width);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.set_Right
  type$HmilxEJB5jyxJFE8zncqBQ.ygMABkJB5jyxJFE8zncqBQ = function (b)
  {
    var a = this;

    a.Width = (b - a.Left);
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.get_Bottom
  type$HmilxEJB5jyxJFE8zncqBQ.ywMABkJB5jyxJFE8zncqBQ = function ()
  {
    var a = this, b;

    b = (a.Top + a.Height);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.set_Bottom
  type$HmilxEJB5jyxJFE8zncqBQ.zAMABkJB5jyxJFE8zncqBQ = function (b)
  {
    var a = this;

    a.Height = (b - a.Top);
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.IntersectsWith
  type$HmilxEJB5jyxJFE8zncqBQ.zQMABkJB5jyxJFE8zncqBQ = function (b)
  {
    var a = this, c, d, e, f, g;

    c = (b.Left < a.yQMABkJB5jyxJFE8zncqBQ());
    d = (a.Left < b.yQMABkJB5jyxJFE8zncqBQ());
    e = (b.Top < a.ywMABkJB5jyxJFE8zncqBQ());
    f = (a.Top < b.ywMABkJB5jyxJFE8zncqBQ());
    g = (c && (d && (e && f)));
    return g;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.Of
  function zgMABkJB5jyxJFE8zncqBQ(b, c, d, e)
  {
    var f, g;

    f = new ctor$_0gMABkJB5jyxJFE8zncqBQ();
    f.Left = b;
    f.Top = c;
    f.Width = d;
    f.Height = e;
    g = f;
    return g;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.ToString
  type$HmilxEJB5jyxJFE8zncqBQ.toString /* ScriptCoreLib.Shared.Drawing.Rectangle.ToString */ = function ()
  {
    var a = this, b, c;

    c = [
      '[',
      new Number(a.Left),
      ', ',
      new Number(a.Top),
      ', ',
      new Number(a.Width),
      ', ',
      new Number(a.Height),
      ']'
    ];
    b = _7gQABpT92DaiMvTduyyLZQ(c);
    return b;
  };
    HmilxEJB5jyxJFE8zncqBQ.prototype.toString /* System.Object.ToString */ = HmilxEJB5jyxJFE8zncqBQ.prototype.toString /* ScriptCoreLib.Shared.Drawing.Rectangle.ToString */;

  // ScriptCoreLib.Shared.Drawing.Rectangle.Of
  function _0AMABkJB5jyxJFE8zncqBQ(b, c)
  {
    var d;

    d = zgMABkJB5jyxJFE8zncqBQ(b.X, b.Y, c.Width, c.Height);
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Rectangle.Offset
  type$HmilxEJB5jyxJFE8zncqBQ._0QMABkJB5jyxJFE8zncqBQ = function (b)
  {
    var a = this;

    a.Left = (a.Left + b.X);
    a.Top = (a.Top + b.Y);
  };

  // ScriptCoreLib.Shared.Drawing.Size
  function OtG_bJK3UNDySOLyoR9etRw(){};
  OtG_bJK3UNDySOLyoR9etRw.TypeName = "Size";
  OtG_bJK3UNDySOLyoR9etRw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$OtG_bJK3UNDySOLyoR9etRw = OtG_bJK3UNDySOLyoR9etRw.prototype;
  type$OtG_bJK3UNDySOLyoR9etRw = OtG_bJK3UNDySOLyoR9etRw.prototype =   {
    constructor: OtG_bJK3UNDySOLyoR9etRw,
    Width: 0,
    Height: 0
  }
;
  var basector$OtG_bJK3UNDySOLyoR9etRw = $ctor$(null, null, type$OtG_bJK3UNDySOLyoR9etRw);
  // ScriptCoreLib.Shared.Drawing.Size..ctor
  type$OtG_bJK3UNDySOLyoR9etRw._1AMABq3UNDySOLyoR9etRw = function ()
  {
    var a = this;

  };
  var ctor$_1AMABq3UNDySOLyoR9etRw = OtG_bJK3UNDySOLyoR9etRw.ctor = $ctor$(null, '_1AMABq3UNDySOLyoR9etRw', type$OtG_bJK3UNDySOLyoR9etRw);

  // ScriptCoreLib.Shared.Drawing.Size.Of
  function _0wMABq3UNDySOLyoR9etRw(b, c)
  {
    var d, e;

    d = new ctor$_1AMABq3UNDySOLyoR9etRw();
    d.Width = b;
    d.Height = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Drawing.Point`1
  function _7VPfEo9DxTqFY3fWlQmzeQ(){};
  _7VPfEo9DxTqFY3fWlQmzeQ.TypeName = "Point_1";
  _7VPfEo9DxTqFY3fWlQmzeQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_7VPfEo9DxTqFY3fWlQmzeQ = _7VPfEo9DxTqFY3fWlQmzeQ.prototype;
  type$_7VPfEo9DxTqFY3fWlQmzeQ = _7VPfEo9DxTqFY3fWlQmzeQ.prototype =   {
    constructor: _7VPfEo9DxTqFY3fWlQmzeQ,
    X: null,
    Y: null
  }
;
  type$_7VPfEo9DxTqFY3fWlQmzeQ.$0 = {};
  type$_7VPfEo9DxTqFY3fWlQmzeQ.$0.$0 = 'Point`1';
  type$_7VPfEo9DxTqFY3fWlQmzeQ.$0.$1 = '_1QMABo9DxTqFY3fWlQmzeQ';

  var basector$_7VPfEo9DxTqFY3fWlQmzeQ = $ctor$(null, null, type$_7VPfEo9DxTqFY3fWlQmzeQ);
  // ScriptCoreLib.Shared.Drawing.Point`1..ctor
  type$_7VPfEo9DxTqFY3fWlQmzeQ._1QMABo9DxTqFY3fWlQmzeQ = function ()
  {
    var a = this;

  };
  var ctor$_1QMABo9DxTqFY3fWlQmzeQ = _7VPfEo9DxTqFY3fWlQmzeQ.ctor = $ctor$(null, '_1QMABo9DxTqFY3fWlQmzeQ', type$_7VPfEo9DxTqFY3fWlQmzeQ);

  // ScriptCoreLib.Shared.Drawing.Point
  function rRzgnTE9ID2bvdJDtEkvJw(){};
  rRzgnTE9ID2bvdJDtEkvJw.TypeName = "Point";
  rRzgnTE9ID2bvdJDtEkvJw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$rRzgnTE9ID2bvdJDtEkvJw = rRzgnTE9ID2bvdJDtEkvJw.prototype;
  type$rRzgnTE9ID2bvdJDtEkvJw.$0 = {};
  type$rRzgnTE9ID2bvdJDtEkvJw.$0.$0 = 'Point';
  type$rRzgnTE9ID2bvdJDtEkvJw.$0.$1 = '_3AMABjE9ID2bvdJDtEkvJw';

  var basector$rRzgnTE9ID2bvdJDtEkvJw = $ctor$(basector$_7VPfEo9DxTqFY3fWlQmzeQ, null, type$rRzgnTE9ID2bvdJDtEkvJw);
  // ScriptCoreLib.Shared.Drawing.Point..ctor
  type$rRzgnTE9ID2bvdJDtEkvJw._3AMABjE9ID2bvdJDtEkvJw = function ()
  {
    var a = this;

    a._1QMABo9DxTqFY3fWlQmzeQ();
  };
  var ctor$_3AMABjE9ID2bvdJDtEkvJw = rRzgnTE9ID2bvdJDtEkvJw.ctor = $ctor$(basector$_7VPfEo9DxTqFY3fWlQmzeQ, '_3AMABjE9ID2bvdJDtEkvJw', type$rRzgnTE9ID2bvdJDtEkvJw);

  // ScriptCoreLib.Shared.Drawing.Point..ctor
  type$rRzgnTE9ID2bvdJDtEkvJw._3QMABjE9ID2bvdJDtEkvJw = function (b, c)
  {
    var a = this;

    a._1QMABo9DxTqFY3fWlQmzeQ();
    a.X = b;
    a.Y = c;
  };
  var ctor$_3QMABjE9ID2bvdJDtEkvJw = $ctor$(basector$_7VPfEo9DxTqFY3fWlQmzeQ, '_3QMABjE9ID2bvdJDtEkvJw', type$rRzgnTE9ID2bvdJDtEkvJw);

  // ScriptCoreLib.Shared.Drawing.Point.WithMargin
  type$rRzgnTE9ID2bvdJDtEkvJw._1gMABjE9ID2bvdJDtEkvJw = function (b)
  {
    var a = this, c;

    c = zgMABkJB5jyxJFE8zncqBQ((a.X - b), (a.Y - b), (b * 2), (b * 2));
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Multiply
  function _1wMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X * c), (b.Y * c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Division
  function _2AMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X / c), (b.Y / c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.Min
  type$rRzgnTE9ID2bvdJDtEkvJw._2QMABjE9ID2bvdJDtEkvJw = function (b)
  {
    var a = this, c, d, e;

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(a.X, a.Y);
    e = !(c.X > b.X);

    if (!e)
    {
      c.X = b.X;
    }

    e = !(c.Y > b.Y);

    if (!e)
    {
      c.Y = b.Y;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.Max
  type$rRzgnTE9ID2bvdJDtEkvJw._2gMABjE9ID2bvdJDtEkvJw = function (b)
  {
    var a = this, c, d, e;

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(a.X, a.Y);
    e = !(c.X < b.X);

    if (!e)
    {
      c.X = b.X;
    }

    e = !(c.Y < b.Y);

    if (!e)
    {
      c.Y = b.Y;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.get_Zero
  function _2wMABjE9ID2bvdJDtEkvJw()
  {
    var b;

    b = new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Point.ToString
  type$rRzgnTE9ID2bvdJDtEkvJw.toString /* ScriptCoreLib.Shared.Drawing.Point.ToString */ = function ()
  {
    var a = this, b, c;

    c = [
      '[',
      new Number(a.X),
      ', ',
      new Number(a.Y),
      ']'
    ];
    b = _7gQABpT92DaiMvTduyyLZQ(c);
    return b;
  };
    rRzgnTE9ID2bvdJDtEkvJw.prototype.toString /* System.Object.ToString */ = rRzgnTE9ID2bvdJDtEkvJw.prototype.toString /* ScriptCoreLib.Shared.Drawing.Point.ToString */;

  // ScriptCoreLib.Shared.Drawing.Point.AsPosition
  type$rRzgnTE9ID2bvdJDtEkvJw._3wMABjE9ID2bvdJDtEkvJw = function ()
  {
    var a = this, b;

    b = _8QQABpT92DaiMvTduyyLZQ(new Number(a.X), ' ', new Number(a.Y));
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Point.Offset
  type$rRzgnTE9ID2bvdJDtEkvJw._4AMABjE9ID2bvdJDtEkvJw = function (b)
  {
    var a = this;

    a.X = (a.X + b.X);
    a.Y = (a.Y + b.Y);
  };

  // ScriptCoreLib.Shared.Drawing.Point.CopyTo
  type$rRzgnTE9ID2bvdJDtEkvJw._4QMABjE9ID2bvdJDtEkvJw = function (b)
  {
    var a = this;

    b.X = a.X;
    b.Y = a.Y;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Subtraction
  function _4gMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X - c.X), (b.Y - c.Y));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Addition
  function _4wMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X + c.X), (b.Y + c.Y));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Division
  function _5AMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X / c), (b.Y / c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.op_Multiply
  function _5QMABjE9ID2bvdJDtEkvJw(b, c)
  {
    var d;

    d = new ctor$_3QMABjE9ID2bvdJDtEkvJw((b.X * c), (b.Y * c));
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Point.Of
  function _5gMABjE9ID2bvdJDtEkvJw(b)
  {
    var c, d;

    d = !(b == null);

    if (!d)
    {
      c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0);
      return c;
    }

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(b.X, b.Y);
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Point.SpawnHelper
  function _5wMABjE9ID2bvdJDtEkvJw(b)
  {
    b.Target = _5gMABjE9ID2bvdJDtEkvJw(b.Target);
  };

  // ScriptCoreLib.Shared.Drawing.Point.get_Z
  type$rRzgnTE9ID2bvdJDtEkvJw._6AMABjE9ID2bvdJDtEkvJw = function ()
  {
    var a = this, b;

    b = ((a.X * a.X) + (a.Y * a.Y));
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Point.CompareRange
  type$rRzgnTE9ID2bvdJDtEkvJw._6QMABjE9ID2bvdJDtEkvJw = function (b, c)
  {
    var a = this, d, e, f, g, h, i;

    d = (a.X - b.X);
    e = (a.Y - b.Y);
    f = ((d * d) + (e * e));
    g = (c * c);
    i = !(f == g);

    if (!i)
    {
      h = 0;
      return h;
    }

    i = !(f < g);

    if (!i)
    {
      h = -1;
      return h;
    }

    h = 1;
    return h;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.alert
  // ScriptCoreLib.JavaScript.DOM.IWindow.confirm
  // ScriptCoreLib.JavaScript.DOM.IWindow.prompt
  // ScriptCoreLib.JavaScript.DOM.IWindow.print
  // ScriptCoreLib.JavaScript.DOM.IWindow.focus
  // ScriptCoreLib.JavaScript.DOM.IWindow.blur
  // ScriptCoreLib.JavaScript.DOM.IWindow.moveTo
  // ScriptCoreLib.JavaScript.DOM.IWindow.escape
  // ScriptCoreLib.JavaScript.DOM.IWindow.unescape
  // ScriptCoreLib.JavaScript.DOM.IWindow.isNaN
  // ScriptCoreLib.JavaScript.DOM.IWindow.open
  // ScriptCoreLib.JavaScript.DOM.IWindow.open
  // ScriptCoreLib.JavaScript.DOM.IWindow.open
  function _9gMABrc98zqfJJxE_at_bcTw(a, b, c, d, e, f)
  {
    var g, h;

    g = uAEABh33sTm5Ql7VEPKRUg();
    g.push(_8AQABpT92DaiMvTduyyLZQ('width=', new Number(d)));
    g.push(_8AQABpT92DaiMvTduyyLZQ('height=', new Number(e)));
    g.push(_8gQABpT92DaiMvTduyyLZQ('scrollbars=', ((f) ? 'yes' : 'no')));
    h = a.open(b, c, g.join(','));
    return h;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.setTimeout
  // ScriptCoreLib.JavaScript.DOM.IWindow.setTimeout
  // ScriptCoreLib.JavaScript.DOM.IWindow.setTimeout
  function __aQMABrc98zqfJJxE_at_bcTw(a, b, c)
  {
    var d;

    d = a.setTimeout(b.InvokePointer, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.setInterval
  // ScriptCoreLib.JavaScript.DOM.IWindow.setInterval
  // ScriptCoreLib.JavaScript.DOM.IWindow.setInterval
  function __bAMABrc98zqfJJxE_at_bcTw(a, b, c)
  {
    var d;

    d = a.setInterval(b.InvokePointer, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.clearTimeout
  // ScriptCoreLib.JavaScript.DOM.IWindow.clearInterval
  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onfocus
  function __bwMABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'focus');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onfocus
  function AAQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'focus');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onblur
  function AQQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'blur');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onblur
  function AgQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'blur');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onload
  function AwQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'load');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onload
  function BAQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'load');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onunload
  function BQQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'unload');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onunload
  function BgQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'unload');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onbeforeunload
  function BwQABrc98zqfJJxE_at_bcTw(a, b)
  {
    var c, d;

    d = /* DOMCreateType */new _9lXA0klunz6Fri9CQD43qQ();
    d.value = b;
    c = new ctor$iwMABhmmKDKvJeSkk629VQ(d, '_add_onbeforeunload_b__0');
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, c, 'beforeunload');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onbeforeunload
  function CAQABrc98zqfJJxE_at_bcTw(a, b)
  {
    throw BgIABszpcz2K4r_a_alajjmQ('Not implemented');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onresize
  function CQQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'resize');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onresize
  function CgQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'resize');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.add_onscroll
  function CwQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'scroll');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.remove_onscroll
  function DAQABrc98zqfJJxE_at_bcTw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'scroll');
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.scrollTo
  // ScriptCoreLib.JavaScript.DOM.IWindow.close
  // ScriptCoreLib.JavaScript.DOM.IWindow.eval
  // ScriptCoreLib.JavaScript.DOM.IWindow.InternalHeight
  function EAQABrc98zqfJJxE_at_bcTw(w) { 
    var s = w.self;

    if (s && s.innerHeight)
    {
        return s.innerHeight;
    }

    var d = w.document.documentElement;

    if (d && d.clientHeight)
    {
        return d.clientHeight;
    }
    return 0;
 };
  // ScriptCoreLib.JavaScript.DOM.IWindow.InternalWidth
  function EQQABrc98zqfJJxE_at_bcTw(w) { 
    var s = w.self;

    if (s && s.innerWidth)
    {
        return s.innerWidth;
    }

    var d = w.document.documentElement;

    if (d && d.clientWidth)
    {
        return d.clientWidth;
    }
    return 0;
 };
  // ScriptCoreLib.JavaScript.DOM.IWindow.get_Height
  function EgQABrc98zqfJJxE_at_bcTw(a)
  {
    var b;

    b = EAQABrc98zqfJJxE_at_bcTw(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow.get_Width
  function EwQABrc98zqfJJxE_at_bcTw(a)
  {
    var b;

    b = EQQABrc98zqfJJxE_at_bcTw(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo
  function _16ptGDh8OzGA1bP9KfW5Lw(){};
  _16ptGDh8OzGA1bP9KfW5Lw.TypeName = "NavigatorInfo";
  _16ptGDh8OzGA1bP9KfW5Lw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_16ptGDh8OzGA1bP9KfW5Lw = _16ptGDh8OzGA1bP9KfW5Lw.prototype;
  type$_16ptGDh8OzGA1bP9KfW5Lw = _16ptGDh8OzGA1bP9KfW5Lw.prototype =   {
    constructor: _16ptGDh8OzGA1bP9KfW5Lw,
    userAgent: null,
    appVersion: null,
    mimeTypes: null,
    plugins: null
  }
;
  var basector$_16ptGDh8OzGA1bP9KfW5Lw = $ctor$(null, null, type$_16ptGDh8OzGA1bP9KfW5Lw);
  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo..ctor
  type$_16ptGDh8OzGA1bP9KfW5Lw.FQQABjh8OzGA1bP9KfW5Lw = function ()
  {
    var a = this;

  };
  var ctor$FQQABjh8OzGA1bP9KfW5Lw = _16ptGDh8OzGA1bP9KfW5Lw.ctor = $ctor$(null, 'FQQABjh8OzGA1bP9KfW5Lw', type$_16ptGDh8OzGA1bP9KfW5Lw);

  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo+PluginInfo
  function Ce3CdDvCxTCy2Xi9K2GPMw(){};
  Ce3CdDvCxTCy2Xi9K2GPMw.TypeName = "PluginInfo";
  Ce3CdDvCxTCy2Xi9K2GPMw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Ce3CdDvCxTCy2Xi9K2GPMw = Ce3CdDvCxTCy2Xi9K2GPMw.prototype;
  type$Ce3CdDvCxTCy2Xi9K2GPMw = Ce3CdDvCxTCy2Xi9K2GPMw.prototype =   {
    constructor: Ce3CdDvCxTCy2Xi9K2GPMw,
    description: null
  }
;
  var basector$Ce3CdDvCxTCy2Xi9K2GPMw = $ctor$(null, null, type$Ce3CdDvCxTCy2Xi9K2GPMw);
  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo+PluginInfo..ctor
  type$Ce3CdDvCxTCy2Xi9K2GPMw.FgQABjvCxTCy2Xi9K2GPMw = function ()
  {
    var a = this;

  };
  var ctor$FgQABjvCxTCy2Xi9K2GPMw = Ce3CdDvCxTCy2Xi9K2GPMw.ctor = $ctor$(null, 'FgQABjvCxTCy2Xi9K2GPMw', type$Ce3CdDvCxTCy2Xi9K2GPMw);

  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo+MimeTypeInfo
  function il73tQXejjidGuWqgSpxeQ(){};
  il73tQXejjidGuWqgSpxeQ.TypeName = "MimeTypeInfo";
  il73tQXejjidGuWqgSpxeQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$il73tQXejjidGuWqgSpxeQ = il73tQXejjidGuWqgSpxeQ.prototype;
  type$il73tQXejjidGuWqgSpxeQ = il73tQXejjidGuWqgSpxeQ.prototype =   {
    constructor: il73tQXejjidGuWqgSpxeQ,
    description: null,
    type: null
  }
;
  var basector$il73tQXejjidGuWqgSpxeQ = $ctor$(null, null, type$il73tQXejjidGuWqgSpxeQ);
  // ScriptCoreLib.JavaScript.DOM.IWindow+NavigatorInfo+MimeTypeInfo..ctor
  type$il73tQXejjidGuWqgSpxeQ.FwQABgXejjidGuWqgSpxeQ = function ()
  {
    var a = this;

  };
  var ctor$FwQABgXejjidGuWqgSpxeQ = il73tQXejjidGuWqgSpxeQ.ctor = $ctor$(null, 'FwQABgXejjidGuWqgSpxeQ', type$il73tQXejjidGuWqgSpxeQ);

  // ScriptCoreLib.JavaScript.DOM.IWindow+Confirmation
  function XDGNwrqX1zOurkR1rDSMqQ(){};
  XDGNwrqX1zOurkR1rDSMqQ.TypeName = "Confirmation";
  XDGNwrqX1zOurkR1rDSMqQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$XDGNwrqX1zOurkR1rDSMqQ = XDGNwrqX1zOurkR1rDSMqQ.prototype;
  type$XDGNwrqX1zOurkR1rDSMqQ = XDGNwrqX1zOurkR1rDSMqQ.prototype =   {
    constructor: XDGNwrqX1zOurkR1rDSMqQ,
    Text: null
  }
;
  var basector$XDGNwrqX1zOurkR1rDSMqQ = $ctor$(null, null, type$XDGNwrqX1zOurkR1rDSMqQ);
  // ScriptCoreLib.JavaScript.DOM.IWindow+Confirmation..ctor
  type$XDGNwrqX1zOurkR1rDSMqQ.GAQABrqX1zOurkR1rDSMqQ = function ()
  {
    var a = this;

  };
  var ctor$GAQABrqX1zOurkR1rDSMqQ = XDGNwrqX1zOurkR1rDSMqQ.ctor = $ctor$(null, 'GAQABrqX1zOurkR1rDSMqQ', type$XDGNwrqX1zOurkR1rDSMqQ);

  // ScriptCoreLib.JavaScript.DOM.IActiveX.get_IsSupported
  function GQQABpa5RDScaJjrjEx6Gg()
  {
    var b, c;

    c = !CAEABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(window), 'ActiveXObject');

    if (!c)
    {
      b = 1;
      return b;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IActiveX.TryCreate
  function GwQABpa5RDScaJjrjEx6Gg(b)
  {
    var c;

    try
    {
      c = new ActiveXObject(b);
      return c;
    }
    catch (__exc){ }
    c = null;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IActiveX.InternalConstructor
  function HAQABpa5RDScaJjrjEx6Gg(b)
  {
    var c, d, e, f, g, h;

    c = null;
    f = b;

    for (g = 0; (g < f.length); g++)
    {
      d = f[g];
      c = GwQABpa5RDScaJjrjEx6Gg(d);
      h = (c == null);

      if (!h)
      {
        break;
      }

    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLButton.InternalConstructor
  function HwQABoPyODC3xEBbAs8o4g()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('button');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLButton.InternalConstructor
  function IQQABoPyODC3xEBbAs8o4g(b)
  {
    var c, d, e;

    c = HwQABoPyODC3xEBbAs8o4g();
    e = [
      b
    ];
    IgAABtvq0jCU0R1GsbOa4g(c, e);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLButton.Create
  function IgQABoPyODC3xEBbAs8o4g(b, c)
  {
    var d, e, f;

    e = /* DOMCreateType */new pn6cksdPWDCFIhFOKRozHg();
    e.h = c;
    d = IQQABoPyODC3xEBbAs8o4g(b);
    PwAABgAjajq2ygojxk6uUQ(d, new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_Create_b__0'));
    kAUABuKCPTKGRKjkr5dWuA(d);
    f = d;
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLBold.InternalConstructor
  function JQQABstNeDa0xUkK4L_bFyA()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('b');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLBold.InternalConstructor
  function JgQABstNeDa0xUkK4L_bFyA(b)
  {
    var c;

    c = NAAABgAjajq2ygojxk6uUQ('b', b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1
  function g9Gyp7841jSOaEftcWBQCw(){};
  g9Gyp7841jSOaEftcWBQCw.TypeName = "IXMLSerializer_1";
  g9Gyp7841jSOaEftcWBQCw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$g9Gyp7841jSOaEftcWBQCw = g9Gyp7841jSOaEftcWBQCw.prototype;
  type$g9Gyp7841jSOaEftcWBQCw = g9Gyp7841jSOaEftcWBQCw.prototype =   {
    constructor: g9Gyp7841jSOaEftcWBQCw,
    KnownTypes: null
  }
;
  var basector$g9Gyp7841jSOaEftcWBQCw = $ctor$(null, null, type$g9Gyp7841jSOaEftcWBQCw);
  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1..ctor
  type$g9Gyp7841jSOaEftcWBQCw.YwQABr841jSOaEftcWBQCw = function (b)
  {
    var a = this, c, d, e, f, g;

    a.KnownTypes = _2AAABtd5xTKztToDDBg08A();
    e = b;

    for (f = 0; (f < e.length); f++)
    {
      c = e[f];
      d = _9AAABtd5xTKztToDDBg08A(c);
      __aQAABtd5xTKztToDDBg08A(a.KnownTypes, _0gAABtd5xTKztToDDBg08A(d), d);
    }

  };
  var ctor$YwQABr841jSOaEftcWBQCw = $ctor$(null, 'YwQABr841jSOaEftcWBQCw', type$g9Gyp7841jSOaEftcWBQCw);

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1.SerializeTo
  type$g9Gyp7841jSOaEftcWBQCw.ZAQABr841jSOaEftcWBQCw = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j, k, l, m, n, o;

    e = _5AAABtd5xTKztToDDBg08A(d);
    k = e;

    for (l = 0; (l < k.length); l++)
    {
      f = k[l];
      g = mQIABluHGDGhrmpOYXsYRA(b, f.Name, []);
      m = (!_6gAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw()) && !_7wAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw()));

      if (!m)
      {
        g.appendChild(lgAABsR3Rz_a88wmXX2r7qw(b, f.wQAABmB4_aTOMaLVuXNcMxw()));
      }
      else
      {
        m = !_7AAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw());

        if (!m)
        {
          g.appendChild(lgAABsR3Rz_a88wmXX2r7qw(b, f.wQAABmB4_aTOMaLVuXNcMxw()));
        }
        else
        {
          m = !_6AAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw());

          if (!m)
          {
            h = _3gAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw());
            n = h;

            for (o = 0; (o < n.length); o++)
            {
              i = n[o];
              j = mQIABluHGDGhrmpOYXsYRA(b, _0gAABtd5xTKztToDDBg08A(i), []);
              a.ZAQABr841jSOaEftcWBQCw(b, j, i);
              g.appendChild(j);
            }

          }
          else
          {
            m = (!_8AAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw()) || _8gAABtd5xTKztToDDBg08A(f.xgAABmB4_aTOMaLVuXNcMxw()));

            if (!m)
            {
              a.ZAQABr841jSOaEftcWBQCw(b, g, f.xgAABmB4_aTOMaLVuXNcMxw());
            }

          }

        }

      }

      c.appendChild(g);
    }

  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1.Serialize
  type$g9Gyp7841jSOaEftcWBQCw.ZQQABr841jSOaEftcWBQCw = function (b)
  {
    var a = this, c, d;

    c = bAMABtsSrjyg1Cv12d3t0g(_0gAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(b)));
    a.ZAQABr841jSOaEftcWBQCw(c, c.documentElement, _9AAABtd5xTKztToDDBg08A(b));
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1.DeserializeTo
  type$g9Gyp7841jSOaEftcWBQCw.ZgQABr841jSOaEftcWBQCw = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m;

    i = !(__bQAABtd5xTKztToDDBg08A(a.KnownTypes, c) == null);

    if (!i)
    {
      h = null;
      return h;
    }

    d = AQEABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(a.KnownTypes, c));
    j = b.childNodes;

    for (k = 0; (k < j.length); k++)
    {
      e = j[k];
      i = !(e.nodeType == 1);

      if (!i)
      {
        i = !(__bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(d), e.nodeName) == null);

        if (!i)
        {
          __aQAABtd5xTKztToDDBg08A(d, e.nodeName, nAIABluHGDGhrmpOYXsYRA(e));
        }
        else
        {
          i = !_6AAABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(d), e.nodeName));

          if (!i)
          {
            f = uAEABh33sTm5Ql7VEPKRUg();
            l = e.childNodes;

            for (m = 0; (m < l.length); m++)
            {
              g = l[m];
              i = !(g.nodeType == 1);

              if (!i)
              {
                f = ugEABh33sTm5Ql7VEPKRUg(f, a.ZgQABr841jSOaEftcWBQCw(g, g.nodeName));
              }

            }

            __aQAABtd5xTKztToDDBg08A(d, e.nodeName, f);
          }
          else
          {
            __aQAABtd5xTKztToDDBg08A(d, e.nodeName, a.ZgQABr841jSOaEftcWBQCw(e, _3QAABtd5xTKztToDDBg08A(__bQAABtd5xTKztToDDBg08A(_1AAABtd5xTKztToDDBg08A(d), e.nodeName))));
          }

        }

      }

    }

    h = d;
    return h;
  };

  // ScriptCoreLib.JavaScript.DOM.XML.IXMLSerializer`1.Deserialize
  type$g9Gyp7841jSOaEftcWBQCw.ZwQABr841jSOaEftcWBQCw = function (b)
  {
    var a = this, c, d, e;

    d = !(b == null);

    if (!d)
    {
      e = void(0);
      c = e;
      return c;
    }

    c = _3gAABtd5xTKztToDDBg08A(a.ZgQABr841jSOaEftcWBQCw(b.documentElement, b.documentElement.nodeName));
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLEmbed.InternalConstructor
  function aQQABs53Mz_aJt4oyVnki2Q()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('embed');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console
  function dacDyB78uTmU7_bAOPst6lA(){};
  dacDyB78uTmU7_bAOPst6lA.TypeName = "Console";
  dacDyB78uTmU7_bAOPst6lA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$dacDyB78uTmU7_bAOPst6lA = dacDyB78uTmU7_bAOPst6lA.prototype;
  var basector$dacDyB78uTmU7_bAOPst6lA = $ctor$(null, null, type$dacDyB78uTmU7_bAOPst6lA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console..ctor
  type$dacDyB78uTmU7_bAOPst6lA.bgQABh78uTmU7_bAOPst6lA = function ()
  {
    var a = this;

  };
  var ctor$bgQABh78uTmU7_bAOPst6lA = dacDyB78uTmU7_bAOPst6lA.ctor = $ctor$(null, 'bgQABh78uTmU7_bAOPst6lA', type$dacDyB78uTmU7_bAOPst6lA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console.WriteLine
  function agQABh78uTmU7_bAOPst6lA(b)
  {
    dgQABo_bWbzOg2e3_buG4YsA((b+''));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console.WriteLine
  function awQABh78uTmU7_bAOPst6lA(b)
  {
    dgQABo_bWbzOg2e3_buG4YsA(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console.WriteLine
  function bAQABh78uTmU7_bAOPst6lA(b, c)
  {
    dgQABo_bWbzOg2e3_buG4YsA(_4AQABpT92DaiMvTduyyLZQ(b, c));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console.Write
  function bQQABh78uTmU7_bAOPst6lA(b)
  {
    dQQABo_bWbzOg2e3_buG4YsA(b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole
  function OZKuao_bWbzOg2e3_buG4YsA(){};
  OZKuao_bWbzOg2e3_buG4YsA.TypeName = "__BrowserConsole";
  OZKuao_bWbzOg2e3_buG4YsA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$OZKuao_bWbzOg2e3_buG4YsA = OZKuao_bWbzOg2e3_buG4YsA.prototype;
  var IAIABI_bWbzOg2e3_buG4YsA = 0;
  var IQIABI_bWbzOg2e3_buG4YsA = null;
  var IwIABI_bWbzOg2e3_buG4YsA = false;
  type$OZKuao_bWbzOg2e3_buG4YsA = OZKuao_bWbzOg2e3_buG4YsA.prototype =   {
    constructor: OZKuao_bWbzOg2e3_buG4YsA,
    _task: null,
    StartTime: null
  }
;
  var basector$OZKuao_bWbzOg2e3_buG4YsA = $ctor$(null, null, type$OZKuao_bWbzOg2e3_buG4YsA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole..ctor
  type$OZKuao_bWbzOg2e3_buG4YsA.cQQABo_bWbzOg2e3_buG4YsA = function (b)
  {
    var a = this;

    a._task = b;
    a.StartTime = lQcABvL8PjuDy4A7EiQEHA(lAcABvL8PjuDy4A7EiQEHA());
    a.cgQABo_bWbzOg2e3_buG4YsA();
    dgQABo_bWbzOg2e3_buG4YsA(_8wQABpT92DaiMvTduyyLZQ('<', a._task, '>'));
    IAIABI_bWbzOg2e3_buG4YsA = (IAIABI_bWbzOg2e3_buG4YsA + 1);
  };
  var ctor$cQQABo_bWbzOg2e3_buG4YsA = $ctor$(null, 'cQQABo_bWbzOg2e3_buG4YsA', type$OZKuao_bWbzOg2e3_buG4YsA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.EnableActiveXConsole
  function cAQABo_bWbzOg2e3_buG4YsA()
  {
    var b, c;

    b = !(IQIABI_bWbzOg2e3_buG4YsA == null);

    if (!b)
    {
      c = [
        'ActiveXConsole.Console'
      ];
      IQIABI_bWbzOg2e3_buG4YsA = HAQABpa5RDScaJjrjEx6Gg(c);
      b = (IQIABI_bWbzOg2e3_buG4YsA == null);

      if (!b)
      {
        IQIABI_bWbzOg2e3_buG4YsA.OpenConsole();
      }

    }

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.WriteIdent
  type$OZKuao_bWbzOg2e3_buG4YsA.cgQABo_bWbzOg2e3_buG4YsA = function ()
  {
    var a = this, b, c;

    b = IAIABI_bWbzOg2e3_buG4YsA;
    while ((b-- > 0))
    {
      dQQABo_bWbzOg2e3_buG4YsA(' ');
    }
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.InternalDump
  function cwQABo_bWbzOg2e3_buG4YsA(w0, e0) { 
            if (w0['dump'] != void(0))
                w0.dump(e0);
             };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.Dump
  function dAQABo_bWbzOg2e3_buG4YsA(b)
  {
    cwQABo_bWbzOg2e3_buG4YsA(window, b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.Write
  function dQQABo_bWbzOg2e3_buG4YsA(b)
  {
    var c;

    c = !(IQIABI_bWbzOg2e3_buG4YsA == null);

    if (!c)
    {
      dAQABo_bWbzOg2e3_buG4YsA(b);
      return;
    }

    IQIABI_bWbzOg2e3_buG4YsA.WriteString(_7wQABpT92DaiMvTduyyLZQ(b));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.WriteLine
  function dgQABo_bWbzOg2e3_buG4YsA(b)
  {
    dQQABo_bWbzOg2e3_buG4YsA(b);
    dQQABo_bWbzOg2e3_buG4YsA('\u000a');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.Dispose
  type$OZKuao_bWbzOg2e3_buG4YsA.dwQABo_bWbzOg2e3_buG4YsA = function ()
  {
    var a = this, b, c;

    IAIABI_bWbzOg2e3_buG4YsA = (IAIABI_bWbzOg2e3_buG4YsA - 1);
    b = (lQcABvL8PjuDy4A7EiQEHA(lAcABvL8PjuDy4A7EiQEHA()) - a.StartTime);
    a.cgQABo_bWbzOg2e3_buG4YsA();
    c = [
      '<\u002f',
      a._task,
      ' - ',
      b,
      'ms >'
    ];
    dgQABo_bWbzOg2e3_buG4YsA(_7gQABpT92DaiMvTduyyLZQ(c));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.Log
  function eAQABo_bWbzOg2e3_buG4YsA(b)
  {
    var c;

    c = !(document == null);

    if (!c)
    {
      return;
    }

    c = !IwIABI_bWbzOg2e3_buG4YsA;

    if (!c)
    {
      window.status = b;
    }

    dgQABo_bWbzOg2e3_buG4YsA(_8wQABpT92DaiMvTduyyLZQ(lAcABvL8PjuDy4A7EiQEHA().toLocaleString(), ' ', b));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.LogError
  function eQQABo_bWbzOg2e3_buG4YsA(b)
  {
    eAQABo_bWbzOg2e3_buG4YsA(_8gQABpT92DaiMvTduyyLZQ('\u002a\u002a\u002a ', b));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.LogError
  function egQABo_bWbzOg2e3_buG4YsA(b)
  {
    eAQABo_bWbzOg2e3_buG4YsA(_8gQABpT92DaiMvTduyyLZQ('\u002a\u002a\u002a ', (b+'')));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole.WriteLine
  function ewQABo_bWbzOg2e3_buG4YsA()
  {
    dgQABo_bWbzOg2e3_buG4YsA('');
  };

  // System.IDisposable
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole
  (function (i)  {
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.dwQABo_bWbzOg2e3_buG4YsA;
  }
  )(type$OZKuao_bWbzOg2e3_buG4YsA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole+ConsoleImplementation.CloseConsole
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole+ConsoleImplementation.OpenConsole
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Console+__BrowserConsole+ConsoleImplementation.WriteString
  // ScriptCoreLib.JavaScript.Runtime.Timer
  function egouDNY33j68H_aZQYc4FRw(){};
  egouDNY33j68H_aZQYc4FRw.TypeName = "Timer";
  egouDNY33j68H_aZQYc4FRw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$egouDNY33j68H_aZQYc4FRw = egouDNY33j68H_aZQYc4FRw.prototype;
  type$egouDNY33j68H_aZQYc4FRw = egouDNY33j68H_aZQYc4FRw.prototype =   {
    constructor: egouDNY33j68H_aZQYc4FRw,
    Tick: null,
    id: 0,
    isTimeout: false,
    isInterval: false,
    Counter: 0,
    Step: 0,
    TimeToLive: 0,
    Enabled: false
  }
;
  var basector$egouDNY33j68H_aZQYc4FRw = $ctor$(null, null, type$egouDNY33j68H_aZQYc4FRw);
  // ScriptCoreLib.JavaScript.Runtime.Timer..ctor
  type$egouDNY33j68H_aZQYc4FRw.hgQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this;

    a.Step = 1;
    a.TimeToLive = 0;
    a.Enabled = 1;
  };
  var ctor$hgQABtY33j68H_aZQYc4FRw = egouDNY33j68H_aZQYc4FRw.ctor = $ctor$(null, 'hgQABtY33j68H_aZQYc4FRw', type$egouDNY33j68H_aZQYc4FRw);

  // ScriptCoreLib.JavaScript.Runtime.Timer..ctor
  type$egouDNY33j68H_aZQYc4FRw.hwQABtY33j68H_aZQYc4FRw = function (b)
  {
    var a = this;

    a.Step = 1;
    a.TimeToLive = 0;
    a.Enabled = 1;
    a.Tick = iwYABnzY4jaVovIDSMIxgQ(a.Tick, b);
  };
  var ctor$hwQABtY33j68H_aZQYc4FRw = $ctor$(null, 'hwQABtY33j68H_aZQYc4FRw', type$egouDNY33j68H_aZQYc4FRw);

  // ScriptCoreLib.JavaScript.Runtime.Timer..ctor
  type$egouDNY33j68H_aZQYc4FRw.iAQABtY33j68H_aZQYc4FRw = function (b, c, d)
  {
    var a = this, e, f, g;

    e = null;
    f = /* DOMCreateType */new _59VhtNcPhzSW82XMVeUYjA();
    f.interval = d;
    a.Step = 1;
    a.TimeToLive = 0;
    a.Enabled = 1;
    f.__4__this = a;
    a.Tick = iwYABnzY4jaVovIDSMIxgQ(a.Tick, b);
    g = !(c > 0);

    if (!g)
    {

      if (!e)
      {
        e = new ctor$ewMABju_bQzuieaLNynM0gA(f, '__ctor_b__0');
      }

      __aQMABrc98zqfJJxE_at_bcTw(window, e, c);
    }
    else
    {
      g = !(f.interval > 0);

      if (!g)
      {
        a.jgQABtY33j68H_aZQYc4FRw(f.interval);
      }
      else
      {
        a.igQABtY33j68H_aZQYc4FRw();
      }

    }

  };
  var ctor$iAQABtY33j68H_aZQYc4FRw = $ctor$(null, 'iAQABtY33j68H_aZQYc4FRw', type$egouDNY33j68H_aZQYc4FRw);

  // ScriptCoreLib.JavaScript.Runtime.Timer.add_Tick
  type$egouDNY33j68H_aZQYc4FRw.hAQABtY33j68H_aZQYc4FRw = function (b)
  {
    var a = this;

    a.Tick = iwYABnzY4jaVovIDSMIxgQ(a.Tick, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.remove_Tick
  type$egouDNY33j68H_aZQYc4FRw.hQQABtY33j68H_aZQYc4FRw = function (b)
  {
    var a = this;

    a.Tick = jQYABnzY4jaVovIDSMIxgQ(a.Tick, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.get_TimeToLiveExceeded
  type$egouDNY33j68H_aZQYc4FRw.iQQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this, b;

    b = ((a.TimeToLive <= 0) ? 0 : (a.Counter > a.TimeToLive));
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.Invoke
  type$egouDNY33j68H_aZQYc4FRw.igQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this, b;

    b = !a.Enabled;

    if (!b)
    {
      sAIABgLCITuEwr97s3dlTA(a.Tick, a);
      a.Counter = (a.Counter + a.Step);
      b = !a.iQQABtY33j68H_aZQYc4FRw();

      if (!b)
      {
        a.kgQABtY33j68H_aZQYc4FRw();
      }

    }

  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.Interval
  function iwQABtY33j68H_aZQYc4FRw(b, c)
  {
    var d, e;

    d = new ctor$hgQABtY33j68H_aZQYc4FRw();
    d.Tick = iwYABnzY4jaVovIDSMIxgQ(d.Tick, b);
    d.jgQABtY33j68H_aZQYc4FRw(c);
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.StartInterval
  type$egouDNY33j68H_aZQYc4FRw.jAQABtY33j68H_aZQYc4FRw = function (b, c)
  {
    var a = this;

    a.TimeToLive = c;
    a.jgQABtY33j68H_aZQYc4FRw(b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.StartInterval
  type$egouDNY33j68H_aZQYc4FRw.jQQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this;

    a.jgQABtY33j68H_aZQYc4FRw(300);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.StartInterval
  type$egouDNY33j68H_aZQYc4FRw.jgQABtY33j68H_aZQYc4FRw = function (b)
  {
    var a = this;

    a.kgQABtY33j68H_aZQYc4FRw();
    a.isInterval = 1;
    a.id = __bAMABrc98zqfJJxE_at_bcTw(window, new ctor$ewMABju_bQzuieaLNynM0gA(a, 'igQABtY33j68H_aZQYc4FRw'), b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.StartTimeout
  type$egouDNY33j68H_aZQYc4FRw.jwQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this;

    a.kAQABtY33j68H_aZQYc4FRw(300);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.StartTimeout
  type$egouDNY33j68H_aZQYc4FRw.kAQABtY33j68H_aZQYc4FRw = function (b)
  {
    var a = this;

    a.kgQABtY33j68H_aZQYc4FRw();
    a.isTimeout = 1;
    a.id = __aQMABrc98zqfJJxE_at_bcTw(window, new ctor$ewMABju_bQzuieaLNynM0gA(a, 'igQABtY33j68H_aZQYc4FRw'), b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.get_IsAlive
  type$egouDNY33j68H_aZQYc4FRw.kQQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this, b;

    b = !!a.id;
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.Stop
  type$egouDNY33j68H_aZQYc4FRw.kgQABtY33j68H_aZQYc4FRw = function ()
  {
    var a = this, b;

    b = !a.isTimeout;

    if (!b)
    {
      window.clearTimeout(a.id);
    }

    b = !a.isInterval;

    if (!b)
    {
      window.clearInterval(a.id);
    }

    a.isInterval = 0;
    a.isTimeout = 0;
    a.id = 0;
    a.Counter = 0;
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.Do
  function kwQABtY33j68H_aZQYc4FRw(b, c, d)
  {
    var e;

    e = /* DOMCreateType */new xGA_bFvJBqjGZxpFG2C7E_ag();
    e.dx = b;
    new ctor$iAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_Do_b__4'), c, d);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.DoAsync
  function lAQABtY33j68H_aZQYc4FRw(b)
  {
    var c;

    c = /* DOMCreateType */new AfjCL_bP6Dj2lUxNJj5Barw();
    c.h = b;
    new ctor$iAQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_DoAsync_b__7'), 1, 0);
  };

  // ScriptCoreLib.JavaScript.Runtime.Timer.Trigger
  function lQQABtY33j68H_aZQYc4FRw(b, c)
  {
    var d, e, f;

    e = /* DOMCreateType */new n6MKG7dWkTqqX5fKL6Kbsg();
    e.p = b;
    e.h = c;
    e.timer = null;
    d = new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_Trigger_b__a');
    e.timer = new ctor$iAQABtY33j68H_aZQYc4FRw(d, 100, 100);
    f = e.timer;
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLegend.InternalConstructor
  function sAQABrb6Hj2Xo3ACTwFCAg()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('legend');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1
  function rFXrVszZwj2ydi0fLFN2tw(){};
  rFXrVszZwj2ydi0fLFN2tw.TypeName = "TweenData_1";
  rFXrVszZwj2ydi0fLFN2tw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$rFXrVszZwj2ydi0fLFN2tw = rFXrVszZwj2ydi0fLFN2tw.prototype;
  type$rFXrVszZwj2ydi0fLFN2tw = rFXrVszZwj2ydi0fLFN2tw.prototype =   {
    constructor: rFXrVszZwj2ydi0fLFN2tw,
    Dirty: false,
    CurrentValue: null,
    FutureValue: null,
    SyncTimer: null,
    Tick: null,
    Done: null,
    IsCloseEnoughHandler: null,
    FutureValueChanged: null,
    ValueChanged: null,
    Speed: 0
  }
;
  var basector$rFXrVszZwj2ydi0fLFN2tw = $ctor$(null, null, type$rFXrVszZwj2ydi0fLFN2tw);
  // ScriptCoreLib.JavaScript.Runtime.TweenData`1..ctor
  type$rFXrVszZwj2ydi0fLFN2tw.sQQABszZwj2ydi0fLFN2tw = function ()
  {
    var a = this, b;

    b = null;
    a.Speed = 50;

    if (!b)
    {
      b = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'vgQABszZwj2ydi0fLFN2tw');
    }

    a.SyncTimer = new ctor$hwQABtY33j68H_aZQYc4FRw(b);
  };
  var ctor$sQQABszZwj2ydi0fLFN2tw = rFXrVszZwj2ydi0fLFN2tw.ctor = $ctor$(null, 'sQQABszZwj2ydi0fLFN2tw', type$rFXrVszZwj2ydi0fLFN2tw);

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.add_Tick
  type$rFXrVszZwj2ydi0fLFN2tw.sgQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.Tick = iwYABnzY4jaVovIDSMIxgQ(a.Tick, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.remove_Tick
  type$rFXrVszZwj2ydi0fLFN2tw.swQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.Tick = jQYABnzY4jaVovIDSMIxgQ(a.Tick, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.add_Done
  type$rFXrVszZwj2ydi0fLFN2tw.tAQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.Done = iwYABnzY4jaVovIDSMIxgQ(a.Done, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.remove_Done
  type$rFXrVszZwj2ydi0fLFN2tw.tQQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.Done = jQYABnzY4jaVovIDSMIxgQ(a.Done, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.get_IsCloseEnough
  type$rFXrVszZwj2ydi0fLFN2tw.tgQABszZwj2ydi0fLFN2tw = function ()
  {
    var a = this, b;

    b = lQMABgklzj_aswDwOFNiiFQ(a.IsCloseEnoughHandler, 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.add_FutureValueChanged
  type$rFXrVszZwj2ydi0fLFN2tw.twQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.FutureValueChanged = iwYABnzY4jaVovIDSMIxgQ(a.FutureValueChanged, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.remove_FutureValueChanged
  type$rFXrVszZwj2ydi0fLFN2tw.uAQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.FutureValueChanged = jQYABnzY4jaVovIDSMIxgQ(a.FutureValueChanged, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.add_ValueChanged
  type$rFXrVszZwj2ydi0fLFN2tw.uQQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.ValueChanged = iwYABnzY4jaVovIDSMIxgQ(a.ValueChanged, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.remove_ValueChanged
  type$rFXrVszZwj2ydi0fLFN2tw.ugQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this;

    a.ValueChanged = jQYABnzY4jaVovIDSMIxgQ(a.ValueChanged, b);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.get_Value
  type$rFXrVszZwj2ydi0fLFN2tw.uwQABszZwj2ydi0fLFN2tw = function ()
  {
    var a = this, b;

    b = a.CurrentValue;
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.set_Value
  type$rFXrVszZwj2ydi0fLFN2tw.vAQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this, c;

    c = !a.Dirty;

    if (!c)
    {
      a.FutureValue = b;
      sQIABgLCITuEwr97s3dlTA(a.FutureValueChanged);
      c = a.tgQABszZwj2ydi0fLFN2tw();

      if (!c)
      {
        a.SyncTimer.jgQABtY33j68H_aZQYc4FRw(a.Speed);
      }

      return;
    }

    a.FutureValue = b;
    sQIABgLCITuEwr97s3dlTA(a.FutureValueChanged);
    a.CurrentValue = a.FutureValue;
    a.Dirty = 1;
    a.vQQABszZwj2ydi0fLFN2tw();
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.RaiseValueChanged
  type$rFXrVszZwj2ydi0fLFN2tw.vQQABszZwj2ydi0fLFN2tw = function ()
  {
    var a = this, b;

    b = !a.tgQABszZwj2ydi0fLFN2tw();

    if (!b)
    {
      a.CurrentValue = a.FutureValue;
    }

    sQIABgLCITuEwr97s3dlTA(a.ValueChanged);
  };

  // ScriptCoreLib.JavaScript.Runtime.TweenData`1.<.ctor>b__0
  type$rFXrVszZwj2ydi0fLFN2tw.vgQABszZwj2ydi0fLFN2tw = function (b)
  {
    var a = this, c;

    c = !a.tgQABszZwj2ydi0fLFN2tw();

    if (!c)
    {
      a.SyncTimer.kgQABtY33j68H_aZQYc4FRw();
      sQIABgLCITuEwr97s3dlTA(a.Done);
      return;
    }

    sQIABgLCITuEwr97s3dlTA(a.Tick);
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint
  function fEnIwcKt7jiCshUnPiRXbw(){};
  fEnIwcKt7jiCshUnPiRXbw.TypeName = "TweenDataPoint";
  fEnIwcKt7jiCshUnPiRXbw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$fEnIwcKt7jiCshUnPiRXbw = fEnIwcKt7jiCshUnPiRXbw.prototype;
  var basector$fEnIwcKt7jiCshUnPiRXbw = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, null, type$fEnIwcKt7jiCshUnPiRXbw);
  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint..ctor
  type$fEnIwcKt7jiCshUnPiRXbw.vwQABsKt7jiCshUnPiRXbw = function (b)
  {
    var a = this;

    a.wAQABsKt7jiCshUnPiRXbw();
    a.uQQABszZwj2ydi0fLFN2tw(b);
  };
  var ctor$vwQABsKt7jiCshUnPiRXbw = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, 'vwQABsKt7jiCshUnPiRXbw', type$fEnIwcKt7jiCshUnPiRXbw);

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint..ctor
  type$fEnIwcKt7jiCshUnPiRXbw.wAQABsKt7jiCshUnPiRXbw = function ()
  {
    var a = this, b, c, d;

    b = null;
    c = null;
    d = null;
    a.sQQABszZwj2ydi0fLFN2tw();

    if (!b)
    {
      b = new ctor$ewMABju_bQzuieaLNynM0gA(a, 'wwQABsKt7jiCshUnPiRXbw');
    }

    a.sgQABszZwj2ydi0fLFN2tw(b);

    if (!c)
    {
      c = new ctor$ewMABju_bQzuieaLNynM0gA(a, 'xAQABsKt7jiCshUnPiRXbw');
    }

    a.twQABszZwj2ydi0fLFN2tw(c);

    if (!d)
    {
      d = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'xQQABsKt7jiCshUnPiRXbw');
    }

    a.IsCloseEnoughHandler = iwYABnzY4jaVovIDSMIxgQ(a.IsCloseEnoughHandler, d);
  };
  var ctor$wAQABsKt7jiCshUnPiRXbw = fEnIwcKt7jiCshUnPiRXbw.ctor = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, 'wAQABsKt7jiCshUnPiRXbw', type$fEnIwcKt7jiCshUnPiRXbw);

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint.round
  type$fEnIwcKt7jiCshUnPiRXbw.wQQABsKt7jiCshUnPiRXbw = function (b)
  {
    var a = this, c;

    c = new ctor$_3QMABjE9ID2bvdJDtEkvJw(a.wgQABsKt7jiCshUnPiRXbw(b.X), a.wgQABsKt7jiCshUnPiRXbw(b.Y));
    return c;
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint.round
  type$fEnIwcKt7jiCshUnPiRXbw.wgQABsKt7jiCshUnPiRXbw = function (b)
  {
    var a = this, c;

    c = Math.round(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint.<.ctor>b__2
  type$fEnIwcKt7jiCshUnPiRXbw.wwQABsKt7jiCshUnPiRXbw = function ()
  {
    var a = this, b;

    b = _5AMABjE9ID2bvdJDtEkvJw(_4wMABjE9ID2bvdJDtEkvJw(a.CurrentValue, a.FutureValue), 2);
    a.CurrentValue = a.wQQABsKt7jiCshUnPiRXbw(b);
    a.vQQABszZwj2ydi0fLFN2tw();
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint.<.ctor>b__3
  type$fEnIwcKt7jiCshUnPiRXbw.xAQABsKt7jiCshUnPiRXbw = function ()
  {
    var a = this;

    a.FutureValue = a.wQQABsKt7jiCshUnPiRXbw(a.FutureValue);
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataPoint.<.ctor>b__4
  type$fEnIwcKt7jiCshUnPiRXbw.xQQABsKt7jiCshUnPiRXbw = function (b)
  {
    var a = this, c, d;

    c = _4gMABjE9ID2bvdJDtEkvJw(a.CurrentValue, a.FutureValue);
    d = !(Math.abs(c.X) > 1);

    if (!d)
    {
      return;
    }

    d = !(Math.abs(c.Y) > 1);

    if (!d)
    {
      return;
    }

    b.Value = 1;
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble
  function mFL92yU0xzm4hMYeH_bYOAQ(){};
  mFL92yU0xzm4hMYeH_bYOAQ.TypeName = "TweenDataDouble";
  mFL92yU0xzm4hMYeH_bYOAQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$mFL92yU0xzm4hMYeH_bYOAQ = mFL92yU0xzm4hMYeH_bYOAQ.prototype;
  var basector$mFL92yU0xzm4hMYeH_bYOAQ = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, null, type$mFL92yU0xzm4hMYeH_bYOAQ);
  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble..ctor
  type$mFL92yU0xzm4hMYeH_bYOAQ.xgQABiU0xzm4hMYeH_bYOAQ = function (b)
  {
    var a = this;

    a.xwQABiU0xzm4hMYeH_bYOAQ();
    a.uQQABszZwj2ydi0fLFN2tw(b);
  };
  var ctor$xgQABiU0xzm4hMYeH_bYOAQ = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, 'xgQABiU0xzm4hMYeH_bYOAQ', type$mFL92yU0xzm4hMYeH_bYOAQ);

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble..ctor
  type$mFL92yU0xzm4hMYeH_bYOAQ.xwQABiU0xzm4hMYeH_bYOAQ = function ()
  {
    var a = this, b, c, d;

    b = null;
    c = null;
    d = null;
    a.sQQABszZwj2ydi0fLFN2tw();

    if (!b)
    {
      b = new ctor$ewMABju_bQzuieaLNynM0gA(a, 'yQQABiU0xzm4hMYeH_bYOAQ');
    }

    a.sgQABszZwj2ydi0fLFN2tw(b);

    if (!c)
    {
      c = new ctor$ewMABju_bQzuieaLNynM0gA(a, 'ygQABiU0xzm4hMYeH_bYOAQ');
    }

    a.twQABszZwj2ydi0fLFN2tw(c);

    if (!d)
    {
      d = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'ywQABiU0xzm4hMYeH_bYOAQ');
    }

    a.IsCloseEnoughHandler = iwYABnzY4jaVovIDSMIxgQ(a.IsCloseEnoughHandler, d);
  };
  var ctor$xwQABiU0xzm4hMYeH_bYOAQ = mFL92yU0xzm4hMYeH_bYOAQ.ctor = $ctor$(basector$rFXrVszZwj2ydi0fLFN2tw, 'xwQABiU0xzm4hMYeH_bYOAQ', type$mFL92yU0xzm4hMYeH_bYOAQ);

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble.round
  type$mFL92yU0xzm4hMYeH_bYOAQ.yAQABiU0xzm4hMYeH_bYOAQ = function (b)
  {
    var a = this, c;

    b = (b * 100);
    b = Math.round(b);
    b = (b / 100);
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble.<.ctor>b__0
  type$mFL92yU0xzm4hMYeH_bYOAQ.yQQABiU0xzm4hMYeH_bYOAQ = function ()
  {
    var a = this, b;

    b = ((a.CurrentValue + a.FutureValue) / 2);
    a.CurrentValue = a.yAQABiU0xzm4hMYeH_bYOAQ(b);
    a.vQQABszZwj2ydi0fLFN2tw();
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble.<.ctor>b__1
  type$mFL92yU0xzm4hMYeH_bYOAQ.ygQABiU0xzm4hMYeH_bYOAQ = function ()
  {
    var a = this;

    a.FutureValue = a.yAQABiU0xzm4hMYeH_bYOAQ(a.FutureValue);
  };

  // ScriptCoreLib.JavaScript.Controls.Effects.TweenDataDouble.<.ctor>b__2
  type$mFL92yU0xzm4hMYeH_bYOAQ.ywQABiU0xzm4hMYeH_bYOAQ = function (b)
  {
    var a = this;

    b.Value = (Math.abs((a.CurrentValue - a.FutureValue)) < 0.05);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__MemberInfo
  function JXMs66OBvjOuSkQZrCdfWA(){};
  JXMs66OBvjOuSkQZrCdfWA.TypeName = "MemberInfo";
  JXMs66OBvjOuSkQZrCdfWA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$JXMs66OBvjOuSkQZrCdfWA = JXMs66OBvjOuSkQZrCdfWA.prototype;
  var basector$JXMs66OBvjOuSkQZrCdfWA = $ctor$(null, null, type$JXMs66OBvjOuSkQZrCdfWA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__MemberInfo..ctor
  type$JXMs66OBvjOuSkQZrCdfWA.zwQABqOBvjOuSkQZrCdfWA = function ()
  {
    var a = this;

  };
  var ctor$zwQABqOBvjOuSkQZrCdfWA = JXMs66OBvjOuSkQZrCdfWA.ctor = $ctor$(null, 'zwQABqOBvjOuSkQZrCdfWA', type$JXMs66OBvjOuSkQZrCdfWA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__MemberInfo.get_Name
  type$JXMs66OBvjOuSkQZrCdfWA.zAQABqOBvjOuSkQZrCdfWA = function ()
  {
/* abstract */  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__MemberInfo.GetCustomAttributes
  type$JXMs66OBvjOuSkQZrCdfWA.zQQABqOBvjOuSkQZrCdfWA = function (b, c)
  {
/* abstract */  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__MemberInfo.GetCustomAttributes
  type$JXMs66OBvjOuSkQZrCdfWA.zgQABqOBvjOuSkQZrCdfWA = function (b)
  {
/* abstract */  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type
  function _3mwuQmIY_az6vz_alg_a0hAHA(){};
  _3mwuQmIY_az6vz_alg_a0hAHA.TypeName = "Type";
  _3mwuQmIY_az6vz_alg_a0hAHA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_3mwuQmIY_az6vz_alg_a0hAHA = _3mwuQmIY_az6vz_alg_a0hAHA.prototype;
  type$_3mwuQmIY_az6vz_alg_a0hAHA = _3mwuQmIY_az6vz_alg_a0hAHA.prototype =   {
    constructor: _3mwuQmIY_az6vz_alg_a0hAHA,
    _TypeHandle: null
  }
;
  var basector$_3mwuQmIY_az6vz_alg_a0hAHA = $ctor$(basector$JXMs66OBvjOuSkQZrCdfWA, null, type$_3mwuQmIY_az6vz_alg_a0hAHA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type..ctor
  type$_3mwuQmIY_az6vz_alg_a0hAHA._3QQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this;

    a.zwQABqOBvjOuSkQZrCdfWA();
  };
  var ctor$_3QQABmIY_az6vz_alg_a0hAHA = _3mwuQmIY_az6vz_alg_a0hAHA.ctor = $ctor$(basector$JXMs66OBvjOuSkQZrCdfWA, '_3QQABmIY_az6vz_alg_a0hAHA', type$_3mwuQmIY_az6vz_alg_a0hAHA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.get_Assembly
  type$_3mwuQmIY_az6vz_alg_a0hAHA._0AQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b, c;

    b = new ctor$FAUABpM_bbTOfQQpQLCrlcA();
    b.__Value = _9gAABtd5xTKztToDDBg08A(a._1AQABmIY_az6vz_alg_a0hAHA().constructor, 'Assembly');
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.get_TypeHandle
  type$_3mwuQmIY_az6vz_alg_a0hAHA._0QQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b;

    b = a._TypeHandle;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.set_TypeHandle
  type$_3mwuQmIY_az6vz_alg_a0hAHA._0gQABmIY_az6vz_alg_a0hAHA = function (b)
  {
    var a = this;

    a._TypeHandle = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.GetField
  type$_3mwuQmIY_az6vz_alg_a0hAHA._0wQABmIY_az6vz_alg_a0hAHA = function (b)
  {
    var a = this, c, d, e, f, g, h, i;

    c = null;
    g = _5AAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(a._TypeHandle.get_Value()));

    for (h = 0; (h < g.length); h++)
    {
      d = g[h];
      i = !CQUABpT92DaiMvTduyyLZQ(d.Name, b);

      if (!i)
      {
        e = new ctor$BwYABm1_aLDizHet2AsjNlw();
        e._Name = d.Name;
        c = e;
        break;
      }

    }

    f = c;
    return f;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.AsExpando
  type$_3mwuQmIY_az6vz_alg_a0hAHA._1AQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b;

    b = _9AAABtd5xTKztToDDBg08A(a._TypeHandle.get_Value());
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.GetFields
  type$_3mwuQmIY_az6vz_alg_a0hAHA._1QQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b, c, d, e, f, g, h;

    b = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    f = _5AAABtd5xTKztToDDBg08A(a._1AQABmIY_az6vz_alg_a0hAHA());

    for (g = 0; (g < f.length); g++)
    {
      c = f[g];
      d = new ctor$BwYABm1_aLDizHet2AsjNlw();
      d._Name = c.Name;
      b.TgMABtmlXD2_bMcNB1Zdfiw(d);
    }

    e = b.RwMABtmlXD2_bMcNB1Zdfiw();
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.GetTypeFromHandle
  function _1gQABmIY_az6vz_alg_a0hAHA(b)
  {
    var c, d;

    c = new ctor$_3QQABmIY_az6vz_alg_a0hAHA();
    c._0gQABmIY_az6vz_alg_a0hAHA(b);
    d = _1wQABmIY_az6vz_alg_a0hAHA(c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.op_Implicit
  function _1wQABmIY_az6vz_alg_a0hAHA(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.Equals
  type$_3mwuQmIY_az6vz_alg_a0hAHA._2AQABmIY_az6vz_alg_a0hAHA = function (b)
  {
    var a = this, c, d, e, f;

    f = a._0QQABmIY_az6vz_alg_a0hAHA();
    c = f.get_Value();
    f = b._0QQABmIY_az6vz_alg_a0hAHA();
    d = f.get_Value();
    e = (c == d);
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.get_Name
  type$_3mwuQmIY_az6vz_alg_a0hAHA._2QQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b;

    b = _9gAABtd5xTKztToDDBg08A(a._1AQABmIY_az6vz_alg_a0hAHA().constructor, 'TypeName');
    return b;
  };
    _3mwuQmIY_az6vz_alg_a0hAHA.prototype.zAQABqOBvjOuSkQZrCdfWA = _3mwuQmIY_az6vz_alg_a0hAHA.prototype._2QQABmIY_az6vz_alg_a0hAHA;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.get_Reflection
  type$_3mwuQmIY_az6vz_alg_a0hAHA._2gQABmIY_az6vz_alg_a0hAHA = function ()
  {
    var a = this, b;

    b = a._1AQABmIY_az6vz_alg_a0hAHA().constructor;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.GetCustomAttributes
  type$_3mwuQmIY_az6vz_alg_a0hAHA._2wQABmIY_az6vz_alg_a0hAHA = function (b)
  {
    var a = this, c;

    c = a.zQQABqOBvjOuSkQZrCdfWA(null, 0);
    return c;
  };
    _3mwuQmIY_az6vz_alg_a0hAHA.prototype.zgQABqOBvjOuSkQZrCdfWA = _3mwuQmIY_az6vz_alg_a0hAHA.prototype._2wQABmIY_az6vz_alg_a0hAHA;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type.GetCustomAttributes
  type$_3mwuQmIY_az6vz_alg_a0hAHA._3AQABmIY_az6vz_alg_a0hAHA = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k;

    h = !c;

    if (!h)
    {
      throw CwIABoJO8je05HfkC2K_atQ();
    }

    h = !(a._2gQABmIY_az6vz_alg_a0hAHA().GetAttributes == null);

    if (!h)
    {
      g = [

      ];
      return g;
    }

    d = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    i = a._2gQABmIY_az6vz_alg_a0hAHA().GetAttributes.apply(a._2gQABmIY_az6vz_alg_a0hAHA(), []);

    for (j = 0; (j < i.length); j++)
    {
      e = i[j];
      f = 1;
      h = (b == null);

      if (!h)
      {
        k = b._0QQABmIY_az6vz_alg_a0hAHA();
        h = uAMABqrEITqyE_a1vEl3Jnw(e.Type.prototype, k.get_Value());

        if (!h)
        {
          f = 0;
        }

      }

      h = !f;

      if (!h)
      {
        d.TgMABtmlXD2_bMcNB1Zdfiw(e.Value);
      }

    }

    g = d.RwMABtmlXD2_bMcNB1Zdfiw();
    return g;
  };
    _3mwuQmIY_az6vz_alg_a0hAHA.prototype.zQQABqOBvjOuSkQZrCdfWA = _3mwuQmIY_az6vz_alg_a0hAHA.prototype._3AQABmIY_az6vz_alg_a0hAHA;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type+__AttributeReflection
  function LNNcWkIKxTGj2w8n2wJ3UA(){};
  LNNcWkIKxTGj2w8n2wJ3UA.TypeName = "__AttributeReflection";
  LNNcWkIKxTGj2w8n2wJ3UA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$LNNcWkIKxTGj2w8n2wJ3UA = LNNcWkIKxTGj2w8n2wJ3UA.prototype;
  type$LNNcWkIKxTGj2w8n2wJ3UA = LNNcWkIKxTGj2w8n2wJ3UA.prototype =   {
    constructor: LNNcWkIKxTGj2w8n2wJ3UA,
    Type: null,
    Value: null
  }
;
  var basector$LNNcWkIKxTGj2w8n2wJ3UA = $ctor$(null, null, type$LNNcWkIKxTGj2w8n2wJ3UA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type+__AttributeReflection..ctor
  type$LNNcWkIKxTGj2w8n2wJ3UA._3gQABkIKxTGj2w8n2wJ3UA = function ()
  {
    var a = this;

  };
  var ctor$_3gQABkIKxTGj2w8n2wJ3UA = LNNcWkIKxTGj2w8n2wJ3UA.ctor = $ctor$(null, '_3gQABkIKxTGj2w8n2wJ3UA', type$LNNcWkIKxTGj2w8n2wJ3UA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type+__TypeReflection
  function cpimMhJE7Da0f5Z3bjgLGw(){};
  cpimMhJE7Da0f5Z3bjgLGw.TypeName = "__TypeReflection";
  cpimMhJE7Da0f5Z3bjgLGw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$cpimMhJE7Da0f5Z3bjgLGw = cpimMhJE7Da0f5Z3bjgLGw.prototype;
  type$cpimMhJE7Da0f5Z3bjgLGw = cpimMhJE7Da0f5Z3bjgLGw.prototype =   {
    constructor: cpimMhJE7Da0f5Z3bjgLGw,
    GetAttributes: null
  }
;
  var basector$cpimMhJE7Da0f5Z3bjgLGw = $ctor$(null, null, type$cpimMhJE7Da0f5Z3bjgLGw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Type+__TypeReflection..ctor
  type$cpimMhJE7Da0f5Z3bjgLGw._3wQABhJE7Da0f5Z3bjgLGw = function ()
  {
    var a = this;

  };
  var ctor$_3wQABhJE7Da0f5Z3bjgLGw = cpimMhJE7Da0f5Z3bjgLGw.ctor = $ctor$(null, '_3wQABhJE7Da0f5Z3bjgLGw', type$cpimMhJE7Da0f5Z3bjgLGw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String
  function slVTNpT92DaiMvTduyyLZQ(){};
  slVTNpT92DaiMvTduyyLZQ.TypeName = "String";
  slVTNpT92DaiMvTduyyLZQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$slVTNpT92DaiMvTduyyLZQ = slVTNpT92DaiMvTduyyLZQ.prototype;
  var basector$slVTNpT92DaiMvTduyyLZQ = $ctor$(null, null, type$slVTNpT92DaiMvTduyyLZQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String..ctor
  type$slVTNpT92DaiMvTduyyLZQ.DQUABpT92DaiMvTduyyLZQ = function ()
  {
    var a = this;

  };
  var ctor$DQUABpT92DaiMvTduyyLZQ = slVTNpT92DaiMvTduyyLZQ.ctor = $ctor$(null, 'DQUABpT92DaiMvTduyyLZQ', type$slVTNpT92DaiMvTduyyLZQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Format
  function _4AQABpT92DaiMvTduyyLZQ(b, c)
  {
    var d;

    d = _9gQABpT92DaiMvTduyyLZQ(b, '{0}', _7wQABpT92DaiMvTduyyLZQ(c));
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Format
  function _4QQABpT92DaiMvTduyyLZQ(b, c, d)
  {
    var e;

    e = _9gQABpT92DaiMvTduyyLZQ(_9gQABpT92DaiMvTduyyLZQ(b, '{0}', _7wQABpT92DaiMvTduyyLZQ(c)), '{1}', _7wQABpT92DaiMvTduyyLZQ(d));
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.IsNullOrEmpty
  function _4gQABpT92DaiMvTduyyLZQ(b)
  {
    var c, d;

    d = !(b == null);

    if (!d)
    {
      c = 1;
      return c;
    }

    d = !CQUABpT92DaiMvTduyyLZQ(b, '');

    if (!d)
    {
      c = 1;
      return c;
    }

    c = 0;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.GetCharCodeAt
  function _4wQABpT92DaiMvTduyyLZQ(e, o) { return e.charCodeAt(o); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.FromCharCode
  function _5AQABpT92DaiMvTduyyLZQ(i) { return String.fromCharCode(i); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.CompareTo
  function _5QQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = _0QAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalCharAt
  function _5gQABpT92DaiMvTduyyLZQ(e, i) { return e.charAt(i); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalLength
  function _5wQABpT92DaiMvTduyyLZQ(e) { return e.length; };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalIndexOf
  function _6AQABpT92DaiMvTduyyLZQ(e, c) { return e.indexOf(c); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.IndexOf
  function _6QQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = _6AQABpT92DaiMvTduyyLZQ(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.IndexOf
  function _6gQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = _6AQABpT92DaiMvTduyyLZQ(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.get_Length
  function _6wQABpT92DaiMvTduyyLZQ(a)
  {
    var b;

    b = _5wQABpT92DaiMvTduyyLZQ(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.get_Chars
  function _7AQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = _4wQABpT92DaiMvTduyyLZQ(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Contains
  function _7QQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = (_6AQABpT92DaiMvTduyyLZQ(a, b) > -1);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _7gQABpT92DaiMvTduyyLZQ(a0) { return a0.join(''); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _7wQABpT92DaiMvTduyyLZQ(a0) { return a0+''; };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _8AQABpT92DaiMvTduyyLZQ(a0, a1) { return a0+a1 };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _8QQABpT92DaiMvTduyyLZQ(a0, a1, a2) { return a0+a1+a2 };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _8gQABpT92DaiMvTduyyLZQ(a0, a1) { return a0+a1 };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _8wQABpT92DaiMvTduyyLZQ(a0, a1, a2) { return a0+a1+a2 };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Concat
  function _9AQABpT92DaiMvTduyyLZQ(a0, a1, a2, a3) { return a0+a1+a2+a3 };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalReplace
  function _9QQABpT92DaiMvTduyyLZQ(a, a0, a1, a2) { return a0.split(a1).join(a2) }
;  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Replace
  function _9gQABpT92DaiMvTduyyLZQ(a, b, c)
  {
    var d;

    d = _9QQABpT92DaiMvTduyyLZQ(a, a, b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Join
  function _9wQABpT92DaiMvTduyyLZQ(a0, a1) { return a1.join(a0); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.toLowerCase
  type$slVTNpT92DaiMvTduyyLZQ.toLowerCase = function ()
  {
    var a = this, b;

    b = null;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.toUpperCase
  type$slVTNpT92DaiMvTduyyLZQ.toUpperCase = function ()
  {
    var a = this, b;

    b = null;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.ToLower
  function __agQABpT92DaiMvTduyyLZQ(a)
  {
    var b;

    b = a.toLowerCase();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.ToUpper
  function __awQABpT92DaiMvTduyyLZQ(a)
  {
    var b;

    b = a.toUpperCase();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Trim
  function __bAQABpT92DaiMvTduyyLZQ(a)
  {
    var b;

    b = ugUABsSpujGcYl3t9rOOPw(uwUABsSpujGcYl3t9rOOPw(), a, '');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.PadRight
  function __bQQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = __bwQABpT92DaiMvTduyyLZQ(a, b, 32);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.PadLeft
  function __bgQABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = AAUABpT92DaiMvTduyyLZQ(a, b, 32);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.PadRight
  function __bwQABpT92DaiMvTduyyLZQ(a, b, c)
  {
    var d, e, f;


    for (d = a; (_6wQABpT92DaiMvTduyyLZQ(d) < b); d = _8gQABpT92DaiMvTduyyLZQ(d, PAUABjNS0TGvUudj270IOg(c)))
    {
    }

    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.PadLeft
  function AAUABpT92DaiMvTduyyLZQ(a, b, c)
  {
    var d, e, f;


    for (d = a; (_6wQABpT92DaiMvTduyyLZQ(d) < b); d = _8gQABpT92DaiMvTduyyLZQ(PAUABjNS0TGvUudj270IOg(c), d))
    {
    }

    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalSubstring
  function AQUABpT92DaiMvTduyyLZQ(a0, a1) { return a0.substr(a1); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.InternalSubstring
  function AgUABpT92DaiMvTduyyLZQ(a0, a1, a2) { return a0.substr(a1, a2); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Substring
  function AwUABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = AQUABpT92DaiMvTduyyLZQ(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Substring
  function BAUABpT92DaiMvTduyyLZQ(a, b, c)
  {
    var d;

    d = AgUABpT92DaiMvTduyyLZQ(a, b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Split
  function BQUABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = xwEABh33sTm5Ql7VEPKRUg(yAEABh33sTm5Ql7VEPKRUg(a, _5AQABpT92DaiMvTduyyLZQ(b[0])));
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Split
  function BgUABpT92DaiMvTduyyLZQ(a, b, c)
  {
    var d, e, f, g, h, i, j;

    h = (b.length == 1);

    if (!h)
    {
      throw mQUABtIJhDGoAfGpSpgccw();
    }

    d = yAEABh33sTm5Ql7VEPKRUg(a, b[0]);
    h = !!c;

    if (!h)
    {
      g = xwEABh33sTm5Ql7VEPKRUg(d);
      return g;
    }

    e = uAEABh33sTm5Ql7VEPKRUg();
    i = xgEABh33sTm5Ql7VEPKRUg(d);

    for (j = 0; (j < i.length); j++)
    {
      f = i[j];
      h = _4gQABpT92DaiMvTduyyLZQ(f);

      if (!h)
      {
        e.push(f);
      }

    }

    g = xgEABh33sTm5Ql7VEPKRUg(e);
    return g;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.EndsWith
  function BwUABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = CQUABpT92DaiMvTduyyLZQ(AQUABpT92DaiMvTduyyLZQ(a, (_6wQABpT92DaiMvTduyyLZQ(a) - _6wQABpT92DaiMvTduyyLZQ(b))), b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.StartsWith
  function CAUABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = CQUABpT92DaiMvTduyyLZQ(AgUABpT92DaiMvTduyyLZQ(a, 0, _6wQABpT92DaiMvTduyyLZQ(b)), b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.op_Equality
  function CQUABpT92DaiMvTduyyLZQ(a, b) { return a == b };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.Equals
  function CgUABpT92DaiMvTduyyLZQ(a, b)
  {
    var c;

    c = CQUABpT92DaiMvTduyyLZQ(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.op_Inequality
  function CwUABpT92DaiMvTduyyLZQ(a, b) { return a != b };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__String.GetHashCode
  function DAUABpT92DaiMvTduyyLZQ(a)
  {
    var b;

    b = a.vQMABqrEITqyE_a1vEl3Jnw();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyValue
  function _3rVcpNBAijqLF5AbaNpxhQ(){};
  _3rVcpNBAijqLF5AbaNpxhQ.TypeName = "__AssemblyValue";
  _3rVcpNBAijqLF5AbaNpxhQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_3rVcpNBAijqLF5AbaNpxhQ = _3rVcpNBAijqLF5AbaNpxhQ.prototype;
  type$_3rVcpNBAijqLF5AbaNpxhQ = _3rVcpNBAijqLF5AbaNpxhQ.prototype =   {
    constructor: _3rVcpNBAijqLF5AbaNpxhQ,
    FullName: null,
    Types: null,
    References: null,
    Name: null
  }
;
  var basector$_3rVcpNBAijqLF5AbaNpxhQ = $ctor$(null, null, type$_3rVcpNBAijqLF5AbaNpxhQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyValue..ctor
  type$_3rVcpNBAijqLF5AbaNpxhQ.DgUABtBAijqLF5AbaNpxhQ = function ()
  {
    var a = this;

  };
  var ctor$DgUABtBAijqLF5AbaNpxhQ = _3rVcpNBAijqLF5AbaNpxhQ.ctor = $ctor$(null, 'DgUABtBAijqLF5AbaNpxhQ', type$_3rVcpNBAijqLF5AbaNpxhQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly
  function _0ZORVJM_bbTOfQQpQLCrlcA(){};
  _0ZORVJM_bbTOfQQpQLCrlcA.TypeName = "Assembly";
  _0ZORVJM_bbTOfQQpQLCrlcA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_0ZORVJM_bbTOfQQpQLCrlcA = _0ZORVJM_bbTOfQQpQLCrlcA.prototype;
  type$_0ZORVJM_bbTOfQQpQLCrlcA = _0ZORVJM_bbTOfQQpQLCrlcA.prototype =   {
    constructor: _0ZORVJM_bbTOfQQpQLCrlcA,
    __Value: null
  }
;
  var basector$_0ZORVJM_bbTOfQQpQLCrlcA = $ctor$(null, null, type$_0ZORVJM_bbTOfQQpQLCrlcA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly..ctor
  type$_0ZORVJM_bbTOfQQpQLCrlcA.FAUABpM_bbTOfQQpQLCrlcA = function ()
  {
    var a = this;

  };
  var ctor$FAUABpM_bbTOfQQpQLCrlcA = _0ZORVJM_bbTOfQQpQLCrlcA.ctor = $ctor$(null, 'FAUABpM_bbTOfQQpQLCrlcA', type$_0ZORVJM_bbTOfQQpQLCrlcA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly.GetName
  type$_0ZORVJM_bbTOfQQpQLCrlcA.DwUABpM_bbTOfQQpQLCrlcA = function ()
  {
    var a = this, b, c;

    b = new ctor$gwcABlxAujOnZMAjDg_bmBg();
    b.__NameValue = a.__Value.Name;
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly.GetReferencedAssemblies
  type$_0ZORVJM_bbTOfQQpQLCrlcA.EAUABpM_bbTOfQQpQLCrlcA = function ()
  {
    var a = this, b, c, d, e, f, g;

    b = a.__Value.References;
    c = [];

    for (d = 0; (d < b.length); d++)
    {
      e = new ctor$gwcABlxAujOnZMAjDg_bmBg();
      e.__Value = b[d];
      c[d] = e;
    }

    f = c;
    return f;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly.Load
  function EQUABpM_bbTOfQQpQLCrlcA(b)
  {
    var c, d, e, f;

    c = b;
    f = !(c.__Value == null);

    if (!f)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('Cannot load this assembly');
    }

    d = new ctor$FAUABpM_bbTOfQQpQLCrlcA();
    d.__Value = c.__Value;
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly.GetTypes
  type$_0ZORVJM_bbTOfQQpQLCrlcA.EgUABpM_bbTOfQQpQLCrlcA = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j;

    b = a.__Value.Types;
    c = [];

    for (d = 0; (d < b.length); d++)
    {
      e = _9AAABtd5xTKztToDDBg08A(b[d]);
      g = new ctor$__bAUABqACZzKSGrrnqJ3SYw();
      g.set_Value(e.prototype);
      f = g;
      h = new ctor$_3QQABmIY_az6vz_alg_a0hAHA();
      h._0gQABmIY_az6vz_alg_a0hAHA(AAYABqACZzKSGrrnqJ3SYw(f));
      c[d] = h;
    }

    i = c;
    return i;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__Assembly.get_FullName
  type$_0ZORVJM_bbTOfQQpQLCrlcA.EwUABpM_bbTOfQQpQLCrlcA = function ()
  {
    var a = this, b;

    b = a.DwUABpM_bbTOfQQpQLCrlcA().get_FullName();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2
  function Mv75jbKDAjqsR3PJP_ajzDw(){};
  Mv75jbKDAjqsR3PJP_ajzDw.TypeName = "KeyValuePair_2";
  Mv75jbKDAjqsR3PJP_ajzDw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Mv75jbKDAjqsR3PJP_ajzDw = Mv75jbKDAjqsR3PJP_ajzDw.prototype;
  type$Mv75jbKDAjqsR3PJP_ajzDw = Mv75jbKDAjqsR3PJP_ajzDw.prototype =   {
    constructor: Mv75jbKDAjqsR3PJP_ajzDw,
    _Key: null,
    _Value: null
  }
;
  var basector$Mv75jbKDAjqsR3PJP_ajzDw = $ctor$(null, null, type$Mv75jbKDAjqsR3PJP_ajzDw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2..ctor
  type$Mv75jbKDAjqsR3PJP_ajzDw.GQUABrKDAjqsR3PJP_ajzDw = function ()
  {
    var a = this;

  };
  var ctor$GQUABrKDAjqsR3PJP_ajzDw = Mv75jbKDAjqsR3PJP_ajzDw.ctor = $ctor$(null, 'GQUABrKDAjqsR3PJP_ajzDw', type$Mv75jbKDAjqsR3PJP_ajzDw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2..ctor
  type$Mv75jbKDAjqsR3PJP_ajzDw.GgUABrKDAjqsR3PJP_ajzDw = function (b, c)
  {
    var a = this;

    a._Key = b;
    a._Value = c;
  };
  var ctor$GgUABrKDAjqsR3PJP_ajzDw = $ctor$(null, 'GgUABrKDAjqsR3PJP_ajzDw', type$Mv75jbKDAjqsR3PJP_ajzDw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2.get_Key
  type$Mv75jbKDAjqsR3PJP_ajzDw.FQUABrKDAjqsR3PJP_ajzDw = function ()
  {
    var a = this, b;

    b = a._Key;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2.set_Key
  type$Mv75jbKDAjqsR3PJP_ajzDw.FgUABrKDAjqsR3PJP_ajzDw = function (b)
  {
    var a = this;

    a._Key = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2.get_Value
  type$Mv75jbKDAjqsR3PJP_ajzDw.FwUABrKDAjqsR3PJP_ajzDw = function ()
  {
    var a = this, b;

    b = a._Value;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__KeyValuePair`2.set_Value
  type$Mv75jbKDAjqsR3PJP_ajzDw.GAUABrKDAjqsR3PJP_ajzDw = function (b)
  {
    var a = this;

    a._Value = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime
  function rpzLaVGiZDedUPZ_akPoOXA(){};
  rpzLaVGiZDedUPZ_akPoOXA.TypeName = "DateTime";
  rpzLaVGiZDedUPZ_akPoOXA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$rpzLaVGiZDedUPZ_akPoOXA = rpzLaVGiZDedUPZ_akPoOXA.prototype;
  var WgIABFGiZDedUPZ_akPoOXA = null;
  var WwIABFGiZDedUPZ_akPoOXA = null;
  type$rpzLaVGiZDedUPZ_akPoOXA = rpzLaVGiZDedUPZ_akPoOXA.prototype =   {
    constructor: rpzLaVGiZDedUPZ_akPoOXA,
    Value: null
  }
;
  var basector$rpzLaVGiZDedUPZ_akPoOXA = $ctor$(null, null, type$rpzLaVGiZDedUPZ_akPoOXA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime..ctor
  type$rpzLaVGiZDedUPZ_akPoOXA.GwUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this;

  };
  var ctor$GwUABlGiZDedUPZ_akPoOXA = rpzLaVGiZDedUPZ_akPoOXA.ctor = $ctor$(null, 'GwUABlGiZDedUPZ_akPoOXA', type$rpzLaVGiZDedUPZ_akPoOXA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime..ctor
  type$rpzLaVGiZDedUPZ_akPoOXA.HAUABlGiZDedUPZ_akPoOXA = function (b)
  {
    var a = this, c, d;

    d = ((b < 0) ? 0 : !(b > 3155378975999999999));

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_DateTimeBadTicks');
    }

    c = ((b - 621355968000000000) / 65536);
    a.Value = new Date(c);
  };
  var ctor$HAUABlGiZDedUPZ_akPoOXA = $ctor$(null, 'HAUABlGiZDedUPZ_akPoOXA', type$rpzLaVGiZDedUPZ_akPoOXA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime..ctor
  type$rpzLaVGiZDedUPZ_akPoOXA.HQUABlGiZDedUPZ_akPoOXA = function (b, c, d)
  {
    var a = this;

    a.Value = new Date();
    a.Value.setFullYear(b);
    a.Value.setMonth((c - 1));
    a.Value.setDate(d);
  };
  var ctor$HQUABlGiZDedUPZ_akPoOXA = $ctor$(null, 'HQUABlGiZDedUPZ_akPoOXA', type$rpzLaVGiZDedUPZ_akPoOXA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.__ArrayDummy
  function KgUABlGiZDedUPZ_akPoOXA(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Now
  function HgUABlGiZDedUPZ_akPoOXA()
  {
    var b, c;

    b = new ctor$GwUABlGiZDedUPZ_akPoOXA();
    b.Value = new Date();
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Millisecond
  type$rpzLaVGiZDedUPZ_akPoOXA.HwUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getMilliseconds();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Second
  type$rpzLaVGiZDedUPZ_akPoOXA.IAUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getSeconds();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Minute
  type$rpzLaVGiZDedUPZ_akPoOXA.IQUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getMinutes();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Hour
  type$rpzLaVGiZDedUPZ_akPoOXA.IgUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getHours();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_DayOfWeek
  type$rpzLaVGiZDedUPZ_akPoOXA.IwUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getDay();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Day
  type$rpzLaVGiZDedUPZ_akPoOXA.JAUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getDate();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Month
  type$rpzLaVGiZDedUPZ_akPoOXA.JQUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = (a.Value.getMonth() + 1);
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Year
  type$rpzLaVGiZDedUPZ_akPoOXA.JgUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b;

    b = a.Value.getFullYear();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.get_Ticks
  type$rpzLaVGiZDedUPZ_akPoOXA.JwUABlGiZDedUPZ_akPoOXA = function ()
  {
    var a = this, b, c;

    b = a.Value.getTime();
    c = ((b * 65536) + 621355968000000000);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.DaysInMonth
  function KAUABlGiZDedUPZ_akPoOXA(b, c)
  {
    var d, e, f;

    f = !(c < 1);

    if (!f)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_Month');
    }

    f = !(c > 12);

    if (!f)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_Month');
    }

    d = ((KwUABlGiZDedUPZ_akPoOXA(b)) ? WgIABFGiZDedUPZ_akPoOXA : WwIABFGiZDedUPZ_akPoOXA);
    e = (d[c] - d[(c - 1)]);
    return e;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.IsLeapYear
  function KwUABlGiZDedUPZ_akPoOXA(b)
  {
    var c, d;

    d = !(b < 1);

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_Year');
    }

    d = !(b > 9999);

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_Year');
    }

    d = !(b % 4);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !!(b % 100);

    if (!d)
    {
      c = !(b % 400);
      return c;
    }

    c = 1;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.ToString
  type$rpzLaVGiZDedUPZ_akPoOXA.toString /* ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.ToString */ = function ()
  {
    var a = this, b, c;

    c = [
      new Number(a.IgUABlGiZDedUPZ_akPoOXA()),
      ':',
      new Number(a.IQUABlGiZDedUPZ_akPoOXA()),
      ':',
      new Number(a.IAUABlGiZDedUPZ_akPoOXA()),
      '.',
      new Number(a.HwUABlGiZDedUPZ_akPoOXA())
    ];
    b = _7gQABpT92DaiMvTduyyLZQ(c);
    return b;
  };
    rpzLaVGiZDedUPZ_akPoOXA.prototype.toString /* System.Object.ToString */ = rpzLaVGiZDedUPZ_akPoOXA.prototype.toString /* ScriptCoreLib.JavaScript.BCLImplementation.System.__DateTime.ToString */;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Array
  function ERbkK0DMdjGWDBLiEXfPbA(){};
  ERbkK0DMdjGWDBLiEXfPbA.TypeName = "Array";
  ERbkK0DMdjGWDBLiEXfPbA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$ERbkK0DMdjGWDBLiEXfPbA = ERbkK0DMdjGWDBLiEXfPbA.prototype;
  var basector$ERbkK0DMdjGWDBLiEXfPbA = $ctor$(null, null, type$ERbkK0DMdjGWDBLiEXfPbA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Array..ctor
  type$ERbkK0DMdjGWDBLiEXfPbA.MwUABkDMdjGWDBLiEXfPbA = function ()
  {
    var a = this;

  };
  var ctor$MwUABkDMdjGWDBLiEXfPbA = ERbkK0DMdjGWDBLiEXfPbA.ctor = $ctor$(null, 'MwUABkDMdjGWDBLiEXfPbA', type$ERbkK0DMdjGWDBLiEXfPbA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Array.Sort
  function MQUABkDMdjGWDBLiEXfPbA(b, c)
  {
    var d;

    d = /* DOMCreateType */new Apl8rIablDyVYt7RSnEeMQ();
    d.c = c;
    ygEABh33sTm5Ql7VEPKRUg(b, new ctor$jwMABrCHYj_a5y7vTBuVR8Q(d, '_Sort_b__0'));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Array.Sort
  function MgUABkDMdjGWDBLiEXfPbA(b, c)
  {
    MQUABkDMdjGWDBLiEXfPbA(b, new ctor$LQUABt4IYz6JkiGcp_buUsA(c, 'mQAABpf0qD_arJIdqFekolg'));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container
  function hUX0ev_bhQTaFRZxsU1e6kg(){};
  hUX0ev_bhQTaFRZxsU1e6kg.TypeName = "Container";
  hUX0ev_bhQTaFRZxsU1e6kg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$hUX0ev_bhQTaFRZxsU1e6kg = hUX0ev_bhQTaFRZxsU1e6kg.prototype;
  var basector$hUX0ev_bhQTaFRZxsU1e6kg = $ctor$(null, null, type$hUX0ev_bhQTaFRZxsU1e6kg);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container..ctor
  type$hUX0ev_bhQTaFRZxsU1e6kg.OQUABv_bhQTaFRZxsU1e6kg = function ()
  {
    var a = this;

  };
  var ctor$OQUABv_bhQTaFRZxsU1e6kg = hUX0ev_bhQTaFRZxsU1e6kg.ctor = $ctor$(null, 'OQUABv_bhQTaFRZxsU1e6kg', type$hUX0ev_bhQTaFRZxsU1e6kg);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container.Add
  type$hUX0ev_bhQTaFRZxsU1e6kg.NAUABv_bhQTaFRZxsU1e6kg = function (b, c)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container.Add
  type$hUX0ev_bhQTaFRZxsU1e6kg.NQUABv_bhQTaFRZxsU1e6kg = function (b)
  {
    var a = this;

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container.get_Components
  type$hUX0ev_bhQTaFRZxsU1e6kg.NgUABv_bhQTaFRZxsU1e6kg = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container.Remove
  type$hUX0ev_bhQTaFRZxsU1e6kg.NwUABv_bhQTaFRZxsU1e6kg = function (b)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container.Dispose
  type$hUX0ev_bhQTaFRZxsU1e6kg.OAUABv_bhQTaFRZxsU1e6kg = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // System.ComponentModel.IContainer
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__Container
  (function (i)  {
    i.fgYABq1KOTWvgk82wZ13yA = i.NQUABv_bhQTaFRZxsU1e6kg;
    i.fwYABq1KOTWvgk82wZ13yA = i.NAUABv_bhQTaFRZxsU1e6kg;
    i.gAYABq1KOTWvgk82wZ13yA = i.NgUABv_bhQTaFRZxsU1e6kg;
    i.gQYABq1KOTWvgk82wZ13yA = i.NwUABv_bhQTaFRZxsU1e6kg;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.OAUABv_bhQTaFRZxsU1e6kg;
  }
  )(type$hUX0ev_bhQTaFRZxsU1e6kg);
  var XAIABDNS0TGvUudj270IOg = null;
  // ScriptCoreLib.JavaScript.Runtime.Convert.FromJSON
  function RwUABjNS0TGvUudj270IOg(b, c)
  {
    var d;

    d = _3gAABtd5xTKztToDDBg08A(zwAABtd5xTKztToDDBg08A(b, c));
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.To
  function SQUABjNS0TGvUudj270IOg(b, c, d)
  {
    var e, f;

    e = new ctor$oQMABjfPjjq4PHK5A3c_auA();
    e.TargetIn = b;
    e.TargetOut = c;
    e.nwMABjfPjjq4PHK5A3c_auA(d);
    f = e.TargetOut;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.DateFromMysqlDateFormatString
  function OgUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e, f, g;

    f = [
      32
    ];
    c = BQUABpT92DaiMvTduyyLZQ(b, f)[0];
    f = [
      45
    ];
    d = BQUABpT92DaiMvTduyyLZQ(c, f);
    g = [
      d[2],
      '.',
      d[1],
      '.',
      d[0]
    ];
    c = _7gQABpT92DaiMvTduyyLZQ(g);
    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToHtml
  function OwUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e;

    c = MQAABgAjajq2ygojxk6uUQ();
    e = [
      b
    ];
    IgAABtvq0jCU0R1GsbOa4g(c, e);
    d = c.innerHTML;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToString
  function PAUABjNS0TGvUudj270IOg(c) { return String.fromCharCode(c); };
  // ScriptCoreLib.JavaScript.Runtime.Convert.ToCurrency
  function PQUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e;

    c = _7wQABpT92DaiMvTduyyLZQ(new Number(Math.round((b * 100))));
    e = !(_6wQABpT92DaiMvTduyyLZQ(c) > 2);

    if (!e)
    {
      d = _8wQABpT92DaiMvTduyyLZQ(BAUABpT92DaiMvTduyyLZQ(c, 0, (_6wQABpT92DaiMvTduyyLZQ(c) - 2)), '.', AwUABpT92DaiMvTduyyLZQ(c, (_6wQABpT92DaiMvTduyyLZQ(c) - 2)));
      return d;
    }

    e = !(_6wQABpT92DaiMvTduyyLZQ(c) == 2);

    if (!e)
    {
      d = _8gQABpT92DaiMvTduyyLZQ('0.', c);
      return d;
    }

    d = _8wQABpT92DaiMvTduyyLZQ('0.', c, '0');
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToRadixString
  function PgUABjNS0TGvUudj270IOg(b, c)
  {
    var d, e, f, g, h, i, j;

    d = '';
    e = '0123456789ABCDEF';
    f = b;
    h = 0;
    while ((f > 0.9))
    {
      h++;
      g = f;
      d = _8AQABpT92DaiMvTduyyLZQ(_7AQABpT92DaiMvTduyyLZQ(e, (g % c)), d);
      f = Math.floor((g / c));
    }
    j = !((_6wQABpT92DaiMvTduyyLZQ(d) % 2) == 1);

    if (!j)
    {
      i = _8gQABpT92DaiMvTduyyLZQ('0', d);
      return i;
    }

    i = d;
    return i;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToHexString
  function PwUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e, f, g, h;

    c = new ctor$vQYABmj2pj6v9xlugKAN2Q();
    f = b;

    for (g = 0; (g < _6wQABpT92DaiMvTduyyLZQ(f)); g++)
    {
      d = _7AQABpT92DaiMvTduyyLZQ(f, g);
      c.tQYABmj2pj6v9xlugKAN2Q(QAUABjNS0TGvUudj270IOg(d));
    }

    e = c.ugYABmj2pj6v9xlugKAN2Q();
    return e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToHexString
  function QAUABjNS0TGvUudj270IOg(b)
  {
    var c;

    c = PgUABjNS0TGvUudj270IOg(b, 16);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToHexString
  function QQUABjNS0TGvUudj270IOg(b)
  {
    var c;

    c = PgUABjNS0TGvUudj270IOg(b, 16);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToBase64String
  function QgUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e, f, g, h, i, j, k, l, m, n;

    c = '';
    k = 0;
    l = 1;
    while (l)
    {
      d = _4wQABpT92DaiMvTduyyLZQ(b, k++);
      e = _4wQABpT92DaiMvTduyyLZQ(b, k++);
      f = _4wQABpT92DaiMvTduyyLZQ(b, k++);
      g = (d >> 2);
      h = (((d & 3) << 4) | (e >> 4));
      i = (((e & 15) << 2) | (f >> 6));
      j = (f & 63);
      n = !window.isNaN(e);

      if (!n)
      {
        j = 64;
        i = 64;
      }
      else
      {
        n = !window.isNaN(f);

        if (!n)
        {
          j = 64;
        }

      }

      c = _8AQABpT92DaiMvTduyyLZQ(c, _7AQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, g));
      c = _8AQABpT92DaiMvTduyyLZQ(c, _7AQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, h));
      c = _8AQABpT92DaiMvTduyyLZQ(c, _7AQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, i));
      c = _8AQABpT92DaiMvTduyyLZQ(c, _7AQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, j));
      l = (k < _6wQABpT92DaiMvTduyyLZQ(b));
    }
    m = c;
    return m;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.FromBase64String
  function QwUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e, f, g, h, i, j, k, l, m, n;

    c = '';
    k = 0;
    l = 1;
    while (l)
    {
      g = _6QQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, _7AQABpT92DaiMvTduyyLZQ(b, k++));
      h = _6QQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, _7AQABpT92DaiMvTduyyLZQ(b, k++));
      i = _6QQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, _7AQABpT92DaiMvTduyyLZQ(b, k++));
      j = _6QQABpT92DaiMvTduyyLZQ(XAIABDNS0TGvUudj270IOg, _7AQABpT92DaiMvTduyyLZQ(b, k++));
      d = ((g << 2) | (h >> 4));
      e = (((h & 15) << 4) | (i >> 2));
      f = (((i & 3) << 6) | j);
      c = _8gQABpT92DaiMvTduyyLZQ(c, _5AQABpT92DaiMvTduyyLZQ(d));
      n = (i == 64);

      if (!n)
      {
        c = _8gQABpT92DaiMvTduyyLZQ(c, _5AQABpT92DaiMvTduyyLZQ(e));
      }

      n = (j == 64);

      if (!n)
      {
        c = _8gQABpT92DaiMvTduyyLZQ(c, _5AQABpT92DaiMvTduyyLZQ(f));
      }

      l = (k < _6wQABpT92DaiMvTduyyLZQ(b));
    }
    m = c;
    return m;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToByte
  function RAUABjNS0TGvUudj270IOg(b)
  {
    var c;

    c = (Math.floor(b) % 256);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.UrlEncode
  function RQUABjNS0TGvUudj270IOg(b)
  {
    var c, d, e, f, g, h;

    c = new ctor$vQYABmj2pj6v9xlugKAN2Q();
    d = b;

    for (e = 0; (e < _6wQABpT92DaiMvTduyyLZQ(d)); e++)
    {
      f = _4wQABpT92DaiMvTduyyLZQ(d, e);
      c.tQYABmj2pj6v9xlugKAN2Q(_8gQABpT92DaiMvTduyyLZQ('%', QAUABjNS0TGvUudj270IOg(f)));
    }

    g = c.ugYABmj2pj6v9xlugKAN2Q();
    return g;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToInteger
  function RgUABjNS0TGvUudj270IOg(b)
  {
    var c;

    c = Math.round(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Convert.ToJSON
  function SAUABjNS0TGvUudj270IOg(b)
  {
    var c;

    c = yQAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(b));
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.getElementsByClassName
  function awUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    var c;

    c = VAUABrgwLTe_aEJAkCbCrzw(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.execCommand
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.open
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.close
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.write
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.writeln
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.getElementsByName
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.createElement
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.getElementsByClassName
  function UgUABrgwLTe_aEJAkCbCrzw(a, b, c)
  {
    var d, e;

    d = /* DOMCreateType */new eyHAep5sizi6Ym_bdD5XgoA();
    d.className = c;
    e = uQEABh33sTm5Ql7VEPKRUg(a.getElementsByTagName(b), new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_getElementsByClassName_b__0'));
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.ForEachClassName
  function UwUABrgwLTe_aEJAkCbCrzw(a, b, c)
  {
    uwEABh33sTm5Ql7VEPKRUg(VAUABrgwLTe_aEJAkCbCrzw(a, b), c);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.getElementsByClassName
  function VAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    var c;

    c = UgUABrgwLTe_aEJAkCbCrzw(a, '\u002a', b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.open
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.open
  function VgUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    var c;

    c = a.open('text\u002fhtml', ((b) ? 'replace' : ''));
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onclick
  function VwUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'click');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onclick
  function WAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'click');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onkeydown
  function WQUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keydown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onkeydown
  function WgUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keydown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onkeypress
  function WwUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keypress');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onkeypress
  function XAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keypress');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onkeyup
  function XQUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'keyup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onkeyup
  function XgUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'keyup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onmousemove
  function XwUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mousemove');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onmousemove
  function YAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mousemove');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onmousedown
  function YQUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mousedown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onmousedown
  function YgUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mousedown');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onmouseup
  function YwUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onmouseup
  function ZAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseup');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onmouseover
  function ZQUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseover');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onmouseover
  function ZgUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseover');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_onmouseout
  function ZwUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'mouseout');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_onmouseout
  function aAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'mouseout');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.add_oncontextmenu
  function aQUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 1, b, 'contextmenu');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.remove_oncontextmenu
  function agUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    EQAABuRCAjuJ6J_b8mhba5w(a, 0, b, 'contextmenu');
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.set_DesignMode
  function bAUABrgwLTe_aEJAkCbCrzw(a, b)
  {
    var c;

    c = !b;

    if (!c)
    {
      a.designMode = 'on';
      return;
    }

    a.designMode = 'off';
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument.createEvent
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument+IMSNamespaceCollection.item
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument+IMSNamespaceCollection.item
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument+IMSNamespaceCollection.add
  // ScriptCoreLib.JavaScript.Extensions.Extensions.AttachToDocument
  function kAUABuKCPTKGRKjkr5dWuA(b)
  {
    var c;

    c = kQUABuKCPTKGRKjkr5dWuA(b, document.body);
    return c;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Show
  function iwUABuKCPTKGRKjkr5dWuA(b)
  {
    var c;

    b.style.display = '';
    qwAABgnDWDenzWX06iPvnw(b.style, 1);
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Show
  function jAUABuKCPTKGRKjkr5dWuA(b, c)
  {
    var d, e;

    e = !c;

    if (!e)
    {
      d = iwUABuKCPTKGRKjkr5dWuA(b);
      return d;
    }

    d = jQUABuKCPTKGRKjkr5dWuA(b);
    return d;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Hide
  function jQUABuKCPTKGRKjkr5dWuA(b)
  {
    var c;

    b.style.display = 'none';
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.ToggleVisible
  function jgUABuKCPTKGRKjkr5dWuA(b)
  {
    var c, d, e;

    c = '';
    e = !(b.style.display == c);

    if (!e)
    {
      jQUABuKCPTKGRKjkr5dWuA(b);
      d = 0;
      return d;
    }

    iwUABuKCPTKGRKjkr5dWuA(b);
    d = 1;
    return d;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Dispose
  function jwUABuKCPTKGRKjkr5dWuA(b)
  {
    var c, d, e;

    e = !(b == null);

    if (!e)
    {
      throw /* DOMCreateType */new Ldtxf6AerjyAhyYJX1IV5g();
    }

    c = b.parentNode;
    e = (c == null);

    if (!e)
    {
      c.removeChild(b);
    }

    d = b;
    return d;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.AttachTo
  function kQUABuKCPTKGRKjkr5dWuA(b, c)
  {
    var d;

    c.appendChild(b);
    d = b;
    return d;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Deserialize
  function kgUABuKCPTKGRKjkr5dWuA(b, c)
  {
    var d;

    d = new ctor$YwQABr841jSOaEftcWBQCw(c).ZwQABr841jSOaEftcWBQCw(b);
    return d;
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.SpawnTo
  function lQUABuKCPTKGRKjkr5dWuA(b, c, d)
  {
    var e;

    e = /* DOMCreateType */new sOiClpMoCz_axQ8nEFK_aIvQ();
    e.h = d;
    lgUABuKCPTKGRKjkr5dWuA(b, c, new ctor$RgcABgrHJTi_bnqNd49nRag(e, '_SpawnTo_b__6'));
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.SpawnTo
  function lgUABuKCPTKGRKjkr5dWuA(b, c, d)
  {
    var e;

    e = /* DOMCreateType */new sgpY1zYeXT2u6JFouF0DAw();
    e.KnownTypes = c;
    e.h = d;
    FAYABoBglTi7pLOKu9nnAQ(b.zAQABqOBvjOuSkQZrCdfWA(), new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_SpawnTo_b__9'));
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.Spawn
  function kwUABuKCPTKGRKjkr5dWuA(b)
  {
    var c;

    c = /* DOMCreateType */new m25gJ7O5Rzyh2zFWEKQv2A();
    c.alias = b;
    FAYABoBglTi7pLOKu9nnAQ(c.alias.zAQABqOBvjOuSkQZrCdfWA(), new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_Spawn_b__0'));
  };

  // ScriptCoreLib.JavaScript.Extensions.Extensions.SpawnTo
  function lAUABuKCPTKGRKjkr5dWuA(b, c)
  {
    var d;

    d = /* DOMCreateType */new V1SVBUrcyDmSC2u4exS67A();
    d.h = c;
    FAYABoBglTi7pLOKu9nnAQ(b.zAQABqOBvjOuSkQZrCdfWA(), new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_SpawnTo_b__3'));
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__NotImplementedException.InternalConstructor
  function mQUABtIJhDGoAfGpSpgccw()
  {
    var b;

    b = BgIABszpcz2K4r_a_alajjmQ('NotImplementedException');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__NotImplementedException.InternalConstructor
  function mgUABtIJhDGoAfGpSpgccw(b)
  {
    var c;

    c = BgIABszpcz2K4r_a_alajjmQ(_8gQABpT92DaiMvTduyyLZQ('NotImplementedException: ', b));
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Int32
  function qVhRBwPTBzS7KLCa_bUzFsA(){};
  qVhRBwPTBzS7KLCa_bUzFsA.TypeName = "Int32";
  qVhRBwPTBzS7KLCa_bUzFsA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$qVhRBwPTBzS7KLCa_bUzFsA = qVhRBwPTBzS7KLCa_bUzFsA.prototype;
  var basector$qVhRBwPTBzS7KLCa_bUzFsA = $ctor$(null, null, type$qVhRBwPTBzS7KLCa_bUzFsA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Int32..ctor
  type$qVhRBwPTBzS7KLCa_bUzFsA.nQUABgPTBzS7KLCa_bUzFsA = function ()
  {
    var a = this;

  };
  var ctor$nQUABgPTBzS7KLCa_bUzFsA = qVhRBwPTBzS7KLCa_bUzFsA.ctor = $ctor$(null, 'nQUABgPTBzS7KLCa_bUzFsA', type$qVhRBwPTBzS7KLCa_bUzFsA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Int32.Parse
  function mwUABgPTBzS7KLCa_bUzFsA(e) { return parseInt(e); };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Int32.CompareTo
  function nAUABgPTBzS7KLCa_bUzFsA(a, b)
  {
    var c;

    c = _0QAABtd5xTKztToDDBg08A(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_IsReturn
  function ngUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = (oAUABuSquTGLE3NPwKQpLw(a) == 13);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_IsEscape
  function nwUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = (oAUABuSquTGLE3NPwKQpLw(a) == 27);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_KeyCode
  function oAUABuSquTGLE3NPwKQpLw(a)
  {
    var b, c, d, e;

    b = 0;
    e = !_9QAABtd5xTKztToDDBg08A(a, 'charCode');

    if (!e)
    {
      b = _9gAABtd5xTKztToDDBg08A(a, 'charCode');
      e = !!b;

      if (!e)
      {
        e = !_9QAABtd5xTKztToDDBg08A(a, 'keyCode');

        if (!e)
        {
          c = _9gAABtd5xTKztToDDBg08A(a, 'keyCode');
          b = c;
        }

      }

    }
    else
    {
      e = !_9QAABtd5xTKztToDDBg08A(a, 'keyCode');

      if (!e)
      {
        b = _9gAABtd5xTKztToDDBg08A(a, 'keyCode');
      }

    }

    d = b;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_WheelDirection
  function oQUABuSquTGLE3NPwKQpLw(a)
  {
    var b, c, d;

    b = 0;
    d = !_9QAABtd5xTKztToDDBg08A(a, 'detail');

    if (!d)
    {
      b = (-_9gAABtd5xTKztToDDBg08A(a, 'detail'));
    }

    d = !_9QAABtd5xTKztToDDBg08A(a, 'wheelDelta');

    if (!d)
    {
      b = _9gAABtd5xTKztToDDBg08A(a, 'wheelDelta');
    }

    d = !!b;

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b > 0);

    if (!d)
    {
      c = 1;
      return c;
    }

    c = -1;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_OffsetX
  function ogUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = __agAABtd5xTKztToDDBg08A(a, 'layerX', 'offsetX', 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_OffsetY
  function owUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = __agAABtd5xTKztToDDBg08A(a, 'layerY', 'offsetY', 0);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_CursorPosition
  function pAUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = new ctor$_3QMABjE9ID2bvdJDtEkvJw(pgUABuSquTGLE3NPwKQpLw(a), pwUABuSquTGLE3NPwKQpLw(a));
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_OffsetPosition
  function pQUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = new ctor$_3QMABjE9ID2bvdJDtEkvJw(ogUABuSquTGLE3NPwKQpLw(a), owUABuSquTGLE3NPwKQpLw(a));
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_CursorX
  function pgUABuSquTGLE3NPwKQpLw(a)
  {
    var b, c, d;

    b = 0;
    d = !_9QAABtd5xTKztToDDBg08A(a, 'pageX');

    if (!d)
    {
      b = a.pageX;
    }
    else
    {
      d = !_9QAABtd5xTKztToDDBg08A(a, 'clientX');

      if (!d)
      {
        b = a.clientX;
      }

    }

    c = (b + sAUABuSquTGLE3NPwKQpLw(a).ownerDocument.documentElement.scrollLeft);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_CursorY
  function pwUABuSquTGLE3NPwKQpLw(a)
  {
    var b, c, d;

    b = 0;
    d = !_9QAABtd5xTKztToDDBg08A(a, 'pageY');

    if (!d)
    {
      b = a.pageY;
    }

    d = !_9QAABtd5xTKztToDDBg08A(a, 'clientY');

    if (!d)
    {
      b = a.clientY;
    }

    c = (b + sAUABuSquTGLE3NPwKQpLw(a).ownerDocument.documentElement.scrollTop);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.StopPropagation
  function qAUABuSquTGLE3NPwKQpLw(a)
  {
    qQUABuSquTGLE3NPwKQpLw(a);
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.InternalStopPropagation
  function qQUABuSquTGLE3NPwKQpLw(a0) { 
            if (a0['cancelBubble'] != void(0)) 
                a0.cancelBubble = true;

            if (a0['stopPropagation'] != void(0)) 
                a0.stopPropagation(); 
             };
  // ScriptCoreLib.JavaScript.DOM.IEvent.get_MouseButton
  function qgUABuSquTGLE3NPwKQpLw(a)
  {
    var b, c;

    c = !_9QAABtd5xTKztToDDBg08A(a, 'which');

    if (!c)
    {
      c = !(a.which == 3);

      if (!c)
      {
        b = 3;
        return b;
      }

      c = !(a.which == 2);

      if (!c)
      {
        b = 2;
        return b;
      }

      c = !(a.which == 1);

      if (!c)
      {
        b = 1;
        return b;
      }

    }

    c = !_9QAABtd5xTKztToDDBg08A(a, 'button');

    if (!c)
    {
      c = !(a.button == 2);

      if (!c)
      {
        b = 3;
        return b;
      }

      c = !(a.button == 4);

      if (!c)
      {
        b = 2;
        return b;
      }

      c = !(a.button == 1);

      if (!c)
      {
        b = 1;
        return b;
      }

    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.get_IsMozilla
  function qwUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = rAUABuSquTGLE3NPwKQpLw(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.InternalIsMozilla
  function rAUABuSquTGLE3NPwKQpLw(a0) { 
            return !window['event'];
             };
  // ScriptCoreLib.JavaScript.DOM.IEvent.PreventDefault
  function rQUABuSquTGLE3NPwKQpLw(a)
  {
    rgUABuSquTGLE3NPwKQpLw(a);
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.InternalPreventDefault
  function rgUABuSquTGLE3NPwKQpLw(a) { 
           
            if ('returnValue' in a)
                a.returnValue = false;

            if ('stopPropagation' in a) 
                a.preventDefault(); 
             };
  // ScriptCoreLib.JavaScript.DOM.IEvent.InternalEvent
  function rwUABuSquTGLE3NPwKQpLw(a0) { 
            if (a0['target'] != void(0)) 
                return a0.target;
            if (a0['srcElement'] != void(0)) 
                return a0.srcElement;
             };
  // ScriptCoreLib.JavaScript.DOM.IEvent.get_Element
  function sAUABuSquTGLE3NPwKQpLw(a)
  {
    var b;

    b = rwUABuSquTGLE3NPwKQpLw(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IEvent.initMouseEvent
  // ScriptCoreLib.JavaScript.DOM.IRegExp.exec
  // ScriptCoreLib.JavaScript.DOM.IRegExp.replace
  function uQUABsSpujGcYl3t9rOOPw(r, e, v) { return e.replace(r, v); };
  // ScriptCoreLib.JavaScript.DOM.IRegExp.replace
  function ugUABsSpujGcYl3t9rOOPw(a, b, c)
  {
    var d;

    d = uQUABsSpujGcYl3t9rOOPw(a, b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.InternalConstructor
  function tAUABsSpujGcYl3t9rOOPw(e) { return new RegExp(e); };
  // ScriptCoreLib.JavaScript.DOM.IRegExp.InternalConstructor
  function tgUABsSpujGcYl3t9rOOPw(e, mod) { return new RegExp(e, mod); };
  // ScriptCoreLib.JavaScript.DOM.IRegExp.exec
  // ScriptCoreLib.JavaScript.DOM.IRegExp.get_Trim
  function uwUABsSpujGcYl3t9rOOPw()
  {
    var b;

    b = tgUABsSpujGcYl3t9rOOPw('\u005e\u005cs\u002a\u007c\u005cs\u002a$', 'g');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.get_Integer
  function vAUABsSpujGcYl3t9rOOPw()
  {
    var b;

    b = tAUABsSpujGcYl3t9rOOPw('\u005e\u005cd+$');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.get_Currency
  function vQUABsSpujGcYl3t9rOOPw()
  {
    var b;

    b = tAUABsSpujGcYl3t9rOOPw('\u005e[0-9]{1,3}(?:,?[0-9]{3})\u002a(?:\u005c.[0-9]{2})?$');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.ExecToArray
  function vgUABsSpujGcYl3t9rOOPw(a, b)
  {
    var c, d, e, f;

    c = uAEABh33sTm5Ql7VEPKRUg();
    d = a.exec(b);
    while ((d && (c.length < 80)))
    {
      c.push(d);
      d = a.exec(b);
    }
    e = xwEABh33sTm5Ql7VEPKRUg(c);
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.ExecToArray
  function vwUABsSpujGcYl3t9rOOPw(b, c, d)
  {
    var e;

    e = wAUABsSpujGcYl3t9rOOPw(tgUABsSpujGcYl3t9rOOPw(b, 'g'), c, d);
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IRegExp.ExecToArray
  function wAUABsSpujGcYl3t9rOOPw(a, b, c)
  {
    var d, e, f, g;

    d = uAEABh33sTm5Ql7VEPKRUg();
    e = a.exec(b);
    while ((e && (d.length < 80)))
    {
      d.push(e[c]);
      e = a.exec(b);
    }
    f = xwEABh33sTm5Ql7VEPKRUg(d);
    return f;
  };

  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1
  function XO_bYHQrN_bD63wvzcp_apZKA(){};
  XO_bYHQrN_bD63wvzcp_apZKA.TypeName = "ObjectStreamHelper_1";
  XO_bYHQrN_bD63wvzcp_apZKA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$XO_bYHQrN_bD63wvzcp_apZKA = XO_bYHQrN_bD63wvzcp_apZKA.prototype;
  type$XO_bYHQrN_bD63wvzcp_apZKA = XO_bYHQrN_bD63wvzcp_apZKA.prototype =   {
    constructor: XO_bYHQrN_bD63wvzcp_apZKA,
    _Stream: null,
    _Item: null
  }
;
  var basector$XO_bYHQrN_bD63wvzcp_apZKA = $ctor$(null, null, type$XO_bYHQrN_bD63wvzcp_apZKA);
  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1..ctor
  type$XO_bYHQrN_bD63wvzcp_apZKA.__awUABgrN_bD63wvzcp_apZKA = function ()
  {
    var a = this;

  };
  var ctor$__awUABgrN_bD63wvzcp_apZKA = XO_bYHQrN_bD63wvzcp_apZKA.ctor = $ctor$(null, '__awUABgrN_bD63wvzcp_apZKA', type$XO_bYHQrN_bD63wvzcp_apZKA);

  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1.get_Stream
  type$XO_bYHQrN_bD63wvzcp_apZKA._9wUABgrN_bD63wvzcp_apZKA = function ()
  {
    var a = this, b;

    b = a._Stream;
    return b;
  };

  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1.set_Stream
  type$XO_bYHQrN_bD63wvzcp_apZKA.__aAUABgrN_bD63wvzcp_apZKA = function (b)
  {
    var a = this;

    a._Stream = b;
    a._Item = RwUABjNS0TGvUudj270IOg(b, 1);
  };

  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1.get_Item
  type$XO_bYHQrN_bD63wvzcp_apZKA.__aQUABgrN_bD63wvzcp_apZKA = function ()
  {
    var a = this, b;

    b = a._Item;
    return b;
  };

  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1.set_Item
  type$XO_bYHQrN_bD63wvzcp_apZKA.__agUABgrN_bD63wvzcp_apZKA = function (b)
  {
    var a = this;

    a._Item = b;
    a._Stream = QgUABjNS0TGvUudj270IOg(yQAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(a._Item)));
  };

  // 
  // ScriptCoreLib.JavaScript.Serialized.ObjectStreamHelper`1
  (function (i)  {
    i.nQIABpyfmDS26OJgOaz_baA = i._9wUABgrN_bD63wvzcp_apZKA;
    i.ngIABpyfmDS26OJgOaz_baA = i.__aAUABgrN_bD63wvzcp_apZKA;
    i.nwIABpyfmDS26OJgOaz_baA = i.__aQUABgrN_bD63wvzcp_apZKA;
    i.oAIABpyfmDS26OJgOaz_baA = i.__agUABgrN_bD63wvzcp_apZKA;
  }
  )(type$XO_bYHQrN_bD63wvzcp_apZKA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle
  function ql6YpKACZzKSGrrnqJ3SYw(){};
  ql6YpKACZzKSGrrnqJ3SYw.TypeName = "RuntimeTypeHandle";
  ql6YpKACZzKSGrrnqJ3SYw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$ql6YpKACZzKSGrrnqJ3SYw = ql6YpKACZzKSGrrnqJ3SYw.prototype;
  type$ql6YpKACZzKSGrrnqJ3SYw = ql6YpKACZzKSGrrnqJ3SYw.prototype =   {
    constructor: ql6YpKACZzKSGrrnqJ3SYw,
    _Value: null
  }
;
  var basector$ql6YpKACZzKSGrrnqJ3SYw = $ctor$(null, null, type$ql6YpKACZzKSGrrnqJ3SYw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle..ctor
  type$ql6YpKACZzKSGrrnqJ3SYw.__bAUABqACZzKSGrrnqJ3SYw = function ()
  {
    var a = this;

  };
  var ctor$__bAUABqACZzKSGrrnqJ3SYw = ql6YpKACZzKSGrrnqJ3SYw.ctor = $ctor$(null, '__bAUABqACZzKSGrrnqJ3SYw', type$ql6YpKACZzKSGrrnqJ3SYw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle..ctor
  type$ql6YpKACZzKSGrrnqJ3SYw.__bQUABqACZzKSGrrnqJ3SYw = function (b)
  {
    var a = this;

    a._Value = b;
  };
  var ctor$__bQUABqACZzKSGrrnqJ3SYw = $ctor$(null, '__bQUABqACZzKSGrrnqJ3SYw', type$ql6YpKACZzKSGrrnqJ3SYw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle.get_Value
  type$ql6YpKACZzKSGrrnqJ3SYw.get_Value = function ()
  {
    var a = this, b;

    b = a._Value;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle.set_Value
  type$ql6YpKACZzKSGrrnqJ3SYw.set_Value = function (b)
  {
    var a = this;

    a._Value = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__RuntimeTypeHandle.op_Implicit
  function AAYABqACZzKSGrrnqJ3SYw(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo
  function _1Mhq_b21_aLDizHet2AsjNlw(){};
  _1Mhq_b21_aLDizHet2AsjNlw.TypeName = "FieldInfo";
  _1Mhq_b21_aLDizHet2AsjNlw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_1Mhq_b21_aLDizHet2AsjNlw = _1Mhq_b21_aLDizHet2AsjNlw.prototype;
  type$_1Mhq_b21_aLDizHet2AsjNlw = _1Mhq_b21_aLDizHet2AsjNlw.prototype =   {
    constructor: _1Mhq_b21_aLDizHet2AsjNlw,
    _Name: null
  }
;
  var basector$_1Mhq_b21_aLDizHet2AsjNlw = $ctor$(basector$JXMs66OBvjOuSkQZrCdfWA, null, type$_1Mhq_b21_aLDizHet2AsjNlw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo..ctor
  type$_1Mhq_b21_aLDizHet2AsjNlw.BwYABm1_aLDizHet2AsjNlw = function ()
  {
    var a = this;

    a.zwQABqOBvjOuSkQZrCdfWA();
  };
  var ctor$BwYABm1_aLDizHet2AsjNlw = _1Mhq_b21_aLDizHet2AsjNlw.ctor = $ctor$(basector$JXMs66OBvjOuSkQZrCdfWA, 'BwYABm1_aLDizHet2AsjNlw', type$_1Mhq_b21_aLDizHet2AsjNlw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.get_Name
  type$_1Mhq_b21_aLDizHet2AsjNlw.AQYABm1_aLDizHet2AsjNlw = function ()
  {
    var a = this, b;

    b = a._Name;
    return b;
  };
    _1Mhq_b21_aLDizHet2AsjNlw.prototype.zAQABqOBvjOuSkQZrCdfWA = _1Mhq_b21_aLDizHet2AsjNlw.prototype.AQYABm1_aLDizHet2AsjNlw;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.GetValue
  type$_1Mhq_b21_aLDizHet2AsjNlw.AgYABm1_aLDizHet2AsjNlw = function (b)
  {
    var a = this, c;

    c = _9gAABtd5xTKztToDDBg08A(b, a._Name);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.SetValue
  type$_1Mhq_b21_aLDizHet2AsjNlw.AwYABm1_aLDizHet2AsjNlw = function (b, c)
  {
    var a = this;

    _9wAABtd5xTKztToDDBg08A(b, a._Name, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.op_Implicit
  function BAYABm1_aLDizHet2AsjNlw(b)
  {
    var c;

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.GetCustomAttributes
  type$_1Mhq_b21_aLDizHet2AsjNlw.BQYABm1_aLDizHet2AsjNlw = function (b)
  {
    var a = this;

    throw mQUABtIJhDGoAfGpSpgccw();
  };
    _1Mhq_b21_aLDizHet2AsjNlw.prototype.zgQABqOBvjOuSkQZrCdfWA = _1Mhq_b21_aLDizHet2AsjNlw.prototype.BQYABm1_aLDizHet2AsjNlw;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__FieldInfo.GetCustomAttributes
  type$_1Mhq_b21_aLDizHet2AsjNlw.BgYABm1_aLDizHet2AsjNlw = function (b, c)
  {
    var a = this;

    throw mQUABtIJhDGoAfGpSpgccw();
  };
    _1Mhq_b21_aLDizHet2AsjNlw.prototype.zQQABqOBvjOuSkQZrCdfWA = _1Mhq_b21_aLDizHet2AsjNlw.prototype.BgYABm1_aLDizHet2AsjNlw;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ComponentCollection
  function _7OD_b96IJ5DO3ImTWB4mcvw(){};
  _7OD_b96IJ5DO3ImTWB4mcvw.TypeName = "ComponentCollection";
  _7OD_b96IJ5DO3ImTWB4mcvw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_7OD_b96IJ5DO3ImTWB4mcvw = _7OD_b96IJ5DO3ImTWB4mcvw.prototype;
  var basector$_7OD_b96IJ5DO3ImTWB4mcvw = $ctor$(null, null, type$_7OD_b96IJ5DO3ImTWB4mcvw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ComponentCollection..ctor
  type$_7OD_b96IJ5DO3ImTWB4mcvw.DAYABqIJ5DO3ImTWB4mcvw = function ()
  {
    var a = this;

  };
  var ctor$DAYABqIJ5DO3ImTWB4mcvw = _7OD_b96IJ5DO3ImTWB4mcvw.ctor = $ctor$(null, 'DAYABqIJ5DO3ImTWB4mcvw', type$_7OD_b96IJ5DO3ImTWB4mcvw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Boolean
  function _0mxb55wRMT2PoI2ybfp7dQ(){};
  _0mxb55wRMT2PoI2ybfp7dQ.TypeName = "Boolean";
  _0mxb55wRMT2PoI2ybfp7dQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_0mxb55wRMT2PoI2ybfp7dQ = _0mxb55wRMT2PoI2ybfp7dQ.prototype;
  var basector$_0mxb55wRMT2PoI2ybfp7dQ = $ctor$(null, null, type$_0mxb55wRMT2PoI2ybfp7dQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Boolean..ctor
  type$_0mxb55wRMT2PoI2ybfp7dQ.DgYABpwRMT2PoI2ybfp7dQ = function ()
  {
    var a = this;

  };
  var ctor$DgYABpwRMT2PoI2ybfp7dQ = _0mxb55wRMT2PoI2ybfp7dQ.ctor = $ctor$(null, 'DgYABpwRMT2PoI2ybfp7dQ', type$_0mxb55wRMT2PoI2ybfp7dQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Boolean.Parse
  function DQYABpwRMT2PoI2ybfp7dQ(e) { return !!e; };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Convert
  function dv0mSYAUST2Y1I8urLVPEA(){};
  dv0mSYAUST2Y1I8urLVPEA.TypeName = "Convert";
  dv0mSYAUST2Y1I8urLVPEA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$dv0mSYAUST2Y1I8urLVPEA = dv0mSYAUST2Y1I8urLVPEA.prototype;
  var basector$dv0mSYAUST2Y1I8urLVPEA = $ctor$(null, null, type$dv0mSYAUST2Y1I8urLVPEA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Convert..ctor
  type$dv0mSYAUST2Y1I8urLVPEA.EAYABoAUST2Y1I8urLVPEA = function ()
  {
    var a = this;

  };
  var ctor$EAYABoAUST2Y1I8urLVPEA = dv0mSYAUST2Y1I8urLVPEA.ctor = $ctor$(null, 'EAYABoAUST2Y1I8urLVPEA', type$dv0mSYAUST2Y1I8urLVPEA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Convert.ToInt32
  function DwYABoAUST2Y1I8urLVPEA(b)
  {
    var c;

    c = dwYABlp1gTixwdv_axCXc_aQ(b);
    return c;
  };

  var jQIABIBglTi7pLOKu9nnAQ = null;
  var jgIABIBglTi7pLOKu9nnAQ = null;
  var jwIABIBglTi7pLOKu9nnAQ = null;
  var kAIABIBglTi7pLOKu9nnAQ = null;
  var kQIABIBglTi7pLOKu9nnAQ = null;
  // ScriptCoreLib.JavaScript.Native.get_DisabledEventHandler
  function EQYABoBglTi7pLOKu9nnAQ()
  {
    var b;


    if (!(kQIABIBglTi7pLOKu9nnAQ))
    {
      kQIABIBglTi7pLOKu9nnAQ = new ctor$dwMABqGrgDi0RzjV63Di8A(null, 'GQYABoBglTi7pLOKu9nnAQ');
    }

    b = kQIABIBglTi7pLOKu9nnAQ;
    return b;
  };

  // ScriptCoreLib.JavaScript.Native.Spawn
  function EwYABoBglTi7pLOKu9nnAQ(b)
  {
    var c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      FAYABoBglTi7pLOKu9nnAQ(c.A, c.B);
    }

  };

  // ScriptCoreLib.JavaScript.Native.Spawn
  function FAYABoBglTi7pLOKu9nnAQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new _7_bw16z_bBtTq_aCR_blYqvOBQ();
    d.id = b;
    d.Spawn = c;
    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('spawn on load: ', d.id));
    e = !(window == null);

    if (!e)
    {
      return;
    }

    AwQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_Spawn_b__2'));
  };

  // ScriptCoreLib.JavaScript.Native.Spawn
  function FQYABoBglTi7pLOKu9nnAQ(b, c)
  {
    var d;

    d = /* DOMCreateType */new mZgwfg3okTmLMlaxOiPMuw();
    d.id = b;
    d.s = c;
    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('spawn on load: ', d.id));
    AwQABrc98zqfJJxE_at_bcTw(window, new ctor$dwMABqGrgDi0RzjV63Di8A(d, '_Spawn_b__6'));
  };

  // ScriptCoreLib.JavaScript.Native.SpawnInline
  function FgYABoBglTi7pLOKu9nnAQ(b, c)
  {
    uwEABh33sTm5Ql7VEPKRUg(VAUABrgwLTe_aEJAkCbCrzw(document, _8gQABpT92DaiMvTduyyLZQ(b, ':inline')), c);
  };

  // ScriptCoreLib.JavaScript.Native.PlaySound
  function FwYABoBglTi7pLOKu9nnAQ(b)
  {
    var c, d;

    c = aQQABs53Mz_aJt4oyVnki2Q();
    c.autostart = 'true';
    c.volume = '100';
    c.src = b;
    pgAABgnDWDenzWX06iPvnw(c.style, 0, 0, 0, 0);
    document.body.appendChild(c);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.Native.Include
  function GAYABoBglTi7pLOKu9nnAQ(b)
  {
    var c;

    awQABh78uTmU7_bAOPst6lA(_8gQABpT92DaiMvTduyyLZQ('include ', b));
    c = CQcABoVcpzW1V59cMpSMrQ();
    c.type = 'text\u002fjavascript';
    c.src = b;
    kAUABuKCPTKGRKjkr5dWuA(c);
  };

  // ScriptCoreLib.JavaScript.Native.<get_DisabledEventHandler>b__0
  function GQYABoBglTi7pLOKu9nnAQ(b)
  {
    rQUABuSquTGLE3NPwKQpLw(b);
    qAUABuSquTGLE3NPwKQpLw(b);
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie
  function w0YboTKq2D6RF69rrQqsqg(){};
  w0YboTKq2D6RF69rrQqsqg.TypeName = "Cookie";
  w0YboTKq2D6RF69rrQqsqg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$w0YboTKq2D6RF69rrQqsqg = w0YboTKq2D6RF69rrQqsqg.prototype;
  type$w0YboTKq2D6RF69rrQqsqg = w0YboTKq2D6RF69rrQqsqg.prototype =   {
    constructor: w0YboTKq2D6RF69rrQqsqg,
    Name: null
  }
;
  var basector$w0YboTKq2D6RF69rrQqsqg = $ctor$(null, null, type$w0YboTKq2D6RF69rrQqsqg);
  // ScriptCoreLib.JavaScript.Runtime.Cookie..ctor
  type$w0YboTKq2D6RF69rrQqsqg.HAYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this;

    a.Name = b;
  };
  var ctor$HAYABjKq2D6RF69rrQqsqg = $ctor$(null, 'HAYABjKq2D6RF69rrQqsqg', type$w0YboTKq2D6RF69rrQqsqg);

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_PHPSession
  function GgYABjKq2D6RF69rrQqsqg()
  {
    var b;

    b = new ctor$HAYABjKq2D6RF69rrQqsqg('PHPSESSID').JQYABjKq2D6RF69rrQqsqg();
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_Item
  type$w0YboTKq2D6RF69rrQqsqg.GwYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this, c;

    c = new ctor$HAYABjKq2D6RF69rrQqsqg(_8wQABpT92DaiMvTduyyLZQ(a.Name, '$', b));
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_EscapedName
  type$w0YboTKq2D6RF69rrQqsqg.HQYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this, b;

    b = window.escape(a.Name);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.Delete
  type$w0YboTKq2D6RF69rrQqsqg.HgYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this;

    document.cookie = _8wQABpT92DaiMvTduyyLZQ(a.HQYABjKq2D6RF69rrQqsqg(), '=;expires=', new Date(0).toGMTString());
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_IntegerValue
  type$w0YboTKq2D6RF69rrQqsqg.HwYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this, b, c, d;

    b = mwUABgPTBzS7KLCa_bUzFsA(a.JQYABjKq2D6RF69rrQqsqg());
    d = !window.isNaN(b);

    if (!d)
    {
      c = 0;
      return c;
    }

    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.set_IntegerValue
  type$w0YboTKq2D6RF69rrQqsqg.IAYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this;

    a.JgYABjKq2D6RF69rrQqsqg((b+''));
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_BooleanValue
  type$w0YboTKq2D6RF69rrQqsqg.IQYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this, b;

    b = CQUABpT92DaiMvTduyyLZQ(a.JQYABjKq2D6RF69rrQqsqg(), 'true');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.set_BooleanValue
  type$w0YboTKq2D6RF69rrQqsqg.IgYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this;

    a.JgYABjKq2D6RF69rrQqsqg(((b) ? 'true' : 'false'));
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_ValueBase64
  type$w0YboTKq2D6RF69rrQqsqg.IwYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this, b;

    b = QwUABjNS0TGvUudj270IOg(a.JQYABjKq2D6RF69rrQqsqg());
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.set_ValueBase64
  type$w0YboTKq2D6RF69rrQqsqg.JAYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this;

    a.JgYABjKq2D6RF69rrQqsqg(QgUABjNS0TGvUudj270IOg(b));
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.get_Value
  type$w0YboTKq2D6RF69rrQqsqg.JQYABjKq2D6RF69rrQqsqg = function ()
  {
    var a = this, b, c, d, e, f, g, h, i;

    g = !(document == null);

    if (!g)
    {
      f = '';
      return f;
    }

    b = xwEABh33sTm5Ql7VEPKRUg(yAEABh33sTm5Ql7VEPKRUg(document.cookie, '; '));
    c = '';
    h = b;

    for (i = 0; (i < h.length); i++)
    {
      d = h[i];
      e = xwEABh33sTm5Ql7VEPKRUg(yAEABh33sTm5Ql7VEPKRUg(d, '='));
      g = !CQUABpT92DaiMvTduyyLZQ(e[0], a.HQYABjKq2D6RF69rrQqsqg());

      if (!g)
      {
        c = e[1];
        break;
      }

    }

    g = !(c == null);

    if (!g)
    {
      c = '';
    }

    c = window.unescape(c);
    f = __bAQABpT92DaiMvTduyyLZQ(c);
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie.set_Value
  type$w0YboTKq2D6RF69rrQqsqg.JgYABjKq2D6RF69rrQqsqg = function (b)
  {
    var a = this, c, d, e, f;

    c = a.JQYABjKq2D6RF69rrQqsqg();
    d = b;
    d = window.escape(__bAQABpT92DaiMvTduyyLZQ(xAEABh33sTm5Ql7VEPKRUg(zAEABh33sTm5Ql7VEPKRUg(d), 0)));
    f = !CQUABpT92DaiMvTduyyLZQ(c, d);

    if (!f)
    {
      return;
    }

    e = _9AQABpT92DaiMvTduyyLZQ(a.HQYABjKq2D6RF69rrQqsqg(), '=', d, ';path=\u002f;');
    document.cookie = e;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie`1
  function uKmolmNigz6Q_aeTxhYUeAQ(){};
  uKmolmNigz6Q_aeTxhYUeAQ.TypeName = "Cookie_1";
  uKmolmNigz6Q_aeTxhYUeAQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$uKmolmNigz6Q_aeTxhYUeAQ = uKmolmNigz6Q_aeTxhYUeAQ.prototype;
  type$uKmolmNigz6Q_aeTxhYUeAQ = uKmolmNigz6Q_aeTxhYUeAQ.prototype =   {
    constructor: uKmolmNigz6Q_aeTxhYUeAQ,
    _spawn_helper: null
  }
;
  var basector$uKmolmNigz6Q_aeTxhYUeAQ = $ctor$(basector$w0YboTKq2D6RF69rrQqsqg, null, type$uKmolmNigz6Q_aeTxhYUeAQ);
  // ScriptCoreLib.JavaScript.Runtime.Cookie`1..ctor
  type$uKmolmNigz6Q_aeTxhYUeAQ.JwYABmNigz6Q_aeTxhYUeAQ = function (b)
  {
    var a = this;

    a.HAYABjKq2D6RF69rrQqsqg(b);
  };
  var ctor$JwYABmNigz6Q_aeTxhYUeAQ = $ctor$(basector$w0YboTKq2D6RF69rrQqsqg, 'JwYABmNigz6Q_aeTxhYUeAQ', type$uKmolmNigz6Q_aeTxhYUeAQ);

  // ScriptCoreLib.JavaScript.Runtime.Cookie`1..ctor
  type$uKmolmNigz6Q_aeTxhYUeAQ.KAYABmNigz6Q_aeTxhYUeAQ = function (b, c)
  {
    var a = this;

    a.HAYABjKq2D6RF69rrQqsqg(b);
    a._spawn_helper = c;
  };
  var ctor$KAYABmNigz6Q_aeTxhYUeAQ = $ctor$(basector$w0YboTKq2D6RF69rrQqsqg, 'KAYABmNigz6Q_aeTxhYUeAQ', type$uKmolmNigz6Q_aeTxhYUeAQ);

  // ScriptCoreLib.JavaScript.Runtime.Cookie`1.op_Implicit
  function KQYABmNigz6Q_aeTxhYUeAQ(b)
  {
    var c;

    c = b.KgYABmNigz6Q_aeTxhYUeAQ();
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie`1.get_Value
  type$uKmolmNigz6Q_aeTxhYUeAQ.KgYABmNigz6Q_aeTxhYUeAQ = function ()
  {
    var a = this, b, c, d;

    b = new ctor$__awUABgrN_bD63wvzcp_apZKA();
    try
    {
      b.__aAUABgrN_bD63wvzcp_apZKA(a.IwYABjKq2D6RF69rrQqsqg());
    }
    catch (__exc){ }
    c = new ctor$pAMABowegTqJlyQCc2XwcQ();
    c.Target = b.__aQUABgrN_bD63wvzcp_apZKA();
    c.ogMABowegTqJlyQCc2XwcQ(a._spawn_helper);
    d = c.Target;
    return d;
  };

  // ScriptCoreLib.JavaScript.Runtime.Cookie`1.set_Value
  type$uKmolmNigz6Q_aeTxhYUeAQ.KwYABmNigz6Q_aeTxhYUeAQ = function (b)
  {
    var a = this, c;

    c = new ctor$__awUABgrN_bD63wvzcp_apZKA();
    c.__agUABgrN_bD63wvzcp_apZKA(b);
    a.JAYABjKq2D6RF69rrQqsqg(c._9wUABgrN_bD63wvzcp_apZKA());
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableColumn.InternalConstructor
  function LwYABtJBHjyxY_azsMvEMIQ()
  {
    var b;

    b = document.createElement('td');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableColumn.InternalConstructor
  function MAYABtJBHjyxY_azsMvEMIQ(b)
  {
    var c, d;

    c = LwYABtJBHjyxY_azsMvEMIQ();
    IQAABtvq0jCU0R1GsbOa4g(c, b);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableColumn.InternalConstructor
  function MQYABtJBHjyxY_azsMvEMIQ(b)
  {
    var c, d, e;

    c = LwYABtJBHjyxY_azsMvEMIQ();
    e = [
      b
    ];
    IgAABtvq0jCU0R1GsbOa4g(c, e);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLOption.InternalConstructor
  function MwYABlVwLT_aOv3F3iVBOMA()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('option');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color
  function mF2G23NsjTy5GU2G_aZC6tw(){};
  mF2G23NsjTy5GU2G_aZC6tw.TypeName = "Color";
  mF2G23NsjTy5GU2G_aZC6tw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$mF2G23NsjTy5GU2G_aZC6tw = mF2G23NsjTy5GU2G_aZC6tw.prototype;
  type$mF2G23NsjTy5GU2G_aZC6tw = mF2G23NsjTy5GU2G_aZC6tw.prototype =   {
    constructor: mF2G23NsjTy5GU2G_aZC6tw,
    R: 0,
    G: 0,
    B: 0,
    KnownName: null
  }
;
  var basector$mF2G23NsjTy5GU2G_aZC6tw = $ctor$(null, null, type$mF2G23NsjTy5GU2G_aZC6tw);
  // ScriptCoreLib.Shared.Drawing.Color..ctor
  type$mF2G23NsjTy5GU2G_aZC6tw.RAYABnNsjTy5GU2G_aZC6tw = function ()
  {
    var a = this;

  };
  var ctor$RAYABnNsjTy5GU2G_aZC6tw = mF2G23NsjTy5GU2G_aZC6tw.ctor = $ctor$(null, 'RAYABnNsjTy5GU2G_aZC6tw', type$mF2G23NsjTy5GU2G_aZC6tw);

  // ScriptCoreLib.Shared.Drawing.Color.op_Implicit
  function NAYABnNsjTy5GU2G_aZC6tw(b)
  {
    var c;

    c = (b+'');
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Color.op_Implicit
  function NQYABnNsjTy5GU2G_aZC6tw(b)
  {
    var c;

    c = ((b.B + (b.G << 8)) + (b.R << 16));
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Color.op_Implicit
  function NgYABnNsjTy5GU2G_aZC6tw(b)
  {
    var c, d, e, f;

    c = (b & 255);
    d = ((b >> 8) & 255);
    e = ((b >> 16) & 255);
    f = NwYABnNsjTy5GU2G_aZC6tw(e, d, c);
    return f;
  };

  // ScriptCoreLib.Shared.Drawing.Color.FromRGB
  function NwYABnNsjTy5GU2G_aZC6tw(b, c, d)
  {
    var e, f;

    e = new ctor$RAYABnNsjTy5GU2G_aZC6tw();
    e.R = b;
    e.G = c;
    e.B = d;
    f = e;
    return f;
  };

  // ScriptCoreLib.Shared.Drawing.Color.FromGray
  function OAYABnNsjTy5GU2G_aZC6tw(b)
  {
    var c;

    c = NwYABnNsjTy5GU2G_aZC6tw(b, b, b);
    return c;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_None
  function OQYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Transparent
  function OgYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('transparent');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Black
  function OwYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = OAYABnNsjTy5GU2G_aZC6tw(0);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Gray
  function PAYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = OAYABnNsjTy5GU2G_aZC6tw(128);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_White
  function PQYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = OAYABnNsjTy5GU2G_aZC6tw(255);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Red
  function PgYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = NwYABnNsjTy5GU2G_aZC6tw(255, 0, 0);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Green
  function PwYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = NwYABnNsjTy5GU2G_aZC6tw(0, 255, 0);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Blue
  function QAYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = NgYABnNsjTy5GU2G_aZC6tw(255);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.get_Yellow
  function QQYABnNsjTy5GU2G_aZC6tw()
  {
    var b;

    b = NgYABnNsjTy5GU2G_aZC6tw(16776960);
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color.FromKnownName
  function QgYABnNsjTy5GU2G_aZC6tw(b)
  {
    var c, d;

    c = new ctor$RAYABnNsjTy5GU2G_aZC6tw();
    c.KnownName = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Drawing.Color.ToString
  type$mF2G23NsjTy5GU2G_aZC6tw.toString /* ScriptCoreLib.Shared.Drawing.Color.ToString */ = function ()
  {
    var a = this, b, c, d, e;

    b = a;
    d = (b.KnownName == null);

    if (!d)
    {
      c = b.KnownName;
      return c;
    }

    e = [
      'RGB(',
      new Number(b.R),
      ', ',
      new Number(b.G),
      ', ',
      new Number(b.B),
      ')'
    ];
    c = _7gQABpT92DaiMvTduyyLZQ(e);
    return c;
  };
    mF2G23NsjTy5GU2G_aZC6tw.prototype.toString /* System.Object.ToString */ = mF2G23NsjTy5GU2G_aZC6tw.prototype.toString /* ScriptCoreLib.Shared.Drawing.Color.ToString */;

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ActiveBorder
  function RQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ActiveBorder');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ActiveCaption
  function RgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ActiveCaption');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_AppWorkspace
  function RwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('AppWorkspace');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_Background
  function SAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('Background');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ButtonFace
  function SQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ButtonFace');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ButtonHighlight
  function SgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ButtonHighlight');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ButtonShadow
  function SwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ButtonShadow');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ButtonText
  function TAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ButtonText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_CaptionText
  function TQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('CaptionText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_GrayText
  function TgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('GrayText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_Highlight
  function TwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('Highlight');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_HighlightText
  function UAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('HighlightText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_InactiveBorder
  function UQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('InactiveBorder');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_InactiveCaption
  function UgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('InactiveCaption');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_InactiveCaptionText
  function UwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('InactiveCaptionText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_InfoBackground
  function VAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('InfoBackground');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_InfoText
  function VQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('InfoText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_Menu
  function VgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('Menu');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_MenuText
  function VwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('MenuText');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_Scrollbar
  function WAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('Scrollbar');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ThreeDDarkShadow
  function WQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ThreeDDarkShadow');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ThreeDFace
  function WgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ThreeDFace');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ThreeDHighlight
  function WwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ThreeDHighlight');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ThreeDLightShadow
  function XAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ThreeDLightShadow');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_ThreeDShadow
  function XQYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('ThreeDShadow');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_Window
  function XgYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('Window');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_WindowFrame
  function XwYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('WindowFrame');
    return b;
  };

  // ScriptCoreLib.Shared.Drawing.Color+System.get_WindowText
  function YAYABuKW_bDaI_bB3n8Ak_baw()
  {
    var b;

    b = QgYABnNsjTy5GU2G_aZC6tw('WindowText');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.TimeFilter
  function xpujGqZeGjWoftpyUVFR9g(){};
  xpujGqZeGjWoftpyUVFR9g.TypeName = "TimeFilter";
  xpujGqZeGjWoftpyUVFR9g.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$xpujGqZeGjWoftpyUVFR9g = xpujGqZeGjWoftpyUVFR9g.prototype;
  type$xpujGqZeGjWoftpyUVFR9g = xpujGqZeGjWoftpyUVFR9g.prototype =   {
    constructor: xpujGqZeGjWoftpyUVFR9g,
    Value: null,
    Window: 0
  }
;
  var basector$xpujGqZeGjWoftpyUVFR9g = $ctor$(null, null, type$xpujGqZeGjWoftpyUVFR9g);
  // ScriptCoreLib.JavaScript.Runtime.TimeFilter..ctor
  type$xpujGqZeGjWoftpyUVFR9g.cgYABqZeGjWoftpyUVFR9g = function (b)
  {
    var a = this;

    a.Window = b;
  };
  var ctor$cgYABqZeGjWoftpyUVFR9g = $ctor$(null, 'cgYABqZeGjWoftpyUVFR9g', type$xpujGqZeGjWoftpyUVFR9g);

  // ScriptCoreLib.JavaScript.Runtime.TimeFilter.get_IsValid
  type$xpujGqZeGjWoftpyUVFR9g.cQYABqZeGjWoftpyUVFR9g = function ()
  {
    var a = this, b;

    b = (Math.abs((a.Value - lQcABvL8PjuDy4A7EiQEHA(lAcABvL8PjuDy4A7EiQEHA()))) > a.Window);
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.TimeFilter.Update
  type$xpujGqZeGjWoftpyUVFR9g.cwYABqZeGjWoftpyUVFR9g = function ()
  {
    var a = this;

    a.Value = lQcABvL8PjuDy4A7EiQEHA(lAcABvL8PjuDy4A7EiQEHA());
  };

  // ScriptCoreLib.JavaScript.Runtime.TimeFilter.Invoke
  type$xpujGqZeGjWoftpyUVFR9g.dAYABqZeGjWoftpyUVFR9g = function (b)
  {
    var a = this, c;

    c = a.cQYABqZeGjWoftpyUVFR9g();

    if (!c)
    {
      return;
    }

    sQIABgLCITuEwr97s3dlTA(b);
    a.cwYABqZeGjWoftpyUVFR9g();
  };

  // ScriptCoreLib.JavaScript.Controls.SpawnControlBase
  function __aBs7WFrO8TqfPnHnEBaIuQ(){};
  __aBs7WFrO8TqfPnHnEBaIuQ.TypeName = "SpawnControlBase";
  __aBs7WFrO8TqfPnHnEBaIuQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$__aBs7WFrO8TqfPnHnEBaIuQ = __aBs7WFrO8TqfPnHnEBaIuQ.prototype;
  type$__aBs7WFrO8TqfPnHnEBaIuQ = __aBs7WFrO8TqfPnHnEBaIuQ.prototype =   {
    constructor: __aBs7WFrO8TqfPnHnEBaIuQ,
    SpawnControl: null
  }
;
  var basector$__aBs7WFrO8TqfPnHnEBaIuQ = $ctor$(null, null, type$__aBs7WFrO8TqfPnHnEBaIuQ);
  // ScriptCoreLib.JavaScript.Controls.SpawnControlBase..ctor
  type$__aBs7WFrO8TqfPnHnEBaIuQ.dgYABlrO8TqfPnHnEBaIuQ = function (b)
  {
    var a = this;

    a.SpawnControl = b;
  };
  var ctor$dgYABlrO8TqfPnHnEBaIuQ = $ctor$(null, 'dgYABlrO8TqfPnHnEBaIuQ', type$__aBs7WFrO8TqfPnHnEBaIuQ);

  // ScriptCoreLib.JavaScript.Controls.SpawnControlBase.get_SpawnString
  type$__aBs7WFrO8TqfPnHnEBaIuQ.dQYABlrO8TqfPnHnEBaIuQ = function ()
  {
    var a = this, b;

    b = QwUABjNS0TGvUudj270IOg(a.SpawnControl.value);
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math
  function ny2ixVp1gTixwdv_axCXc_aQ(){};
  ny2ixVp1gTixwdv_axCXc_aQ.TypeName = "Math";
  ny2ixVp1gTixwdv_axCXc_aQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$ny2ixVp1gTixwdv_axCXc_aQ = ny2ixVp1gTixwdv_axCXc_aQ.prototype;
  var qQIABFp1gTixwdv_axCXc_aQ = null;
  var basector$ny2ixVp1gTixwdv_axCXc_aQ = $ctor$(null, null, type$ny2ixVp1gTixwdv_axCXc_aQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math..ctor
  type$ny2ixVp1gTixwdv_axCXc_aQ.iAYABlp1gTixwdv_axCXc_aQ = function ()
  {
    var a = this;

  };
  var ctor$iAYABlp1gTixwdv_axCXc_aQ = ny2ixVp1gTixwdv_axCXc_aQ.ctor = $ctor$(null, 'iAYABlp1gTixwdv_axCXc_aQ', type$ny2ixVp1gTixwdv_axCXc_aQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Floor
  function dwYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.floor(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Ceiling
  function eAYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.ceil(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Atan
  function eQYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.atan(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Tan
  function egYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.tan(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Cos
  function ewYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.cos(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Sin
  function fAYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.sin(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Abs
  function fQYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.abs(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Sqrt
  function fgYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.sqrt(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Abs
  function fwYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.abs(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Round
  function gAYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c;

    c = Math.round(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Max
  function gQYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.max(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Max
  function ggYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.max(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Max
  function gwYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.max(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Min
  function hAYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.min(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Min
  function hQYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.min(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Min
  function hgYABlp1gTixwdv_axCXc_aQ(b, c)
  {
    var d;

    d = Math.min(b, c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Math.Sign
  function hwYABlp1gTixwdv_axCXc_aQ(b)
  {
    var c, d;

    d = !(b == 0);

    if (!d)
    {
      c = 0;
      return c;
    }

    d = !(b < 0);

    if (!d)
    {
      c = -1;
      return c;
    }

    c = 1;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate
  function K4srp3zY4jaVovIDSMIxgQ(){};
  K4srp3zY4jaVovIDSMIxgQ.TypeName = "Delegate";
  K4srp3zY4jaVovIDSMIxgQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$K4srp3zY4jaVovIDSMIxgQ = K4srp3zY4jaVovIDSMIxgQ.prototype;
  type$K4srp3zY4jaVovIDSMIxgQ = K4srp3zY4jaVovIDSMIxgQ.prototype =   {
    constructor: K4srp3zY4jaVovIDSMIxgQ,
    Target: null,
    Method: null,
    InvokePointer: null
  }
;
  var basector$K4srp3zY4jaVovIDSMIxgQ = $ctor$(null, null, type$K4srp3zY4jaVovIDSMIxgQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate..ctor
  type$K4srp3zY4jaVovIDSMIxgQ.iQYABnzY4jaVovIDSMIxgQ = function (b, c)
  {
    var a = this;

    a.Target = (!(b) ? window : b);
    a.Method = c;
    a.InvokePointer = igYABnzY4jaVovIDSMIxgQ(a.Target, a.Method);
  };
  var ctor$iQYABnzY4jaVovIDSMIxgQ = $ctor$(null, 'iQYABnzY4jaVovIDSMIxgQ', type$K4srp3zY4jaVovIDSMIxgQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.InternalGetAsyncInvoke
  function igYABnzY4jaVovIDSMIxgQ(o, p) { return function(a0, a1) { return o[p](a0, a1); } };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.Combine
  function iwYABnzY4jaVovIDSMIxgQ(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      d = c;
      return d;
    }

    e = !(c == null);

    if (!e)
    {
      d = b;
      return d;
    }

    d = b.jAYABnzY4jaVovIDSMIxgQ(c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.CombineImpl
  type$K4srp3zY4jaVovIDSMIxgQ.jAYABnzY4jaVovIDSMIxgQ = function (b)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('use MulticastDelegate instead');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.Remove
  function jQYABnzY4jaVovIDSMIxgQ(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      d = null;
      return d;
    }

    e = !(c == null);

    if (!e)
    {
      d = b;
      return d;
    }

    d = b.jgYABnzY4jaVovIDSMIxgQ(c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.RemoveImpl
  type$K4srp3zY4jaVovIDSMIxgQ.jgYABnzY4jaVovIDSMIxgQ = function (b)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('use MulticastDelegate instead');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.Equals
  type$K4srp3zY4jaVovIDSMIxgQ.jwYABnzY4jaVovIDSMIxgQ = function (b)
  {
    var a = this, c;

    c = kAYABnzY4jaVovIDSMIxgQ(a, b);
    return c;
  };
    K4srp3zY4jaVovIDSMIxgQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = K4srp3zY4jaVovIDSMIxgQ.prototype.jwYABnzY4jaVovIDSMIxgQ;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.IsEqual
  function kAYABnzY4jaVovIDSMIxgQ(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      d = 0;
      return d;
    }

    e = !(c == null);

    if (!e)
    {
      d = 0;
      return d;
    }

    d = (FQcABkkCZD_amtxRrU4EqQQ(b.Method, c.Method) && (b.Target == c.Target));
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Delegate.GetHashCode
  type$K4srp3zY4jaVovIDSMIxgQ.kQYABnzY4jaVovIDSMIxgQ = function ()
  {
    var a = this, b;

    b = 0;
    return b;
  };
    K4srp3zY4jaVovIDSMIxgQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = K4srp3zY4jaVovIDSMIxgQ.prototype.kQYABnzY4jaVovIDSMIxgQ;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2
  function uFTaMoWbgjizz5alTdsqog(){};
  uFTaMoWbgjizz5alTdsqog.TypeName = "Dictionary_2";
  uFTaMoWbgjizz5alTdsqog.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$uFTaMoWbgjizz5alTdsqog = uFTaMoWbgjizz5alTdsqog.prototype;
  type$uFTaMoWbgjizz5alTdsqog = uFTaMoWbgjizz5alTdsqog.prototype =   {
    constructor: uFTaMoWbgjizz5alTdsqog,
    _keys: null,
    _values: null
  }
;
  var basector$uFTaMoWbgjizz5alTdsqog = $ctor$(null, null, type$uFTaMoWbgjizz5alTdsqog);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2..ctor
  type$uFTaMoWbgjizz5alTdsqog.kgYABoWbgjizz5alTdsqog = function ()
  {
    var a = this;

    a._keys = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    a._values = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
  };
  var ctor$kgYABoWbgjizz5alTdsqog = uFTaMoWbgjizz5alTdsqog.ctor = $ctor$(null, 'kgYABoWbgjizz5alTdsqog', type$uFTaMoWbgjizz5alTdsqog);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2..ctor
  type$uFTaMoWbgjizz5alTdsqog.kwYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this;

    a._keys = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    a._values = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
  };
  var ctor$kwYABoWbgjizz5alTdsqog = $ctor$(null, 'kwYABoWbgjizz5alTdsqog', type$uFTaMoWbgjizz5alTdsqog);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<TKey,TValue>>.GetEnumerator
  type$uFTaMoWbgjizz5alTdsqog.owYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = a.pQYABoWbgjizz5alTdsqog();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.System.Collections.IEnumerable.GetEnumerator
  type$uFTaMoWbgjizz5alTdsqog.pAYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = a.pQYABoWbgjizz5alTdsqog();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Add
  type$uFTaMoWbgjizz5alTdsqog.lAYABoWbgjizz5alTdsqog = function (b, c)
  {
    var a = this, d;

    d = !a.lQYABoWbgjizz5alTdsqog(b);

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('Argument_AddingDuplicate');
    }

    a._keys.TgMABtmlXD2_bMcNB1Zdfiw(b);
    a._values.TgMABtmlXD2_bMcNB1Zdfiw(c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.ContainsKey
  type$uFTaMoWbgjizz5alTdsqog.lQYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this, c;

    c = a._keys.UQMABtmlXD2_bMcNB1Zdfiw(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.get_Keys
  type$uFTaMoWbgjizz5alTdsqog.lgYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = a._keys;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Remove
  type$uFTaMoWbgjizz5alTdsqog.lwYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this, c, d, e;

    e = a.lQYABoWbgjizz5alTdsqog(b);

    if (!e)
    {
      d = 0;
      return d;
    }

    c = a._keys.SAMABtmlXD2_bMcNB1Zdfiw(b);
    a._keys.SgMABtmlXD2_bMcNB1Zdfiw(c);
    a._values.SgMABtmlXD2_bMcNB1Zdfiw(c);
    d = 1;
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.TryGetValue
  type$uFTaMoWbgjizz5alTdsqog.mAYABoWbgjizz5alTdsqog = function (b, c)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.get_Values
  type$uFTaMoWbgjizz5alTdsqog.mQYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = a.mQYABoWbgjizz5alTdsqog();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.get_Item
  type$uFTaMoWbgjizz5alTdsqog.mgYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this, c, d, e;

    c = a._keys.SAMABtmlXD2_bMcNB1Zdfiw(b);
    e = !(c == -1);

    if (!e)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('Not found.');
    }

    d = a._values.SwMABtmlXD2_bMcNB1Zdfiw(c);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.set_Item
  type$uFTaMoWbgjizz5alTdsqog.mwYABoWbgjizz5alTdsqog = function (b, c)
  {
    var a = this, d, e;

    d = a._keys.SAMABtmlXD2_bMcNB1Zdfiw(b);
    e = !(d == -1);

    if (!e)
    {
      a._keys.TgMABtmlXD2_bMcNB1Zdfiw(b);
      a._values.TgMABtmlXD2_bMcNB1Zdfiw(c);
      return;
    }

    a._values.TAMABtmlXD2_bMcNB1Zdfiw(d, c);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Add
  type$uFTaMoWbgjizz5alTdsqog.nAYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this;

    a.lAYABoWbgjizz5alTdsqog(b.FQUABrKDAjqsR3PJP_ajzDw(), b.FwUABrKDAjqsR3PJP_ajzDw());
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Clear
  type$uFTaMoWbgjizz5alTdsqog.nQYABoWbgjizz5alTdsqog = function ()
  {
    var a = this;

    a._keys.UAMABtmlXD2_bMcNB1Zdfiw();
    a._values.UAMABtmlXD2_bMcNB1Zdfiw();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Contains
  type$uFTaMoWbgjizz5alTdsqog.ngYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.CopyTo
  type$uFTaMoWbgjizz5alTdsqog.nwYABoWbgjizz5alTdsqog = function (b, c)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.get_Count
  type$uFTaMoWbgjizz5alTdsqog.oAYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = a._keys.UwMABtmlXD2_bMcNB1Zdfiw();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.get_IsReadOnly
  type$uFTaMoWbgjizz5alTdsqog.oQYABoWbgjizz5alTdsqog = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.Remove
  type$uFTaMoWbgjizz5alTdsqog.ogYABoWbgjizz5alTdsqog = function (b)
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2.GetEnumerator
  type$uFTaMoWbgjizz5alTdsqog.pQYABoWbgjizz5alTdsqog = function ()
  {
    var a = this, b;

    b = new ctor$pgYABjx0cjO2_baZaBhxsvg(a);
    return b;
  };

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2
  (function (i)  {
    i.ExkABm_az2jGblddb4Z0czA = i.mgYABoWbgjizz5alTdsqog;
    i.FBkABm_az2jGblddb4Z0czA = i.mwYABoWbgjizz5alTdsqog;
    i.FRkABm_az2jGblddb4Z0czA = i.lgYABoWbgjizz5alTdsqog;
    i.FhkABm_az2jGblddb4Z0czA = i.mQYABoWbgjizz5alTdsqog;
    i.FxkABm_az2jGblddb4Z0czA = i.lQYABoWbgjizz5alTdsqog;
    i.GBkABm_az2jGblddb4Z0czA = i.lAYABoWbgjizz5alTdsqog;
    i.GRkABm_az2jGblddb4Z0czA = i.lwYABoWbgjizz5alTdsqog;
    i.GhkABm_az2jGblddb4Z0czA = i.mAYABoWbgjizz5alTdsqog;
    // 
    i.DBkABnTAkDm_aGe9ZbsQrAQ = i.oAYABoWbgjizz5alTdsqog;
    i.DRkABnTAkDm_aGe9ZbsQrAQ = i.oQYABoWbgjizz5alTdsqog;
    i.DhkABnTAkDm_aGe9ZbsQrAQ = i.nAYABoWbgjizz5alTdsqog;
    i.DxkABnTAkDm_aGe9ZbsQrAQ = i.nQYABoWbgjizz5alTdsqog;
    i.EBkABnTAkDm_aGe9ZbsQrAQ = i.ngYABoWbgjizz5alTdsqog;
    i.ERkABnTAkDm_aGe9ZbsQrAQ = i.nwYABoWbgjizz5alTdsqog;
    i.EhkABnTAkDm_aGe9ZbsQrAQ = i.ogYABoWbgjizz5alTdsqog;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.owYABoWbgjizz5alTdsqog;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.pAYABoWbgjizz5alTdsqog;
  }
  )(type$uFTaMoWbgjizz5alTdsqog);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator
  function __aPtwNTx0cjO2_baZaBhxsvg(){};
  __aPtwNTx0cjO2_baZaBhxsvg.TypeName = "__Enumerator";
  __aPtwNTx0cjO2_baZaBhxsvg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$__aPtwNTx0cjO2_baZaBhxsvg = __aPtwNTx0cjO2_baZaBhxsvg.prototype;
  type$__aPtwNTx0cjO2_baZaBhxsvg = __aPtwNTx0cjO2_baZaBhxsvg.prototype =   {
    constructor: __aPtwNTx0cjO2_baZaBhxsvg,
    list: null
  }
;
  var basector$__aPtwNTx0cjO2_baZaBhxsvg = $ctor$(null, null, type$__aPtwNTx0cjO2_baZaBhxsvg);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator..ctor
  type$__aPtwNTx0cjO2_baZaBhxsvg.pgYABjx0cjO2_baZaBhxsvg = function (b)
  {
    var a = this, c, d, e, f;

    c = new ctor$RQMABtmlXD2_bMcNB1Zdfiw();
    e = b.lgYABoWbgjizz5alTdsqog().NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (e.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = e.xQAABrYmRzSu_anO2U_bk1MA();
        c.TgMABtmlXD2_bMcNB1Zdfiw(new ctor$GgUABrKDAjqsR3PJP_ajzDw(d, b.mgYABoWbgjizz5alTdsqog(d)));
      }
    }
    finally
    {
      f = (e == null);

      if (!f)
      {
        e.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    a.list = c.VwMABtmlXD2_bMcNB1Zdfiw();
  };
  var ctor$pgYABjx0cjO2_baZaBhxsvg = $ctor$(null, 'pgYABjx0cjO2_baZaBhxsvg', type$__aPtwNTx0cjO2_baZaBhxsvg);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator.System.Collections.IEnumerator.get_Current
  type$__aPtwNTx0cjO2_baZaBhxsvg.qgYABjx0cjO2_baZaBhxsvg = function ()
  {
    var a = this, b;

    b = a.pwYABjx0cjO2_baZaBhxsvg();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator.get_Current
  type$__aPtwNTx0cjO2_baZaBhxsvg.pwYABjx0cjO2_baZaBhxsvg = function ()
  {
    var a = this, b;

    b = a.list.xQAABrYmRzSu_anO2U_bk1MA();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator.Dispose
  type$__aPtwNTx0cjO2_baZaBhxsvg.qAYABjx0cjO2_baZaBhxsvg = function ()
  {
    var a = this;

    a.list.xAAABq_bUDz_aWf_aXPRTEtLA();
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator.MoveNext
  type$__aPtwNTx0cjO2_baZaBhxsvg.qQYABjx0cjO2_baZaBhxsvg = function ()
  {
    var a = this, b;

    b = a.list.qAAABu7N0xGI6ACQJ1TEOg();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator.Reset
  type$__aPtwNTx0cjO2_baZaBhxsvg.qwYABjx0cjO2_baZaBhxsvg = function ()
  {
    var a = this;

    throw BgIABszpcz2K4r_a_alajjmQ('The method or operation is not implemented.');
  };

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Collections.Generic.__Dictionary`2+__Enumerator
  (function (i)  {
    i.xQAABrYmRzSu_anO2U_bk1MA = i.pwYABjx0cjO2_baZaBhxsvg;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.qAYABjx0cjO2_baZaBhxsvg;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.qQYABjx0cjO2_baZaBhxsvg;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.qgYABjx0cjO2_baZaBhxsvg;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.qwYABjx0cjO2_baZaBhxsvg;
  }
  )(type$__aPtwNTx0cjO2_baZaBhxsvg);
  // ScriptCoreLib.JavaScript.Runtime.Fader
  function _3FJhcsDFqTWU1aKDRaVUFw(){};
  _3FJhcsDFqTWU1aKDRaVUFw.TypeName = "Fader";
  _3FJhcsDFqTWU1aKDRaVUFw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_3FJhcsDFqTWU1aKDRaVUFw = _3FJhcsDFqTWU1aKDRaVUFw.prototype;
  var basector$_3FJhcsDFqTWU1aKDRaVUFw = $ctor$(null, null, type$_3FJhcsDFqTWU1aKDRaVUFw);
  // ScriptCoreLib.JavaScript.Runtime.Fader..ctor
  type$_3FJhcsDFqTWU1aKDRaVUFw.sgYABsDFqTWU1aKDRaVUFw = function ()
  {
    var a = this;

  };
  var ctor$sgYABsDFqTWU1aKDRaVUFw = _3FJhcsDFqTWU1aKDRaVUFw.ctor = $ctor$(null, 'sgYABsDFqTWU1aKDRaVUFw', type$_3FJhcsDFqTWU1aKDRaVUFw);

  // ScriptCoreLib.JavaScript.Runtime.Fader.FadeOut
  function rAYABsDFqTWU1aKDRaVUFw(b)
  {
    rQYABsDFqTWU1aKDRaVUFw(b, 0, 300);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader.FadeOut
  function rQYABsDFqTWU1aKDRaVUFw(b, c, d)
  {
    var e;

    e = /* DOMCreateType */new VmDtFjEhkj6H4kGze_aM6nw();
    e.target = b;
    e.fadetime = d;
    qwAABgnDWDenzWX06iPvnw(e.target.style, 1);
    new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(e, '_FadeOut_b__0')).kAQABtY33j68H_aZQYc4FRw(c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader.FadeAndRemove
  function rgYABsDFqTWU1aKDRaVUFw(b)
  {
    sAYABsDFqTWU1aKDRaVUFw(b, 0, 300, []);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader.Fade
  function rwYABsDFqTWU1aKDRaVUFw(b, c, d, e)
  {
    var f;

    f = /* DOMCreateType */new vadSwQv95jK_b_bPytLZxVAA();
    f.target = b;
    f.fadetime = d;
    f.done = e;
    f.target.style.height = _8AQABpT92DaiMvTduyyLZQ(new Number(f.target.clientHeight), 'px');
    new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(f, '_Fade_b__6')).kAQABtY33j68H_aZQYc4FRw(c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader.FadeAndRemove
  function sAYABsDFqTWU1aKDRaVUFw(b, c, d, e)
  {
    var f;

    f = /* DOMCreateType */new Sxa84TepRjWjkjQ8TRryhA();
    f.target = b;
    f.fadetime = d;
    f.cotargets = e;
    f.target.style.height = _8AQABpT92DaiMvTduyyLZQ(new Number(f.target.clientHeight), 'px');
    new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(f, '_FadeAndRemove_b__c')).kAQABtY33j68H_aZQYc4FRw(c);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader.FlashAndFadeOut
  function sQYABsDFqTWU1aKDRaVUFw(b, c)
  {
    var d, e, f;

    e = /* DOMCreateType */new bOwCfAXfJjOMxxUdTL2E8Q();
    e.e = b;
    d = new ctor$AQAABk4dNT6JcvJhlSjXvQ(c);
    d = CAAABk4dNT6JcvJhlSjXvQ(d, new ctor$ewMABju_bQzuieaLNynM0gA(e, '_FlashAndFadeOut_b__12'));
    d = CAAABk4dNT6JcvJhlSjXvQ(d, new ctor$ewMABju_bQzuieaLNynM0gA(e, '_FlashAndFadeOut_b__13'));
    d = CAAABk4dNT6JcvJhlSjXvQ(d, new ctor$ewMABju_bQzuieaLNynM0gA(e, '_FlashAndFadeOut_b__14'));
    d = CAAABk4dNT6JcvJhlSjXvQ(d, new ctor$ewMABju_bQzuieaLNynM0gA(e, '_FlashAndFadeOut_b__15'));
    e.e.style.zIndex = 1000;
    f = d;
    return f;
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter
  function _0vHxUWj2pj6v9xlugKAN2Q(){};
  _0vHxUWj2pj6v9xlugKAN2Q.TypeName = "StringWriter";
  _0vHxUWj2pj6v9xlugKAN2Q.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_0vHxUWj2pj6v9xlugKAN2Q = _0vHxUWj2pj6v9xlugKAN2Q.prototype;
  type$_0vHxUWj2pj6v9xlugKAN2Q = _0vHxUWj2pj6v9xlugKAN2Q.prototype =   {
    constructor: _0vHxUWj2pj6v9xlugKAN2Q,
    Buffer: null,
    NewLineString: null
  }
;
  var basector$_0vHxUWj2pj6v9xlugKAN2Q = $ctor$(null, null, type$_0vHxUWj2pj6v9xlugKAN2Q);
  // ScriptCoreLib.JavaScript.Runtime.StringWriter..ctor
  type$_0vHxUWj2pj6v9xlugKAN2Q.vQYABmj2pj6v9xlugKAN2Q = function ()
  {
    var a = this;

    a.Buffer = uAEABh33sTm5Ql7VEPKRUg();
    a.NewLineString = '\u000d\u000a';
  };
  var ctor$vQYABmj2pj6v9xlugKAN2Q = _0vHxUWj2pj6v9xlugKAN2Q.ctor = $ctor$(null, 'vQYABmj2pj6v9xlugKAN2Q', type$_0vHxUWj2pj6v9xlugKAN2Q);

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Write
  type$_0vHxUWj2pj6v9xlugKAN2Q.swYABmj2pj6v9xlugKAN2Q = function (b)
  {
    var a = this;

    a.Buffer.push(b.ugYABmj2pj6v9xlugKAN2Q());
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Write
  type$_0vHxUWj2pj6v9xlugKAN2Q.tAYABmj2pj6v9xlugKAN2Q = function ()
  {
    var a = this;

    a.tQYABmj2pj6v9xlugKAN2Q('');
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Write
  type$_0vHxUWj2pj6v9xlugKAN2Q.tQYABmj2pj6v9xlugKAN2Q = function (b)
  {
    var a = this, c, d, e, f, g;

    c = a.Buffer.length;
    g = !(c > 0);

    if (!g)
    {
      d = (c - 1);
      e = a.Buffer;
      f = xAEABh33sTm5Ql7VEPKRUg(e, d);
      xQEABh33sTm5Ql7VEPKRUg(e, d, _8AQABpT92DaiMvTduyyLZQ(f, b));
      return;
    }

    a.Buffer.push(_7wQABpT92DaiMvTduyyLZQ(b));
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.WriteLine
  type$_0vHxUWj2pj6v9xlugKAN2Q.tgYABmj2pj6v9xlugKAN2Q = function ()
  {
    var a = this;

    a.Buffer.push(a.NewLineString);
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.WriteLine
  type$_0vHxUWj2pj6v9xlugKAN2Q.twYABmj2pj6v9xlugKAN2Q = function (b)
  {
    var a = this;

    a.tQYABmj2pj6v9xlugKAN2Q(b);
    a.tgYABmj2pj6v9xlugKAN2Q();
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Prefix
  type$_0vHxUWj2pj6v9xlugKAN2Q.uAYABmj2pj6v9xlugKAN2Q = function (b, c)
  {
    var a = this;

    a.uQYABmj2pj6v9xlugKAN2Q(b, c, (a.Buffer.length - 1));
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Prefix
  type$_0vHxUWj2pj6v9xlugKAN2Q.uQYABmj2pj6v9xlugKAN2Q = function (b, c, d)
  {
    var a = this, e, f;


    for (e = c; !(e > d); e++)
    {
      f = !CwUABpT92DaiMvTduyyLZQ(xAEABh33sTm5Ql7VEPKRUg(a.Buffer, e), a.NewLineString);

      if (!f)
      {
        xQEABh33sTm5Ql7VEPKRUg(a.Buffer, e, _8gQABpT92DaiMvTduyyLZQ(b, xAEABh33sTm5Ql7VEPKRUg(a.Buffer, e)));
      }

    }

  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.GetString
  type$_0vHxUWj2pj6v9xlugKAN2Q.ugYABmj2pj6v9xlugKAN2Q = function ()
  {
    var a = this, b;

    b = a.Buffer.join('');
    return b;
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.GetString
  type$_0vHxUWj2pj6v9xlugKAN2Q.uwYABmj2pj6v9xlugKAN2Q = function (b)
  {
    var a = this, c;

    c = a.Buffer.join(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Runtime.StringWriter.Clear
  type$_0vHxUWj2pj6v9xlugKAN2Q.vAYABmj2pj6v9xlugKAN2Q = function ()
  {
    var a = this;

    a.Buffer.splice(0, a.Buffer.length);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTable.InternalConstructor
  function vwYABuncJDq49Gk8mB7ovA()
  {
    var b;

    b = document.createElement('table');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTable.AddBody
  function wAYABuncJDq49Gk8mB7ovA(a)
  {
    var b, c;

    b = rwMABn8_bAjWfY82YILq2qw();
    a.appendChild(b);
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Query.InternalSequenceImplementation.AsEnumerable
  function _8AYABiqwCTeO3EKf_biz5wQ(b)
  {
    var c, d, e;

    e = !(b == null);

    if (!e)
    {
      d = null;
      return d;
    }

    c = _9AAABtd5xTKztToDDBg08A(b);
    e = _6AAABtd5xTKztToDDBg08A(c);

    if (!e)
    {
      e = !(c.prototype == null);

      if (!e)
      {
        e = !_9QAABtd5xTKztToDDBg08A(c, 'length');

        if (!e)
        {
        }
        else
        {
          d = b;
          return d;
        }

      }
      else
      {
        d = b;
        return d;
      }

    }

    d = rQIABqJ45j6g37Cm4Q3HvQ(_3gAABtd5xTKztToDDBg08A(c));
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLStyle.get_StyleSheet
  function _8QYABm0Q7jGQg71RtFXS1A(a)
  {
    var b, c;

    c = !_9QAABtd5xTKztToDDBg08A(a, 'sheet');

    if (!c)
    {
      b = a.sheet;
      return b;
    }

    c = !_9QAABtd5xTKztToDDBg08A(a, 'styleSheet');

    if (!c)
    {
      b = a.styleSheet;
      return b;
    }

    throw BgIABszpcz2K4r_a_alajjmQ(_8AQABpT92DaiMvTduyyLZQ('fault at IHTMLStyle.StyleSheet, members: ', _4AAABtd5xTKztToDDBg08A(a)));
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLStyle.InternalConstructor
  function _8wYABm0Q7jGQg71RtFXS1A()
  {
    var b, c, d;

    b = MwAABgAjajq2ygojxk6uUQ('style');
    try
    {
      d = [
        '\u002f\u002a\u002a\u002f'
      ];
      IgAABtvq0jCU0R1GsbOa4g(b, d);
    }
    catch (__exc){ }
    b.type = 'text\u002fcss';
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.ILocation.get_IsHTTP
  function _9AYABryzDz6VIRjzVfEt6A(a)
  {
    var b;

    b = CQUABpT92DaiMvTduyyLZQ(a.protocol, 'http:');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.ILocation.reload
  // ScriptCoreLib.JavaScript.DOM.ILocation.get_Item
  function _9gYABryzDz6VIRjzVfEt6A(a, b)
  {
    var c, d, e, f, g, h, i, j, k;

    c = null;
    d = xAEABh33sTm5Ql7VEPKRUg(yAEABh33sTm5Ql7VEPKRUg(a.search, '?'), 1);
    i = (d == null);

    if (!i)
    {
      e = yAEABh33sTm5Ql7VEPKRUg(d, '\u0026');
      j = xgEABh33sTm5Ql7VEPKRUg(e);

      for (k = 0; (k < j.length); k++)
      {
        f = j[k];
        g = yAEABh33sTm5Ql7VEPKRUg(f, '=');
        i = !(g.length > 1);

        if (!i)
        {
          i = !CQUABpT92DaiMvTduyyLZQ(window.unescape(xAEABh33sTm5Ql7VEPKRUg(g, 0)), b);

          if (!i)
          {
            c = window.unescape(xAEABh33sTm5Ql7VEPKRUg(g, 1));
            break;
          }

        }

      }

    }

    h = c;
    return h;
  };

  // ScriptCoreLib.JavaScript.DOM.ILocation.replace
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSelect.InternalConstructor
  function __agYABiFTpzmFvI57s9gqww()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('select');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSelect.Add
  function __awYABiFTpzmFvI57s9gqww(a, b)
  {
    var c, d, e, f;

    d = _5AAABtd5xTKztToDDBg08A(b);

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      __bAYABiFTpzmFvI57s9gqww(a, c.Name);
    }

  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSelect.Add
  function __bAYABiFTpzmFvI57s9gqww(a, b)
  {
    var c, d;

    c = MwYABlVwLT_aOv3F3iVBOMA();
    c.value = b;
    c.innerHTML = b;
    a.appendChild(c);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSelect.Add
  function __bQYABiFTpzmFvI57s9gqww(a, b)
  {
    var c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      __bAYABiFTpzmFvI57s9gqww(a, _7wQABpT92DaiMvTduyyLZQ(new Number(c)));
    }

  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSelect.Add
  function __bgYABiFTpzmFvI57s9gqww(a, b)
  {
    var c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      __bAYABiFTpzmFvI57s9gqww(a, c);
    }

  };

  // ScriptCoreLib.Shared.TextWriter
  function T5geL3m9oj_aSBG1Ib4oM6A(){};
  T5geL3m9oj_aSBG1Ib4oM6A.TypeName = "TextWriter";
  T5geL3m9oj_aSBG1Ib4oM6A.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$T5geL3m9oj_aSBG1Ib4oM6A = T5geL3m9oj_aSBG1Ib4oM6A.prototype;
  type$T5geL3m9oj_aSBG1Ib4oM6A = T5geL3m9oj_aSBG1Ib4oM6A.prototype =   {
    constructor: T5geL3m9oj_aSBG1Ib4oM6A,
    _text: null
  }
;
  var basector$T5geL3m9oj_aSBG1Ib4oM6A = $ctor$(null, null, type$T5geL3m9oj_aSBG1Ib4oM6A);
  // ScriptCoreLib.Shared.TextWriter..ctor
  type$T5geL3m9oj_aSBG1Ib4oM6A.BAcABnm9oj_aSBG1Ib4oM6A = function ()
  {
    var a = this;

    a._text = '';
  };
  var ctor$BAcABnm9oj_aSBG1Ib4oM6A = T5geL3m9oj_aSBG1Ib4oM6A.ctor = $ctor$(null, 'BAcABnm9oj_aSBG1Ib4oM6A', type$T5geL3m9oj_aSBG1Ib4oM6A);

  // ScriptCoreLib.Shared.TextWriter.get_Text
  type$T5geL3m9oj_aSBG1Ib4oM6A.__bwYABnm9oj_aSBG1Ib4oM6A = function ()
  {
    var a = this, b;

    b = a._text;
    return b;
  };

  // ScriptCoreLib.Shared.TextWriter.set_Text
  type$T5geL3m9oj_aSBG1Ib4oM6A.AAcABnm9oj_aSBG1Ib4oM6A = function (b)
  {
    var a = this;

    a._text = b;
  };

  // ScriptCoreLib.Shared.TextWriter.Write
  type$T5geL3m9oj_aSBG1Ib4oM6A.AQcABnm9oj_aSBG1Ib4oM6A = function (b)
  {
    var a = this;

    a._text = _8gQABpT92DaiMvTduyyLZQ(a._text, b);
  };

  // ScriptCoreLib.Shared.TextWriter.WriteLine
  type$T5geL3m9oj_aSBG1Ib4oM6A.AgcABnm9oj_aSBG1Ib4oM6A = function ()
  {
    var a = this;

    a.AwcABnm9oj_aSBG1Ib4oM6A('');
  };

  // ScriptCoreLib.Shared.TextWriter.WriteLine
  type$T5geL3m9oj_aSBG1Ib4oM6A.AwcABnm9oj_aSBG1Ib4oM6A = function (b)
  {
    var a = this;

    a.AQcABnm9oj_aSBG1Ib4oM6A(_8gQABpT92DaiMvTduyyLZQ(b, '\u000a'));
  };

  // ScriptCoreLib.ITextWriter
  // ScriptCoreLib.Shared.TextWriter
  (function (i)  {
    i.KQAABhKEFDWzUI6i_bopfkg = i.AQcABnm9oj_aSBG1Ib4oM6A;
    i.KgAABhKEFDWzUI6i_bopfkg = i.AwcABnm9oj_aSBG1Ib4oM6A;
  }
  )(type$T5geL3m9oj_aSBG1Ib4oM6A);
  // ScriptCoreLib.Shared.Serialized.SimpleEmailTag
  function iLvIh2MRdDSrI1Zv8IAxhg(){};
  iLvIh2MRdDSrI1Zv8IAxhg.TypeName = "SimpleEmailTag";
  iLvIh2MRdDSrI1Zv8IAxhg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$iLvIh2MRdDSrI1Zv8IAxhg = iLvIh2MRdDSrI1Zv8IAxhg.prototype;
  type$iLvIh2MRdDSrI1Zv8IAxhg = iLvIh2MRdDSrI1Zv8IAxhg.prototype =   {
    constructor: iLvIh2MRdDSrI1Zv8IAxhg,
    from: null,
    to: null,
    subject: null,
    body: null
  }
;
  var basector$iLvIh2MRdDSrI1Zv8IAxhg = $ctor$(null, null, type$iLvIh2MRdDSrI1Zv8IAxhg);
  // ScriptCoreLib.Shared.Serialized.SimpleEmailTag..ctor
  type$iLvIh2MRdDSrI1Zv8IAxhg.BQcABmMRdDSrI1Zv8IAxhg = function ()
  {
    var a = this;

  };
  var ctor$BQcABmMRdDSrI1Zv8IAxhg = iLvIh2MRdDSrI1Zv8IAxhg.ctor = $ctor$(null, 'BQcABmMRdDSrI1Zv8IAxhg', type$iLvIh2MRdDSrI1Zv8IAxhg);

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLBreak.InternalConstructor
  function BwcABjUINT_a1xkfbdB8Ksw()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('br');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLScript.InternalConstructor
  function CQcABoVcpzW1V59cMpSMrQ()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('script');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLFieldset.InternalConstructor
  function CwcABtm5DzWofPh9_bWHFQA()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('fieldset');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder
  function qhUNiJZhQDOiq3eX08UFDA(){};
  qhUNiJZhQDOiq3eX08UFDA.TypeName = "StringBuilder";
  qhUNiJZhQDOiq3eX08UFDA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$qhUNiJZhQDOiq3eX08UFDA = qhUNiJZhQDOiq3eX08UFDA.prototype;
  type$qhUNiJZhQDOiq3eX08UFDA = qhUNiJZhQDOiq3eX08UFDA.prototype =   {
    constructor: qhUNiJZhQDOiq3eX08UFDA,
    data: null
  }
;
  var basector$qhUNiJZhQDOiq3eX08UFDA = $ctor$(null, null, type$qhUNiJZhQDOiq3eX08UFDA);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder..ctor
  type$qhUNiJZhQDOiq3eX08UFDA.DAcABpZhQDOiq3eX08UFDA = function ()
  {
    var a = this;

    a.data = uAEABh33sTm5Ql7VEPKRUg();
  };
  var ctor$DAcABpZhQDOiq3eX08UFDA = qhUNiJZhQDOiq3eX08UFDA.ctor = $ctor$(null, 'DAcABpZhQDOiq3eX08UFDA', type$qhUNiJZhQDOiq3eX08UFDA);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder.Append
  type$qhUNiJZhQDOiq3eX08UFDA.DQcABpZhQDOiq3eX08UFDA = function (b)
  {
    var a = this, c, d;

    d = (b == null);

    if (!d)
    {
      a.data.push(b);
    }

    c = a;
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder.Append
  type$qhUNiJZhQDOiq3eX08UFDA.DgcABpZhQDOiq3eX08UFDA = function (b)
  {
    var a = this, c, d;

    d = !(b == null);

    if (!d)
    {
      c = a;
      return c;
    }

    c = a.DQcABpZhQDOiq3eX08UFDA((b+''));
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder.ToString
  type$qhUNiJZhQDOiq3eX08UFDA.toString /* ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder.ToString */ = function ()
  {
    var a = this, b;

    b = a.data.join('');
    return b;
  };
    qhUNiJZhQDOiq3eX08UFDA.prototype.toString /* System.Object.ToString */ = qhUNiJZhQDOiq3eX08UFDA.prototype.toString /* ScriptCoreLib.JavaScript.BCLImplementation.System.Text.__StringBuilder.ToString */;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random
  function _2IB55I2LaDmnwTYyBjqFag(){};
  _2IB55I2LaDmnwTYyBjqFag.TypeName = "Random";
  _2IB55I2LaDmnwTYyBjqFag.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_2IB55I2LaDmnwTYyBjqFag = _2IB55I2LaDmnwTYyBjqFag.prototype;
  var basector$_2IB55I2LaDmnwTYyBjqFag = $ctor$(null, null, type$_2IB55I2LaDmnwTYyBjqFag);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random..ctor
  type$_2IB55I2LaDmnwTYyBjqFag.EAcABo2LaDmnwTYyBjqFag = function ()
  {
    var a = this;

  };
  var ctor$EAcABo2LaDmnwTYyBjqFag = _2IB55I2LaDmnwTYyBjqFag.ctor = $ctor$(null, 'EAcABo2LaDmnwTYyBjqFag', type$_2IB55I2LaDmnwTYyBjqFag);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random.Next
  type$_2IB55I2LaDmnwTYyBjqFag.EQcABo2LaDmnwTYyBjqFag = function ()
  {
    var a = this, b;

    b = Math.round((a.FAcABo2LaDmnwTYyBjqFag() * 4294967295));
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random.Next
  type$_2IB55I2LaDmnwTYyBjqFag.EgcABo2LaDmnwTYyBjqFag = function (b)
  {
    var a = this, c, d;

    d = !(b < 0);

    if (!d)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('ArgumentOutOfRange_MustBePositive');
    }

    c = Math.round((a.FAcABo2LaDmnwTYyBjqFag() * b));
    return c;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random.Next
  type$_2IB55I2LaDmnwTYyBjqFag.EwcABo2LaDmnwTYyBjqFag = function (b, c)
  {
    var a = this, d, e;

    e = (b > c);

    if (!e)
    {
      throw BgIABszpcz2K4r_a_alajjmQ('Argument_MinMaxValue');
    }

    d = (a.EgcABo2LaDmnwTYyBjqFag((c - b)) + b);
    return d;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Random.NextDouble
  type$_2IB55I2LaDmnwTYyBjqFag.FAcABo2LaDmnwTYyBjqFag = function ()
  {
    var a = this, b;

    b = Math.random();
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr
  function rLlmjkkCZD_amtxRrU4EqQQ(){};
  rLlmjkkCZD_amtxRrU4EqQQ.TypeName = "IntPtr";
  rLlmjkkCZD_amtxRrU4EqQQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$rLlmjkkCZD_amtxRrU4EqQQ = rLlmjkkCZD_amtxRrU4EqQQ.prototype;
  var basector$rLlmjkkCZD_amtxRrU4EqQQ = $ctor$(null, null, type$rLlmjkkCZD_amtxRrU4EqQQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr..ctor
  type$rLlmjkkCZD_amtxRrU4EqQQ.GQcABkkCZD_amtxRrU4EqQQ = function ()
  {
    var a = this;

  };
  var ctor$GQcABkkCZD_amtxRrU4EqQQ = rLlmjkkCZD_amtxRrU4EqQQ.ctor = $ctor$(null, 'GQcABkkCZD_amtxRrU4EqQQ', type$rLlmjkkCZD_amtxRrU4EqQQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr.op_Equality
  function FQcABkkCZD_amtxRrU4EqQQ(a, b) { return a==b };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr.op_Inequality
  function FgcABkkCZD_amtxRrU4EqQQ(a, b) { return a!=b };
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr.Equals
  type$rLlmjkkCZD_amtxRrU4EqQQ.FwcABkkCZD_amtxRrU4EqQQ = function (b)
  {
    var a = this, c;

    c = FQcABkkCZD_amtxRrU4EqQQ(a, b);
    return c;
  };
    rLlmjkkCZD_amtxRrU4EqQQ.prototype.AwAABnwCHD6Y1dqcmGKqIQ = rLlmjkkCZD_amtxRrU4EqQQ.prototype.FwcABkkCZD_amtxRrU4EqQQ;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__IntPtr.GetHashCode
  type$rLlmjkkCZD_amtxRrU4EqQQ.GAcABkkCZD_amtxRrU4EqQQ = function ()
  {
    var a = this, b;

    b = 0;
    return b;
  };
    rLlmjkkCZD_amtxRrU4EqQQ.prototype.BwAABnwCHD6Y1dqcmGKqIQ = rLlmjkkCZD_amtxRrU4EqQQ.prototype.GAcABkkCZD_amtxRrU4EqQQ;

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSpan.InternalConstructor
  function HQcABkjEbDO_alxfCOX592w()
  {
    var b;

    b = document.createElement('span');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSpan.InternalConstructor
  function HgcABkjEbDO_alxfCOX592w(b)
  {
    var c, d;

    c = HQcABkjEbDO_alxfCOX592w();
    c.innerHTML = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLSpan.InternalConstructor
  function HwcABkjEbDO_alxfCOX592w(b)
  {
    var c, d;

    c = HQcABkjEbDO_alxfCOX592w();
    IQAABtvq0jCU0R1GsbOa4g(c, b);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDiv.InternalConstructor
  function JQcABjQynDSNZ0PXHA8v4w()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('div');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDiv.InternalConstructor
  function JgcABjQynDSNZ0PXHA8v4w(b)
  {
    var c, d;

    c = JQcABjQynDSNZ0PXHA8v4w();
    c.innerHTML = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDiv.InternalConstructor
  function JwcABjQynDSNZ0PXHA8v4w(b)
  {
    var c, d;

    c = JQcABjQynDSNZ0PXHA8v4w();
    IQAABtvq0jCU0R1GsbOa4g(c, b);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDiv.ToFullscreen
  function KAcABjQynDSNZ0PXHA8v4w(a)
  {
    var b, c, d;

    document.body.style.overflow = 'hidden';
    c = (a.parentNode == document.body);

    if (!c)
    {
      kAUABuKCPTKGRKjkr5dWuA(a);
    }

    b = new ctor$_3QMABjE9ID2bvdJDtEkvJw(EwQABrc98zqfJJxE_at_bcTw(window), EgQABrc98zqfJJxE_at_bcTw(window));
    d = [
      'fullscreen: ',
      new Number(b.X),
      ', ',
      new Number(b.Y)
    ];
    awQABh78uTmU7_bAOPst6lA(_7gQABpT92DaiMvTduyyLZQ(d));
    pgAABgnDWDenzWX06iPvnw(a.style, 0, 0, b.X, b.Y);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper
  function KVEI7BozDzWfwuqxDUPUMg(){};
  KVEI7BozDzWfwuqxDUPUMg.TypeName = "DragHelper";
  KVEI7BozDzWfwuqxDUPUMg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$KVEI7BozDzWfwuqxDUPUMg = KVEI7BozDzWfwuqxDUPUMg.prototype;
  type$KVEI7BozDzWfwuqxDUPUMg = KVEI7BozDzWfwuqxDUPUMg.prototype =   {
    constructor: KVEI7BozDzWfwuqxDUPUMg,
    IsDrag: false,
    Position: null,
    OffsetPosition: null,
    DragStartValidate: null,
    DragStart: null,
    DragMove: null,
    MiddleClick: null,
    DragMoveFilter: null,
    DragStop: null,
    Control: null,
    ondocumentmousemove: null,
    ondocumentmouseup: null,
    onmousedown: null,
    History: null,
    _Enabled: false,
    DragStartCursorPosition: null,
    HoverTime: 0
  }
;
  var basector$KVEI7BozDzWfwuqxDUPUMg = $ctor$(null, null, type$KVEI7BozDzWfwuqxDUPUMg);
  // ScriptCoreLib.JavaScript.Controls.DragHelper..ctor
  type$KVEI7BozDzWfwuqxDUPUMg.NQcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this, c, d, e;

    c = null;
    d = null;
    e = null;
    a.Position = new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0);
    a.OffsetPosition = new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0);
    a.DragMoveFilter = new ctor$cgYABqZeGjWoftpyUVFR9g(30);
    a.DragStartCursorPosition = new ctor$_3QMABjE9ID2bvdJDtEkvJw(0, 0);
    a.HoverTime = 1000;
    a.Control = b;

    if (!c)
    {
      c = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'NwcABhozDzWfwuqxDUPUMg');
    }

    a.ondocumentmousemove = c;

    if (!d)
    {
      d = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'OAcABhozDzWfwuqxDUPUMg');
    }

    a.ondocumentmouseup = d;

    if (!e)
    {
      e = new ctor$dwMABqGrgDi0RzjV63Di8A(a, 'OQcABhozDzWfwuqxDUPUMg');
    }

    a.onmousedown = iwYABnzY4jaVovIDSMIxgQ(a.onmousedown, e);
  };
  var ctor$NQcABhozDzWfwuqxDUPUMg = $ctor$(null, 'NQcABhozDzWfwuqxDUPUMg', type$KVEI7BozDzWfwuqxDUPUMg);

  // ScriptCoreLib.JavaScript.Controls.DragHelper.add_DragStartValidate
  type$KVEI7BozDzWfwuqxDUPUMg.KQcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStartValidate = iwYABnzY4jaVovIDSMIxgQ(a.DragStartValidate, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.remove_DragStartValidate
  type$KVEI7BozDzWfwuqxDUPUMg.KgcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStartValidate = jQYABnzY4jaVovIDSMIxgQ(a.DragStartValidate, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.add_DragStart
  type$KVEI7BozDzWfwuqxDUPUMg.KwcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStart = iwYABnzY4jaVovIDSMIxgQ(a.DragStart, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.remove_DragStart
  type$KVEI7BozDzWfwuqxDUPUMg.LAcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStart = jQYABnzY4jaVovIDSMIxgQ(a.DragStart, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.add_DragMove
  type$KVEI7BozDzWfwuqxDUPUMg.LQcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragMove = iwYABnzY4jaVovIDSMIxgQ(a.DragMove, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.remove_DragMove
  type$KVEI7BozDzWfwuqxDUPUMg.LgcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragMove = jQYABnzY4jaVovIDSMIxgQ(a.DragMove, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.add_MiddleClick
  type$KVEI7BozDzWfwuqxDUPUMg.LwcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.MiddleClick = iwYABnzY4jaVovIDSMIxgQ(a.MiddleClick, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.remove_MiddleClick
  type$KVEI7BozDzWfwuqxDUPUMg.MAcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.MiddleClick = jQYABnzY4jaVovIDSMIxgQ(a.MiddleClick, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.add_DragStop
  type$KVEI7BozDzWfwuqxDUPUMg.MQcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStop = iwYABnzY4jaVovIDSMIxgQ(a.DragStop, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.remove_DragStop
  type$KVEI7BozDzWfwuqxDUPUMg.MgcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.DragStop = jQYABnzY4jaVovIDSMIxgQ(a.DragStop, b);
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.get_Enabled
  type$KVEI7BozDzWfwuqxDUPUMg.MwcABhozDzWfwuqxDUPUMg = function ()
  {
    var a = this, b;

    b = a._Enabled;
    return b;
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.set_Enabled
  type$KVEI7BozDzWfwuqxDUPUMg.NAcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this, c;

    c = (a._Enabled == b);

    if (!c)
    {
      c = !b;

      if (!c)
      {
        RwAABgAjajq2ygojxk6uUQ(a.Control, a.onmousedown);
      }
      else
      {
        SAAABgAjajq2ygojxk6uUQ(a.Control, a.onmousedown);
      }

    }

    a._Enabled = b;
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.DragTo
  type$KVEI7BozDzWfwuqxDUPUMg.NgcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new F0pqNcS_baj6B7oqVR19QBg();
    c.point = b;
    c.__4__this = a;
    a.DragMoveFilter.dAYABqZeGjWoftpyUVFR9g(new ctor$ewMABju_bQzuieaLNynM0gA(c, '_DragTo_b__6'));
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.<.ctor>b__0
  type$KVEI7BozDzWfwuqxDUPUMg.NwcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this;

    a.NgcABhozDzWfwuqxDUPUMg(_4gMABjE9ID2bvdJDtEkvJw(pAUABuSquTGLE3NPwKQpLw(b), a.OffsetPosition));
  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.<.ctor>b__1
  type$KVEI7BozDzWfwuqxDUPUMg.OAcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this, c, d;

    c = _4gMABjE9ID2bvdJDtEkvJw(a.DragStartCursorPosition, pAUABuSquTGLE3NPwKQpLw(b));
    a.IsDrag = 0;
    sQIABgLCITuEwr97s3dlTA(a.DragStop);
    YAUABrgwLTe_aEJAkCbCrzw(document, a.ondocumentmousemove);
    ZAUABrgwLTe_aEJAkCbCrzw(document, a.ondocumentmouseup);
    d = !(qgUABuSquTGLE3NPwKQpLw(b) == 2);

    if (!d)
    {
      d = !(c._6AMABjE9ID2bvdJDtEkvJw() < 128);

      if (!d)
      {
        sQIABgLCITuEwr97s3dlTA(a.MiddleClick);
      }

    }

  };

  // ScriptCoreLib.JavaScript.Controls.DragHelper.<.ctor>b__2
  type$KVEI7BozDzWfwuqxDUPUMg.OQcABhozDzWfwuqxDUPUMg = function (b)
  {
    var a = this, c, d;

    a.DragStartCursorPosition = pAUABuSquTGLE3NPwKQpLw(b);
    c = new ctor$mQMABgklzj_aswDwOFNiiFQ();
    c.Value = 1;
    c.kwMABgklzj_aswDwOFNiiFQ(a.DragStartValidate);
    d = c.Value;

    if (!d)
    {
      return;
    }

    d = (a.History == null);

    if (!d)
    {
      a.History.TgMABtmlXD2_bMcNB1Zdfiw(a.Position);
    }

    a.OffsetPosition = _4gMABjE9ID2bvdJDtEkvJw(pAUABuSquTGLE3NPwKQpLw(b), a.Position);
    a.IsDrag = 1;
    sQIABgLCITuEwr97s3dlTA(a.DragStart);
    XwUABrgwLTe_aEJAkCbCrzw(document, a.ondocumentmousemove);
    YwUABrgwLTe_aEJAkCbCrzw(document, a.ondocumentmouseup);
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLink.InternalConstructor
  function VAcABnX0dzySoSMAX_arE8g()
  {
    var b;

    b = document.createElement('link');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLLink.InternalConstructor
  function VQcABnX0dzySoSMAX_arE8g(b, c, d)
  {
    var e, f;

    e = VAcABnX0dzySoSMAX_arE8g();
    e.rel = b;
    e.href = c;
    e.type = d;
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLAnchor.InternalConstructor
  function WQcABoxi_bTa9qR7vPH8NUg(b)
  {
    var c, d;

    c = WwcABoxi_bTa9qR7vPH8NUg('about:blank', b);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLAnchor.InternalConstructor
  function WgcABoxi_bTa9qR7vPH8NUg(b, c)
  {
    var d, e;

    d = MwAABgAjajq2ygojxk6uUQ('a');
    d.href = b;
    d.target = '_blank';
    IQAABtvq0jCU0R1GsbOa4g(d, c);
    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLAnchor.InternalConstructor
  function WwcABoxi_bTa9qR7vPH8NUg(b, c)
  {
    var d, e, f, g;

    d = MwAABgAjajq2ygojxk6uUQ('a');
    d.href = b;
    d.target = '_blank';
    f = (c == null);

    if (!f)
    {
      g = [
        c
      ];
      IgAABtvq0jCU0R1GsbOa4g(d, g);
    }

    e = d;
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IDOMImplementation.hasFeature
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLCode.InternalConstructor
  function ewcABiwyJD6a7vR51xccJw()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('code');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLCode.InternalConstructor
  function fQcABiwyJD6a7vR51xccJw(b)
  {
    var c, d;

    c = ewcABiwyJD6a7vR51xccJw();
    c.innerHTML = b;
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLArea.InternalConstructor
  function fwcABiJwezS5Ed6MrRQRGQ()
  {
    var b;

    b = MwAABgAjajq2ygojxk6uUQ('map');
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyNameValue
  function _26dvBV8faTaLrvJDWs89jQ(){};
  _26dvBV8faTaLrvJDWs89jQ.TypeName = "__AssemblyNameValue";
  _26dvBV8faTaLrvJDWs89jQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_26dvBV8faTaLrvJDWs89jQ = _26dvBV8faTaLrvJDWs89jQ.prototype;
  type$_26dvBV8faTaLrvJDWs89jQ = _26dvBV8faTaLrvJDWs89jQ.prototype =   {
    constructor: _26dvBV8faTaLrvJDWs89jQ,
    Name: null,
    FullName: null
  }
;
  var basector$_26dvBV8faTaLrvJDWs89jQ = $ctor$(null, null, type$_26dvBV8faTaLrvJDWs89jQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyNameValue..ctor
  type$_26dvBV8faTaLrvJDWs89jQ.gAcABl8faTaLrvJDWs89jQ = function ()
  {
    var a = this;

  };
  var ctor$gAcABl8faTaLrvJDWs89jQ = _26dvBV8faTaLrvJDWs89jQ.ctor = $ctor$(null, 'gAcABl8faTaLrvJDWs89jQ', type$_26dvBV8faTaLrvJDWs89jQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyName
  function K_bXaQlxAujOnZMAjDg_bmBg(){};
  K_bXaQlxAujOnZMAjDg_bmBg.TypeName = "AssemblyName";
  K_bXaQlxAujOnZMAjDg_bmBg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$K_bXaQlxAujOnZMAjDg_bmBg = K_bXaQlxAujOnZMAjDg_bmBg.prototype;
  type$K_bXaQlxAujOnZMAjDg_bmBg = K_bXaQlxAujOnZMAjDg_bmBg.prototype =   {
    constructor: K_bXaQlxAujOnZMAjDg_bmBg,
    __Value: null,
    __NameValue: null
  }
;
  var basector$K_bXaQlxAujOnZMAjDg_bmBg = $ctor$(null, null, type$K_bXaQlxAujOnZMAjDg_bmBg);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyName..ctor
  type$K_bXaQlxAujOnZMAjDg_bmBg.gwcABlxAujOnZMAjDg_bmBg = function ()
  {
    var a = this;

  };
  var ctor$gwcABlxAujOnZMAjDg_bmBg = K_bXaQlxAujOnZMAjDg_bmBg.ctor = $ctor$(null, 'gwcABlxAujOnZMAjDg_bmBg', type$K_bXaQlxAujOnZMAjDg_bmBg);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyName.get_Name
  type$K_bXaQlxAujOnZMAjDg_bmBg.get_Name = function ()
  {
    var a = this, b;

    b = a.__NameValue.Name;
    return b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.Reflection.__AssemblyName.get_FullName
  type$K_bXaQlxAujOnZMAjDg_bmBg.get_FullName = function ()
  {
    var a = this, b;

    b = a.__NameValue.FullName;
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IDate.setFullYear
  // ScriptCoreLib.JavaScript.DOM.IDate.setMonth
  // ScriptCoreLib.JavaScript.DOM.IDate.setDate
  // ScriptCoreLib.JavaScript.DOM.IDate.getMilliseconds
  // ScriptCoreLib.JavaScript.DOM.IDate.getSeconds
  // ScriptCoreLib.JavaScript.DOM.IDate.getMinutes
  // ScriptCoreLib.JavaScript.DOM.IDate.getHours
  // ScriptCoreLib.JavaScript.DOM.IDate.getDate
  // ScriptCoreLib.JavaScript.DOM.IDate.getDay
  // ScriptCoreLib.JavaScript.DOM.IDate.getMonth
  // ScriptCoreLib.JavaScript.DOM.IDate.getFullYear
  // ScriptCoreLib.JavaScript.DOM.IDate.getTime
  // ScriptCoreLib.JavaScript.DOM.IDate.toGMTString
  // ScriptCoreLib.JavaScript.DOM.IDate.toLocaleString
  // ScriptCoreLib.JavaScript.DOM.IDate.get_Now
  function lAcABvL8PjuDy4A7EiQEHA()
  {
    var b;

    b = new Date();
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IDate.op_Implicit
  function lQcABvL8PjuDy4A7EiQEHA(b)
  {
    var c;

    c = b.getTime();
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Of
  function ogcABgSuBDKy7HYgwkRSdg(b)
  {
    var c;

    c = b.InvokePointer;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.CreateType
  function mQcABgSuBDKy7HYgwkRSdg(f) { return new f(); };
  // ScriptCoreLib.JavaScript.DOM.IFunction.CreateType
  function mgcABgSuBDKy7HYgwkRSdg(a)
  {
    var b;

    b = mQcABgSuBDKy7HYgwkRSdg(a);
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Invoke
  function mwcABgSuBDKy7HYgwkRSdg(f, a0) { return f(a0) };
  // ScriptCoreLib.JavaScript.DOM.IFunction.Invoke
  function nAcABgSuBDKy7HYgwkRSdg(a, b)
  {
    var c;

    c = mwcABgSuBDKy7HYgwkRSdg(a, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Invoke
  function nQcABgSuBDKy7HYgwkRSdg(f, a0, a1, a2) { return f(a0, a1, a2); };
  // ScriptCoreLib.JavaScript.DOM.IFunction.apply
  // ScriptCoreLib.JavaScript.DOM.IFunction.Invoke
  function nwcABgSuBDKy7HYgwkRSdg(a, b, c, d)
  {
    var e;

    e = nQcABgSuBDKy7HYgwkRSdg(a, b, c, d);
    return e;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Of
  function oAcABgSuBDKy7HYgwkRSdg(b)
  {
    var c;

    c = __aAAABtd5xTKztToDDBg08A(_9AAABtd5xTKztToDDBg08A(window), b);
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Of
  function oQcABgSuBDKy7HYgwkRSdg(b)
  {
    var c;

    c = b.InvokePointer;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.OfDelegate
  function owcABgSuBDKy7HYgwkRSdg(b)
  {
    var c;

    c = b.InvokePointer;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Export
  function pAcABgSuBDKy7HYgwkRSdg(a, b)
  {
    AgEABtd5xTKztToDDBg08A(b, a);
  };

  // ScriptCoreLib.JavaScript.DOM.IFunction.Export
  function pQcABgSuBDKy7HYgwkRSdg(b, c)
  {
    pAcABgSuBDKy7HYgwkRSdg(oQcABgSuBDKy7HYgwkRSdg(c), b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__MulticastDelegate
  function SQC1ayS9LTavbmpD3Lqznw(){};
  SQC1ayS9LTavbmpD3Lqznw.TypeName = "MulticastDelegate";
  SQC1ayS9LTavbmpD3Lqznw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$SQC1ayS9LTavbmpD3Lqznw = SQC1ayS9LTavbmpD3Lqznw.prototype;
  type$SQC1ayS9LTavbmpD3Lqznw = SQC1ayS9LTavbmpD3Lqznw.prototype =   {
    constructor: SQC1ayS9LTavbmpD3Lqznw,
    list: null
  }
;
  var basector$SQC1ayS9LTavbmpD3Lqznw = $ctor$(basector$K4srp3zY4jaVovIDSMIxgQ, null, type$SQC1ayS9LTavbmpD3Lqznw);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__MulticastDelegate..ctor
  type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw = function (b, c)
  {
    var a = this;

    a.list = uAEABh33sTm5Ql7VEPKRUg();
    a.iQYABnzY4jaVovIDSMIxgQ(b, c);
    a.list.push(a);
  };
  var ctor$uAcABiS9LTavbmpD3Lqznw = $ctor$(basector$K4srp3zY4jaVovIDSMIxgQ, 'uAcABiS9LTavbmpD3Lqznw', type$SQC1ayS9LTavbmpD3Lqznw);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__MulticastDelegate.CombineImpl
  type$SQC1ayS9LTavbmpD3Lqznw.uQcABiS9LTavbmpD3Lqznw = function (b)
  {
    var a = this, c;

    a.list.push(b);
    c = a;
    return c;
  };
    SQC1ayS9LTavbmpD3Lqznw.prototype.jAYABnzY4jaVovIDSMIxgQ = SQC1ayS9LTavbmpD3Lqznw.prototype.uQcABiS9LTavbmpD3Lqznw;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.__MulticastDelegate.RemoveImpl
  type$SQC1ayS9LTavbmpD3Lqznw.ugcABiS9LTavbmpD3Lqznw = function (b)
  {
    var a = this, c, d, e, f;

    c = -1;

    for (d = 0; (d < a.list.length); d++)
    {
      f = !(xAEABh33sTm5Ql7VEPKRUg(a.list, d) == b);

      if (!f)
      {
        c = d;
        break;
      }

    }

    f = !(c > -1);

    if (!f)
    {
      a.list.splice(c, 1);
    }

    f = !!a.list.length;

    if (!f)
    {
      e = null;
      return e;
    }

    e = a;
    return e;
  };
    SQC1ayS9LTavbmpD3Lqznw.prototype.jgYABnzY4jaVovIDSMIxgQ = SQC1ayS9LTavbmpD3Lqznw.prototype.ugcABiS9LTavbmpD3Lqznw;

  // delegate: (arg0, arg1, arg2, arg3) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Action`4
  function csVPpqJN3D63oi2LfW_bDnQ(){};
  csVPpqJN3D63oi2LfW_bDnQ.TypeName = "Action_4";
  csVPpqJN3D63oi2LfW_bDnQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$csVPpqJN3D63oi2LfW_bDnQ = csVPpqJN3D63oi2LfW_bDnQ.prototype;
  type$csVPpqJN3D63oi2LfW_bDnQ.TgcABqJN3D63oi2LfW_bDnQ = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$TgcABqJN3D63oi2LfW_bDnQ = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'TgcABqJN3D63oi2LfW_bDnQ', type$csVPpqJN3D63oi2LfW_bDnQ);
  type$csVPpqJN3D63oi2LfW_bDnQ.Invoke = function (b, c, d, e)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c, d, e);
    }
  };

  // delegate: (arg0, arg1, arg2) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Action`3
  function DACJ04yOgDytaxFtvtvirA(){};
  DACJ04yOgDytaxFtvtvirA.TypeName = "Action_3";
  DACJ04yOgDytaxFtvtvirA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$DACJ04yOgDytaxFtvtvirA = DACJ04yOgDytaxFtvtvirA.prototype;
  type$DACJ04yOgDytaxFtvtvirA.SgcABoyOgDytaxFtvtvirA = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$SgcABoyOgDytaxFtvtvirA = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'SgcABoyOgDytaxFtvtvirA', type$DACJ04yOgDytaxFtvtvirA);
  type$DACJ04yOgDytaxFtvtvirA.Invoke = function (b, c, d)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c, d);
    }
  };

  // delegate: (arg0, arg1) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Action`2
  function _8cpnxgrHJTi_bnqNd49nRag(){};
  _8cpnxgrHJTi_bnqNd49nRag.TypeName = "Action_2";
  _8cpnxgrHJTi_bnqNd49nRag.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_8cpnxgrHJTi_bnqNd49nRag = _8cpnxgrHJTi_bnqNd49nRag.prototype;
  type$_8cpnxgrHJTi_bnqNd49nRag.RgcABgrHJTi_bnqNd49nRag = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$RgcABgrHJTi_bnqNd49nRag = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'RgcABgrHJTi_bnqNd49nRag', type$_8cpnxgrHJTi_bnqNd49nRag);
  type$_8cpnxgrHJTi_bnqNd49nRag.Invoke = function (b, c)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c);
    }
  };

  // delegate: () => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Action
  function Vm3R1GsdnzuyVw4sufJzAw(){};
  Vm3R1GsdnzuyVw4sufJzAw.TypeName = "Action";
  Vm3R1GsdnzuyVw4sufJzAw.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Vm3R1GsdnzuyVw4sufJzAw = Vm3R1GsdnzuyVw4sufJzAw.prototype;
  type$Vm3R1GsdnzuyVw4sufJzAw.QgcABmsdnzuyVw4sufJzAw = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$QgcABmsdnzuyVw4sufJzAw = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'QgcABmsdnzuyVw4sufJzAw', type$Vm3R1GsdnzuyVw4sufJzAw);
  type$Vm3R1GsdnzuyVw4sufJzAw.Invoke = function ()
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method]();
    }
  };

  // delegate: (t) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Action`1
  function aT4QTT6AjDWT6PYg1Srvkg(){};
  aT4QTT6AjDWT6PYg1Srvkg.TypeName = "Action_1";
  aT4QTT6AjDWT6PYg1Srvkg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$aT4QTT6AjDWT6PYg1Srvkg = aT4QTT6AjDWT6PYg1Srvkg.prototype;
  type$aT4QTT6AjDWT6PYg1Srvkg.PgcABj6AjDWT6PYg1Srvkg = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$PgcABj6AjDWT6PYg1Srvkg = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'PgcABj6AjDWT6PYg1Srvkg', type$aT4QTT6AjDWT6PYg1Srvkg);
  type$aT4QTT6AjDWT6PYg1Srvkg.Invoke = function (b)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b);
    }
  };

  // delegate: (e) => Boolean
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Predicate`1
  function ttHmSFn3ATCcyO9vA4i22w(){};
  ttHmSFn3ATCcyO9vA4i22w.TypeName = "Predicate_1";
  ttHmSFn3ATCcyO9vA4i22w.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$ttHmSFn3ATCcyO9vA4i22w = ttHmSFn3ATCcyO9vA4i22w.prototype;
  type$ttHmSFn3ATCcyO9vA4i22w.OgcABln3ATCcyO9vA4i22w = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$OgcABln3ATCcyO9vA4i22w = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'OgcABln3ATCcyO9vA4i22w', type$ttHmSFn3ATCcyO9vA4i22w);
  type$ttHmSFn3ATCcyO9vA4i22w.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      _ = f.Target[f.Method](b);
    }
    return _;
  };

  // delegate: (sender, args) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__EventHandler
  function KfOpI2qDZDSXafWSr6SCUQ(){};
  KfOpI2qDZDSXafWSr6SCUQ.TypeName = "EventHandler";
  KfOpI2qDZDSXafWSr6SCUQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$KfOpI2qDZDSXafWSr6SCUQ = KfOpI2qDZDSXafWSr6SCUQ.prototype;
  type$KfOpI2qDZDSXafWSr6SCUQ.CAYABmqDZDSXafWSr6SCUQ = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$CAYABmqDZDSXafWSr6SCUQ = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'CAYABmqDZDSXafWSr6SCUQ', type$KfOpI2qDZDSXafWSr6SCUQ);
  type$KfOpI2qDZDSXafWSr6SCUQ.Invoke = function (b, c)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c);
    }
  };

  // delegate: (x, y) => Int32
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Comparison`1
  function aE_aho94IYz6JkiGcp_buUsA(){};
  aE_aho94IYz6JkiGcp_buUsA.TypeName = "Comparison_1";
  aE_aho94IYz6JkiGcp_buUsA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$aE_aho94IYz6JkiGcp_buUsA = aE_aho94IYz6JkiGcp_buUsA.prototype;
  type$aE_aho94IYz6JkiGcp_buUsA.LQUABt4IYz6JkiGcp_buUsA = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$LQUABt4IYz6JkiGcp_buUsA = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'LQUABt4IYz6JkiGcp_buUsA', type$aE_aho94IYz6JkiGcp_buUsA);
  type$aE_aho94IYz6JkiGcp_buUsA.Invoke = function (b, c)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      _ = f.Target[f.Method](b, c);
    }
    return _;
  };

  // delegate: (sender, e) => Void
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__ListChangedEventHandler
  function k9IfQQOzITq7sxJOYC2t7g(){};
  k9IfQQOzITq7sxJOYC2t7g.TypeName = "ListChangedEventHandler";
  k9IfQQOzITq7sxJOYC2t7g.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$k9IfQQOzITq7sxJOYC2t7g = k9IfQQOzITq7sxJOYC2t7g.prototype;
  type$k9IfQQOzITq7sxJOYC2t7g.gAQABgOzITq7sxJOYC2t7g = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$gAQABgOzITq7sxJOYC2t7g = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'gAQABgOzITq7sxJOYC2t7g', type$k9IfQQOzITq7sxJOYC2t7g);
  type$k9IfQQOzITq7sxJOYC2t7g.Invoke = function (b, c)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c);
    }
  };

  // delegate: (a, b) => T
  // ScriptCoreLib.Shared.InternalFunc`3
  function uY08JbCHYj_a5y7vTBuVR8Q(){};
  uY08JbCHYj_a5y7vTBuVR8Q.TypeName = "InternalFunc_3";
  uY08JbCHYj_a5y7vTBuVR8Q.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$uY08JbCHYj_a5y7vTBuVR8Q = uY08JbCHYj_a5y7vTBuVR8Q.prototype;
  type$uY08JbCHYj_a5y7vTBuVR8Q.jwMABrCHYj_a5y7vTBuVR8Q = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$jwMABrCHYj_a5y7vTBuVR8Q = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'jwMABrCHYj_a5y7vTBuVR8Q', type$uY08JbCHYj_a5y7vTBuVR8Q);
  type$uY08JbCHYj_a5y7vTBuVR8Q.Invoke = function (b, c)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      _ = f.Target[f.Method](b, c);
    }
    return _;
  };

  // delegate: (a) => T
  // ScriptCoreLib.Shared.InternalFunc`2
  function _7jo0mRmmKDKvJeSkk629VQ(){};
  _7jo0mRmmKDKvJeSkk629VQ.TypeName = "InternalFunc_2";
  _7jo0mRmmKDKvJeSkk629VQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$_7jo0mRmmKDKvJeSkk629VQ = _7jo0mRmmKDKvJeSkk629VQ.prototype;
  type$_7jo0mRmmKDKvJeSkk629VQ.iwMABhmmKDKvJeSkk629VQ = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$iwMABhmmKDKvJeSkk629VQ = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'iwMABhmmKDKvJeSkk629VQ', type$_7jo0mRmmKDKvJeSkk629VQ);
  type$_7jo0mRmmKDKvJeSkk629VQ.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      _ = f.Target[f.Method](b);
    }
    return _;
  };

  // delegate: (e) => R
  // ScriptCoreLib.Shared.FuncParams`2
  function JB9mC6S80TCV9LF_aI7AnXQ(){};
  JB9mC6S80TCV9LF_aI7AnXQ.TypeName = "FuncParams_2";
  JB9mC6S80TCV9LF_aI7AnXQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$JB9mC6S80TCV9LF_aI7AnXQ = JB9mC6S80TCV9LF_aI7AnXQ.prototype;
  type$JB9mC6S80TCV9LF_aI7AnXQ.hwMABqS80TCV9LF_aI7AnXQ = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$hwMABqS80TCV9LF_aI7AnXQ = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'hwMABqS80TCV9LF_aI7AnXQ', type$JB9mC6S80TCV9LF_aI7AnXQ);
  type$JB9mC6S80TCV9LF_aI7AnXQ.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      _ = f.Target[f.Method](b);
    }
    return _;
  };

  // delegate: (e) => Void
  // ScriptCoreLib.Shared.ActionParams`1
  function Qv1ndsPtrDSHFAes8yEb_aA(){};
  Qv1ndsPtrDSHFAes8yEb_aA.TypeName = "ActionParams_1";
  Qv1ndsPtrDSHFAes8yEb_aA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$Qv1ndsPtrDSHFAes8yEb_aA = Qv1ndsPtrDSHFAes8yEb_aA.prototype;
  type$Qv1ndsPtrDSHFAes8yEb_aA.gwMABsPtrDSHFAes8yEb_aA = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$gwMABsPtrDSHFAes8yEb_aA = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'gwMABsPtrDSHFAes8yEb_aA', type$Qv1ndsPtrDSHFAes8yEb_aA);
  type$Qv1ndsPtrDSHFAes8yEb_aA.Invoke = function (b)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b);
    }
  };

  // delegate: () => Void
  // ScriptCoreLib.Shared.InternalAction
  function gfbFNv596j_aor3Vx6iAI2g(){};
  gfbFNv596j_aor3Vx6iAI2g.TypeName = "InternalAction";
  gfbFNv596j_aor3Vx6iAI2g.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$gfbFNv596j_aor3Vx6iAI2g = gfbFNv596j_aor3Vx6iAI2g.prototype;
  type$gfbFNv596j_aor3Vx6iAI2g.fwMABv596j_aor3Vx6iAI2g = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$fwMABv596j_aor3Vx6iAI2g = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'fwMABv596j_aor3Vx6iAI2g', type$gfbFNv596j_aor3Vx6iAI2g);
  type$gfbFNv596j_aor3Vx6iAI2g.Invoke = function ()
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method]();
    }
  };

  // delegate: () => Void
  // ScriptCoreLib.Shared.EventHandler
  function BJwjmju_bQzuieaLNynM0gA(){};
  BJwjmju_bQzuieaLNynM0gA.TypeName = "EventHandler";
  BJwjmju_bQzuieaLNynM0gA.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$BJwjmju_bQzuieaLNynM0gA = BJwjmju_bQzuieaLNynM0gA.prototype;
  type$BJwjmju_bQzuieaLNynM0gA.ewMABju_bQzuieaLNynM0gA = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$ewMABju_bQzuieaLNynM0gA = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'ewMABju_bQzuieaLNynM0gA', type$BJwjmju_bQzuieaLNynM0gA);
  type$BJwjmju_bQzuieaLNynM0gA.Invoke = function ()
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method]();
    }
  };

  // delegate: (e) => Void
  // ScriptCoreLib.Shared.EventHandler`1
  function __avguVaGrgDi0RzjV63Di8A(){};
  __avguVaGrgDi0RzjV63Di8A.TypeName = "EventHandler_1";
  __avguVaGrgDi0RzjV63Di8A.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$__avguVaGrgDi0RzjV63Di8A = __avguVaGrgDi0RzjV63Di8A.prototype;
  type$__avguVaGrgDi0RzjV63Di8A.dwMABqGrgDi0RzjV63Di8A = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$dwMABqGrgDi0RzjV63Di8A = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'dwMABqGrgDi0RzjV63Di8A', type$__avguVaGrgDi0RzjV63Di8A);
  type$__avguVaGrgDi0RzjV63Di8A.Invoke = function (b)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b);
    }
  };

  // delegate: (e, p) => Void
  // ScriptCoreLib.Shared.EventHandler`2
  function yYes_byML1zCpgoIc6G5ceg(){};
  yYes_byML1zCpgoIc6G5ceg.TypeName = "EventHandler_2";
  yYes_byML1zCpgoIc6G5ceg.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$yYes_byML1zCpgoIc6G5ceg = yYes_byML1zCpgoIc6G5ceg.prototype;
  type$yYes_byML1zCpgoIc6G5ceg.cwMABiML1zCpgoIc6G5ceg = type$SQC1ayS9LTavbmpD3Lqznw.uAcABiS9LTavbmpD3Lqznw;
  var ctor$cwMABiML1zCpgoIc6G5ceg = $ctor$(basector$SQC1ayS9LTavbmpD3Lqznw, 'cwMABiML1zCpgoIc6G5ceg', type$yYes_byML1zCpgoIc6G5ceg);
  type$yYes_byML1zCpgoIc6G5ceg.Invoke = function (b, c)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      f.Target[f.Method](b, c);
    }
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1
  function vkaxof6AeTyLWSxVfGsrPQ(){};
  vkaxof6AeTyLWSxVfGsrPQ.TypeName = "BindingList_1";
  vkaxof6AeTyLWSxVfGsrPQ.Assembly = gY9CmVzyG0GIRbq1ldkO9A;
  var type$vkaxof6AeTyLWSxVfGsrPQ = vkaxof6AeTyLWSxVfGsrPQ.prototype;
  type$vkaxof6AeTyLWSxVfGsrPQ = vkaxof6AeTyLWSxVfGsrPQ.prototype =   {
    constructor: vkaxof6AeTyLWSxVfGsrPQ,
    ListChanged: null,
    _RaiseListChangedEvents_k__BackingField: false
  }
;
  var basector$vkaxof6AeTyLWSxVfGsrPQ = $ctor$(basector$KCVs5nuf6DS_agqrBuEfFdw, null, type$vkaxof6AeTyLWSxVfGsrPQ);
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1..ctor
  type$vkaxof6AeTyLWSxVfGsrPQ.uwcABv6AeTyLWSxVfGsrPQ = function ()
  {
    var a = this;

    a.ewAABnuf6DS_agqrBuEfFdw();
    a.vgcABv6AeTyLWSxVfGsrPQ(1);
  };
  var ctor$uwcABv6AeTyLWSxVfGsrPQ = vkaxof6AeTyLWSxVfGsrPQ.ctor = $ctor$(basector$KCVs5nuf6DS_agqrBuEfFdw, 'uwcABv6AeTyLWSxVfGsrPQ', type$vkaxof6AeTyLWSxVfGsrPQ);

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.FireListChanged
  type$vkaxof6AeTyLWSxVfGsrPQ.vAcABv6AeTyLWSxVfGsrPQ = function (b, c)
  {
    var a = this, d;

    d = !a.vQcABv6AeTyLWSxVfGsrPQ();

    if (!d)
    {
      a.vwcABv6AeTyLWSxVfGsrPQ(new ctor$ZwMABpa6ijqX3_bj1t7LVxA(b, c));
    }

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.get_RaiseListChangedEvents
  type$vkaxof6AeTyLWSxVfGsrPQ.vQcABv6AeTyLWSxVfGsrPQ = function ()
  {
    return this._RaiseListChangedEvents_k__BackingField;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.set_RaiseListChangedEvents
  type$vkaxof6AeTyLWSxVfGsrPQ.vgcABv6AeTyLWSxVfGsrPQ = function (b)
  {
    var a = this;

    a._RaiseListChangedEvents_k__BackingField = b;
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.OnListChanged
  type$vkaxof6AeTyLWSxVfGsrPQ.vwcABv6AeTyLWSxVfGsrPQ = function (b)
  {
    var a = this, c;

    c = (a.ListChanged == null);

    if (!c)
    {
      a.ListChanged.Invoke(a, b);
    }

  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.add_ListChanged
  type$vkaxof6AeTyLWSxVfGsrPQ.wAcABv6AeTyLWSxVfGsrPQ = function (b)
  {
    var a = this;

    a.ListChanged = iwYABnzY4jaVovIDSMIxgQ(a.ListChanged, b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.remove_ListChanged
  type$vkaxof6AeTyLWSxVfGsrPQ.wQcABv6AeTyLWSxVfGsrPQ = function (b)
  {
    var a = this;

    a.ListChanged = jQYABnzY4jaVovIDSMIxgQ(a.ListChanged, b);
  };

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.InsertItem
  type$vkaxof6AeTyLWSxVfGsrPQ.wgcABv6AeTyLWSxVfGsrPQ = function (b, c)
  {
    var a = this;

    a.fAAABnuf6DS_agqrBuEfFdw(b, c);
    a.vAcABv6AeTyLWSxVfGsrPQ(1, b);
  };
    vkaxof6AeTyLWSxVfGsrPQ.prototype.fQAABnuf6DS_agqrBuEfFdw = vkaxof6AeTyLWSxVfGsrPQ.prototype.wgcABv6AeTyLWSxVfGsrPQ;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.SetItem
  type$vkaxof6AeTyLWSxVfGsrPQ.wwcABv6AeTyLWSxVfGsrPQ = function (b, c)
  {
    var a = this;

    a.fgAABnuf6DS_agqrBuEfFdw(b, c);
    a.vAcABv6AeTyLWSxVfGsrPQ(4, b);
  };
    vkaxof6AeTyLWSxVfGsrPQ.prototype.fwAABnuf6DS_agqrBuEfFdw = vkaxof6AeTyLWSxVfGsrPQ.prototype.wwcABv6AeTyLWSxVfGsrPQ;

  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1.RemoveItem
  type$vkaxof6AeTyLWSxVfGsrPQ.xAcABv6AeTyLWSxVfGsrPQ = function (b)
  {
    var a = this;

    a.hAAABnuf6DS_agqrBuEfFdw(b);
    a.vAcABv6AeTyLWSxVfGsrPQ(2, b);
  };
    vkaxof6AeTyLWSxVfGsrPQ.prototype.hQAABnuf6DS_agqrBuEfFdw = vkaxof6AeTyLWSxVfGsrPQ.prototype.xAcABv6AeTyLWSxVfGsrPQ;

  // 
  // ScriptCoreLib.JavaScript.BCLImplementation.System.ComponentModel.__BindingList`1
  (function (i)  {
    i.vxkABiRqbTmIbxb0k2jSqw = i.iQAABnuf6DS_agqrBuEfFdw;
    i.wBkABiRqbTmIbxb0k2jSqw = i.igAABnuf6DS_agqrBuEfFdw;
    i.wRkABiRqbTmIbxb0k2jSqw = i.hgAABnuf6DS_agqrBuEfFdw;
    i.whkABiRqbTmIbxb0k2jSqw = i.hwAABnuf6DS_agqrBuEfFdw;
    i.wxkABiRqbTmIbxb0k2jSqw = i.iAAABnuf6DS_agqrBuEfFdw;
    // 
    i.DBkABnTAkDm_aGe9ZbsQrAQ = i.jQAABnuf6DS_agqrBuEfFdw;
    i.DRkABnTAkDm_aGe9ZbsQrAQ = i.jgAABnuf6DS_agqrBuEfFdw;
    i.DhkABnTAkDm_aGe9ZbsQrAQ = i.gAAABnuf6DS_agqrBuEfFdw;
    i.DxkABnTAkDm_aGe9ZbsQrAQ = i.gQAABnuf6DS_agqrBuEfFdw;
    i.EBkABnTAkDm_aGe9ZbsQrAQ = i.iwAABnuf6DS_agqrBuEfFdw;
    i.ERkABnTAkDm_aGe9ZbsQrAQ = i.jAAABnuf6DS_agqrBuEfFdw;
    i.EhkABnTAkDm_aGe9ZbsQrAQ = i.gwAABnuf6DS_agqrBuEfFdw;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.jwAABnuf6DS_agqrBuEfFdw;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.kAAABnuf6DS_agqrBuEfFdw;
  }
  )(type$vkaxof6AeTyLWSxVfGsrPQ);
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableRow.InternalConstructor
  function xwcABoNqKzyP9U_b3lcb_b_aw()
  {
    var b;

    b = document.createElement('tr');
    return b;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableRow.InternalConstructor
  function yAcABoNqKzyP9U_b3lcb_b_aw(b)
  {
    var c, d;

    c = xwcABoNqKzyP9U_b3lcb_b_aw();
    IQAABtvq0jCU0R1GsbOa4g(c, b);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableRow.AddColumn
  function yQcABoNqKzyP9U_b3lcb_b_aw(a)
  {
    var b, c;

    b = LwYABtJBHjyxY_azsMvEMIQ();
    a.appendChild(b);
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableRow.AddColumn
  function ygcABoNqKzyP9U_b3lcb_b_aw(a, b)
  {
    var c, d;

    c = LwYABtJBHjyxY_azsMvEMIQ();
    c.innerHTML = b;
    a.appendChild(c);
    d = c;
    return d;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLTableRow.AddColumn
  function ywcABoNqKzyP9U_b3lcb_b_aw(a, b)
  {
    var c, d;

    c = MAYABtJBHjyxY_azsMvEMIQ(b);
    a.appendChild(c);
    d = c;
    return d;
  };

  // Closure type
  function CjjbANoWWTiRz3jh_ai65Pg() {}  type$CjjbANoWWTiRz3jh_ai65Pg = CjjbANoWWTiRz3jh_ai65Pg.prototype =   {
    constructor: CjjbANoWWTiRz3jh_ai65Pg,
    key: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.WorkPool+<>c__DisplayClass1.<Remove>b__0
  type$CjjbANoWWTiRz3jh_ai65Pg._Remove_b__0 = function (b)
  {
    var a = this, c;

    c = CQUABpT92DaiMvTduyyLZQ(b.Key, a.key);
    return c;
  };

  // Closure type
  function GheAD_bL_bnDmFIZYC9hcUyQ() {}  type$GheAD_bL_bnDmFIZYC9hcUyQ = GheAD_bL_bnDmFIZYC9hcUyQ.prototype =   {
    constructor: GheAD_bL_bnDmFIZYC9hcUyQ,
    flag: false,
    _capture: null,
    self: null
  }
;
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement+<>c__DisplayClass7.<InternalCaptureMouse>b__3
  type$GheAD_bL_bnDmFIZYC9hcUyQ._InternalCaptureMouse_b__3 = function ()
  {
    var a = this;

    a.self.releaseCapture();
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement+<>c__DisplayClass7.<InternalCaptureMouse>b__4
  type$GheAD_bL_bnDmFIZYC9hcUyQ._InternalCaptureMouse_b__4 = function (b)
  {
    var a = this, c, d;

    d = !a.flag;

    if (!d)
    {
      return;
    }

    a.flag = 1;
    qAUABuSquTGLE3NPwKQpLw(b);
    c = document.createEvent('MouseEvents');
    c.initMouseEvent(b.type, b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, new Number(b.clientX), new Number(b.clientY), new Boolean(b.ctrlKey), new Boolean(b.altKey), new Boolean(b.shiftKey), b.metaKey, new Number(b.button), b.relatedTarget);
    a.self.dispatchEvent(c);
    a.flag = 0;
  };

  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLElement+<>c__DisplayClass7.<InternalCaptureMouse>b__5
  type$GheAD_bL_bnDmFIZYC9hcUyQ._InternalCaptureMouse_b__5 = function ()
  {
    var a = this, b, c, d, e;

    c = MQAABAAjajq2ygojxk6uUQ;

    for (d = 0; (d < c.length); d++)
    {
      b = c[d];
      FQAABuRCAjuJ6J_b8mhba5w(window, b, a._capture, 1);
    }

  };

  // Closure type
  function IPZmCyd8TDaYZ4lwXmTuUQ() {}  type$IPZmCyd8TDaYZ4lwXmTuUQ = IPZmCyd8TDaYZ4lwXmTuUQ.prototype =   {
    constructor: IPZmCyd8TDaYZ4lwXmTuUQ,
    t: null,
    __4__this: null,
    e: null
  }
;
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLImage+<>c__DisplayClass1.<InvokeOnComplete>b__0
  type$IPZmCyd8TDaYZ4lwXmTuUQ._InvokeOnComplete_b__0 = function (b)
  {
    var a = this, c;

    c = !a.__4__this.complete;

    if (!c)
    {
      a.t.kgQABtY33j68H_aZQYc4FRw();
      a.e.Invoke(a.__4__this);
    }

  };

  // Closure type
  function _9lXA0klunz6Fri9CQD43qQ() {}  type$_9lXA0klunz6Fri9CQD43qQ = _9lXA0klunz6Fri9CQD43qQ.prototype =   {
    constructor: _9lXA0klunz6Fri9CQD43qQ,
    value: null
  }
;
  // ScriptCoreLib.JavaScript.DOM.IWindow+<>c__DisplayClass1.<add_onbeforeunload>b__0
  type$_9lXA0klunz6Fri9CQD43qQ._add_onbeforeunload_b__0 = function (b)
  {
    var a = this, c, d;

    c = new ctor$GAQABrqX1zOurkR1rDSMqQ();
    a.value.Invoke(c);
    b.returnValue = c.Text;
    d = c.Text;
    return d;
  };

  // Closure type
  function pn6cksdPWDCFIhFOKRozHg() {}  type$pn6cksdPWDCFIhFOKRozHg = pn6cksdPWDCFIhFOKRozHg.prototype =   {
    constructor: pn6cksdPWDCFIhFOKRozHg,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLButton+<>c__DisplayClass1.<Create>b__0
  type$pn6cksdPWDCFIhFOKRozHg._Create_b__0 = function (b)
  {
    var a = this;

    sQIABgLCITuEwr97s3dlTA(a.h);
  };

  // Closure type
  function _59VhtNcPhzSW82XMVeUYjA() {}  type$_59VhtNcPhzSW82XMVeUYjA = _59VhtNcPhzSW82XMVeUYjA.prototype =   {
    constructor: _59VhtNcPhzSW82XMVeUYjA,
    __4__this: null,
    interval: 0
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Timer+<>c__DisplayClass2.<.ctor>b__0
  type$_59VhtNcPhzSW82XMVeUYjA.__ctor_b__0 = function ()
  {
    var a = this, b;

    b = !(a.interval > 0);

    if (!b)
    {
      a.__4__this.jgQABtY33j68H_aZQYc4FRw(a.interval);
      return;
    }

    a.__4__this.igQABtY33j68H_aZQYc4FRw();
  };

  // Closure type
  function xGA_bFvJBqjGZxpFG2C7E_ag() {}  type$xGA_bFvJBqjGZxpFG2C7E_ag = xGA_bFvJBqjGZxpFG2C7E_ag.prototype =   {
    constructor: xGA_bFvJBqjGZxpFG2C7E_ag,
    dx: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Timer+<>c__DisplayClass5.<Do>b__4
  type$xGA_bFvJBqjGZxpFG2C7E_ag._Do_b__4 = function (b)
  {
    var a = this, c, d;

    d = !(a.dx.length > 0);

    if (!d)
    {
      c = a.dx.shift();
      d = (c == null);

      if (!d)
      {
        c.Invoke();
      }

      return;
    }

    b.kgQABtY33j68H_aZQYc4FRw();
  };

  // Closure type
  function AfjCL_bP6Dj2lUxNJj5Barw() {}  type$AfjCL_bP6Dj2lUxNJj5Barw = AfjCL_bP6Dj2lUxNJj5Barw.prototype =   {
    constructor: AfjCL_bP6Dj2lUxNJj5Barw,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Timer+<>c__DisplayClass8.<DoAsync>b__7
  type$AfjCL_bP6Dj2lUxNJj5Barw._DoAsync_b__7 = function (b)
  {
    var a = this;

    a.h.Invoke();
  };

  // Closure type
  function n6MKG7dWkTqqX5fKL6Kbsg() {}  type$n6MKG7dWkTqqX5fKL6Kbsg = n6MKG7dWkTqqX5fKL6Kbsg.prototype =   {
    constructor: n6MKG7dWkTqqX5fKL6Kbsg,
    timer: null,
    p: null,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Timer+<>c__DisplayClassb.<Trigger>b__a
  type$n6MKG7dWkTqqX5fKL6Kbsg._Trigger_b__a = function (b)
  {
    var a = this, c;

    c = !lAMABgklzj_aswDwOFNiiFQ(a.p);

    if (!c)
    {
      a.timer.kgQABtY33j68H_aZQYc4FRw();
      sQIABgLCITuEwr97s3dlTA(a.h);
    }

  };

  // Closure type
  function Apl8rIablDyVYt7RSnEeMQ() {}  type$Apl8rIablDyVYt7RSnEeMQ = Apl8rIablDyVYt7RSnEeMQ.prototype =   {
    constructor: Apl8rIablDyVYt7RSnEeMQ,
    c: null
  }
;
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Array+<>c__DisplayClass1`1.<Sort>b__0
  type$Apl8rIablDyVYt7RSnEeMQ._Sort_b__0 = function (b, c)
  {
    return this.c.Invoke(b, c);
  };

  // Closure type
  function eyHAep5sizi6Ym_bdD5XgoA() {}  type$eyHAep5sizi6Ym_bdD5XgoA = eyHAep5sizi6Ym_bdD5XgoA.prototype =   {
    constructor: eyHAep5sizi6Ym_bdD5XgoA,
    className: null
  }
;
  // ScriptCoreLib.JavaScript.DOM.HTML.IHTMLDocument+<>c__DisplayClass1.<getElementsByClassName>b__0
  type$eyHAep5sizi6Ym_bdD5XgoA._getElementsByClassName_b__0 = function (b)
  {
    var a = this, c;

    c = 0;
    try
    {
      c = CQUABpT92DaiMvTduyyLZQ(b.Item.className, a.className);
    }
    catch (__exc)
    {
      c = 0;
    }
    b.Include = c;
  };

  // Closure type
  function m25gJ7O5Rzyh2zFWEKQv2A() {}  type$m25gJ7O5Rzyh2zFWEKQv2A = m25gJ7O5Rzyh2zFWEKQv2A.prototype =   {
    constructor: m25gJ7O5Rzyh2zFWEKQv2A,
    alias: null
  }
;
  // ScriptCoreLib.JavaScript.Extensions.Extensions+<>c__DisplayClass1.<Spawn>b__0
  type$m25gJ7O5Rzyh2zFWEKQv2A._Spawn_b__0 = function (b)
  {
    var a = this;

    agIABnSooDmIzsqJ4hEpXA(a.alias);
  };

  // Closure type
  function V1SVBUrcyDmSC2u4exS67A() {}  type$V1SVBUrcyDmSC2u4exS67A = V1SVBUrcyDmSC2u4exS67A.prototype =   {
    constructor: V1SVBUrcyDmSC2u4exS67A,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.Extensions.Extensions+<>c__DisplayClass4.<SpawnTo>b__3
  type$V1SVBUrcyDmSC2u4exS67A._SpawnTo_b__3 = function (b)
  {
    var a = this;

    a.h.Invoke(b);
  };

  // Closure type
  function sOiClpMoCz_axQ8nEFK_aIvQ() {}  type$sOiClpMoCz_axQ8nEFK_aIvQ = sOiClpMoCz_axQ8nEFK_aIvQ.prototype =   {
    constructor: sOiClpMoCz_axQ8nEFK_aIvQ,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.Extensions.Extensions+<>c__DisplayClass7`1.<SpawnTo>b__6
  type$sOiClpMoCz_axQ8nEFK_aIvQ._SpawnTo_b__6 = function (b, c)
  {
    var a = this;

    a.h.Invoke(b);
  };

  // Closure type
  function sgpY1zYeXT2u6JFouF0DAw() {}  type$sgpY1zYeXT2u6JFouF0DAw = sgpY1zYeXT2u6JFouF0DAw.prototype =   {
    constructor: sgpY1zYeXT2u6JFouF0DAw,
    KnownTypes: null,
    h: null
  }
;
  // ScriptCoreLib.JavaScript.Extensions.Extensions+<>c__DisplayClassa`1.<SpawnTo>b__9
  type$sgpY1zYeXT2u6JFouF0DAw._SpawnTo_b__9 = function (b)
  {
    var a = this, c, d, e, f;

    f = !CQUABpT92DaiMvTduyyLZQ(b.nodeName, 'SCRIPT');

    if (!f)
    {
      c = b;
      d = GwAABtvq0jCU0R1GsbOa4g(b);
      f = !CQUABpT92DaiMvTduyyLZQ(c.type, 'text\u002fxml');

      if (!f)
      {
        e = bgMABtsSrjyg1Cv12d3t0g(d);
        a.h.Invoke(kgUABuKCPTKGRKjkr5dWuA(e, a.KnownTypes), b);
      }
      else
      {
        f = !CQUABpT92DaiMvTduyyLZQ(c.type, 'text\u002fjson');

        if (!f)
        {
          a.h.Invoke(_0AAABtd5xTKztToDDBg08A(d), b);
        }

      }

    }

  };

  // Closure type
  function _7_bw16z_bBtTq_aCR_blYqvOBQ() {}  type$_7_bw16z_bBtTq_aCR_blYqvOBQ = _7_bw16z_bBtTq_aCR_blYqvOBQ.prototype =   {
    constructor: _7_bw16z_bBtTq_aCR_blYqvOBQ,
    id: null,
    Spawn: null
  }
;
  // ScriptCoreLib.JavaScript.Native+<>c__DisplayClass4.<Spawn>b__2
  type$_7_bw16z_bBtTq_aCR_blYqvOBQ._Spawn_b__2 = function (b)
  {
    var a = this;

    uwEABh33sTm5Ql7VEPKRUg(VAUABrgwLTe_aEJAkCbCrzw(document, a.id), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '_Spawn_b__3'));
  };

  // ScriptCoreLib.JavaScript.Native+<>c__DisplayClass4.<Spawn>b__3
  type$_7_bw16z_bBtTq_aCR_blYqvOBQ._Spawn_b__3 = function (b)
  {
    var a = this;

    awQABh78uTmU7_bAOPst6lA(_8wQABpT92DaiMvTduyyLZQ('spawn: {', a.id, '}'));
    a.Spawn.Invoke(b);
  };

  // Closure type
  function mZgwfg3okTmLMlaxOiPMuw() {}  type$mZgwfg3okTmLMlaxOiPMuw = mZgwfg3okTmLMlaxOiPMuw.prototype =   {
    constructor: mZgwfg3okTmLMlaxOiPMuw,
    id: null,
    s: null
  }
;
  // ScriptCoreLib.JavaScript.Native+<>c__DisplayClass8.<Spawn>b__6
  type$mZgwfg3okTmLMlaxOiPMuw._Spawn_b__6 = function (b)
  {
    var a = this;

    uwEABh33sTm5Ql7VEPKRUg(VAUABrgwLTe_aEJAkCbCrzw(document, a.id), new ctor$dwMABqGrgDi0RzjV63Di8A(a, '_Spawn_b__7'));
  };

  // ScriptCoreLib.JavaScript.Native+<>c__DisplayClass8.<Spawn>b__7
  type$mZgwfg3okTmLMlaxOiPMuw._Spawn_b__7 = function (b)
  {
    var a = this;

    awQABh78uTmU7_bAOPst6lA(_8wQABpT92DaiMvTduyyLZQ('spawn: {', a.id, '}'));
    a.s.Invoke(b, a.id);
  };

  // Closure type
  function VmDtFjEhkj6H4kGze_aM6nw() {}  type$VmDtFjEhkj6H4kGze_aM6nw = VmDtFjEhkj6H4kGze_aM6nw.prototype =   {
    constructor: VmDtFjEhkj6H4kGze_aM6nw,
    target: null,
    fadetime: 0
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass2.<FadeOut>b__0
  type$VmDtFjEhkj6H4kGze_aM6nw._FadeOut_b__0 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new wF_bnjOCs8zytcJZisISWfQ();
    c.CS___8__locals3 = a;
    c.a = null;
    c.a = new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_FadeOut_b__1'));
    c.a.jAQABtY33j68H_aZQYc4FRw((a.fadetime / 25), 25);
  };

  // Closure type
  function wF_bnjOCs8zytcJZisISWfQ() {}  type$wF_bnjOCs8zytcJZisISWfQ = wF_bnjOCs8zytcJZisISWfQ.prototype =   {
    constructor: wF_bnjOCs8zytcJZisISWfQ,
    CS___8__locals3: null,
    a: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass2+<>c__DisplayClass4.<FadeOut>b__1
  type$wF_bnjOCs8zytcJZisISWfQ._FadeOut_b__1 = function (b)
  {
    var a = this, c;

    qwAABgnDWDenzWX06iPvnw(a.CS___8__locals3.target.style, (1 - (a.a.Counter / a.a.TimeToLive)));
    c = !(a.a.Counter == a.a.TimeToLive);

    if (!c)
    {
      jQUABuKCPTKGRKjkr5dWuA(a.CS___8__locals3.target);
    }

  };

  // Closure type
  function vadSwQv95jK_b_bPytLZxVAA() {}  type$vadSwQv95jK_b_bPytLZxVAA = vadSwQv95jK_b_bPytLZxVAA.prototype =   {
    constructor: vadSwQv95jK_b_bPytLZxVAA,
    target: null,
    fadetime: 0,
    done: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass8.<Fade>b__6
  type$vadSwQv95jK_b_bPytLZxVAA._Fade_b__6 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new SkMuOx_bICDea6H9bKU7v7A();
    c.CS___8__locals9 = a;
    c.a = null;
    c.a = new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_Fade_b__7'));
    c.a.jAQABtY33j68H_aZQYc4FRw((a.fadetime / 25), 25);
  };

  // Closure type
  function SkMuOx_bICDea6H9bKU7v7A() {}  type$SkMuOx_bICDea6H9bKU7v7A = SkMuOx_bICDea6H9bKU7v7A.prototype =   {
    constructor: SkMuOx_bICDea6H9bKU7v7A,
    CS___8__locals9: null,
    a: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass8+<>c__DisplayClassa.<Fade>b__7
  type$SkMuOx_bICDea6H9bKU7v7A._Fade_b__7 = function (b)
  {
    var a = this, c;

    qwAABgnDWDenzWX06iPvnw(a.CS___8__locals9.target.style, (1 - (a.a.Counter / a.a.TimeToLive)));
    c = !(a.a.Counter == a.a.TimeToLive);

    if (!c)
    {
      c = (a.CS___8__locals9.done == null);

      if (!c)
      {
        a.CS___8__locals9.done.Invoke();
      }

    }

  };

  // Closure type
  function Sxa84TepRjWjkjQ8TRryhA() {}  type$Sxa84TepRjWjkjQ8TRryhA = Sxa84TepRjWjkjQ8TRryhA.prototype =   {
    constructor: Sxa84TepRjWjkjQ8TRryhA,
    target: null,
    fadetime: 0,
    cotargets: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClasse.<FadeAndRemove>b__c
  type$Sxa84TepRjWjkjQ8TRryhA._FadeAndRemove_b__c = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new sSWPplEdLTGgLFlhAovzvQ();
    c.CS___8__localsf = a;
    c.a = null;
    c.a = new ctor$hwQABtY33j68H_aZQYc4FRw(new ctor$dwMABqGrgDi0RzjV63Di8A(c, '_FadeAndRemove_b__d'));
    c.a.jAQABtY33j68H_aZQYc4FRw((a.fadetime / 25), 25);
  };

  // Closure type
  function sSWPplEdLTGgLFlhAovzvQ() {}  type$sSWPplEdLTGgLFlhAovzvQ = sSWPplEdLTGgLFlhAovzvQ.prototype =   {
    constructor: sSWPplEdLTGgLFlhAovzvQ,
    CS___8__localsf: null,
    a: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClasse+<>c__DisplayClass10.<FadeAndRemove>b__d
  type$sSWPplEdLTGgLFlhAovzvQ._FadeAndRemove_b__d = function (b)
  {
    var a = this, c, d, e, f;

    qwAABgnDWDenzWX06iPvnw(a.CS___8__localsf.target.style, (1 - (a.a.Counter / a.a.TimeToLive)));
    d = !(a.a.Counter == a.a.TimeToLive);

    if (!d)
    {
      jwUABuKCPTKGRKjkr5dWuA(a.CS___8__localsf.target);
      e = a.CS___8__localsf.cotargets;

      for (f = 0; (f < e.length); f++)
      {
        c = e[f];
        jwUABuKCPTKGRKjkr5dWuA(c);
      }

    }

  };

  // Closure type
  function bOwCfAXfJjOMxxUdTL2E8Q() {}  type$bOwCfAXfJjOMxxUdTL2E8Q = bOwCfAXfJjOMxxUdTL2E8Q.prototype =   {
    constructor: bOwCfAXfJjOMxxUdTL2E8Q,
    e: null
  }
;
  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass16.<FlashAndFadeOut>b__12
  type$bOwCfAXfJjOMxxUdTL2E8Q._FlashAndFadeOut_b__12 = function ()
  {
    var a = this;

    jQUABuKCPTKGRKjkr5dWuA(a.e);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass16.<FlashAndFadeOut>b__13
  type$bOwCfAXfJjOMxxUdTL2E8Q._FlashAndFadeOut_b__13 = function ()
  {
    var a = this;

    iwUABuKCPTKGRKjkr5dWuA(a.e);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass16.<FlashAndFadeOut>b__14
  type$bOwCfAXfJjOMxxUdTL2E8Q._FlashAndFadeOut_b__14 = function ()
  {
    var a = this;

    jQUABuKCPTKGRKjkr5dWuA(a.e);
  };

  // ScriptCoreLib.JavaScript.Runtime.Fader+<>c__DisplayClass16.<FlashAndFadeOut>b__15
  type$bOwCfAXfJjOMxxUdTL2E8Q._FlashAndFadeOut_b__15 = function ()
  {
    var a = this;

    iwUABuKCPTKGRKjkr5dWuA(a.e);
  };

  // Closure type
  function F0pqNcS_baj6B7oqVR19QBg() {}  type$F0pqNcS_baj6B7oqVR19QBg = F0pqNcS_baj6B7oqVR19QBg.prototype =   {
    constructor: F0pqNcS_baj6B7oqVR19QBg,
    __4__this: null,
    point: null
  }
;
  // ScriptCoreLib.JavaScript.Controls.DragHelper+<>c__DisplayClass7.<DragTo>b__6
  type$F0pqNcS_baj6B7oqVR19QBg._DragTo_b__6 = function ()
  {
    var a = this;

    a.__4__this.Position = a.point;
    sQIABgLCITuEwr97s3dlTA(a.__4__this.DragMove);
  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  gY9CmVzyG0GIRbq1ldkO9A.Types = [PtRYyqrEITqyE_a1vEl3Jnw,d6YuYoce8juyvuYFZ_b3B3Q,BWCzNdQrzziMkurQX9FmIw,pVWuSHbYXDqhdVFSIrxEhA,OyB2uGzs_aDCyZwiCU6LT8Q,nlnLQS64YTmR3ZfBT8DZBA,htk8Mgklzj_aswDwOFNiiFQ,m3ML74wegTqJlyQCc2XwcQ,sLm0UyjGoDahhzeuMwWstw,BVJIYTfPjjq4PHK5A3c_auA,DGgonvGADTGzgnargCk3yQ,_8UxK8Ja6ijqX3_bj1t7LVxA,bPpijZJ7HjuHnaRo44rmHw,E_bYRj9mlXD2_bMcNB1Zdfiw,GSwyCzlSSjyYW_bdV9BZBCQ,soDt7aJ45j6g37Cm4Q3HvQ,_5bmQU8LVSDGzpIpi6kIvEg,opwL_bdKQCTqkPkZLKIEBZQ,pmo5MnSooDmIzsqJ4hEpXA,wck7fY2kQTGGuWYmEJ1BJQ,_5_bQe45rmBjKN18EFKOJ2hQ,JCzk97Y3EjOS9TaQCZahOQ,Hh_bdEygrxDyNPB865w5uMg,uD8G7SCtYj_afDA208lh0Jg,_0Szxsd6xITuR7mFWWLTkwQ,qqzCoassczCmdk3CD3yzxA,vLZZVc8G1Tmigc4hFdru7w,c2nroNggdDyKychdSxdB1A,rWFg2tPNmT23yID5mDcKAw,FM6Fly8dXDOohNvZCioIhA,r9E_anmB4_aTOMaLVuXNcMxw,KCVs5nuf6DS_agqrBuEfFdw,oCU3_bDWf_bDqCFnRGNHTfuA,_1lN3JeC1pT24HkIKQVsIlA,HE_bSDEb_aqDOEejn2P_aOPqA,_3URXzU4dNT6JcvJhlSjXvQ,Blz4Uaaxvz2TsHIKgQsagw,HmilxEJB5jyxJFE8zncqBQ,OtG_bJK3UNDySOLyoR9etRw,_7VPfEo9DxTqFY3fWlQmzeQ,rRzgnTE9ID2bvdJDtEkvJw,_16ptGDh8OzGA1bP9KfW5Lw,Ce3CdDvCxTCy2Xi9K2GPMw,il73tQXejjidGuWqgSpxeQ,XDGNwrqX1zOurkR1rDSMqQ,g9Gyp7841jSOaEftcWBQCw,dacDyB78uTmU7_bAOPst6lA,OZKuao_bWbzOg2e3_buG4YsA,egouDNY33j68H_aZQYc4FRw,rFXrVszZwj2ydi0fLFN2tw,fEnIwcKt7jiCshUnPiRXbw,mFL92yU0xzm4hMYeH_bYOAQ,JXMs66OBvjOuSkQZrCdfWA,_3mwuQmIY_az6vz_alg_a0hAHA,LNNcWkIKxTGj2w8n2wJ3UA,cpimMhJE7Da0f5Z3bjgLGw,slVTNpT92DaiMvTduyyLZQ,_3rVcpNBAijqLF5AbaNpxhQ,_0ZORVJM_bbTOfQQpQLCrlcA,Mv75jbKDAjqsR3PJP_ajzDw,rpzLaVGiZDedUPZ_akPoOXA,ERbkK0DMdjGWDBLiEXfPbA,hUX0ev_bhQTaFRZxsU1e6kg,qVhRBwPTBzS7KLCa_bUzFsA,XO_bYHQrN_bD63wvzcp_apZKA,ql6YpKACZzKSGrrnqJ3SYw,_1Mhq_b21_aLDizHet2AsjNlw,_7OD_b96IJ5DO3ImTWB4mcvw,_0mxb55wRMT2PoI2ybfp7dQ,dv0mSYAUST2Y1I8urLVPEA,w0YboTKq2D6RF69rrQqsqg,uKmolmNigz6Q_aeTxhYUeAQ,mF2G23NsjTy5GU2G_aZC6tw,xpujGqZeGjWoftpyUVFR9g,__aBs7WFrO8TqfPnHnEBaIuQ,ny2ixVp1gTixwdv_axCXc_aQ,K4srp3zY4jaVovIDSMIxgQ,uFTaMoWbgjizz5alTdsqog,__aPtwNTx0cjO2_baZaBhxsvg,_3FJhcsDFqTWU1aKDRaVUFw,_0vHxUWj2pj6v9xlugKAN2Q,T5geL3m9oj_aSBG1Ib4oM6A,iLvIh2MRdDSrI1Zv8IAxhg,qhUNiJZhQDOiq3eX08UFDA,_2IB55I2LaDmnwTYyBjqFag,rLlmjkkCZD_amtxRrU4EqQQ,KVEI7BozDzWfwuqxDUPUMg,_26dvBV8faTaLrvJDWs89jQ,K_bXaQlxAujOnZMAjDg_bmBg,SQC1ayS9LTavbmpD3Lqznw,vkaxof6AeTyLWSxVfGsrPQ];
  gY9CmVzyG0GIRbq1ldkO9A.References = [];

  (function()
  {
    vgEABPGADTGzgnargCk3yQ = YQMABvGADTGzgnargCk3yQ(new ctor$YwMABvGADTGzgnargCk3yQ());
  }
  )();

  (function()
  {
    rQEABALCITuEwr97s3dlTA = 'Web.Runtime.FormTemplate';
    rgEABALCITuEwr97s3dlTA = 'json_field';
  }
  )();

  (function()
  {
    oQEABNKQCTqkPkZLKIEBZQ = dQIABtKQCTqkPkZLKIEBZQ(255, 255, 0);
    ogEABNKQCTqkPkZLKIEBZQ = dgIABtKQCTqkPkZLKIEBZQ(128);
    owEABNKQCTqkPkZLKIEBZQ = dgIABtKQCTqkPkZLKIEBZQ(0);
    pAEABNKQCTqkPkZLKIEBZQ = cAIABtKQCTqkPkZLKIEBZQ('transparent');
    pQEABNKQCTqkPkZLKIEBZQ = cAIABtKQCTqkPkZLKIEBZQ('');
    pgEABNKQCTqkPkZLKIEBZQ = dgIABtKQCTqkPkZLKIEBZQ(255);
  }
  )();

  (function()
  {
    TgEABM8G1Tmigc4hFdru7w = new ctor$sQEABs8G1Tmigc4hFdru7w();
  }
  )();

  (function()
  {
    var b;

    MAAABAAjajq2ygojxk6uUQ = 0;
    b = [
      'click',
      'mousedown',
      'mouseup',
      'mousemove',
      'mouseover',
      'mouseout'
    ];
    MQAABAAjajq2ygojxk6uUQ = b;
  }
  )();

  (function()
  {
    IQIABI_bWbzOg2e3_buG4YsA = null;
    IwIABI_bWbzOg2e3_buG4YsA = 0;
  }
  )();

  (function()
  {
    var b;

    b = [];
    b[1] = 31;
    b[2] = 59;
    b[3] = 90;
    b[4] = 120;
    b[5] = 151;
    b[6] = 181;
    b[7] = 212;
    b[8] = 243;
    b[9] = 273;
    b[10] = 304;
    b[11] = 334;
    b[12] = 365;
    WwIABFGiZDedUPZ_akPoOXA = KgUABlGiZDedUPZ_akPoOXA(b);
    WwIABFGiZDedUPZ_akPoOXA[0] = 0;
    b = [];
    b[1] = 31;
    b[2] = 60;
    b[3] = 91;
    b[4] = 121;
    b[5] = 152;
    b[6] = 182;
    b[7] = 213;
    b[8] = 244;
    b[9] = 274;
    b[10] = 305;
    b[11] = 335;
    b[12] = 366;
    WgIABFGiZDedUPZ_akPoOXA = KgUABlGiZDedUPZ_akPoOXA(b);
    WgIABFGiZDedUPZ_akPoOXA[0] = 0;
  }
  )();

  (function()
  {
    XAIABDNS0TGvUudj270IOg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\u002f=';
  }
  )();

  (function()
  {
  }
  )();

