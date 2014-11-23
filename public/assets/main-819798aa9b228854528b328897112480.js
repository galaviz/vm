function createPropuesta(e){productionGrande=e*safetyFactorMin,productionMediano=Math.max(e-basicConsumption,0)*safetyFactorExcess,productionPequeno=Math.max(e-consumoMaximo,0)*safetyFactorExcess,tamanoGrande=12*productionGrande*systemOversizeFactor/avgConsumptionInArea,tamanoMediano=12*productionMediano*systemOversizeFactor/avgConsumptionInArea,tamanoPequeno=12*productionPequeno*systemOversizeFactor/avgConsumptionInArea,consumptionPequeno=e-productionPequeno,consumptionMediano=e-productionMediano,consumptionGrande=e-productionGrande,costoActual=precios[4]*e,costoActualAnual=12*costoActual,costoPequeno=0;for(var o=0;3>o;o++)costoPequeno+=precios[o]*consumos[o];costoPequeno+=maintenanceAnualCost/12,costoPequeno+=Math.min(400,Math.max(consumptionPequeno-basicConsumption,0))*precios[3],costoPequeno+=Math.max(consumptionPequeno-consumoMaximo,0)*precios[4],costoPequenoAnual=12*costoPequeno,avgSubsidizedCost=(precios[0]+precios[1]+precios[2])/3,costoMedianoAnual=12*consumptionMediano*avgSubsidizedCost+maintenanceAnualCost,costoGrandeAnual=12*consumptionGrande*avgSubsidizedCost+maintenanceAnualCost,ahorroPequeno=costoActualAnual-costoPequenoAnual,ahorroMediano=costoActualAnual-costoMedianoAnual,ahorroGrande=costoActualAnual-costoGrandeAnual,ahorroEnergeticoPequeno=100*(e-consumptionPequeno)/e,ahorroEnergeticoMediano=100*(e-consumptionMediano)/e,ahorroEnergeticoGrande=100*(e-consumptionGrande)/e,inversionPequeno=1e3*tamanoPequeno*systemCostPequeno,inversionMediano=1e3*tamanoMediano*systemCostMediano,inversionGrande=1e3*tamanoGrande*systemCostGrande,inversionTotalPequeno=inversionPequeno*currencyExchangeRate*taxRate,inversionTotalMediano=inversionMediano*currencyExchangeRate*taxRate,inversionTotalGrande=inversionGrande*currencyExchangeRate*taxRate,paybackPequeno=inversionTotalPequeno/(costoActualAnual-costoPequenoAnual),paybackMediano=inversionTotalMediano/(costoActualAnual-costoMedianoAnual),paybackGrande=inversionTotalGrande/(costoActualAnual-costoGrandeAnual),irrPequeno=computeIRR(inversionTotalPequeno,costoActualAnual-costoPequenoAnual,cfeAnualIncrement,NUM_YEARS),irrMediano=computeIRR(inversionTotalMediano,costoActualAnual-costoMedianoAnual,cfeAnualIncrement,NUM_YEARS),irrGrande=computeIRR(inversionTotalGrande,costoActualAnual-costoGrandeAnual,cfeAnualIncrement,NUM_YEARS),createPropuestaChart(irrPequeno,irrMediano,irrGrande,tamanoPequeno,tamanoMediano,tamanoGrande),$("#vm-pequeno .tamano-sistema-solar").text(tamanoPequeno.toFixed(1)+" kWp"),$("#vm-mediano .tamano-sistema-solar").text(tamanoMediano.toFixed(1)+" kWp"),$("#vm-grande .tamano-sistema-solar").text(tamanoGrande.toFixed(1)+" kWp"),$("#vm-pequeno .produccion-anual").text(numberWithCommas((12*productionPequeno).toFixed(1))+" kWh"),$("#vm-mediano .produccion-anual").text(numberWithCommas((12*productionMediano).toFixed(1))+" kWh"),$("#vm-grande .produccion-anual").text(numberWithCommas((12*productionGrande).toFixed(1))+" kWh"),$("#vm-pequeno .costo-anual-sin-vm").text("$"+numberWithCommas(costoActualAnual.toFixed(2))+" MN"),$("#vm-mediano .costo-anual-sin-vm").text("$"+numberWithCommas(costoActualAnual.toFixed(2))+" MN"),$("#vm-grande .costo-anual-sin-vm").text("$"+numberWithCommas(costoActualAnual.toFixed(2))+" MN"),$("#vm-pequeno .costo-anual").text("$"+numberWithCommas(costoPequenoAnual.toFixed(2))+" MN"),$("#vm-mediano .costo-anual").text("$"+numberWithCommas(costoMedianoAnual.toFixed(2))+" MN"),$("#vm-grande .costo-anual").text("$"+numberWithCommas(costoGrandeAnual.toFixed(2))+" MN"),$("#vm-pequeno .ahorro-economico").text("$"+numberWithCommas(ahorroPequeno.toFixed(0))+" MN"),$("#vm-mediano .ahorro-economico").text("$"+numberWithCommas(ahorroMediano.toFixed(0))+" MN"),$("#vm-grande .ahorro-economico").text("$"+numberWithCommas(ahorroGrande.toFixed(0))+" MN"),$("#vm-pequeno .ahorro-energetico").text(ahorroEnergeticoPequeno.toFixed(0)+"%"),$("#vm-mediano .ahorro-energetico").text(ahorroEnergeticoMediano.toFixed(0)+"%"),$("#vm-grande .ahorro-energetico").text(ahorroEnergeticoGrande.toFixed(0)+"%"),$("#vm-pequeno .arboles-no-talados").text((productionPequeno*arbolesConstant).toFixed(0)),$("#vm-mediano .arboles-no-talados").text((productionMediano*arbolesConstant).toFixed(0)),$("#vm-grande .arboles-no-talados").text((productionGrande*arbolesConstant).toFixed(0)),$("#vm-pequeno .co2").text((productionPequeno*co2Constant).toFixed(0)),$("#vm-mediano .co2").text((productionMediano*co2Constant).toFixed(0)),$("#vm-grande .co2").text((productionGrande*co2Constant).toFixed(0)),$("#vm-pequeno .inversion-total").text("$"+numberWithCommas(inversionPequeno.toFixed(0))+" USD"),$("#vm-mediano .inversion-total").text("$"+numberWithCommas(inversionMediano.toFixed(0))+" USD"),$("#vm-grande .inversion-total").text("$"+numberWithCommas(inversionGrande.toFixed(0))+" USD"),$("#vm-pequeno .payback").text(numberWithCommas(paybackPequeno.toFixed(1))),$("#vm-mediano .payback").text(numberWithCommas(paybackMediano.toFixed(1))),$("#vm-grande .payback").text(numberWithCommas(paybackGrande.toFixed(1))),$("#vm-pequeno .tir").text(irrPequeno.toFixed(0)+"%"),$("#vm-mediano .tir").text(irrMediano.toFixed(0)+"%"),$("#vm-grande .tir").text(irrGrande.toFixed(0)+"%")}function setPropuestaValue(e,o,t,n,a){for(var r=["pequeno","mediano","grande"],i=0;i<r.length;i++)$("vm-"+r[i]+" ."+e).text(t+numberWithCommas(o[r[i]].toFixed(a))+n)}function computeIRR(e,o,t,n){cashFlows=[],cashFlows.push(-1*e);for(var a=0;n>a;a++)cashFlows.push(o*Math.pow(1+t,a));return 100*IRR(cashFlows,.2)}function createPropuestaChart(e,o,t,n,a,r){$("#tir-chart").highcharts({chart:{type:"column"},title:{text:"Tasa Interna de Rendimiento (TIR)"},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.1f}%"}}},xAxis:{type:"category"},yAxis:{title:{text:"Tasa Interna de Rendimiento (TIR)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.0f}%"}}},series:[{name:"TIR",colorByPoint:!0,data:[{name:"VM Peque\xf1o ("+n.toFixed(1)+" kWp)",y:e},{name:"VM Mediano ("+a.toFixed(1)+" kWp)",y:o},{name:"VM Grande ("+r.toFixed(1)+" kWp)",y:t},{name:"Banco",y:6}]}]})}function numberWithCommas(e){var o=e.toString().split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),o.join(".")}function IRR(e,o){for(var t=function(e,o,t){for(var n=t+1,a=e[0],r=1;r<e.length;r++)a+=e[r]/Math.pow(n,(o[r]-o[0])/365);return a},n=function(e,o,t){for(var n=t+1,a=0,r=1;r<e.length;r++){var i=(o[r]-o[0])/365;a-=i*e[r]/Math.pow(n,i+1)}return a},a=[],r=!1,i=!1,s=0;s<e.length;s++)a[s]=0===s?0:a[s-1]+365,e[s]>0&&(r=!0),e[s]<0&&(i=!0);if(!r||!i)return"#NUM!";var d,c,u,o="undefined"==typeof o?.1:o,m=o,l=1e-10,p=50,h=0,M=!0;do u=t(e,a,m),d=m-u/n(e,a,m),c=Math.abs(d-m),m=d,M=c>l&&Math.abs(u)>l;while(M&&++h<p);return M?"#NUM!":m}$(document).ready(function(){function e(){$(".payment-info").each(function(){$(this).hide()})}function o(e,o){$("#user-info-table").append("<tr><td><span class='bold'>"+e+": </span>    </td><td>"+o+"</td></tr>")}function t(e){$("#user-info-table").append("<tr><td><h4 style='margin-top:20px;'>"+e+": </h4>    </td><td> </td></tr>")}function n(e){var o=new jsPDF;o.setFont("helvetica"),o.setFontSize(12);var t="",n=new Date,a=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];t+="Monterrey, Nuevo Leon a "+n.getDate()+" de "+a[n.getMonth()]+" de "+n.getFullYear()+"\n",t+="\n\nComision Federal de Electricidad\n",t+="A quien corresponda:\n\n\n",t+="Por  medio de  la  presente,  otorgo el  poder para que  a mi nombre y representacion\n",t+="la empresa  Verde  Monarca,  en  representacion del Ing.  David  Eduardo  Arrambide\n",t+="Montemayor, realice los tramites necesarios ante la Comision Federal de Electricidad\n",t+="para gestionar el Contrato de Interconexion para fuente de energia renovable.\n",t+="\n\nSin mas por el momento me despido, reiterandome a sus ordenes.\n\n\n\n",t+=e?"Otorga el Poder: "+$("input[name='nombre'").val()+" "+$("input[name='apellido'").val()+"\n":"Otorga el Poder: _____________________________\n\n",t+="Acepta el Poder: David Eduardo Arrambide Montemayor",o.text(30,30,t),$("#contrato2-pdf").attr("src",o.output("datauristring"))}$("#form-carousel").carousel("pause"),registrationModel={},$("#energy-info-button").click(function(){$("#consumo-mensual-promedio").val($("#registration2-consumo-mensual-promedio").val()),updateFields($("#consumo-mensual-promedio").val())}),registrationModel.membershipType="",$("#select-vm-small").click(function(){registrationModel.membershipType="VM Peque\xf1o",registrationModel.tamano=tamanoPequeno,registrationModel.production=12*productionPequeno,registrationModel.subtotal=inversionPequeno,registrationModel.ahorro=ahorroPequeno,registrationModel.tir=irrPequeno,registrationModel.payback=paybackPequeno,console.log(registrationModel)}),$("#select-vm-medium").click(function(){registrationModel.membershipType="VM Mediano",registrationModel.tamano=tamanoMediano,registrationModel.production=12*productionMediano,registrationModel.subtotal=inversionMediano,registrationModel.ahorro=ahorroMediano,registrationModel.tir=irrMediano,registrationModel.payback=paybackMediano,console.log(registrationModel)}),$("#select-vm-large").click(function(){registrationModel.membershipType="VM Grande",registrationModel.tamano=tamanoGrande,registrationModel.production=12*productionGrande,registrationModel.subtotal=inversionGrande,registrationModel.ahorro=ahorroGrande,registrationModel.tir=irrGrande,registrationModel.payback=paybackGrande,console.log(registrationModel)}),$("#fecha-visita").pickadate({monthsFull:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"],weekdaysShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],showWeekdaysFull:!1,today:"Hoy",clear:"Borrar",close:"Cerrar"}),$("#hora-visita").pickatime({format:"H:i A",min:[8,0],max:[17,0],interval:45}),e(),$(".payment-selection").click(function(){e(),$(this).siblings(".payment-info").show(),registrationModel.selectedPaymentMode=$(this).attr("value"),console.log(registrationModel.selectedPaymentMode),registrationModel.paymentTotal=1.16*registrationModel.subtotal,$(".payment-iva").text("$"+numberWithCommas((.16*registrationModel.subtotal).toFixed(2))+" USD"),$(".payment-subtotal").text("$"+numberWithCommas(registrationModel.subtotal.toFixed(2))+" USD"),$(".payment-total").text("$"+numberWithCommas(registrationModel.paymentTotal.toFixed(2))+" USD")}),$("#btn-crear-cuenta").click(function(){window.location.href="dashboard.html"}),$("#last-registration-button").click(function(){$("#user-info-table").empty(),t("Resumen de Usuario"),o("Tipo de Membres\xeda",registrationModel.membershipType),$("#registration-form-user :input").each(function(){var e=$(this),t=$("label[for="+e.attr("name")+"]").text();t.length>0&&o(t,e.val())}),t("Resumen Energetico"),$("#registration-form-energy :input, #tarifa").each(function(){var e=$(this),t=$("label[for="+e.attr("name")+"]").text();t.length>0&&o(t,e.val())}),o("Consumo Anual (kWh)",$("#consumo-total").html()+" kWh"),t("Resumen de Propuesta"),o("Tama\xf1o",numberWithCommas(registrationModel.tamano.toFixed(1))+" kWp"),o("Produccion Anual (Estimada)",numberWithCommas(registrationModel.production.toFixed(0))+" kWh"),o("Ahorro Econ\xf3mico","$"+numberWithCommas(registrationModel.ahorro.toFixed(2))+" MN"),o("Payback (A\xf1os)",registrationModel.payback.toFixed(1)),o("TIR",registrationModel.tir.toFixed(1)+"%"),o("Total","$"+numberWithCommas(registrationModel.paymentTotal.toFixed(2))+" USD"),t("Resumen de Visita y Pago"),$("#registration-form-date :input, #registration-form-payment :input").each(function(){var e=$(this),t=$("label[for="+e.attr("name")+"]").text();t.length>0&&o(t,e.val())}),o("Modo de Pago",registrationModel.selectedPaymentMode),t("Firma"),$("#user-info-table").append("<tr><td><input type='checkbox' id='contract-checkbox' name='contract-checkbox'>Acepto el contrato</span></td><td></td></tr>"),$("#user-info-table").append("<tr><td><input type='checkbox' id='contract-checkbox2' name='contract-checkbox2'>Acepto otorgar poder</span></td><td></td></tr>"),n(!1),$("#contract-checkbox2").change(function(){n($(this).is(":checked"))}),$("#user-welcome :input[name='account-email']").val($("#registration-form-user :input[name='email']").val()),$("#user-welcome .nombre").text($("#registration-form-user :input[name='nombre']").val()),$("#user-welcome .descuento").text("57% "),$("#user-welcome .energia-renovable").text("27% ")}),$("#energy-info-next-button").click(function(){createPropuesta($("#consumo-total").html()/12)})});var consumos=[150,150,150,400],precios=[.717,.844,1.077,2.88,3.524],basicConsumption=consumos[0]+consumos[1]+consumos[2],consumoExcedente=consumos[3],consumoMaximo=basicConsumption+consumoExcedente,focosConstant=.0545,arbolesConstant=.1725,co2Constant=.1326,gasolinaConstant=2.9435,safetyFactorMin=.8,safetyFactorExcess=1.2,systemOversizeFactor=1.2,avgConsumptionInArea=1694,systemCostPequeno=3,systemCostMediano=2.75,systemCostGrande=2.6,maintenanceAnualCost=3e3,cfeAnualIncrement=.06,currencyExchangeRate=13,taxRate=1.16,NUM_YEARS=25;