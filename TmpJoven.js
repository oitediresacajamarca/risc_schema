cube(`TmpJoven`, {
  sql: `SELECT * FROM dbo.tmp_joven`,
  
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
    }
  },
  
  dimensions: {
    mesNombre: {
      sql: `mes_nombre`,
      type: `string`
    },
    
    bimestre: {
      sql: `bimestre`,
      type: `string`
    },
    
    trimestre: {
      sql: `trimestre`,
      type: `string`
    },
    
    semestre: {
      sql: `semestre`,
      type: `string`
    },
    
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
    },
    
    puntoDigitacionHis: {
      sql: `punto_digitacion_his`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
