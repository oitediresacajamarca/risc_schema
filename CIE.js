cube(`CIE`, {
  sql: `SELECT * FROM dbo."CIE"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    codigoItem: {
      sql: `${CUBE}."Codigo_Item"`,
      type: `string`
    },
    
    descripcionItem: {
      sql: `${CUBE}."Descripcion_Item"`,
      type: `string`
    },
    
    fgTipo: {
      sql: `${CUBE}."Fg_Tipo"`,
      type: `string`
    },
    
    descripcionTipoItem: {
      sql: `${CUBE}."Descripcion_Tipo_Item"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
