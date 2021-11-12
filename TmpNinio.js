cube(`TmpNinio`, {
  sql: `SELECT * FROM dbo.tmp_ninio`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [unidadEjecutora]
    },
	  var1:
	  {type:`sum`,
		  sql:`var1`	  
	  }
  },
  
  dimensions: {
    cod2000: {
      sql: `cod_2000`,
      type: `string`,
      title: `Cod 2000`
    },
    
    categoria: {
      sql: `categoria`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    provincia: {
      sql: `provincia`,
      type: `string`
    },
    
    distrito: {
      sql: `distrito`,
      type: `string`
    },
    
    unidadEjecutora: {
      sql: `unidad_ejecutora`,
      type: `string`
    },
    
    disa: {
      sql: `disa`,
      type: `string`
    },
    
    red: {
      sql: `red`,
      type: `string`
    },
    
    microred: {
      sql: `microred`,
      type: `string`
    },
    
    clas: {
      sql: `clas`,
      type: `string`
    },
    
    establecimiento: {
      sql: `establecimiento`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
