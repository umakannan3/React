import React from "react";
export function Login1(){
    return(
        <>
        <div className="container-fluid row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <form>
                    <table>
                        <tr>
                            <td><label>S.No</label></td>
                            <td><input type="number" id="sno"/></td>
                        </tr><br/>
                        <tr>
                            <td><label>FirstName</label></td>
                            <td><input type="text" id="fn"/></td>
                        </tr><br/>
                        <tr>
                            <td><label>LastName</label></td>
                            <td><input type="text" id="ln"/></td>
                        </tr><br/>
                        <tr>
                            <td><label>Gender</label></td>
                            <td><input type="radio" value="male" id="gender"/>
                                <input type="radio" value="female" id="gender"/>
                                <input type="radio" value="transgender" id="gender"/></td>
                        </tr><br/>
                        <tr>
                            <td><label>Date</label></td>
                            <td><input type="date" id=""/></td>
                        </tr><br/>
                        <tr>
                            <td><label>LastName</label></td>
                            <td><input type="text" id="ln"/></td>
                        </tr><br/>
                    </table>
                </form>
            </div>
            <div className="col-lg-2"></div>
        </div>
        </>
    );
}